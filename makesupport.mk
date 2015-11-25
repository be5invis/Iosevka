SUPPORT_FILES = support/glyph.js support/stroke.js support/spiroexpand.js support/spirokit.js parameters.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
SCRIPTS = $(SUPPORT_FILES) buildglyphs.js

buildglyphs.js : buildglyphs.patel $(GLYPH_SEGMENTS)
	patel-c --optimize --strict $< -o $@

$(SUPPORT_FILES) :
	patel-c --strict $< -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
support/spirokit.js : support/spirokit.patel
support/spiroexpand.js : support/spiroexpand.patel
parameters.js : parameters.patel