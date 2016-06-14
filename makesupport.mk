OBJDIR = build

$(OBJDIR) :
	@- mkdir $@
dist :
	@- mkdir $@
snapshot/assets :
	@- mkdir $@

PATELC = node ./node_modules/patel/bin/patel-c

GLYPH_SEGMENTS = glyphs/common-shapes.js glyphs/overmarks.js glyphs/letters-unified-basic.js glyphs/letters-unified-extended.js glyphs/numbers.js glyphs/symbol-punctuation.js glyphs/symbol-math.js glyphs/symbol-letter.js glyphs/symbol-geometric.js glyphs/symbol-other.js glyphs/symbol-braille.js glyphs/autobuilds.js

SUPPORT_FILES_FROM_PTL = support/glyph.js support/spiroexpand.js support/spirokit.js parameters.js support/anchor.js support/point.js support/transform.js support/utils.js meta/aesthetics.js meta/naming.js meta/features.js $(GLYPH_SEGMENTS)

SUPPORT_FILES = $(SUPPORT_FILES_FROM_PTL) generator.js emptyfont.toml parameters.toml support/fairify.js
SCRIPTS = $(SUPPORT_FILES) buildglyphs.js
SCRIPTS_FROM_aki = $(SUPPORT_FILES_FROM_PTL) buildglyphs.js

buildglyphs.js : buildglyphs.ptl $(GLYPH_SEGMENTS)
	$(PATELC) --strict $< -o $@

$(SUPPORT_FILES_FROM_PTL) : %.js : %.ptl meta/macros.ptl
	$(PATELC) --optimize --strict $< -o $@

cleanscripts : 
	-@rm $(SCRIPTS_FROM_aki)
scripts : $(SCRIPTS)
