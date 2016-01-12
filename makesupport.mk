OBJDIR = build

$(OBJDIR) :
	@- mkdir $@
dist :
	@- mkdir $@
	
PATELC = node ./node_modules/patel/bin/patel-c
SUPPORT_FILES_FROM_aki = support/glyph.js support/spiroexpand.js support/spirokit.js parameters.js
SUPPORT_FILES = $(SUPPORT_FILES_FROM_aki) support/point.js generator.js emptyfont.toml parameters.toml support/fairify.js
GLYPH_SEGMENTS = glyphs/common-shapes.ptl glyphs/overmarks.ptl glyphs/letters-unified-basic.ptl glyphs/letters-unified-extended.ptl  glyphs/numbers.ptl glyphs/symbol-punctuation.ptl glyphs/symbol-math.ptl glyphs/symbol-geometric.ptl glyphs/symbol-other.ptl glyphs/symbol-letter.ptl glyphs/autobuilds.ptl
SCRIPTS = $(SUPPORT_FILES) buildglyphs.js
SCRIPTS_FROM_aki = $(SUPPORT_FILES_FROM_aki) buildglyphs.js

buildglyphs.js : buildglyphs.ptl $(GLYPH_SEGMENTS)
	$(PATELC) --optimize --strict $< -o $@

$(SUPPORT_FILES_FROM_aki) :
	$(PATELC) --optimize --strict $< -o $@
support/glyph.js : support/glyph.ptl
support/spirokit.js : support/spirokit.ptl
support/spiroexpand.js : support/spiroexpand.ptl
parameters.js : parameters.ptl

cleanscripts : 
	-@rm $(SCRIPTS_FROM_aki)
scripts : $(SCRIPTS)