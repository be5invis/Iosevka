fonts : fonts-default fonts-cc fonts-slab fonts-cc-slab
test  : test-default test-cc test-slab test-cc-slab



OBJDIR = build
SUPPORT_FILES = support/glyph.js support/stroke.js support/spiroexpand.js parameters.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
FILES = $(SUPPORT_FILES) buildglyphs.js

PARAM_SLAB = VARIANTNAME=-slab STYLE_COMMON=slab STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic'
PARAM_CC   = VARIANTNAME=cc STYLE_COMMON=cc
PARAM_CC_SLAB = VARIANTNAME=cc-slab STYLE_COMMON='cc slab x-cc-slab' STYLE_X_REGULAR='x-slab-regular' STYLE_X_BOLD='x-slab-bold' STYLE_X_ITALIC='x-slab-italic' STYLE_X_BOLDITALIC='x-slab-bolditalic'

$(OBJDIR) :
	@- mkdir $@


$(SUPPORT_FILES) :
	patel-c --strict $< -o $@

buildglyphs.js : buildglyphs.patel $(GLYPH_SEGMENTS)
	patel-c --strict $< -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
support/spiroexpand.js : support/spiroexpand.patel
parameters.js : parameters.patel


### DEFAULT
### My `make` always throws 0xC0000005 to me, so this script will repeat the building step over and over until it succeeds.
fdts-default : $(FILES) | $(OBJDIR)
	bash -c "until make -f onegroup.mk -j 4 fdts; do echo retry; done;"
fdts-slab : $(FILES) | $(OBJDIR)
	bash -c "until make -f onegroup.mk -j 4 fdts $(PARAM_SLAB); do echo retry; done;"
fdts-cc : $(FILES) | $(OBJDIR)
	bash -c "until make -f onegroup.mk -j 4 fdts $(PARAM_CC); do echo retry; done;"
fdts-cc-slab : $(FILES) | $(OBJDIR)
	bash -c "until make -f onegroup.mk -j 4 fdts $(PARAM_CC_SLAB); do echo retry; done;"

fdts : fdts-default fdts-slab fdts-cc fdts-cc-slab

fonts-default : fdts
	$(MAKE) -f onegroup.mk fonts
fonts-slab : fdts
	$(MAKE) -f onegroup.mk fonts $(PARAM_SLAB)
fonts-cc : fdts
	$(MAKE) -f onegroup.mk fonts $(PARAM_CC)
fonts-cc-slab : fdts
	$(MAKE) -f onegroup.mk fonts $(PARAM_CC_SLAB)

test-default : fonts-default
	$(MAKE) -f onegroup.mk test
test-slab : fonts-slab
	$(MAKE) -f onegroup.mk test $(PARAM_SLAB)
test-cc : fonts-cc
	$(MAKE) -f onegroup.mk test $(PARAM_CC)
test-cc-slab : fonts-cc-slab
	$(MAKE) -f onegroup.mk test $(PARAM_CC_SLAB)