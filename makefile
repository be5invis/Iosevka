SUPPORT_FILES = support/glyph.js support/stroke.js parameters.js generate.js empty.json
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
OBJDIR = build

SUPPRESS_ERRORS = 2> /dev/null

TARGETS = $(OBJDIR)/iosevka-regular.ttf $(OBJDIR)/iosevka-bold.ttf $(OBJDIR)/iosevka-italic.ttf $(OBJDIR)/iosevka-bolditalic.ttf
MAPS    = $(subst .ttf,.charmap,$(TARGETS))
PASS0   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
ABFEAT  = $(subst .ttf,.ab.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
FEATURE = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
PASS2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(TARGETS)
	

# Pass 0 : file construction
$(OBJDIR)/.pass0-iosevka-regular.ttf : $(FILES) | $(OBJDIR)
	node generate regular $@ --dumpmap $(OBJDIR)/iosevka-regular.charmap --dumpfeature $(OBJDIR)/.pass0-iosevka-regular.ab.fea
$(OBJDIR)/.pass0-iosevka-bold.ttf : $(FILES) | $(OBJDIR)
	node generate bold $@ --dumpmap $(OBJDIR)/iosevka-bold.charmap --dumpfeature $(OBJDIR)/.pass0-iosevka-bold.ab.fea
$(OBJDIR)/.pass0-iosevka-italic.ttf : $(FILES) | $(OBJDIR)
	node generate italic $@ --dumpmap $(OBJDIR)/iosevka-italic.charmap --dumpfeature $(OBJDIR)/.pass0-iosevka-italic.ab.fea
$(OBJDIR)/.pass0-iosevka-bolditalic.ttf : $(FILES) | $(OBJDIR)
	node generate bolditalic $@ --dumpmap $(OBJDIR)/iosevka-bolditalic.charmap --dumpfeature $(OBJDIR)/.pass0-iosevka-bolditalic.ab.fea

$(ABFEAT) : $(OBJDIR)/.pass0-%.ab.fea : $(OBJDIR)/.pass0-%.ttf
	-@echo Autobuild feature $@ from $<
$(FEATURE) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea
	cat $^ > $@

# Pass 1 : Outline cleanup and merge
$(PASS1) : $(OBJDIR)/.pass1-%.ttf : $(OBJDIR)/.pass0-%.ttf $(OBJDIR)/.pass0-%.fea
	fontforge -script pass1-cleanup.py $^ $@ $(SUPPRESS_ERRORS)
# Pass 2 : Curve simplification
$(PASS2) : $(OBJDIR)/.pass2-%.ttf : $(OBJDIR)/.pass1-%.ttf
	fontforge -script pass2-finalize.py $^ $@
# Pass 3 : Simplify and output
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
	-rm $(PASS0) $(PASS1)

test : $(TARGETS)
	cp $(TARGETS) $(MAPS) testdrive/