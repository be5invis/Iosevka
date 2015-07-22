SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/latin-capital.patel glyphs/latin-lower.patel glyphs/numbers.patel glyphs/ascii-symbols.patel
OBJDIR = build

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(OBJDIR)/iosevka-regular.ttf $(OBJDIR)/iosevka-bold.ttf $(OBJDIR)/iosevka-italic.ttf $(OBJDIR)/iosevka-bolditalic.ttf
	

$(OBJDIR)/iosevka-regular.ttf : $(FILES) $(OBJDIR)
	node generate regular $@
$(OBJDIR)/iosevka-bold.ttf : $(FILES) $(OBJDIR)
	node generate bold $@
$(OBJDIR)/iosevka-italic.ttf : $(FILES) $(OBJDIR)
	node generate italic $@
$(OBJDIR)/iosevka-bolditalic.ttf : $(FILES) $(OBJDIR)
	node generate bolditalic $@

update : $(FILES)

$(SUPPORT_FILES) :
	patel-c $< -o $@ --strict

buildglyphs.js : buildglyphs-intro.patel $(GLYPH_SEGMENTS) buildglyphs-final.patel
	cat $^ | patel-c --strict -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
parameters.js : parameters.patel

$(OBJDIR) :
	@- mkdir $@