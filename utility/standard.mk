start : __default

include utility/dirs.mk
include utility/scripts.mk

GENERATE = @node --expose-gc generator

.SECONDARY : scripts
.PHONY : pages test release sample-images _start web fw custom custom-web custom-config


include $(BUILD)/targets.mk

web : web-sans web-slab

release : __release pages sample-images

test : fonts-sans fonts-slab
	cp dist/iosevka/ttf/* testdrive/assets/
	cp dist/iosevka-slab/ttf/* testdrive/assets/
	cp build/iosevka-regular.charmap testdrive/assets/
	cp build/iosevka-slab-regular.charmap testdrive/assets/

pages : fonts-sans fonts-slab web-sans web-slab
	cp dist/iosevka/ttf/* pages/assets/
	cp dist/iosevka/woff/* pages/assets/
	cp dist/iosevka/woff2/* pages/assets/
	cp dist/iosevka-slab/ttf/* pages/assets/
	cp dist/iosevka-slab/woff/* pages/assets/
	cp dist/iosevka-slab/woff2/* pages/assets/
	cp build/iosevka-regular.charmap pages/assets/
	cp build/iosevka-slab-regular.charmap pages/assets/

fw : ttc

d-snapshot : fonts-sans fonts-slab web-sans web-slab
	cp dist/iosevka/ttf/* snapshot/assets/
	cp dist/iosevka/woff/* snapshot/assets/
	cp dist/iosevka/woff2/* snapshot/assets/
	cp dist/iosevka-slab/ttf/* snapshot/assets/
	cp dist/iosevka-slab/woff/* snapshot/assets/
	cp dist/iosevka-slab/woff2/* snapshot/assets/
	cp build/iosevka-regular.charmap snapshot/assets/
	cp build/iosevka-slab-regular.charmap snapshot/assets/
electronsnaps1: d-snapshot
	cd snapshot && stylus index.styl -c
	cd snapshot && electron getsnap.js --dir ../images
images/opentype.png: electronsnaps1
	optipng $@
images/languages.png: electronsnaps1
	optipng $@
images/preview-all.png: electronsnaps1
	optipng $@
images/weights.png: electronsnaps1
	optipng $@
images/variants.png: electronsnaps1
	optipng $@
images/matrix.png: electronsnaps1
	optipng $@
images/family.png: electronsnaps1
	optipng $@

sample-images: images/family.png images/matrix.png images/weights.png images/variants.png images/opentype.png images/languages.png images/preview-all.png

