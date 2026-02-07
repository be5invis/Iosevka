# Building with Docker

## 1. Building Docker Image

Before building the font files, we'll first need to build a Docker image. This has to be done only once.
We're going to use image name `iosevka-builder` here, but you can set it to whatever you want.

```bash
git clone --depth 1 https://github.com/be5invis/Iosevka.git
cd Iosevka/docker
docker build -t iosevka-builder .
```

To confirm that the docker image now exists, you can run:
```bash
docker images | grep iosevka-builder
```
The output should be something like this:
```bash
iosevka-builder            latest      c847d5e08886   About a minute ago   491MB
```

At this point, you can delete the cloned repo, because the Docker container is going to download a fresh copy of the source by default. (That is unless you want to make the Docker container use a local copy - see below.)

```bash
cd ../..
rm -rf Iosevka/
```

## 2. Building Font Files

```bash
docker run -it --rm [-e SOURCE=<SOURCE>] [-e NPM_REG=<URL>] -v $PWD:/work iosevka-builder [<BUILD_ARGS>]
```

Optional environment variables include:
- `SOURCE` - source to download (see formats below). If unset, defaults to latest release.
- `NPM_REG` - NPM registry mirror URL, e.g. https://mirrors.huaweicloud.com/repository/npm

`SOURCE` accepts several formats:

| Format | Example | Meaning |
|---|---|---|
| `ref` | `v34.1.0`, `main`, `abc123f` | Tag, branch or commit |
| `owner/repo@ref` | `you/YourIosevkaFork@v34.1.0` | Tag, branch or commit from a specific fork repo |
| `owner/repo` | `you/YourIosevkaFork` | Latest release from a specific fork repo |

For supported `<BUILD_ARGS>`, please refer to [Customized Build](../doc/custom-build.md).

Note that each container run will download and unpack a source tarball and install dependencies afresh. If you want to avoid re-downloading source (e.g. when iterating on a build plan) or use a local copy of the source, you'll need to override the Docker entrypoint. Check below for examples.

### Examples
#### Default Build
```bash
docker run -it --rm -v $PWD:/work iosevka-builder
```

#### Custom Build

This will build Iosevka `ss06` in all formats, `ss12` TTF and `ss15` webfont:

```bash
docker run -it --rm -e SOURCE=v34.1.0 -v $PWD:/work iosevka-builder contents::IosevkaSS06 ttf::IosevkaSS12 webfont::IosevkaSS15
```

#### Custom Build Plans

This example will:
- Gather build plans from `myfont1.toml`, `myfont2.toml` and `myfont3.toml` to a single `private-build-plans.toml` file.
- Build `myfont1` and `myfont2` as TTF, and `myfont3` in all formats.
```bash
cat myfont1.toml myfont2.toml myfont3.toml > private-build-plans.toml
docker run -it --rm -e SOURCE=v34.1.0 -v $PWD:/work iosevka-builder ttf::myfont1 ttf::myfont2 contents::myfont3
```

To prepare the custom build plans, please refer to [Configuring Custom Build](../doc/custom-build.md#configuring-custom-build) or use the [Customizer](https://be5invis.github.io/Iosevka/customizer).

#### Using a Fork

```bash
docker run -it --rm -e SOURCE=you/YourIosevkaFork@v34.1.0 -v $PWD:/work iosevka-builder contents::Iosevka
```

#### Interactive Mode (Downloaded Source)

To keep the downloaded source between builds, override the entrypoint and run `build.sh` for the first build (downloads source, installs deps):

```bash
docker run -it --rm -v $PWD:/work --entrypoint bash iosevka-builder
# Run the first build using /build.sh
$ /build.sh ttf::myfont && cd /iosevka
# Now we can run builds repeatedly from the same source tarball, e.g.:
$ cat myfont1.toml myfont2.toml myfont3.toml > private-build-plans.toml
$ npm run build -- contents::MyFont1 ttf::MyFont2 webfont::MyFont3
# Make some changes to .toml and rebuild
$ cat myfont1.toml myfont2.toml myfont3.toml > private-build-plans.toml
$ npm run build -- contents::MyFont1 ttf::MyFont2 webfont::MyFont3
$ exit
```

#### Using Local Source

To build from a local Iosevka checkout, override the entrypoint like so:

```bash
docker run -it --rm -v /path/to/iosevka:/work --entrypoint bash iosevka-builder -c 'npm install && npm run build -- ttf::myfont'
```

#### Interactive Mode (Local Source)

To run repeated builds from local source in interactive mode:

```bash
docker run -it --rm -v /path/to/iosevka:/work --entrypoint bash iosevka-builder
$ npm install
$ npm run build -- ttf::myfont
$ exit
```

