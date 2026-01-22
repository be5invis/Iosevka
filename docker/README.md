# Building with Docker

## 1. Building Docker Image

Before building the font files, we'll first need to build a Docker image. This has to be done only once for a given repo version.

### 1.1. Clone the repo (if you haven't already)

```
git clone --depth 1 https://github.com/be5invis/Iosevka.git
cd Iosevka
```

If you want to use a particular version, checkout the appropriate [version tag]((../../../tags)) or branch, for example:
```
git checkout v34.0.0
```

### 1.2. Build the Docker Image

We're going to use image name `iosevka-builder` here, but you can set it to whatever you want. To build an image, run the following from the repo root directory:

```
docker build -f docker/Dockerfile -t iosevka-builder .
```

To confirm that the docker image now exists, you can run:
```
docker images | grep iosevka-builder
```
The output should be something like this:
```
iosevka-builder            latest      c847d5e08886   About a minute ago   491MB
```

#### Optional Build Arg
`--build-arg NPM_REG=<npm repository mirror url>`

Specify `NPM_REG` to use an NPM registry mirror.

Example:
```
docker build -f docker/Dockerfile --build-arg NPM_REG=https://mirrors.huaweicloud.com/repository/npm -t iosevka-builder .
```

## 2. Building Font Files

Once we have a docker image, we can build (and rebuild) font files like so:

```
docker run -it --rm -v $PWD:/work iosevka-builder <BUILD_ARGS>
```

For supported `<BUILD_ARGS>`, please refer to [Customized Build](../doc/custom-build.md).

## Examples
### Custom Build

This will build Iosevka `ss06` in all formats, `ss12` TTF and `ss15` webfont:

```
docker run -it --rm -v $PWD:/work iosevka-builder contents::IosevkaSS06 ttf::IosevkaSS12 webfont::IosevkaSS15
ls -lR dist/ # Recursively list build result directories
```

### Custom Build Plans

This example will:
- Gather build plans from `myfont1.toml`, `myfont2.toml` and `myfont3.toml` to a single `private-build-plans.toml` file.
- Build `myfont1`, `myfont2` TTF, and `myfont3` in all formats.
```
cat myfont1.toml myfont2.toml myfont3.toml > private-build-plans.toml
docker run -it --rm -v $PWD:/work iosevka-builder ttf::myfont1 ttf::myfont2 contents::myfont3
ls -lR dist/ # Recursively list build result directories
```

To prepare the custom build plans, please refer to [Configuring Custom Build](https://github.com/be5invis/Iosevka/blob/main/doc/custom-build.md#configuring-custom-build) or use the [Customizer](https://be5invis.github.io/Iosevka/customizer).