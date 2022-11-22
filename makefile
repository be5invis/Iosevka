.PHONY: all default term web web-subset install-term term-tarball release-term-tarball clean

VERSION := $(shell jq -r .version package.json)
TARBALL := iosevkalyteterm-${VERSION}.tar.zstd

default: all

all: term web web-subset

term: dist/iosevkalyteterm/ttf/
term-tarball: ${TARBALL}
web: dist/iosevkalyteweb/woff2/
web-subset: dist/iosevkalyteweb/woff2-subset/

term-tarball: iosevkalyteterm-${VERSION}.tar.zstd

install-term: term
	@sudo rsync --force --progress dist/iosevkalyteterm/ttf/* /usr/share/fonts/TTF/

release-term-tarball: iosevkalyteterm-${VERSION}.tar.zstd
	@fish release.fish

${TARBALL}: dist/iosevkalyteterm/ttf/
	rm -f ${TARBALL}
	cd dist/ && tar --zstd -cvf ../${TARBALL} ./iosevkalyteterm/

dist/iosevkalyteterm/ttf/: ./private-build-plans.toml node_modules/
	@npm run build -- ttf::iosevkalyteterm
	@touch dist/iosevkalyteterm/ttf/

dist/iosevkalyteweb/woff2/: ./private-build-plans.toml node_modules/
	@npm run build -- woff2::iosevkalyteweb
	@touch dist/iosevkalyteweb/woff2/
	
dist/iosevkalyteweb/woff2-subset/: dist/iosevkalyteweb/woff2/
	@fish makesubset.fish

node_modules/: package.json package-lock.json
	@npm install
	
clean:
	echo "TODO: Not implemented"
