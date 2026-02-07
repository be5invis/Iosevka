#!/usr/bin/bash
IOSEVKA_DIR="/iosevka"
WORK_DIR="/work"
PRIVATE_FILE="private-build-plans.toml"
DEFAULT_ARGS="contents::Iosevka"
REPO="be5invis/Iosevka"
REF=""
BUILD_ARGS="$@"
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
    REF=$(curl -fsSL --max-filesize 4096 "https://api.github.com/repos/${REPO}/releases/latest" | grep -Po '"tag_name":\s*"\Kv[\d\.]+') || true
    [[ -z "$REF" ]] && { echo "Failed to fetch latest release for ${REPO}"; exit 3; }
    echo "Latest release: ${REF}"
fi
TARGZ_URL="https://github.com/${REPO}/archive/${REF}.tar.gz"
echo "Downloading ${REPO}@${REF}..."
mkdir -p "$IOSEVKA_DIR"
curl -fsSL "$TARGZ_URL" | tar xz --strip-components=1 -C "$IOSEVKA_DIR" || {
    echo "Failed to download: $TARGZ_URL"; exit 4
}

echo "Installing npm dependencies..."
[[ -n "$NPM_REG" ]] && npm config set registry "$NPM_REG"
cd "$IOSEVKA_DIR" && npm ci

[[ -f "${WORK_DIR}/${PRIVATE_FILE}" ]] && cp "${WORK_DIR}/${PRIVATE_FILE}" "${IOSEVKA_DIR}/"

echo "Building fonts with: $BUILD_ARGS"

cd "$IOSEVKA_DIR"
npm run build -- $BUILD_ARGS && cp -rf dist "${WORK_DIR}/"
