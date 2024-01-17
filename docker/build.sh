#!/usr/bin/bash
TMP_BUD="/tmp/IosevkaDockerBuild"
WORK_DIR="/work"
PRIVATE_FILE="private-build-plans.toml"
DEFAULT_ARGS="contents::Iosevka"
HAS_CUSTOM=0
BUILD_ARGS="$@"
set -e
rm -rf $TMP_BUD
mkdir -p $TMP_BUD
cd $TMP_BUD
[[ -z $BUILD_ARGS ]] && echo 'Usage: docker run -it --rm -v $PWD:/work fontcc <BUILD_ARGS>'
[[ -f "${WORK_DIR}/${PRIVATE_FILE}" ]] && {
    HAS_CUSTOM=1
    echo "Found $PRIVATE_FILE, custom build."
    [[ -z $BUILD_ARGS ]] && {
        FONT_NAME=$(grep -m1 -Po '(?<=\[buildPlans\.)[^\]]+' ${WORK_DIR}/${PRIVATE_FILE})
        [[ -z "$FONT_NAME" ]] && {
		echo "$PRIVATE_FILE file format error!"
		exit 1
	}
        BUILD_ARGS="contents::$FONT_NAME"
    }
} || {
    [[ -z $BUILD_ARGS ]] && {
        BUILD_ARGS="$DEFAULT_ARGS"
        echo "No parameter, default build."
    }
}
echo "Fonts building param: $BUILD_ARGS"

[[ -z "$VERSION_TAG" ]] && VERSION_TAG=$(curl -Ls --max-filesize 4096 \
    'https://api.github.com/repos/be5invis/Iosevka/releases' \
    | grep -m1 -Po '(?<="tag_name": ")v[\d\.]+')
echo "Downloading source code tarball ${VERSION_TAG}"

TARGZ_URL="https://github.com/be5invis/Iosevka/archive/${VERSION_TAG}.tar.gz"
if [[ "main" == "$VERSION_TAG" ]] || [[ "dev" == "$VERSION_TAG" ]]; then
    TARGZ_URL="https://github.com/be5invis/Iosevka/archive/refs/heads/${VERSION_TAG}.tar.gz"
fi
curl -LSOs "$TARGZ_URL" \
    && tar -xf "${VERSION_TAG}.tar.gz" || {
        echo "Decompression failed!"
        exit 2
    }
cd Iosevka*

[ "$HAS_CUSTOM" -eq 1 ] && cp "${WORK_DIR}/${PRIVATE_FILE}" .

echo "Now building fonts ${VERSION_TAG}"

[[ -n "$NPM_REG" ]] && npm config set registry $NPM_REG

npm install \
    && npm run build -- $BUILD_ARGS \
    && cp -rf dist ${WORK_DIR}/

