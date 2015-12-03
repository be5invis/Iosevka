PATEL = node ./node_modules/patel/bin/patel-c
SUPPORT_FILES_FROM_PATEL = support/glyph.js support/stroke.js support/spiroexpand.js support/spirokit.js parameters.js
SUPPORT_FILES = $(SUPPORT_FILES_FROM_PATEL) support/point.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/letters-unified-basic.patel glyphs/letters-unified-extended.patel  glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
SCRIPTS = $(SUPPORT_FILES) buildglyphs.js
SCRIPTS_FROM_PATEL = $(SUPPORT_FILES_FROM_PATEL) buildglyphs.js

buildglyphs.js : buildglyphs.patel $(GLYPH_SEGMENTS)
	$(PATEL) --optimize --strict $< -o $@

$(SUPPORT_FILES_FROM_PATEL) :
	$(PATEL) --optimize --strict $< -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
support/spirokit.js : support/spirokit.patel
support/spiroexpand.js : support/spiroexpand.patel
parameters.js : parameters.patel

cleanscripts : 
	-@rm $(SCRIPTS_FROM_PATEL)
scripts : $(SCRIPTS)