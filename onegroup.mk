TARGETUPM = 1000

PREFIX = iosevka$(VARIANTNAME)

SUPPORT_FILES = support/glyph.js support/stroke.js support/spiroexpand.js parameters.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
OBJDIR = build
FILES = $(SUPPORT_FILES) buildglyphs.js

ifeq ($(OS),Windows_NT)
NODE = node.exe
else
NODE = node
endif

SUPPRESS_ERRORS = 2> /dev/null

UPRIGHT = $(OBJDIR)/$(PREFIX)-regular.ttf $(OBJDIR)/$(PREFIX)-bold.ttf
ITALIC  = $(OBJDIR)/$(PREFIX)-italic.ttf $(OBJDIR)/$(PREFIX)-bolditalic.ttf
TARGETS = $(UPRIGHT) $(ITALIC)
MAPS    = $(subst .ttf,.charmap,$(TARGETS))

FDTS    = $(subst .ttf,.fdt,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
PASS0   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
ABFEAT  = $(subst .ttf,.ab.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
FEATURE = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(UPRIGHT)))
FEATITA = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(ITALIC)))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
PASS2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))
PASS3   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass3-,$(TARGETS))
PASS4   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass4-,$(TARGETS))

fonts : update $(TARGETS)
fdts : $(FDTS)
	
# Pass 0 : file construction
$(OBJDIR)/.pass0-$(PREFIX)-regular.fdt : $(FILES) | $(OBJDIR)
	$(NODE) generate -o $@ iosevka $(STYLE_COMMON) w-book s-upright x-regular $(STYLE_UPRIGHT) $(STYLE_X_REGILAR)
$(OBJDIR)/.pass0-$(PREFIX)-bold.fdt : $(FILES) | $(OBJDIR)
	$(NODE) generate -o $@ iosevka $(STYLE_COMMON) w-bold s-upright x-bold $(STYLE_UPRIGHT) $(STYLE_X_BOLD)
$(OBJDIR)/.pass0-$(PREFIX)-italic.fdt : $(FILES) | $(OBJDIR)
	$(NODE) generate -o $@ iosevka $(STYLE_COMMON) w-book s-italic  x-italic $(STYLE_ITALIC) $(STYLE_X_ITALIC)
$(OBJDIR)/.pass0-$(PREFIX)-bolditalic.fdt : $(FILES) | $(OBJDIR)
	$(NODE) generate -o $@ iosevka $(STYLE_COMMON) w-bold s-italic  x-bolditalic $(STYLE_ITALIC) $(STYLE_X_BOLDITALIC)

$(PASS0) : $(OBJDIR)/.pass0-%.ttf : $(OBJDIR)/.pass0-%.fdt
	$(NODE) extract --upm 16000 --uprightify 1 --ttf $@ $<
$(ABFEAT) : $(OBJDIR)/.pass0-%.ab.fea : $(OBJDIR)/.pass0-%.fdt
	$(NODE) extract --feature $@ $<
$(MAPS) : $(OBJDIR)/%.charmap : $(OBJDIR)/.pass0-%.fdt
	$(NODE) extract --charmap $@ $<
$(FEATURE) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea features/uprightonly.fea
	cat $^ > $@
$(FEATITA) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea features/italiconly.fea
	cat $^ > $@


# Pass 1 : Outline cleanup and merge
$(PASS1) : $(OBJDIR)/.pass1-%.ttf : pass1-cleanup.py $(OBJDIR)/.pass0-%.ttf
	fontforge -quiet -script $^ $@ $(FAST) $(SUPPRESS_ERRORS)
$(PASS2) : $(OBJDIR)/.pass2-%.ttf : pass2-smartround.js $(OBJDIR)/.pass1-%.ttf
	$(NODE) $^ $@ --upm $(TARGETUPM)
$(PASS3) : $(OBJDIR)/.pass3-%.ttf : pass3-features.py $(OBJDIR)/.pass2-%.ttf $(OBJDIR)/.pass0-%.fea
	fontforge -quiet -script $^ $@ $(TARGETUPM)
$(PASS4) : $(OBJDIR)/.pass4-%.ttf : pass4-finalize.js $(OBJDIR)/.pass3-%.ttf
	@$(NODE) $^ $@.a.ttf
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

# releaseing
RELEASEDIR = releases
ARCHIVEDIR = release-archives

RELEASES = $(subst $(OBJDIR)/,$(RELEASEDIR)/,$(TARGETS))
$(RELEASES) : $(RELEASEDIR)/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
PAGESTTF = $(subst $(OBJDIR)/,pages/assets/,$(TARGETS))
$(PAGESTTF) : pages/assets/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
PAGESWOFF = $(subst .ttf,.woff,$(PAGESTTF))
$(PAGESWOFF) : pages/assets/%.woff : pages/assets/%.ttf
	sfnt2woff $<
PAGESMAPS = $(subst $(OBJDIR)/,pages/assets/,$(MAPS))
$(PAGESMAPS) : pages/assets/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@
$(ARCHIVEDIR)/$(PREFIX).tar.bz2 : $(TARGETS)
	cd $(OBJDIR) && tar -cjvf ../$@ $(subst $(OBJDIR)/,,$^)
$(ARCHIVEDIR)/$(PREFIX).zip : $(TARGETS)
	cd $(OBJDIR) && 7z a -tzip ../$@ $(subst $(OBJDIR)/,,$^)
archives : $(ARCHIVEDIR)/$(PREFIX).tar.bz2 $(ARCHIVEDIR)/$(PREFIX).zip
release : archives $(RELEASES) $(PAGESTTF) $(PAGESWOFF) $(PAGESMAPS)

# testdrive
TESTTTF = $(subst $(OBJDIR)/,testdrive/,$(TARGETS))
$(TESTTTF) : testdrive/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
TESTWOFF = $(subst .ttf,.woff,$(TESTTTF))
$(TESTWOFF) : testdrive/%.woff : testdrive/%.ttf
	sfnt2woff $<
TESTMAPS = $(subst $(OBJDIR)/,testdrive/,$(MAPS))
$(TESTMAPS) : testdrive/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@

test : $(TESTTTF) $(TESTWOFF) $(TESTMAPS)