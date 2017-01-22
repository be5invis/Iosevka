default: d-fonts

ifeq ($(config),default)
TARGET=sans
ARCPREFIX =01.
else ifeq ($(config),term)
TARGET=sans
ARCPREFIX =02.
SUFFIX = -term
STYLE_COMMON = term
NOCHARMAP = true
else ifeq ($(config),cc)
TARGET=sans
ARCPREFIX = 03.
SUFFIX = -cc
STYLE_COMMON=cc
NOCHARMAP=true
else ifeq ($(config),slab)
TARGET=slab
ARCPREFIX=04.
else ifeq ($(config),term-slab)
TARGET=slab
ARCPREFIX=05.
SUFFIX=-term
STYLE_COMMON=term
NOCHARMAP=true
else ifeq ($(config),cc-slab)
TARGET=slab
ARCPREFIX=06.
SUFFIX=-cc
STYLE_COMMON=cc
NOCHARMAP=true
else ifeq ($(config),hooky)
TARGET=sans
ARCPREFIX=07.
SUFFIX=-hooky
STYLE_UPRIGHT=v-l-hooky v-i-hooky
NOCHARMAP=true
else ifeq ($(config),hooky-term)
TARGET=sans
ARCPREFIX=08.
SUFFIX=-term-hooky
STYLE_COMMON=term
STYLE_UPRIGHT=v-l-hooky v-i-hooky
NOCHARMAP=true
else ifeq ($(config),zshaped)
TARGET=sans
ARCPREFIX=09.
SUFFIX=-zshaped
STYLE_UPRIGHT=v-l-zshaped v-i-zshaped
NOCHARMAP=true
else ifeq ($(config),zshaped-term)
TARGET=sans
ARCPREFIX=10.
SUFFIX=-term-zshaped
STYLE_COMMON=term
STYLE_UPRIGHT=v-l-zshaped v-i-zshaped
NOCHARMAP=true
else ifeq ($(config),d-sans)
TARGET=sans
else ifeq ($(config),d-slab)
TARGET=slab
else
TARGET=sans
endif

include makesupport.mk
ifeq ($(TARGET),slab)
PARAM = SUFFIX='$(SUFFIX)-slab' STYLE_SUFFIX='slab'
else
PARAM = SUFFIX='$(SUFFIX)' VERSION='$(VERSION)'
endif

export VERSION
export VARNAME
export STYLE_COMMON
export STYLE_UPRIGHT
export STYLE_ITALIC
export VERSION
export ARCPREFIX
export NOCHARMAP
export NOLIG
export DONTREF
export DONTHINT

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
LOOPS = 0 1 2

# svgs
svgs : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk svgs $(PARAM)
# ttfs
fonts : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk fonts $(PARAM)

### USED FOR TESTING AND RELEASING
### DO NOT TOUCH!
# Testdrive
testdrive : fonts
	@$(MAKE) -f onegroup.mk test $(PARAM)
	
# Webfonts
dist/webfonts : | dist
	@- mkdir $@
dist/webfonts/assets : | dist/webfonts
	@- mkdir $@
dist/ttc : | dist
	@- mkdir $@
webfont-pkg : fonts | dist/webfonts/assets
	@$(MAKE) -f onegroup.mk webfonts $(PARAM)

# Snapshot
x-snapshot : webfont-pkg | snapshot/assets
	@$(MAKE) -f onegroup.mk snapshot $(PARAM)

# Pages
pages/index.css : pages/index.styl
	stylus $<
pages : fonts pages/index.css
	@$(MAKE) -f onegroup.mk pages $(PARAM)

# Archives
archives : fonts
	@$(MAKE) -f onegroup.mk archives $(PARAM)



# Release building commands
standard-styles = default term cc slab term-slab cc-slab hooky hooky-term zshaped zshaped-term d-sans d-slab
fonts-styles = $(foreach style,$(standard-styles),fonts-$(style))
testdrive-styles = $(foreach style,$(standard-styles),testdrive-$(style))
archives-styles = $(foreach style,$(standard-styles),archives-$(style))
pages-styles = $(foreach style,$(standard-styles),pages-$(style))
webfont-pkg-styles = $(foreach style,$(standard-styles),webfont-pkg-$(style))
x-snapshot-styles = $(foreach style,$(standard-styles),x-snapshot-$(style))

$(fonts-styles) : fonts-% : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts config=$(subst fonts-,,$@)
$(testdrive-styles) : testdrive-% : fonts-% $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) testdrive config=$(subst testdrive-,,$@)
$(archives-styles) : archives-% : fonts-% $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives config=$(subst archives-,,$@)
$(pages-styles) : pages-% : fonts-% $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) pages config=$(subst pages-,,$@)
$(webfont-pkg-styles) : webfont-pkg-% : fonts-% $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) webfont-pkg config=$(subst webfont-pkg-,,$@)
$(x-snapshot-styles) : x-snapshot-% : fonts-% $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) x-snapshot config=$(subst x-snapshot-,,$@)

x-archives-bundled : release-archives/iosevka-pack-$(VERSION).zip release-archives/iosevka-pack-$(VERSION).7z

OTF2OTC1 = otfcc-ttcize -o

# TTC packages
dist/ttc/iosevka-thin.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-thin.ttf dist/02.iosevka-term/iosevka-term-thin.ttf dist/03.iosevka-cc/iosevka-cc-thin.ttf
dist/ttc/iosevka-slab-thin.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-thin.ttf dist/05.iosevka-term-slab/iosevka-term-slab-thin.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-thin.ttf
dist/ttc/iosevka-extralight.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-extralight.ttf dist/02.iosevka-term/iosevka-term-extralight.ttf dist/03.iosevka-cc/iosevka-cc-extralight.ttf
dist/ttc/iosevka-slab-extralight.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-extralight.ttf dist/05.iosevka-term-slab/iosevka-term-slab-extralight.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-extralight.ttf
dist/ttc/iosevka-light.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-light.ttf dist/02.iosevka-term/iosevka-term-light.ttf dist/03.iosevka-cc/iosevka-cc-light.ttf
dist/ttc/iosevka-slab-light.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-light.ttf dist/05.iosevka-term-slab/iosevka-term-slab-light.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-light.ttf
dist/ttc/iosevka-regular.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-regular.ttf dist/02.iosevka-term/iosevka-term-regular.ttf dist/03.iosevka-cc/iosevka-cc-regular.ttf
dist/ttc/iosevka-slab-regular.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-regular.ttf dist/05.iosevka-term-slab/iosevka-term-slab-regular.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-regular.ttf
dist/ttc/iosevka-medium.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-medium.ttf dist/02.iosevka-term/iosevka-term-medium.ttf dist/03.iosevka-cc/iosevka-cc-medium.ttf
dist/ttc/iosevka-slab-medium.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-medium.ttf dist/05.iosevka-term-slab/iosevka-term-slab-medium.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-medium.ttf
dist/ttc/iosevka-bold.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-bold.ttf dist/02.iosevka-term/iosevka-term-bold.ttf dist/03.iosevka-cc/iosevka-cc-bold.ttf
dist/ttc/iosevka-slab-bold.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-bold.ttf dist/05.iosevka-term-slab/iosevka-term-slab-bold.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-bold.ttf
dist/ttc/iosevka-heavy.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-heavy.ttf dist/02.iosevka-term/iosevka-term-heavy.ttf dist/03.iosevka-cc/iosevka-cc-heavy.ttf
dist/ttc/iosevka-slab-heavy.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-heavy.ttf dist/05.iosevka-term-slab/iosevka-term-slab-heavy.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-heavy.ttf
dist/ttc/iosevka-thinitalic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-thinitalic.ttf dist/02.iosevka-term/iosevka-term-thinitalic.ttf dist/03.iosevka-cc/iosevka-cc-thinitalic.ttf
dist/ttc/iosevka-slab-thinitalic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-thinitalic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-thinitalic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-thinitalic.ttf
dist/ttc/iosevka-extralightitalic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-extralightitalic.ttf dist/02.iosevka-term/iosevka-term-extralightitalic.ttf dist/03.iosevka-cc/iosevka-cc-extralightitalic.ttf
dist/ttc/iosevka-slab-extralightitalic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-extralightitalic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-extralightitalic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-extralightitalic.ttf
dist/ttc/iosevka-lightitalic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-lightitalic.ttf dist/02.iosevka-term/iosevka-term-lightitalic.ttf dist/03.iosevka-cc/iosevka-cc-lightitalic.ttf
dist/ttc/iosevka-slab-lightitalic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-lightitalic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-lightitalic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-lightitalic.ttf
dist/ttc/iosevka-italic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-italic.ttf dist/02.iosevka-term/iosevka-term-italic.ttf dist/03.iosevka-cc/iosevka-cc-italic.ttf
dist/ttc/iosevka-slab-italic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-italic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-italic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-italic.ttf
dist/ttc/iosevka-mediumitalic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-mediumitalic.ttf dist/02.iosevka-term/iosevka-term-mediumitalic.ttf dist/03.iosevka-cc/iosevka-cc-mediumitalic.ttf
dist/ttc/iosevka-slab-mediumitalic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-mediumitalic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-mediumitalic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-mediumitalic.ttf
dist/ttc/iosevka-bolditalic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-bolditalic.ttf dist/02.iosevka-term/iosevka-term-bolditalic.ttf dist/03.iosevka-cc/iosevka-cc-bolditalic.ttf
dist/ttc/iosevka-slab-bolditalic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-bolditalic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-bolditalic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-bolditalic.ttf
dist/ttc/iosevka-heavyitalic.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-heavyitalic.ttf dist/02.iosevka-term/iosevka-term-heavyitalic.ttf dist/03.iosevka-cc/iosevka-cc-heavyitalic.ttf
dist/ttc/iosevka-slab-heavyitalic.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-heavyitalic.ttf dist/05.iosevka-term-slab/iosevka-term-slab-heavyitalic.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-heavyitalic.ttf
dist/ttc/iosevka-thinoblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-thinoblique.ttf dist/02.iosevka-term/iosevka-term-thinoblique.ttf dist/03.iosevka-cc/iosevka-cc-thinoblique.ttf
dist/ttc/iosevka-slab-thinoblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-thinoblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-thinoblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-thinoblique.ttf
dist/ttc/iosevka-extralightoblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-extralightoblique.ttf dist/02.iosevka-term/iosevka-term-extralightoblique.ttf dist/03.iosevka-cc/iosevka-cc-extralightoblique.ttf
dist/ttc/iosevka-slab-extralightoblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-extralightoblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-extralightoblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-extralightoblique.ttf
dist/ttc/iosevka-lightoblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-lightoblique.ttf dist/02.iosevka-term/iosevka-term-lightoblique.ttf dist/03.iosevka-cc/iosevka-cc-lightoblique.ttf
dist/ttc/iosevka-slab-lightoblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-lightoblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-lightoblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-lightoblique.ttf
dist/ttc/iosevka-oblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-oblique.ttf dist/02.iosevka-term/iosevka-term-oblique.ttf dist/03.iosevka-cc/iosevka-cc-oblique.ttf
dist/ttc/iosevka-slab-oblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-oblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-oblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-oblique.ttf
dist/ttc/iosevka-mediumoblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-mediumoblique.ttf dist/02.iosevka-term/iosevka-term-mediumoblique.ttf dist/03.iosevka-cc/iosevka-cc-mediumoblique.ttf
dist/ttc/iosevka-slab-mediumoblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-mediumoblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-mediumoblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-mediumoblique.ttf
dist/ttc/iosevka-boldoblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-boldoblique.ttf dist/02.iosevka-term/iosevka-term-boldoblique.ttf dist/03.iosevka-cc/iosevka-cc-boldoblique.ttf
dist/ttc/iosevka-slab-boldoblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-boldoblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-boldoblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-boldoblique.ttf
dist/ttc/iosevka-heavyoblique.ttc : fonts-default fonts-term fonts-cc | dist/ttc
	$(OTF2OTC1) $@ dist/01.iosevka/iosevka-heavyoblique.ttf dist/02.iosevka-term/iosevka-term-heavyoblique.ttf dist/03.iosevka-cc/iosevka-cc-heavyoblique.ttf
dist/ttc/iosevka-slab-heavyoblique.ttc : fonts-slab fonts-term-slab fonts-cc-slab | dist/ttc
	$(OTF2OTC1) $@ dist/04.iosevka-slab/iosevka-slab-heavyoblique.ttf dist/05.iosevka-term-slab/iosevka-term-slab-heavyoblique.ttf dist/06.iosevka-cc-slab/iosevka-cc-slab-heavyoblique.ttf

iosevkattcs : dist/ttc/iosevka-thin.ttc dist/ttc/iosevka-slab-thin.ttc dist/ttc/iosevka-extralight.ttc dist/ttc/iosevka-slab-extralight.ttc dist/ttc/iosevka-light.ttc dist/ttc/iosevka-slab-light.ttc dist/ttc/iosevka-regular.ttc dist/ttc/iosevka-slab-regular.ttc dist/ttc/iosevka-medium.ttc dist/ttc/iosevka-slab-medium.ttc dist/ttc/iosevka-bold.ttc dist/ttc/iosevka-slab-bold.ttc dist/ttc/iosevka-heavy.ttc dist/ttc/iosevka-slab-heavy.ttc dist/ttc/iosevka-thinitalic.ttc dist/ttc/iosevka-slab-thinitalic.ttc dist/ttc/iosevka-extralightitalic.ttc dist/ttc/iosevka-slab-extralightitalic.ttc dist/ttc/iosevka-lightitalic.ttc dist/ttc/iosevka-slab-lightitalic.ttc dist/ttc/iosevka-italic.ttc dist/ttc/iosevka-slab-italic.ttc dist/ttc/iosevka-mediumitalic.ttc dist/ttc/iosevka-slab-mediumitalic.ttc dist/ttc/iosevka-bolditalic.ttc dist/ttc/iosevka-slab-bolditalic.ttc dist/ttc/iosevka-heavyitalic.ttc dist/ttc/iosevka-slab-heavyitalic.ttc dist/ttc/iosevka-thinoblique.ttc dist/ttc/iosevka-slab-thinoblique.ttc dist/ttc/iosevka-extralightoblique.ttc dist/ttc/iosevka-slab-extralightoblique.ttc dist/ttc/iosevka-lightoblique.ttc dist/ttc/iosevka-slab-lightoblique.ttc dist/ttc/iosevka-oblique.ttc dist/ttc/iosevka-slab-oblique.ttc dist/ttc/iosevka-mediumoblique.ttc dist/ttc/iosevka-slab-mediumoblique.ttc dist/ttc/iosevka-boldoblique.ttc dist/ttc/iosevka-slab-boldoblique.ttc dist/ttc/iosevka-heavyoblique.ttc dist/ttc/iosevka-slab-heavyoblique.ttc

release-archives/iosevka-pack-$(VERSION).zip : iosevkattcs
	7z a -tzip -mx=9 $@ ./dist/ttc/*

release-archives/iosevka-pack-$(VERSION).7z : iosevkattcs
	7z a -t7z -mmt=on -m0=LZMA:a=1:d=1536m:fb=256 $@ ./dist/ttc/*

release-packed : release-archives/iosevka-pack-$(VERSION).zip release-archives/iosevka-pack-$(VERSION).7z

release-all : archives-default archives-term archives-cc \
              archives-slab archives-term-slab archives-cc-slab \
              archives-hooky archives-zshaped \
              archives-hooky-term archives-zshaped-term \
              pages-default pages-slab x-archives-bundled
fw : fonts-default fonts-cc fonts-slab fonts-cc-slab fonts-term fonts-term-slab iosevkattcs

d-fonts : fonts-d-sans fonts-d-slab
test : testdrive-d-sans testdrive-d-slab
webfonts : d-webfonts
d-webfonts : webfont-pkg-d-sans webfont-pkg-d-slab
d-snapshot : x-snapshot-d-sans x-snapshot-d-slab

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


sampleimages: images/family.png images/matrix.png images/weights.png images/variants.png images/opentype.png images/languages.png images/preview-all.png