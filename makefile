TARGETUPM = 1000

SUPPORT_FILES = support/glyph.js support/stroke.js support/spiroexpand.js parameters.js generate.js emptyfont.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
OBJDIR = build

SUPPRESS_ERRORS = 2> /dev/null

TARGETS = $(OBJDIR)/iosevka-regular.ttf $(OBJDIR)/iosevka-bold.ttf $(OBJDIR)/iosevka-italic.ttf $(OBJDIR)/iosevka-bolditalic.ttf $(OBJDIR)/iosevkacc-regular.ttf $(OBJDIR)/iosevkacc-bold.ttf $(OBJDIR)/iosevkacc-italic.ttf $(OBJDIR)/iosevkacc-bolditalic.ttf
MAPS    = $(subst .ttf,.charmap,$(TARGETS))
OTFS    = $(subst .ttf,.otf,$(TARGETS))
PASS0   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
ABFEAT  = $(subst .ttf,.ab.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
FEATURE = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
PASS2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))
PASS3   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass3-,$(TARGETS))
PASS4   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass4-,$(TARGETS))

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
$(OBJDIR)/.pass0-iosevkacc-regular.ttf : $(FILES) | $(OBJDIR)
	node generate regularCC $@ --dumpmap $(OBJDIR)/iosevkacc-regular.charmap --dumpfeature $(OBJDIR)/.pass0-iosevkacc-regular.ab.fea
$(OBJDIR)/.pass0-iosevkacc-bold.ttf : $(FILES) | $(OBJDIR)
	node generate boldCC $@ --dumpmap $(OBJDIR)/iosevkacc-bold.charmap --dumpfeature $(OBJDIR)/.pass0-iosevkacc-bold.ab.fea
$(OBJDIR)/.pass0-iosevkacc-italic.ttf : $(FILES) | $(OBJDIR)
	node generate italicCC $@ --dumpmap $(OBJDIR)/iosevkacc-italic.charmap --dumpfeature $(OBJDIR)/.pass0-iosevkacc-italic.ab.fea
$(OBJDIR)/.pass0-iosevkacc-bolditalic.ttf : $(FILES) | $(OBJDIR)
	node generate bolditalicCC $@ --dumpmap $(OBJDIR)/iosevkacc-bolditalic.charmap --dumpfeature $(OBJDIR)/.pass0-iosevkacc-bolditalic.ab.fea

$(ABFEAT) : $(OBJDIR)/.pass0-%.ab.fea : $(OBJDIR)/.pass0-%.ttf
	-@echo Autobuild feature $@ from $<
$(FEATURE) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea
	cat $^ > $@

# Pass 1 : Outline cleanup and merge
$(PASS1) : $(OBJDIR)/.pass1-%.ttf : pass1-cleanup.py $(OBJDIR)/.pass0-%.ttf $(OBJDIR)/.pass0-%.fea
	fontforge -quiet -script $^ $@ $(SUPPRESS_ERRORS)
$(PASS2) : $(OBJDIR)/.pass2-%.ttf : pass2-smartround.js $(OBJDIR)/.pass1-%.ttf
	node $^ $@ --upm $(TARGETUPM)
$(PASS3) : $(OBJDIR)/.pass3-%.ttf : pass3-finalize.py $(OBJDIR)/.pass2-%.ttf
	fontforge -quiet -script $^ $@ $(TARGETUPM)
$(PASS4) : $(OBJDIR)/.pass4-%.ttf : pass4-fixmeta.js $(OBJDIR)/.pass3-%.ttf
	@node $^ $@.a.ttf
	@ttx -o $@.a.ttx $@.a.ttf
	@ttx -o $@ $@.a.ttx
	@rm $@.a.ttf $@.a.ttx
$(TARGETS) : $(OBJDIR)/%.ttf : $(OBJDIR)/.pass4-%.ttf
	ttfautohint $< $@

update : $(FILES)

$(SUPPORT_FILES) :
	patel-c --strict $< -o $@

buildglyphs.js : buildglyphs.patel $(GLYPH_SEGMENTS)
	patel-c --strict $< -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel
support/spiroexpand.js : support/spiroexpand.patel
parameters.js : parameters.patel

$(OBJDIR) :
	@- mkdir $@

cleartemps :
	-rm $(PASS0) $(PASS1)
pass0 : $(PASS0)

test : $(TARGETS)
	cp $(TARGETS) $(MAPS) testdrive/

# releaseing
RELEASES = $(subst $(OBJDIR)/,releases/,$(TARGETS))
$(RELEASES) : releases/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
PAGESTTF = $(subst $(OBJDIR)/,pages/,$(TARGETS))
$(PAGESTTF) : pages/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
PAGESWOFF = $(subst .ttf,.woff,$(PAGESTTF))
$(PAGESWOFF) : pages/%.woff : pages/%.ttf
	sfnt2woff $<
PAGESMAPS = $(subst $(OBJDIR)/,pages/,$(MAPS))
$(PAGESMAPS) : pages/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@
release : $(RELEASES) $(PAGESTTF) $(PAGESWOFF)