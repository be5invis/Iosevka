TARGETUPM = 1000

PREFIX = iosevka$(VARIANTNAME)
PREFIXCC = iosevkacc$(VARIANTNAME)

SUPPORT_FILES = support/glyph.js support/stroke.js support/spiroexpand.js parameters.js extract.js generate.js emptyfont.toml parameters.toml
GLYPH_SEGMENTS = glyphs/common-shapes.patel glyphs/overmarks.patel glyphs/latin-basic-capital.patel glyphs/latin-basic-lower.patel glyphs/greek.patel glyphs/cyrillic-basic.patel glyphs/latin-extend-basis.patel glyphs/latin-extend-decorated.patel glyphs/cyrillic-extended.patel glyphs/numbers.patel glyphs/symbol-ascii.patel glyphs/symbol-punctuation.patel glyphs/symbol-math.patel glyphs/symbol-geometric.patel glyphs/symbol-other.patel glyphs/symbol-letter.patel glyphs/autobuilds.patel
OBJDIR = build

SUPPRESS_ERRORS = 2> /dev/null

UPRIGHT = $(OBJDIR)/$(PREFIX)-regular.ttf $(OBJDIR)/$(PREFIX)-bold.ttf $(OBJDIR)/$(PREFIXCC)-regular.ttf $(OBJDIR)/$(PREFIXCC)-bold.ttf
ITALIC  = $(OBJDIR)/$(PREFIX)-italic.ttf $(OBJDIR)/$(PREFIX)-bolditalic.ttf $(OBJDIR)/$(PREFIXCC)-italic.ttf $(OBJDIR)/$(PREFIXCC)-bolditalic.ttf
TARGETS = $(UPRIGHT) $(ITALIC)
MAPS    = $(subst .ttf,.charmap,$(TARGETS))
OTFS    = $(subst .ttf,.otf,$(TARGETS))
PASS0   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
ABFEAT  = $(subst .ttf,.ab.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
FEATURE = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(UPRIGHT)))
FEATITA = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(ITALIC)))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
PASS2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))
PASS3   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass3-,$(TARGETS))
PASS4   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass4-,$(TARGETS))

FILES = $(SUPPORT_FILES) buildglyphs.js

fonts : update $(TARGETS)
	
# Pass 0 : file construction
$(OBJDIR)/.pass0-$(PREFIX)-regular.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka		w-book	s-upright	x-regular $(STYLE_COMMON) $(STYLE_UPRIGHT)
$(OBJDIR)/.pass0-$(PREFIX)-bold.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka		w-bold	s-upright	x-bold $(STYLE_COMMON) $(STYLE_UPRIGHT)
$(OBJDIR)/.pass0-$(PREFIX)-italic.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka		w-book	s-italic	x-italic $(STYLE_COMMON) $(STYLE_ITALIC)
$(OBJDIR)/.pass0-$(PREFIX)-bolditalic.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka		w-bold	s-italic	x-bolditalic $(STYLE_COMMON) $(STYLE_ITALIC)
$(OBJDIR)/.pass0-$(PREFIXCC)-regular.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka cc	w-book	s-upright	x-regular $(STYLE_COMMON) $(STYLE_UPRIGHT)
$(OBJDIR)/.pass0-$(PREFIXCC)-bold.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka cc	w-bold	s-upright	x-bold $(STYLE_COMMON) $(STYLE_UPRIGHT)
$(OBJDIR)/.pass0-$(PREFIXCC)-italic.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka cc	w-book	s-italic	x-italic $(STYLE_COMMON) $(STYLE_ITALIC)
$(OBJDIR)/.pass0-$(PREFIXCC)-bolditalic.fdt : $(FILES) | $(OBJDIR)
	node generate -o $@		 iosevka cc	w-bold	s-italic	x-bolditalic $(STYLE_COMMON) $(STYLE_ITALIC)

$(PASS0) : $(OBJDIR)/.pass0-%.ttf : $(OBJDIR)/.pass0-%.fdt
	node extract --upm 16000 --uprightify 1 --ttf $@ $<
$(ABFEAT) : $(OBJDIR)/.pass0-%.ab.fea : $(OBJDIR)/.pass0-%.fdt
	node extract --feature $@ $<
$(MAPS) : $(OBJDIR)/%.charmap : $(OBJDIR)/.pass0-%.fdt
	node extract --charmap $@ $<
$(FEATURE) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea features/uprightonly.fea
	cat $^ > $@
$(FEATITA) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea features/italiconly.fea
	cat $^ > $@


# Pass 1 : Outline cleanup and merge
$(PASS1) : $(OBJDIR)/.pass1-%.ttf : pass1-cleanup.py $(OBJDIR)/.pass0-%.ttf
	fontforge -quiet -script $^ $@ $(FAST) $(SUPPRESS_ERRORS)
$(PASS2) : $(OBJDIR)/.pass2-%.ttf : pass2-smartround.js $(OBJDIR)/.pass1-%.ttf
	node $^ $@ --upm $(TARGETUPM)
$(PASS3) : $(OBJDIR)/.pass3-%.ttf : pass3-features.py $(OBJDIR)/.pass2-%.ttf $(OBJDIR)/.pass0-%.fea
	fontforge -quiet -script $^ $@ $(TARGETUPM)
$(PASS4) : $(OBJDIR)/.pass4-%.ttf : pass4-finalize.js $(OBJDIR)/.pass3-%.ttf
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

test : $(TARGETS) $(MAPS)
	cp $(TARGETS) $(MAPS) testdrive/

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

# release all variants
release-normal : $(FILES) | $(OBJDIR)
	$(MAKE) release
release-hooky : $(FILES) | $(OBJDIR)
	$(MAKE) archives VARIANTNAME=-hooky STYLE_UPRIGHT='v-l-hooky v-i-hooky'
release-zshaped : $(FILES) | $(OBJDIR)
	$(MAKE) archives VARIANTNAME=-zshaped STYLE_UPRIGHT='v-l-zshaped v-i-zshaped'
release-all : release-normal release-hooky release-zshaped