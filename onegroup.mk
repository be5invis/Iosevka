default: fonts

TARGETUPM = 1000
include makesupport.mk
PREFIX = $(VARNAME)iosevka$(SUFFIX)
ARCPREFIXB = iosevka$(SUFFIX)

ifdef DONTHINT
HINT = cp
HINT_SUFFIX = --ignore-hints
else
HINT = ttfautohint --increase-x-height=0
endif

# Change this when an error reports
# On windows, maybe `2> NUL`.

ifeq ($(OS),Windows_NT)
SHELL = C:\\Windows\\System32\\cmd.exe
SUPPRESS_ERRORS = 2> NUL
PASS = @rem
MKDIR = mkdir.exe
else
SUPPRESS_ERRORS = 2> /dev/null
PASS = @:
MKDIR = mkdir
endif

DISTDIR = dist/$(ARCPREFIX)$(ARCPREFIXB)
$(DISTDIR) : dist
	@- $(MKDIR) $@

NODE_FDT = @node --expose-gc
NODE = node

UPRIGHT = $(OBJDIR)/$(PREFIX)-thin.ttf $(OBJDIR)/$(PREFIX)-extralight.ttf $(OBJDIR)/$(PREFIX)-light.ttf $(OBJDIR)/$(PREFIX)-regular.ttf $(OBJDIR)/$(PREFIX)-medium.ttf $(OBJDIR)/$(PREFIX)-bold.ttf $(OBJDIR)/$(PREFIX)-heavy.ttf
ITALIC  = $(OBJDIR)/$(PREFIX)-thinitalic.ttf $(OBJDIR)/$(PREFIX)-extralightitalic.ttf $(OBJDIR)/$(PREFIX)-lightitalic.ttf $(OBJDIR)/$(PREFIX)-italic.ttf $(OBJDIR)/$(PREFIX)-mediumitalic.ttf $(OBJDIR)/$(PREFIX)-bolditalic.ttf $(OBJDIR)/$(PREFIX)-heavyitalic.ttf
OBLIQUE = $(OBJDIR)/$(PREFIX)-thinoblique.ttf $(OBJDIR)/$(PREFIX)-extralightoblique.ttf $(OBJDIR)/$(PREFIX)-lightoblique.ttf $(OBJDIR)/$(PREFIX)-oblique.ttf $(OBJDIR)/$(PREFIX)-mediumoblique.ttf $(OBJDIR)/$(PREFIX)-boldoblique.ttf $(OBJDIR)/$(PREFIX)-heavyoblique.ttf
TARGETS = $(UPRIGHT) $(ITALIC) $(OBLIQUE)
MAPS    = $(if $(NOCHARMAP),,$(OBJDIR)/$(PREFIX)-regular.charmap)

FDTS    = $(subst .ttf,.fdt,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))
SVG0    = $(subst .ttf,.svg,$(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS)))

PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass0-,$(TARGETS))
PASS1   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass1-,$(TARGETS))
PASS2   = $(subst $(OBJDIR)/,$(OBJDIR)/.pass2-,$(TARGETS))

DISTTARGETS = $(subst $(OBJDIR)/,$(DISTDIR)/,$(TARGETS))

fonts : $(DISTTARGETS)
svgs : $(SVG0)

# Pass 0 : file construction
OUTPUTS = --meta $@ --svg $(subst .fdt,.svg,$@)
OUTPUT_CM = $(if $(NOCHARMAP),,--charmap $(subst .fdt,.charmap,$(subst $(OBJDIR)/.pass0-,$(OBJDIR)/,$@)))
$(OBJDIR)/.pass0-$(PREFIX)-thin.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-thin s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-extralight.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-extralight s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-light.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-light s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-regular.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-book s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) $(OUTPUT_CM)
$(OBJDIR)/.pass0-$(PREFIX)-medium.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-medium s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-bold.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-bold s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)
$(OBJDIR)/.pass0-$(PREFIX)-heavy.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-heavy s-upright $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS)

$(OBJDIR)/.pass0-$(PREFIX)-thinitalic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-thin s-italic $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-extralightitalic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-extralight s-italic $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-lightitalic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-light s-italic $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-italic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-book s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-mediumitalic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-medium s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-bolditalic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-bold s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-heavyitalic.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-heavy s-italic  $(STYLE_ITALIC) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1

$(OBJDIR)/.pass0-$(PREFIX)-thinoblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-thin s-oblique $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-extralightoblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-extralight s-oblique $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-lightoblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-light s-oblique $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-oblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-book s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-mediumoblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-medium s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-boldoblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-bold s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1
$(OBJDIR)/.pass0-$(PREFIX)-heavyoblique.fdt : $(SCRIPTS)  | $(OBJDIR) $(DISTDIR)
	$(NODE_FDT) generator iosevka $(STYLE_COMMON) w-heavy s-oblique  $(STYLE_UPRIGHT) $(STYLE_SUFFIX) $(OUTPUTS) --uprightify 1

$(SVG0) : $(OBJDIR)/.pass0-%.svg : $(OBJDIR)/.pass0-%.fdt
	$(PASS)
$(MAPS) : $(OBJDIR)/%.charmap : $(OBJDIR)/.pass0-%.fdt
	$(PASS)

# Pass 1 : Outline cleanup and merge features
$(PASS1) : $(OBJDIR)/.pass1-%.ttf : pass1-cleanup.py $(OBJDIR)/.pass0-%.svg
	@fontforge -quiet -script $^ $@.a.ttf $(if $(findstring italic,$@),10,$(if $(findstring oblique,$@),10,0)) $(FAST) $(SUPPRESS_ERRORS)
	@$(HINT) $@.a.ttf $@
	@-rm $@.a.ttf
# Pass 2 : add metadata
# IDKY, but converting into TTX and convert back dramatically reduces the file size
$(TARGETS) : $(OBJDIR)/%.ttf : pass2-finalize.js $(OBJDIR)/.pass1-%.ttf $(OBJDIR)/.pass0-%.fdt
	@otfccdump $(word 2,$^) | $(NODE) $< $(word 3,$^) | otfccbuild -o $@ --ignore-glyph-order --keep-average-char-width --dummy-dsig --short-post $(HINT_SUFFIX)

$(DISTTARGETS) : $(DISTDIR)/%.ttf : $(OBJDIR)/%.ttf
	@cp $< $@

# releaseing
ARCHIVEDIR = release-archives

PAGEDIR = pages/assets
PAGESTTF = $(subst $(DISTDIR)/,$(PAGEDIR)/,$(DISTTARGETS))
$(PAGESTTF) : $(PAGEDIR)/%.ttf : $(DISTDIR)/%.ttf
	cp $< $@
PAGESWOFF = $(subst .ttf,.woff,$(PAGESTTF))
$(PAGESWOFF) : $(PAGEDIR)/%.woff : $(PAGEDIR)/%.ttf
	sfnt2woff $<
PAGESWOFF2 = $(subst .ttf,.woff2,$(PAGESTTF))
$(PAGESWOFF2) : $(PAGEDIR)/%.woff2 : $(PAGEDIR)/%.ttf
	woff2_compress $<
PAGESMAPS = $(subst $(OBJDIR)/,$(PAGEDIR)/,$(MAPS))
$(PAGESMAPS) : $(PAGEDIR)/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@

WEBFONTDIR = dist/webfonts/assets
WEBFONTSTTF = $(subst $(DISTDIR)/,$(WEBFONTDIR)/,$(DISTTARGETS))
$(WEBFONTSTTF) : $(WEBFONTDIR)/%.ttf : $(DISTDIR)/%.ttf
	cp $< $@
WEBFONTSWOFF = $(subst .ttf,.woff,$(WEBFONTSTTF))
$(WEBFONTSWOFF) : $(WEBFONTDIR)/%.woff : $(WEBFONTDIR)/%.ttf
	sfnt2woff $<
WEBFONTSWOFF2 = $(subst .ttf,.woff2,$(WEBFONTSTTF))
$(WEBFONTSWOFF2) : $(WEBFONTDIR)/%.woff2 : $(WEBFONTDIR)/%.ttf
	woff2_compress $<
WEBFONTCSS = dist/webfonts/$(ARCPREFIX)$(ARCPREFIXB).css
$(WEBFONTCSS) : webfont-csses/$(ARCPREFIX)$(ARCPREFIXB).css
	cp $< $@

#$(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).tar.bz2 : $(DISTTARGETS)
#	cd $(DISTDIR) && tar -cjvf ../$@ $(subst $(DISTDIR)/,,$^)
$(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).zip : $(DISTTARGETS)
	cd $(DISTDIR) && 7z a -tzip -mx=9 ../../$@ ./*.ttf
$(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).7z : $(DISTTARGETS)
	cd $(DISTDIR) && 7z a -t7z -mmt=on -m0=LZMA:a=1:d=1536m:fb=256 ../../$@ ./*.ttf

#archives : $(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).tar.bz2 $(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).zip
archives : $(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).zip $(ARCHIVEDIR)/$(ARCPREFIX)$(ARCPREFIXB)-$(VERSION).7z
pages : $(PAGESTTF) $(PAGESWOFF) $(PAGESWOFF2) $(PAGESMAPS)
webfonts : $(WEBFONTSTTF) $(WEBFONTSWOFF) $(WEBFONTSWOFF2) $(WEBFONTCSS)

SNAPSHOT_ASSETS = $(subst dist/webfonts/,snapshot/,$(WEBFONTSTTF) $(WEBFONTSWOFF) $(WEBFONTSWOFF2) $(WEBFONTCSS))
$(SNAPSHOT_ASSETS) : snapshot/% : dist/webfonts/%
	cp $< $@
snapshot: $(SNAPSHOT_ASSETS)

# testdrive
TESTDIR = testdrive/assets
TESTTTF = $(subst $(DISTDIR)/,$(TESTDIR)/,$(DISTTARGETS))
$(TESTTTF) : $(TESTDIR)/%.ttf : $(DISTDIR)/%.ttf
	cp $< $@
TESTMAPS = $(subst $(OBJDIR)/,$(TESTDIR)/,$(MAPS))
$(TESTMAPS) : $(TESTDIR)/%.charmap : $(OBJDIR)/%.charmap
	cp $< $@

test : $(TESTTTF) $(TESTMAPS)