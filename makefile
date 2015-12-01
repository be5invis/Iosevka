default: fonts

OBJDIR = build
include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='$(SUFFIX)' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='$(SUFFIX)-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='slab $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic' VERSION='$(VERSION)'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
LOOPS = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

fdts : fdts-default fdts-slab
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

# ttfs
fonts-default : fdts-default
	@$(MAKE) -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : fdts-slab
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
releasepack-cjk : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='cjk-'
releasepack-cc : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='cjk-compat-'
releasepack-cc-slab : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc x-cc-slab' VARIANTNAME='cjk-compat-'
releasepack-hooky : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='variant-hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky'
releasepack-zshaped : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='variant-zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped'
release-all : releasepack-default releasepack-cjk releasepack-cc releasepack-cc-slab releasepack-hooky releasepack-zshaped
cjkall : releasepack-cjk releasepack-cc releasepack-cc-slab