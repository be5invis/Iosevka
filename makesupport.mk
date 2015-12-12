PATELC = node ./node_modules/patel/bin/patel-c
SUPPORT_FILES_FROM_aki = support/glyph.js support/stroke.js support/spiroexpand.js support/spirokit.js parameters.js
SUPPORT_FILES = $(SUPPORT_FILES_FROM_aki) support/point.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.aki glyphs/overmarks.aki glyphs/letters-unified-basic.aki glyphs/letters-unified-extended.aki  glyphs/numbers.aki glyphs/symbol-punctuation.aki glyphs/symbol-math.aki glyphs/symbol-geometric.aki glyphs/symbol-other.aki glyphs/symbol-letter.aki glyphs/autobuilds.aki
SCRIPTS = $(SUPPORT_FILES) buildglyphs.js
SCRIPTS_FROM_aki = $(SUPPORT_FILES_FROM_aki) buildglyphs.js

buildglyphs.js : buildglyphs.aki $(GLYPH_SEGMENTS)
	$(PATELC) --strict $< -o $@

$(SUPPORT_FILES_FROM_aki) :
	$(PATELC) --optimize --strict $< -o $@
support/glyph.js : support/glyph.aki
support/stroke.js : support/stroke.aki
support/spirokit.js : support/spirokit.aki
support/spiroexpand.js : support/spiroexpand.aki
parameters.js : parameters.aki

cleanscripts : 
	-@rm $(SCRIPTS_FROM_aki)
scripts : $(SCRIPTS)