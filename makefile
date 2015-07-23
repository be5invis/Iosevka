SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-capital.patel glyphs/latin-lower.patel glyphs/numbers.patel glyphs/ascii-symbols.patel glyphs/accented-letters.patel
OBJDIR = build

TARGETS = $(OBJDIR)/iosevka-regular.ttf $(OBJDIR)/iosevka-bold.ttf $(OBJDIR)/iosevka-italic.ttf $(OBJDIR)/iosevka-bolditalic.ttf
STEP0   = $(subst .ttf,.0.ttf,$(TARGETS))
STEP1   = $(subst .ttf,.1.ttf,$(TARGETS))

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(TARGETS)
	
$(OBJDIR)/iosevka-regular.0.ttf : $(FILES) $(OBJDIR)
	node generate regular $@
$(OBJDIR)/iosevka-bold.0.ttf : $(FILES) $(OBJDIR)
	node generate bold $@
$(OBJDIR)/iosevka-italic.0.ttf : $(FILES) $(OBJDIR)
	node generate italic $@
$(OBJDIR)/iosevka-bolditalic.0.ttf : $(FILES) $(OBJDIR)
	node generate bolditalic $@

$(STEP1) : %.1.ttf : %.0.ttf
	fontforge -script final.pe $< $@

$(TARGETS) : %.ttf : %.1.ttf
	ttfautohint $< $@

update : $(FILES)

$(SUPPORT_FILES) :
	patel-c $< -o $@ --strict

.buildglyphs.all.patel : buildglyphs-intro.patel $(GLYPH_SEGMENTS) buildglyphs-final.patel
	cat $^ > .buildglyphs.all.patel
buildglyphs.js : .buildglyphs.all.patel
	patel-c --strict $^ | uglifyjs -c -b -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
parameters.js : parameters.patel

$(OBJDIR) :
	@- mkdir $@

cleartemps :
	-rm $(STEP0)
	-rm $(STEP1)