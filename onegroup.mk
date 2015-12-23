default: fonts

TARGETUPM = 1000
include makesupport.mk
PREFIX = $(VARIANTNAME)iosevka$(SUFFIX)
ARCPREFIXB = iosevka$(SUFFIX)

# Change this when an error reports
# On windows, maybe `2> NUL`.

ifeq ($(OS),Windows_NT)
SHELL = C:\\Windows\\System32\\cmd.exe
SUPPRESS_ERRORS = 2> NUL
PASS = @rem
else
SUPPRESS_ERRORS = 2> /dev/null
PASS = @:
endif

NODE_FDT = @node --expose-gc
NODE = node

UPRIGHT = $(OBJDIR)/$(PREFIX)-thin.ttf $(OBJDIR)/$(PREFIX)-extralight.ttf $(OBJDIR)/$(PREFIX)-light.ttf $(OBJDIR)/$(PREFIX)-regular.ttf $(OBJDIR)/$(PREFIX)-medium.ttf $(OBJDIR)/$(PREFIX)-bold.ttf $(OBJDIR)/$(PREFIX)-heavy.ttf
ITALIC  = $(OBJDIR)/$(PREFIX)-thinitalic.ttf $(OBJDIR)/$(PREFIX)-extralightitalic.ttf $(OBJDIR)/$(PREFIX)-lightitalic.ttf $(OBJDIR)/$(PREFIX)-italic.ttf $(OBJDIR)/$(PREFIX)-mediumitalic.ttf $(OBJDIR)/$(PREFIX)-bolditalic.ttf $(OBJDIR)/$(PREFIX)-heavyitalic.ttf
OBLIQUE = $(OBJDIR)/$(PREFIX)-thinoblique.ttf $(OBJDIR)/$(PREFIX)-extralightoblique.ttf $(OBJDIR)/$(PREFIX)-lightoblique.ttf $(OBJDIR)/$(PREFIX)-oblique.ttf $(OBJDIR)/$(PREFIX)-mediumoblique.ttf $(OBJDIR)/$(PREFIX)-boldoblique.ttf $(OBJDIR)/$(PREFIX)-heavyoblique.ttf
TARGETS = $(UPRIGHT) $(ITALIC) $(OBLIQUE)
MAPS    = $(subst .ttf,.charmap,$(TARGETS))


FDTS    = $(subst .ttf,.fdt,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
SVG0    = $(subst .ttf,.svg,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))

ABFEAT  = $(subst .ttf,.ab.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
FEATURE = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(UPRIGHT) $(OBLIQUE)))
FEATITA = $(subst .ttf,.fea,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(ITALIC)))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
PASS2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))

DISTTARGETS = $(subst $(OBJDIR)/,$(DISTDIR)/,$(TARGETS))

fonts : $(DISTTARGETS)
svgs : $(SVG0)

	
# Pass 0 : file construction
OUTPUTS = --meta $@ --feature $(subst .fdt,.ab.fea,$@) --svg $(subst .fdt,.svg,$@) --charmap $(subst .fdt,.charmap,$(subst $(OBJDIR)/.pass0-,$(OBJDIR)/,$@))
$(OBJDIR)/.pass0-$(PREFIX)-thin.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-thin s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-extralight.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-extralight s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-light.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-light s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-regular.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-book s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-medium.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-medium s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-bold.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-bold s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-heavy.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-heavy s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)

$(OBJDIR)/.pass0-$(PREFIX)-thinitalic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-thin s-italic $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-extralightitalic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-extralight s-italic $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-lightitalic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-light s-italic $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-italic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-book s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-mediumitalic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-medium s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-bolditalic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-bold s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-heavyitalic.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-heavy s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1

$(OBJDIR)/.pass0-$(PREFIX)-thinoblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-thin s-oblique $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-extralightoblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-extralight s-oblique $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-lightoblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-light s-oblique $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-oblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-book s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-mediumoblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-medium s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-boldoblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-bold s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-heavyoblique.fdt : $(SCRIPTS) | $(OBJDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-heavy s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1

$(SVG0) : $(OBJDIR)/.pass0-%.svg : $(OBJDIR)/.pass0-%.fdt
	$(PASS)
$(ABFEAT) : $(OBJDIR)/.pass0-%.ab.fea : $(OBJDIR)/.pass0-%.fdt
	$(PASS)
$(MAPS) : $(OBJDIR)/%.charmap : $(OBJDIR)/.pass0-%.fdt
	$(PASS)
$(FEATURE) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea features/uprightonly.fea
	@cat $^ > $@
$(FEATITA) : $(OBJDIR)/.pass0-%.fea : $(OBJDIR)/.pass0-%.ab.fea features/common.fea features/italiconly.fea
	@cat $^ > $@


# Pass 1 : Outline cleanup and merge features
$(PASS1) : $(OBJDIR)/.pass1-%.ttf : pass1-cleanup.py $(OBJDIR)/.pass0-%.svg $(OBJDIR)/.pass0-%.fea
	@fontforge -quiet -script $^ $@ $(if $(findstring italic,$@),10,$(if $(findstring oblique,$@),10,0)) $(FAST) $(SUPPRESS_ERRORS)
# Pass 2 : add metadata
# IDKY, but converting into TTX and convert back dramatically reduces the file size
$(PASS2) : $(OBJDIR)/.pass2-%.ttf : pass2-finalize.js $(OBJDIR)/.pass1-%.ttf $(OBJDIR)/.pass0-%.fdt
	@$(NODE) $^ -o $@.a.ttf
	@ttx -q -o $@.a.ttx $@.a.ttf $(SUPPRESS_ERRORS)
	@ttx -q -o $@ $@.a.ttx $(SUPPRESS_ERRORS)
	@rm $@.a.ttf $@.a.ttx
$(TARGETS) : $(OBJDIR)/%.ttf : $(OBJDIR)/.pass2-%.ttf
	@ttfautohint $< $@

$(DISTTARGETS) : $(DISTDIR)/%.ttf : $(OBJDIR)/%.ttf
	@cp $< $@

# releaseing
RELEASEDIR = releases
ARCHIVEDIR = release-archives

RELEASES = $(subst $(OBJDIR)/,$(RELEASEDIR)/,$(TARGETS))
$(RELEASES) : $(RELEASEDIR)/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@

PAGEDIR = pages/assets
PAGESTTF = $(subst $(OBJDIR)/,$(PAGEDIR)/,$(TARGETS))
$(PAGESTTF) : $(PAGEDIR)/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
PAGESWOFF = $(subst .ttf,.woff,$(PAGESTTF))
$(PAGESWOFF) : $(PAGEDIR)/%.woff : $(PAGEDIR)/%.ttf
	sfnt2woff $<
PAGESMAPS = $(subst $(OBJDIR)/,$(PAGEDIR)/,$(MAPS))
$(PAGESMAPS) : $(PAGEDIR)/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@

$(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).tar.bz2 : $(TARGETS)
	cd $(OBJDIR) && tar -cjvf ../$@ $(subst $(OBJDIR)/,,$^)
$(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).zip : $(TARGETS)
	cd $(OBJDIR) && 7z a -tzip ../$@ $(subst $(OBJDIR)/,,$^)

archives : $(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).tar.bz2 $(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).zip
pages : $(PAGESTTF) $(PAGESWOFF) $(PAGESMAPS)
release : $(RELEASES) archives pages

# testdrive
TESTDIR = testdrive/assets
TESTTTF = $(subst $(OBJDIR)/,$(TESTDIR)/,$(TARGETS))
$(TESTTTF) : $(TESTDIR)/%.ttf : $(OBJDIR)/%.ttf
	cp $< $@
TESTWOFF = $(subst .ttf,.woff,$(TESTTTF))
$(TESTWOFF) : $(TESTDIR)/%.woff : $(TESTDIR)/%.ttf
	sfnt2woff $<
OUTMAPS    = $(subst .ttf,.charmap,$(TARGETS))
TESTMAPS = $(subst $(OBJDIR)/,$(TESTDIR)/,$(OUTMAPS))
$(TESTMAPS) : $(TESTDIR)/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@

test : $(TESTTTF) $(TESTWOFF) $(TESTMAPS)