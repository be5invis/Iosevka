SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/latin-capital.patel glyphs/latin-lower.patel glyphs/numbers.patel

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update codex-regular.ttf codex-bold.ttf codex-italic.ttf codex-bolditalic.ttf

codex-regular.ttf : $(FILES)
	node generate regular $@
codex-bold.ttf : $(FILES)
	node generate bold $@
codex-italic.ttf : $(FILES)
	node generate italic $@
codex-bolditalic.ttf : $(FILES)
	node generate bolditalic $@

update : $(FILES)

$(SUPPORT_FILES) :
	patel-c $< -o $@ --strict

buildglyphs.js : buildglyphs-intro.patel $(GLYPH_SEGMENTS) buildglyphs-final.patel
	cat $^ | patel-c --strict -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
parameters.js : parameters.patel