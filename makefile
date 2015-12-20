default: fonts

OBJDIR = build
include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='$(SUFFIX)' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='$(SUFFIX)-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_SUFFIX='slab' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
LOOPS = 0 1 2

fdts : fdts-default fdts-slab
svgs : svgs-default svgs-slab
fonts : fonts-default fonts-slab
test  : test-default test-slab
pages : pages-default pages-slab
release : release-default release-slab
	
$(OBJDIR) :
	@- mkdir $@


# fdts
fdts-default : $(SCRIPTS) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_DEFAULT) LOOP=$(var);)
fdts-slab : $(SCRIPTS) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_SLAB) LOOP=$(var);)

# svgs
svgs-default : fdts-default
	@$(MAKE) -f onegroup.mk svgs $(PARAM_DEFAULT)
svgs-slab : fdts-slab
	@$(MAKE) -f onegroup.mk svgs $(PARAM_SLAB)


# ttfs
fonts-default : svgs-default
	@$(MAKE) -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : svgs-slab
	@$(MAKE) -f onegroup.mk fonts $(PARAM_SLAB)


### USED FOR TESTING AND RELEASING
### DO NOT TOUCH!
# testdrive
test-default : fonts-default
	@$(MAKE) -f onegroup.mk test $(PARAM_DEFAULT)
test-slab : fonts-slab
	@$(MAKE) -f onegroup.mk test $(PARAM_SLAB)

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

# Variant releases
releasepack-default : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) pages release VERSION=$(VERSION)
fonts-fw : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='withfw-'
fonts-cc : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='withfw-cc-'
releasepack-fw : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='withfw-'
releasepack-cc : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='withfw-cc-'
releasepack-hooky : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='variant-hooky-'
releasepack-zshaped : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='variant-zshaped-'
release-all : releasepack-default releasepack-fw releasepack-cc releasepack-hooky releasepack-zshaped
fw : fonts-fw fonts-cc