default: fonts

include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='$(SUFFIX)' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='$(SUFFIX)-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_SUFFIX='slab' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
LOOPS = 0 1 2

svgs : svgs-default svgs-slab
fonts : fonts-default fonts-slab
test  : test-default test-slab
pages : pages-default pages-slab
release : release-default release-slab
	

# svgs
svgs-default : $(SCRIPTS) | $(OBJDIR) $(DISTDIR)
	@$(MAKE) -f onegroup.mk svgs $(PARAM_DEFAULT)
svgs-slab : $(SCRIPTS) | $(OBJDIR) $(DISTDIR)
	@$(MAKE) -f onegroup.mk svgs $(PARAM_SLAB)


# ttfs
fonts-default : $(SCRIPTS) | $(OBJDIR) $(DISTDIR)
	@$(MAKE) -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : $(SCRIPTS) | $(OBJDIR) $(DISTDIR)
	@$(MAKE) -f onegroup.mk fonts $(PARAM_SLAB)


### USED FOR TESTING AND RELEASING
### DO NOT TOUCH!
# testdrive
test-default : fonts-default
	@$(MAKE) -f onegroup.mk test $(PARAM_DEFAULT)
test-slab : fonts-slab
	@$(MAKE) -f onegroup.mk test $(PARAM_SLAB)

# Pages
pages-default : fonts-default
	@$(MAKE) -f onegroup.mk pages $(PARAM_DEFAULT)
pages-slab : fonts-slab
	@$(MAKE) -f onegroup.mk pages $(PARAM_SLAB)

# Release
release-default : fonts-default
	@$(MAKE) -f onegroup.mk release $(PARAM_DEFAULT)
release-slab : fonts-slab
	@$(MAKE) -f onegroup.mk release $(PARAM_SLAB)

# Archives
archives-default : fonts-default
	@$(MAKE) -f onegroup.mk archives $(PARAM_DEFAULT)
archives-slab : fonts-slab
	@$(MAKE) -f onegroup.mk archives $(PARAM_SLAB)

# Variant releases
releasepack-default : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) pages release VERSION=$(VERSION)
fonts-fw : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='withfw-'
fonts-cc : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='withfw-cc-'
releasepack-fw : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='withfw-'
releasepack-cc : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='withfw-cc-'
fonts-hooky : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) fonts-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='variant-hooky-'
fonts-zshaped : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) fonts-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='variant-zshaped-'
releasepack-hooky : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='variant-hooky-'
releasepack-zshaped : $(SCRIPTS) | $(OBJDIR)
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='variant-zshaped-'
release-all : releasepack-default releasepack-fw releasepack-cc releasepack-hooky releasepack-zshaped
fw : fonts-fw fonts-cc

sampleimage : fonts
	convert -size 4800x1700 xc:white -pointsize 125 \
		-fill black \
		-font dist/iosevka-thin.ttf       -draw "text 0,121  '      thin    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka-extralight.ttf -draw "text 0,299  'extralight    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka-light.ttf      -draw "text 0,478  '     light    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka-regular.ttf    -draw "text 0,656  '   retular    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka-medium.ttf     -draw "text 0,835  '    medium    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka-bold.ttf       -draw "text 0,1013 '      bold    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka-heavy.ttf      -draw "text 0,1192 '     heavy    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-trim images/weights.png

sampleimage-variants : fonts fonts-hooky fonts-zshaped
	convert -size 6800x1700 xc:white -pointsize 125 \
		-fill black \
		-font dist/iosevka-italic.ttf          -draw "text 0,121  'default:    '" \
		-font dist/iosevka-regular.ttf         -draw "fill blue text 750,121 'set ' fill black text 1000,121 'font.name.uniqueSubFamily ' fill green text 2625,121 '\"\\(para.family) \\(para.style) \\(para.version) (\\(para.codename))\"'" \
		-font dist/hooky-iosevka-italic.ttf    -draw "text 0,299  '  hooky:    '" \
		-font dist/hooky-iosevka-regular.ttf   -draw "fill blue text 750,299 'set ' fill black text 1000,299 'font.name.uniqueSubFamily ' fill green text 2625,299 '\"\\(para.family) \\(para.style) \\(para.version) (\\(para.codename))\"'" \
		-font dist/zshaped-iosevka-italic.ttf  -draw "text 0,478  'zshaped:    '" \
		-font dist/zshaped-iosevka-regular.ttf -draw "fill blue text 750,478 'set ' fill black text 1000,478 'font.name.uniqueSubFamily ' fill green text 2625,478 '\"\\(para.family) \\(para.style) \\(para.version) (\\(para.codename))\"'" \
		-trim images/variants.png