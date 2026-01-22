#!/usr/bin/bash
IOSEVKA_DIR="/iosevka"
WORK_DIR="/work"
PRIVATE_FILE="private-build-plans.toml"
DEFAULT_ARGS="contents::Iosevka"
BUILD_ARGS="$@"
set -e

[[ -z $BUILD_ARGS ]] && echo 'Usage: docker run -it --rm -v $PWD:/work <DOCKER_IMAGE> <BUILD_ARGS>'

[[ -f "${WORK_DIR}/${PRIVATE_FILE}" ]] && {
    echo "Found $PRIVATE_FILE, custom build."
    cp "${WORK_DIR}/${PRIVATE_FILE}" "${IOSEVKA_DIR}/"
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

echo "Building fonts with: $BUILD_ARGS"

cd "$IOSEVKA_DIR"
npm run build -- $BUILD_ARGS && cp -rf dist "${WORK_DIR}/"
