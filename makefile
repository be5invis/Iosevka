default: fonts

OBJDIR = build
include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='slab $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic' VERSION='$(VERSION)'
PARAM_CC   = FAST='$(FAST)' SUFFIX='cc' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='cc $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)'
PARAM_CC_SLAB = FAST='$(FAST)' SUFFIX='cc-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='cc slab x-cc-slab $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic' VERSION='$(VERSION)'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
ifeq ($(OS),Windows_NT)
LOOPS = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
else
LOOPS = 1
endif

fonts : fonts-default fonts-cc fonts-slab fonts-cc-slab
test  : test-default test-cc test-slab test-cc-slab
pages : pages-default pages-cc pages-slab pages-cc-slab
release : release-default release-cc release-slab release-cc-slab
	
$(OBJDIR) :
	@- mkdir $@


# fdts
fdts-default : $(SCRIPTS) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_DEFAULT) LOOP=$(var);)
fdts-slab : $(SCRIPTS) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_SLAB) LOOP=$(var);)
fdts-cc : $(SCRIPTS) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_CC) LOOP=$(var);)
fdts-cc-slab : $(SCRIPTS) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_CC_SLAB) LOOP=$(var);)

# ttfs
fonts-default : fdts-default
	@$(MAKE) -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : fdts-slab
	@$(MAKE) -f onegroup.mk fonts $(PARAM_SLAB)
fonts-cc : fdts-cc
	@$(MAKE) -f onegroup.mk fonts $(PARAM_CC)
fonts-cc-slab : fdts-cc-slab
	@$(MAKE) -f onegroup.mk fonts $(PARAM_CC_SLAB)


### USED FOR TESTING AND RELEASING
### DO NOT TOUCH!
# testdrive
test-default : fonts-default
	@$(MAKE) -f onegroup.mk test $(PARAM_DEFAULT)
test-slab : fonts-slab
	@$(MAKE) -f onegroup.mk test $(PARAM_SLAB)
test-cc : fonts-cc
	@$(MAKE) -f onegroup.mk test $(PARAM_CC)
test-cc-slab : fonts-cc-slab
	@$(MAKE) -f onegroup.mk test $(PARAM_CC_SLAB)

# Pages
pages-default : fonts-default
	@$(MAKE) -f onegroup.mk pages $(PARAM_DEFAULT)
pages-slab : fonts-slab
	@$(MAKE) -f onegroup.mk pages $(PARAM_SLAB)
pages-cc : fonts-cc
	@$(MAKE) -f onegroup.mk pages $(PARAM_CC)
pages-cc-slab : fonts-cc-slab
	@$(MAKE) -f onegroup.mk pages $(PARAM_CC_SLAB)

# Release
release-default : fonts-default
	@$(MAKE) -f onegroup.mk release $(PARAM_DEFAULT)
release-slab : fonts-slab
	@$(MAKE) -f onegroup.mk release $(PARAM_SLAB)
release-cc : fonts-cc
	@$(MAKE) -f onegroup.mk release $(PARAM_CC)
release-cc-slab : fonts-cc-slab
	@$(MAKE) -f onegroup.mk release $(PARAM_CC_SLAB)

# Archives
archives-default : fonts-default
	@$(MAKE) -f onegroup.mk archives $(PARAM_DEFAULT)
archives-slab : fonts-slab
	@$(MAKE) -f onegroup.mk archives $(PARAM_SLAB)
archives-cc : fonts-cc
	@$(MAKE) -f onegroup.mk archives $(PARAM_CC)
archives-cc-slab : fonts-cc-slab
	@$(MAKE) -f onegroup.mk archives $(PARAM_CC_SLAB)

# Variant releases
releasepack-default : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) pages release VERSION=$(VERSION)
releasepack-hooky : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-cc VERSION=$(VERSION) VARIANTNAME='variant-hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky'
releasepack-zshaped : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-cc VERSION=$(VERSION) VARIANTNAME='variant-zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped'
release-all : releasepack-default releasepack-hooky releasepack-zshaped