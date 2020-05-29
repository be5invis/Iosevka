#!/bin/bash

set -e

# Create temporary build directory
mkdir /tmp/build
cd /tmp/build

# Find the latest font version if the font version environment variable is not
# set
if [ ! -n "$FONT_VERSION" ]; then
    FONT_VERSION=$(curl -s https://github.com/be5invis/Iosevka/releases/latest \
        | grep -Po '(?<=tag/v)[0-9,.]*')
fi

echo "Downloading and checking the validity of the source code..."

# Download source code
curl -L -O --proto '=https' --tlsv1.2 -sS https://github.com/be5invis/Iosevka/archive/v${FONT_VERSION}.tar.gz

#  Check for valid downloaded file (build can fail here with exit code 1)
file "v${FONT_VERSION}.tar.gz" | grep 'gzip compressed data' > /dev/null

# Extract downloaded source code
tar -xf v${FONT_VERSION}.tar.gz
cd Iosevka-${FONT_VERSION}

# Copy the build plan
cp /build/private-build-plans.toml .

# Build!
echo "Commencing build of v${FONT_VERSION}..."
npm install
if [ $# -eq 0 ]; then
    # Get the name of the first build plan when the user does not provide
    # custom build arguments (automatic mode)
    PLAN_NAME=$(grep -Po -m 1 '(?<=buildPlans.)[^\]]*' private-build-plans.toml)

    npm run build -- contents::$PLAN_NAME
else
    # User knows what they are doing and provides custom build arguments
    # (manual mode)
    npm run build -- "$@"
fi

# Copy the dist folder back to the mounted volume
cp -r dist /build/
