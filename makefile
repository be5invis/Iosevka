default: fonts

include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='$(SUFFIX)' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)' NOLIG='$(NOLIG)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='$(SUFFIX)-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_SUFFIX='slab' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)' NOLIG='$(NOLIG)'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
LOOPS = 0 1 2

svgs : svgs-default svgs-slab
fonts : fonts-default fonts-slab
test  : test-default test-slab
snapshot  : snapshot-default snapshot-slab

# svgs
svgs-default : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk svgs $(PARAM_DEFAULT)
svgs-slab : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk svgs $(PARAM_SLAB)


# ttfs
fonts-default : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk fonts $(PARAM_SLAB)


### USED FOR TESTING AND RELEASING
### DO NOT TOUCH!
# testdrive
test-default : fonts-default
	@$(MAKE) -f onegroup.mk test $(PARAM_DEFAULT)
test-slab : fonts-slab
	@$(MAKE) -f onegroup.mk test $(PARAM_SLAB)
	
# snapshot
snapshot-default : webfonts-default | snapshot/assets
	@$(MAKE) -f onegroup.mk snapshot $(PARAM_DEFAULT)
snapshot-slab : webfonts-slab | snapshot/assets
	@$(MAKE) -f onegroup.mk snapshot $(PARAM_SLAB)

# Webfonts
dist/webfonts : | dist
	@- mkdir $@
dist/webfonts/assets : |dist/webfonts
	@- mkdir $@
webfonts-default : fonts-default | dist/webfonts/assets
	@$(MAKE) -f onegroup.mk webfonts $(PARAM_DEFAULT)
webfonts-slab : fonts-slab | dist/webfonts/assets
	@$(MAKE) -f onegroup.mk webfonts $(PARAM_SLAB)

# Pages
pages-default : fonts-default
	@$(MAKE) -f onegroup.mk pages $(PARAM_DEFAULT)
pages-slab : fonts-slab
	@$(MAKE) -f onegroup.mk pages $(PARAM_SLAB)

# Release
release-default : fonts-default
	@$(MAKE) -f onegroup.mk release $(PARAM_DEFAULT)
release-slab : fonts-slab
	@$(MAKE) -f onegroup.mk release $(PARAM_SLAB)

# Archives
archives-default : fonts-default
	@$(MAKE) -f onegroup.mk archives $(PARAM_DEFAULT)
archives-slab : fonts-slab
	@$(MAKE) -f onegroup.mk archives $(PARAM_SLAB)

# Releases
releasepack-default : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) pages-default pages-slab archives-default archives-slab VERSION=$(VERSION) ARCPREFIX='a-'
releasepack-nolig : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) pages-default pages-slab archives-default archives-slab VERSION=$(VERSION) VARIANTNAME='nolig-' STYLE_COMMON='nolig' NOLIG='true' ARCPREFIX='a-nolig-'
fonts-hooky : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='b-variant-hooky-'
fonts-zshaped : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='b-variant-zshaped-'
releasepack-hooky : fonts-hooky
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='b-variant-hooky-'
releasepack-zshaped : fonts-zshaped
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='b-variant-zshaped-'
releasepack-hooky-nolig : fonts-hooky
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='hooky-nolig-' STYLE_COMMON='nolig' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='b-variant-hooky-nolig-'
releasepack-zshaped-nolig : fonts-zshaped
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='zshaped-nolig-' STYLE_COMMON='nolig' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='b-variant-zshaped-nolig-'
fonts-fw : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='c-withfw-'
fonts-cc : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='c-withfw-cc-'
releasepack-fw : fonts-fw
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='c-withfw-'
releasepack-cc : fonts-cc
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='c-withfw-cc-'

release-all : releasepack-default releasepack-nolig releasepack-hooky releasepack-zshaped releasepack-hooky-nolig releasepack-zshaped-nolig releasepack-fw releasepack-cc 
fw : fonts-fw fonts-cc

webfonts : webfonts-default webfonts-slab

electronsnaps1: webfonts snapshot
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