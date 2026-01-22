FROM node:lts-slim

ARG NPM_REG

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        ttfautohint \
    && rm -rf /var/lib/apt/lists/*

# Copy source (excluding files in .dockerignore)
COPY . /iosevka/

# Install Node.js dependencies
RUN if [ -n "$NPM_REG" ]; then npm config set registry "$NPM_REG"; fi \
    && cd /iosevka && npm ci && npm cache clean --force

COPY docker/build.sh /
WORKDIR /work
ENTRYPOINT ["bash", "/build.sh"]
