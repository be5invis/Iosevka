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
export FAST
export VARNAME
export STYLE_COMMON
export STYLE_UPRIGHT
export STYLE_ITALIC
export VERSION
export ARCPREFIX
export NOCHARMAP
export NOLIG
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
webfont-pkg : fonts | dist/webfonts/assets
	@$(MAKE) -f onegroup.mk webfonts $(PARAM)

# Snapshot
x-snapshot : webfont-pkg | snapshot/assets
	@$(MAKE) -f onegroup.mk snapshot $(PARAM)

# Pages
pages : fonts
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

release-all : archives-default archives-term archives-cc \
              archives-slab archives-term-slab archives-cc-slab \
              archives-hooky archives-zshaped \
              archives-hooky-term archives-zshaped-term \
              pages-default pages-slab
fw : fonts-default fonts-cc fonts-slab fonts-cc-slab

d-fonts : fonts-d-sans fonts-d-slab
test : testdrive-d-sans testdrive-d-slab
d-webfonts : webfont-pkg-d-sans webfont-pkg-d-slab
d-snapshot : x-snapshot-d-sans x-snapshot-d-slab

electronsnaps1: d-snapshot
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