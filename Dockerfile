# Run example
#
# docker run \
#     -v ./build_dir:/build \
#     iosevka_build

FROM ubuntu:20.04

ARG OTFCC_VER=0.10.4
ARG PREMAKE_VER=5.0.0-alpha15
ARG NODE_VER=14

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
        build-essential \
        curl \
        ttfautohint \
    && curl -sSL https://deb.nodesource.com/setup_${NODE_VER}.x | bash - \
    && apt-get install -y nodejs \
    && cd /tmp \
    && curl -sSLo premake5.tar.gz https://github.com/premake/premake-core/releases/download/v${PREMAKE_VER}/premake-${PREMAKE_VER}-linux.tar.gz \
    && tar xvf premake5.tar.gz \
    && mv premake5 /usr/local/bin/premake5 \
    && rm premake5.tar.gz \
    && curl -sSLo otfcc.tar.gz https://github.com/caryll/otfcc/archive/v${OTFCC_VER}.tar.gz \
    && tar xvf otfcc.tar.gz \
    && mv otfcc-${OTFCC_VER} otfcc \
    && cd /tmp/otfcc \
    && premake5 gmake \
    && cd build/gmake \
    && make config=release_x64 \
    && cd /tmp/otfcc/bin/release-x64 \
    && mv otfccbuild /usr/local/bin/otfccbuild \
    && mv otfccdump /usr/local/bin/otfccdump \
    && cd /tmp \
    && rm -rf otfcc/ otfcc.tar.gz \
    && rm -rf /var/lib/apt/lists/*

COPY run.sh /run.sh

WORKDIR /build
ENTRYPOINT ["/bin/bash", "/run.sh"]
