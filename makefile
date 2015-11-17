OBJDIR = build
SUPPORT_FILES = support/glyph.js support/stroke.js support/spiroexpand.js parameters.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
FILES = $(SUPPORT_FILES) buildglyphs.js
PARAM_DEFAULT = FAST='$(FAST)' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)'
PARAM_SLAB = FAST='$(FAST)' VARIANTNAME='-slab$(VARIANTNAME)' STYLE_COMMON='slab $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic'
PARAM_CC   = FAST='$(FAST)' VARIANTNAME='cc$(VARIANTNAME)' STYLE_COMMON='cc $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)'
PARAM_CC_SLAB = FAST='$(FAST)' VARIANTNAME='cc-slab$(VARIANTNAME)' STYLE_COMMON='cc slab x-cc-slab $(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
ifeq ($(OS),Windows_NT)
LOOPS = 1 2 3 4 5 6 7 8 9 10
else
LOOPS = 1
endif

fonts : fonts-default fonts-cc fonts-slab fonts-cc-slab
	
test  : test-default test-cc test-slab test-cc-slab
	
$(OBJDIR) :
	@- mkdir $@


# fdts
fdts-default : $(FILES) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_DEFAULT) LOOP=$(var);)
fdts-slab : $(FILES) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_SLAB) LOOP=$(var);)
fdts-cc : $(FILES) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_CC) LOOP=$(var);)
fdts-cc-slab : $(FILES) | $(OBJDIR)
	@$(foreach var,$(LOOPS),$(MAKE) -s -f onegroup.mk fdts $(PARAM_CC_SLAB) LOOP=$(var);)

# ttfs
fonts-default : fdts-default
	@$(MAKE) -s -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : fdts-slab
	@$(MAKE) -s -f onegroup.mk fonts $(PARAM_SLAB)
fonts-cc : fdts-cc
	@$(MAKE) -s -f onegroup.mk fonts $(PARAM_CC)
fonts-cc-slab : fdts-cc-slab
	@$(MAKE) -s -f onegroup.mk fonts $(PARAM_CC_SLAB)

# testdrive
test-default : fonts-default
	@$(MAKE) -s -f onegroup.mk test $(PARAM_DEFAULT)
test-slab : fonts-slab
	@$(MAKE) -s -f onegroup.mk test $(PARAM_SLAB)
test-cc : fonts-cc
	@$(MAKE) -s -f onegroup.mk test $(PARAM_CC)
test-cc-slab : fonts-cc-slab
	@$(MAKE) -s -f onegroup.mk test $(PARAM_CC_SLAB)




$(SUPPORT_FILES) :
	patel-c --strict $< -o $@

buildglyphs.js : buildglyphs.patel $(GLYPH_SEGMENTS)
	patel-c --strict $< -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
support/spiroexpand.js : support/spiroexpand.patel
parameters.js : parameters.patel