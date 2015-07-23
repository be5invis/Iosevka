SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-capital.patel glyphs/latin-lower.patel glyphs/numbers.patel glyphs/ascii-symbols.patel glyphs/accented-letters.patel
OBJDIR = build

TARGETS = $(OBJDIR)/iosevka-regular.ttf $(OBJDIR)/iosevka-bold.ttf $(OBJDIR)/iosevka-italic.ttf $(OBJDIR)/iosevka-bolditalic.ttf
STEP0   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
STEP1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(TARGETS)
	
$(OBJDIR)/.pass0-iosevka-regular.ttf : $(FILES) $(OBJDIR)
	node generate regular $@
$(OBJDIR)/.pass0-iosevka-bold.ttf : $(FILES) $(OBJDIR)
	node generate bold $@
$(OBJDIR)/.pass0-iosevka-italic.ttf : $(FILES) $(OBJDIR)
	node generate italic $@
$(OBJDIR)/.pass0-iosevka-bolditalic.ttf : $(FILES) $(OBJDIR)
	node generate bolditalic $@

$(STEP1) : $(OBJDIR)/.pass1-%.ttf : $(OBJDIR)/.pass0-%.ttf
	fontforge -script final.pe $< $@

$(TARGETS) : $(OBJDIR)/%.ttf : $(OBJDIR)/.pass1-%.ttf
	ttfautohint $< $@

update : $(FILES)

$(SUPPORT_FILES) :
	patel-c $< -o $@ --strict

.buildglyphs.all.patel : buildglyphs-intro.patel $(GLYPH_SEGMENTS) buildglyphs-final.patel
	cat $^ > .buildglyphs.all.patel
buildglyphs.js : .buildglyphs.all.patel
	patel-c --strict $^ -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
parameters.js : parameters.patel

$(OBJDIR) :
	@- mkdir $@

cleartemps :
	-rm $(STEP0)
	-rm $(STEP1)