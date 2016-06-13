OBJDIR = build

$(OBJDIR) :
	@- mkdir $@
dist :
	@- mkdir $@
snapshot/assets :
	@- mkdir $@
	
PATELC = node ./node_modules/patel/bin/patel-c
SUPPORT_FILES_FROM_PTL = support/glyph.js support/spiroexpand.js support/spirokit.js parameters.js support/anchor.js support/point.js support/transform.js support/utils.js
SUPPORT_FILES = $(SUPPORT_FILES_FROM_PTL) generator.js emptyfont.toml parameters.toml support/fairify.js
GLYPH_SEGMENTS = glyphs/common-shapes.ptl glyphs/overmarks.ptl glyphs/letters-unified-basic.ptl glyphs/letters-unified-extended.ptl  glyphs/numbers.ptl glyphs/symbol-punctuation.ptl glyphs/symbol-math.ptl glyphs/symbol-geometric.ptl glyphs/symbol-other.ptl glyphs/symbol-braille.ptl glyphs/symbol-letter.ptl glyphs/autobuilds.ptl glyphs/features.ptl
SCRIPTS = $(SUPPORT_FILES) buildglyphs.js
SCRIPTS_FROM_aki = $(SUPPORT_FILES_FROM_PTL) buildglyphs.js

buildglyphs.js : buildglyphs.ptl $(GLYPH_SEGMENTS)
	$(PATELC) --strict $< -o $@

$(SUPPORT_FILES_FROM_PTL) :
	$(PATELC) --optimize --strict $< -o $@
support/anchor.js : support/anchor.ptl
support/point.js : support/point.ptl
support/transform.js : support/transform.ptl
support/glyph.js : support/glyph.ptl
support/spirokit.js : support/spirokit.ptl
support/spiroexpand.js : support/spiroexpand.ptl
support/utils.js : support/utils.ptl
parameters.js : parameters.ptl

cleanscripts : 
	-@rm $(SCRIPTS_FROM_aki)
scripts : $(SCRIPTS)
