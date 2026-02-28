FROM node:lts-slim

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        ttfautohint \
        curl \
        ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --chmod=755 build.sh /
WORKDIR /work
ENTRYPOINT ["bash", "/build.sh"]
