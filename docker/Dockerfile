FROM node:lts-slim

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        apt-transport-https ca-certificates curl ttfautohint \
    && rm -rf /var/lib/apt/lists/*

COPY build.sh /
WORKDIR /work
ENTRYPOINT ["bash", "/build.sh"]
