VERSION = 1.11.2

BUILD = build
DIST = dist
ARCHIVEDIR = release-archives

.SECONDARY : scripts
.PHONY : pages test release sample-images _start web fw custom custom-web custom-config


_start : __default

$(BUILD)/ :
	-@mkdir -p $@
$(DIST)/ :
	-@mkdir -p $@
$(ARCHIVEDIR)/ :
	-@mkdir -p $@

GENERATE = @node --expose-gc generator

###################################################################################################
# Standard builds

$(BUILD)/targets.mk : maker.js $(SCRIPTS) | $(BUILD)/
	node maker.js > $@
include $(BUILD)/targets.mk

web : web-sans web-slab

###################################################################################################
# Custom builds

ifndef set
set = custom
endif
ifndef design
design = sans
endif
ifndef upright
upright = normal
endif
ifndef italic
italic = normal
endif
ifndef oblique
oblique = normal
endif

CREATECONFIG = node maker.js --custom $(set) --design '$(design)' --upright '$(upright)' --italic '$(italic)' --oblique '$(oblique)' > $(BUILD)/targets-$(set).mk

custom-config : | $(BUILD)/
	$(CREATECONFIG)

custom :
	@make fonts-customized-$(set) __IOSEVKA_CUSTOM_BUILD__=true
custom-web :
	@make web-customized-$(set) __IOSEVKA_CUSTOM_BUILD__=true

ifdef __IOSEVKA_CUSTOM_BUILD__
include $(BUILD)/targets-$(set).mk
endif


###################################################################################################
# Iosevka standard release scripts

release : __release pages sample-images

test : fonts-sans fonts-slab
	cp dist/iosevka/*.ttf testdrive/assets/
	cp dist/iosevka-slab/*.ttf testdrive/assets/
	cp build/iosevka-regular.charmap testdrive/assets/
	cp build/iosevka-slab-regular.charmap testdrive/assets/

pages : fonts-sans fonts-slab web-sans web-slab
	cp dist/iosevka/*.ttf pages/assets/
	cp dist/iosevka/web/* pages/assets/
	cp dist/iosevka-slab/*.ttf pages/assets/
	cp dist/iosevka-slab/web/* pages/assets/
	cp build/iosevka-regular.charmap pages/assets/
	cp build/iosevka-slab-regular.charmap pages/assets/

fw : ttc

d-snapshot : fonts-sans fonts-slab web-sans web-slab
	cp dist/iosevka/*.ttf snapshot/assets/
	cp dist/iosevka/web/* snapshot/assets/
	cp dist/iosevka-slab/*.ttf snapshot/assets/
	cp dist/iosevka-slab/web/* snapshot/assets/
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


###################################################################################################
# Support Files
# DO NOT CHANGE

PATELC = node ./node_modules/patel/bin/patel-c

GLYPH_SEGMENTS = glyphs/common-shapes.js glyphs/overmarks.js glyphs/letters-unified-basic.js glyphs/letters-unified-extended.js glyphs/numbers.js glyphs/symbol-punctuation.js glyphs/symbol-math.js glyphs/symbol-letter.js glyphs/symbol-geometric.js glyphs/symbol-other.js glyphs/symbol-braille.js glyphs/autobuilds.js buildglyphs.js
SUPPORT_FILES_FROM_PTL = support/glyph.js support/spiroexpand.js support/spirokit.js parameters.js support/anchor.js support/point.js support/transform.js support/utils.js meta/aesthetics.js meta/naming.js meta/features.js
SUPPORT_FILES_JS = generator.js emptyfont.toml parameters.toml support/fairify.js support/autoref.js
SUPPORT_FILES = $(SUPPORT_FILES_FROM_PTL) $(SUPPORT_FILES_JS)
SCRIPTS = $(SUPPORT_FILES) $(GLYPH_SEGMENTS)
SCRIPTS_FROM_PTL = $(SUPPORT_FILES_FROM_PTL) $(GLYPH_SEGMENTS)

$(SUPPORT_FILES_FROM_PTL) : %.js : %.ptl meta/macros.ptl
	$(PATELC) --optimize --strict $< -o $@
$(GLYPH_SEGMENTS) : %.js : %.ptl meta/macros.ptl $(SUPPORT_FILES_FROM_PTL) $(SUPPORT_FILES_JS)
	$(PATELC) --optimize --strict $< -o $@

cleanscripts :
	-@rm $(SCRIPTS_FROM_PTL)
scripts : $(SCRIPTS)