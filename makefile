default: fonts

ARCPREFIX=$(if $(ARCPREFIX1),$(ARCPREFIX1),01.)

include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='$(SUFFIX)' VARNAME='$(VARNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)' NOLIG='$(NOLIG)' NOCHARMAP='$(NOCHARMAP)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='$(SUFFIX)-slab' VARNAME='$(VARNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_SUFFIX='slab' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)' NOLIG='$(NOLIG)' NOCHARMAP='$(NOCHARMAP)'

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
	$(MAKE) pages-default archives-default VERSION=$(VERSION) \
		ARCPREFIX1='01.'
releasepack-term : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-default VERSION=$(VERSION) \
		ARCPREFIX1='02.' SUFFIX='-term' STYLE_COMMON='term' NOCHARMAP='true'
releasepack-cc : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-default VERSION=$(VERSION) \
		ARCPREFIX1='03.' SUFFIX='-cc' STYLE_COMMON='cc' NOCHARMAP='true'

releasepack-slab : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) pages-slab archives-slab VERSION=$(VERSION) \
		ARCPREFIX1='04.'
releasepack-term-slab : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-slab VERSION=$(VERSION) \
		ARCPREFIX1='05.' SUFFIX='-term' STYLE_COMMON='term' NOCHARMAP='true'
releasepack-cc-slab : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-slab VERSION=$(VERSION) \
		ARCPREFIX1='06.' SUFFIX='-cc' STYLE_COMMON='cc' NOCHARMAP='true'

releasepack-hooky : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-default VERSION=$(VERSION) \
		ARCPREFIX1='07.' SUFFIX='-hooky' STYLE_UPRIGHT='v-l-hooky v-i-hooky' NOCHARMAP='true'
releasepack-hooky-term : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-default VERSION=$(VERSION) \
		ARCPREFIX1='08.' SUFFIX='-term-hooky' STYLE_COMMON='term' STYLE_UPRIGHT='v-l-hooky v-i-hooky' NOCHARMAP='true'

releasepack-zshaped : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-default VERSION=$(VERSION) \
		ARCPREFIX1='09.' SUFFIX='-zshaped' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' NOCHARMAP='true'
releasepack-zshaped-term : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) archives-default VERSION=$(VERSION) \
		ARCPREFIX1='10.' SUFFIX='-term-zshaped' STYLE_COMMON='term' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' NOCHARMAP='true'

release-all : releasepack-default releasepack-term releasepack-cc \
              releasepack-slab releasepack-term-slab releasepack-cc-slab \
              releasepack-hooky releasepack-zshaped \
              releasepack-hooky-term releasepack-zshaped-term
fw : releasepack-default releasepack-cc releasepack-slab releasepack-cc-slab

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