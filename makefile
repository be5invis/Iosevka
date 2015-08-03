SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-extend.patel glyphs/symbol-geometric.patel glyphs/autobuilds.patel
OBJDIR = build

SUPPRESS_ERRORS = 2> /dev/null

TARGETS = $(OBJDIR)/iosevka-regular.ttf $(OBJDIR)/iosevka-bold.ttf $(OBJDIR)/iosevka-italic.ttf $(OBJDIR)/iosevka-bolditalic.ttf
MAPS    = $(subst .ttf,.charmap,$(TARGETS))
STEP0   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
STEP1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
STEP2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(TARGETS)
	
$(OBJDIR)/.pass0-iosevka-regular.ttf : $(FILES) $(OBJDIR)
	node generate regular $@ --dumpmap $(OBJDIR)/iosevka-regular.charmap
$(OBJDIR)/.pass0-iosevka-bold.ttf : $(FILES) $(OBJDIR)
	node generate bold $@ --dumpmap $(OBJDIR)/iosevka-bold.charmap
$(OBJDIR)/.pass0-iosevka-italic.ttf : $(FILES) $(OBJDIR)
	node generate italic $@ --dumpmap $(OBJDIR)/iosevka-italic.charmap
$(OBJDIR)/.pass0-iosevka-bolditalic.ttf : $(FILES) $(OBJDIR)
	node generate bolditalic $@ --dumpmap $(OBJDIR)/iosevka-bolditalic.charmap

# $(STEP1) : $(OBJDIR)/.pass1-%.ttf : $(OBJDIR)/.pass0-%.ttf
# 	fontforge -script pass1-cleanup.pe $< $@ $(SUPPRESS_ERRORS)
$(STEP2) : $(OBJDIR)/.pass2-%.ttf : $(OBJDIR)/.pass0-%.ttf
	fontforge -script pass2-cleanup.pe $< $@ $(SUPPRESS_ERRORS)
$(TARGETS) : $(OBJDIR)/%.ttf : $(OBJDIR)/.pass2-%.ttf
	ttfautohint $< $@

update : $(FILES)

$(SUPPORT_FILES) :
	patel-c $< -o $@ --strict

buildglyphs.js : buildglyphs.patel $(GLYPH_SEGMENTS)
	patel-c --strict $< -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
parameters.js : parameters.patel

$(OBJDIR) :
	@- mkdir $@

cleartemps :
	-rm $(STEP0)
	-rm $(STEP1)
