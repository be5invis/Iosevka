###################################################################################################
# Support Files
# DO NOT CHANGE

PATELC = node ./node_modules/patel/bin/patel-c

GLYPH_SEGMENTS = glyphs/common-shapes.js glyphs/overmarks.js glyphs/letters-unified-basic.js glyphs/letters-unified-extended.js glyphs/numbers.js glyphs/symbol-punctuation.js glyphs/symbol-math.js glyphs/symbol-letter.js glyphs/symbol-geometric.js glyphs/symbol-other.js glyphs/symbol-braille.js glyphs/autobuilds.js buildglyphs.js
SUPPORT_FILES_FROM_PTL = support/glyph.js support/spiroexpand.js support/spirokit.js support/parameters.js support/anchor.js support/point.js support/transform.js support/utils.js meta/aesthetics.js meta/naming.js meta/features.js meta/feature/ligation.js meta/feature/opbd.js meta/feature/ccmp.js
SUPPORT_FILES_JS = generator.js emptyfont.toml parameters.toml variants.toml support/fairify.js support/autoref.js
SUPPORT_FILES = $(SUPPORT_FILES_FROM_PTL) $(SUPPORT_FILES_JS)
SCRIPTS = $(SUPPORT_FILES) $(GLYPH_SEGMENTS) remap-latin.js
SCRIPTS_FROM_PTL = $(SUPPORT_FILES_FROM_PTL) $(GLYPH_SEGMENTS)

$(SUPPORT_FILES_FROM_PTL) : %.js : %.ptl meta/macros.ptl
	$(PATELC) --optimize --strict $< -o $@
$(GLYPH_SEGMENTS) : %.js : %.ptl meta/macros.ptl $(SUPPORT_FILES_FROM_PTL) $(SUPPORT_FILES_JS)
	$(PATELC) --optimize --strict $< -o $@

cleanscripts :
	-@rm $(SCRIPTS_FROM_PTL)
scripts : $(SCRIPTS)
