SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/latin-capital.patel glyphs/latin-lower.patel glyphs/numbers.patel
OBJDIR = build

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(OBJDIR)/codexHW-regular.ttf $(OBJDIR)/codexHW-bold.ttf $(OBJDIR)/codexHW-italic.ttf $(OBJDIR)/codexHW-bolditalic.ttf
	

$(OBJDIR)/codexHW-regular.ttf : $(FILES) $(OBJDIR)
	node generate regular $@
$(OBJDIR)/codexHW-bold.ttf : $(FILES) $(OBJDIR)
	node generate bold $@
$(OBJDIR)/codexHW-italic.ttf : $(FILES) $(OBJDIR)
	node generate italic $@
$(OBJDIR)/codexHW-bolditalic.ttf : $(FILES) $(OBJDIR)
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