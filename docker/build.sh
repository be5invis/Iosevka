#!/usr/bin/bash
IOSEVKA_DIR="/iosevka"
WORK_DIR="/work"
PRIVATE_FILE="private-build-plans.toml"
DEFAULT_ARGS="contents::Iosevka"
REPO="be5invis/Iosevka"
REF=""
BUILD_ARGS="$@"
TMP_TARGZ="/tmp/iosevka.tar.gz"
TMP_HEADERS="/tmp/headers.txt"
set -e

[[ -z $BUILD_ARGS ]] && echo 'Usage: docker run -it --rm -v $PWD:/work <DOCKER_IMAGE> <BUILD_ARGS>'

[[ -f "${WORK_DIR}/${PRIVATE_FILE}" ]] && {
    echo "Found $PRIVATE_FILE, custom build."
    [[ -z $BUILD_ARGS ]] && {
        FONT_NAME=$(grep -m1 -Po '(?<=\[buildPlans\.)[^\]]+' ${WORK_DIR}/${PRIVATE_FILE})
        [[ -z "$FONT_NAME" ]] && {
            echo "$PRIVATE_FILE file format error!"
            exit 2
        }
        BUILD_ARGS="contents::$FONT_NAME"
    }
} || {
    [[ -z $BUILD_ARGS ]] && {
        BUILD_ARGS="$DEFAULT_ARGS"
        echo "No parameter, default build."
    }
}

# SOURCE formats: "v34.1.0", "main", "owner/repo@ref", "owner/repo"
# If unset, defaults to latest release of REPO.
if [[ "$SOURCE" == *@* ]]; then
    REPO="${SOURCE%%@*}"
    REF="${SOURCE#*@}"
elif [[ "$SOURCE" == */* ]]; then
    REPO="$SOURCE"
elif [[ -n "$SOURCE" ]]; then
    REF="$SOURCE"
fi
if [[ -z "$REF" ]]; then
    REF=$(curl -fsSL -r 0-2047 "https://api.github.com/repos/${REPO}/releases/latest" | grep -Po '"tag_name":\s*"\Kv[\d\.]+') || true
    [[ -z "$REF" ]] && { echo "Failed to fetch latest release for ${REPO}"; exit 3; }
    echo "Latest release: ${REF}"
fi
# Fetch source tarball if not already downloaded using URL+ETag as unique cache ID.
# REPO+REF wouldn't suffice - branch head could have changed since last run.
# We could use commit SHA instead, but that would be an extra API call.
TARGZ_URL="https://github.com/${REPO}/archive/${REF}.tar.gz"
ETAG_FILE="$IOSEVKA_DIR/.etag"
CURL_OPTS=(-sSL -D "$TMP_HEADERS" -o "$TMP_TARGZ" -w '%{http_code}')
# If request URL is the same as last run, add If-None-Match header
if [[ -f "$ETAG_FILE" ]] && read -r CACHED_URL CACHED_ETAG < "$ETAG_FILE" && [[ "$CACHED_URL" == "$TARGZ_URL" ]]; then
    CURL_OPTS+=(-H "If-None-Match: $CACHED_ETAG")
fi

echo "Fetching ${REPO}@${REF}..."
HTTP_CODE=$(curl "${CURL_OPTS[@]}" "$TARGZ_URL") || true

if [[ "$HTTP_CODE" == "304" ]]; then
    echo "Source unchanged (HTTP 304), skipping."
elif [[ "$HTTP_CODE" == "200" ]]; then
    echo "Extracting..."
    rm -rf "$IOSEVKA_DIR"
    mkdir -p "$IOSEVKA_DIR"
    tar xz --strip-components=1 -C "$IOSEVKA_DIR" < "$TMP_TARGZ" || {
        echo "Failed to extract: $TARGZ_URL"; exit 4
    }
    # Save ETag for future conditional requests
    ETAG=$(grep -i '^etag:' "$TMP_HEADERS" | tail -1 | tr -d '\r' | awk '{print $2}')
    [[ -n "$ETAG" ]] && echo "$TARGZ_URL $ETAG" > "$ETAG_FILE"
else
    echo "Failed to download: $TARGZ_URL (HTTP $HTTP_CODE)"; exit 5
fi
rm -f "$TMP_TARGZ" "$TMP_HEADERS"

if [[ -d "$IOSEVKA_DIR/node_modules" ]]; then
    echo "Dependencies already installed, skipping npm ci."
else
    echo "Installing npm dependencies..."
    [[ -n "$NPM_REG" ]] && npm config set registry "$NPM_REG"
    cd "$IOSEVKA_DIR" && npm ci
fi

[[ -f "${WORK_DIR}/${PRIVATE_FILE}" ]] && cp "${WORK_DIR}/${PRIVATE_FILE}" "${IOSEVKA_DIR}/"

echo "Building fonts with: $BUILD_ARGS"

cd "$IOSEVKA_DIR"
npm run build -- $BUILD_ARGS && cp -rf dist "${WORK_DIR}/"
