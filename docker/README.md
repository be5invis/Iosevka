## Make docker image
```
git clone --depth=1 https://github.com/be5invis/Iosevka.git $HOME/mkdkimg
cd $HOME/mkdkimg/docker
docker build -t=fontcc .
docker images | grep fontcc  # Confirm that the docker image is generated successfully
fontcc                     latest      c847d5e08886   About a minute ago   491MB
cd ../..
rm -rf mkdkimg/
```
Note: Make docker image need execute only one time.

## Usage
`docker run -it --rm -v $PWD:/work fontcc <BUILD_ARGS>`
Please refer to the `<BUILD_ARGS>` parameters to [Customized Build](../../dev/doc/custom-build.md#customized-build)
### Optional parameters (put them before `fontcc`):
1. `-e "VERSION_TAG=<tag>"`

`<tag>` can be the following values
-  `main`    git main branch
-  `dev`     git dev branch
-  `v28.0.5`  git [release version tags](../../../tags)

When this variable is omitted, the tag of the latest release will be selected

2. `-e "NPM_REG=<npm repository mirror url>"`

change `npm install` download repository to mirror site.

eg. change npm repos to huawei mirror
 `docker run -it --rm -v $PWD:/work -e "NPM_REG=https://mirrors.huaweicloud.com/repository/npm" fontcc contents::Iosevka`

## Example
### Partially Build dev branch
```
mkdir -p $HOME/build_fonts
cd $HOME/build_fonts
docker run -it --rm -v $PWD:/work -e "VERSION_TAG=dev" fontcc contents::IosevkaSS06 ttf::IosevkaSS12 webfont::IosevkaSS15
ls -lR dist/
```
### Customized Build
```
cd $HOME/mycustomfonts
cat myfont1.toml myfont2.toml myfont3.toml > private-build-plans.toml
docker run -it --rm -v $PWD:/work fontcc ttf::myfont1 ttf::myfont2 contents::myfont3
ls -lR dist/
```
Note: You need prepare myfont1.toml myfont2.toml myfont3.toml youself, The [Customizer](https://be5invis.github.io/Iosevka/customizer) can help you easily generate font configuration file `.toml`.
