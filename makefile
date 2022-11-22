.PHONY: all default term web web-subset install-term term-tarball release-term-tarball clean

VERSION := $(shell jq -r .version package.json)

default: all

all: term web web-subset

term: dist/iosevkalyteterm/ttf/
web: dist/iosevkalyteweb/woff2/
web-subset: dist/iosevkalyteweb/woff2-subset/

term-tarball: iosevkalyteterm-${VERSION}.tar.zstd

install-term: term
	@sudo rsync --progress -r dist/iosevkalyteterm/ttf/* /usr/share/fonts/TTF/

release-term-tarball: iosevkalyteterm-${VERSION}.tar.zstd
	@fish release.fish

iosevkalyteterm-${VERSION}.tar.zstd: dist/iosevkalyteterm/ttf/
	@cd dist/ && tar --zstd -cvf ../iosevkalyteterm-${VERSION}.tar.zstd ./iosevkalyteterm/

dist/iosevkalyteterm/ttf/: ./private-build-plans.toml node_modules/
	@npm run build -- ttf::iosevkalyteterm

dist/iosevkalyteweb/woff2/: ./private-build-plans.toml node_modules/
	@npm run build -- woff2::iosevkalyteweb
	
dist/iosevkalyteweb/woff2-subset/: dist/iosevkalyteweb/woff2/
	@fish makesubset.fish

node_modules/: package.json package-lock.json
	@npm install
	
clean:
	echo "TODO: Not implemented"
