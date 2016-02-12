default: fonts

include makesupport.mk
PARAM_DEFAULT = FAST='$(FAST)' SUFFIX='$(SUFFIX)' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)'
PARAM_SLAB = FAST='$(FAST)' SUFFIX='$(SUFFIX)-slab' VARIANTNAME='$(VARIANTNAME)' STYLE_COMMON='$(STYLE_COMMON)' STYLE_SUFFIX='slab' STYLE_UPRIGHT='$(STYLE_UPRIGHT)' STYLE_ITALIC='$(STYLE_ITALIC)' VERSION='$(VERSION)' ARCPREFIX='$(ARCPREFIX)'

### Sometimes make will freak out and report ACCESS VIOLATION for me... so i have to add some repeation
LOOPS = 0 1 2

svgs : svgs-default svgs-slab
fonts : fonts-default fonts-slab
test  : test-default test-slab

# svgs
svgs-default : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk svgs $(PARAM_DEFAULT)
svgs-slab : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk svgs $(PARAM_SLAB)


# ttfs
fonts-default : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk fonts $(PARAM_DEFAULT)
fonts-slab : $(SCRIPTS) | $(OBJDIR) dist
	@$(MAKE) -f onegroup.mk fonts $(PARAM_SLAB)


### USED FOR TESTING AND RELEASING
### DO NOT TOUCH!
# testdrive
test-default : fonts-default
	@$(MAKE) -f onegroup.mk test $(PARAM_DEFAULT)
test-slab : fonts-slab
	@$(MAKE) -f onegroup.mk test $(PARAM_SLAB)

# Webfonts
dist/webfonts : | dist
	@- mkdir $@
dist/webfonts/assets : |dist/webfonts
	@- mkdir $@
webfonts-default : fonts-default | dist/webfonts/assets
	@$(MAKE) -f onegroup.mk webfonts $(PARAM_DEFAULT)
webfonts-slab : fonts-slab | dist/webfonts/assets
	@$(MAKE) -f onegroup.mk webfonts $(PARAM_SLAB)

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
releasepack-default : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) pages-default pages-slab archives-default archives-slab VERSION=$(VERSION)
fonts-fw : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='withfw-'
fonts-cc : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default fonts-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='withfw-cc-'
releasepack-fw : fonts-fw
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk' VARIANTNAME='wfw-' ARCPREFIX='withfw-'
releasepack-cc : fonts-cc
	$(MAKE) archives-default archives-slab VERSION=$(VERSION) STYLE_COMMON='cjk cc' VARIANTNAME='wcc-' ARCPREFIX='withfw-cc-'
fonts-hooky : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='variant-hooky-'
fonts-zshaped : $(SCRIPTS) | $(OBJDIR) dist
	$(MAKE) fonts-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='variant-zshaped-'
releasepack-hooky : fonts-hooky
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='hooky-' STYLE_UPRIGHT='v-l-hooky v-i-hooky' ARCPREFIX='variant-hooky-'
releasepack-zshaped : fonts-zshaped
	$(MAKE) archives-default VERSION=$(VERSION) VARIANTNAME='zshaped-' STYLE_UPRIGHT='v-l-zshaped v-i-zshaped' ARCPREFIX='variant-zshaped-'
release-all : releasepack-default releasepack-fw releasepack-cc releasepack-hooky releasepack-zshaped
fw : fonts-fw fonts-cc

webfonts : webfonts-default webfonts-slab

images/weights.png : fonts-default fonts-slab
	convert -size 4800x1700 xc:white -pointsize 125 \
		-fill black \
		-font dist/iosevka/iosevka-thin.ttf       -draw "text 0,121  '      thin    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka/iosevka-extralight.ttf -draw "text 0,299  'extralight    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka/iosevka-light.ttf      -draw "text 0,478  '     light    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka/iosevka-regular.ttf    -draw "text 0,656  '   regular    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka/iosevka-medium.ttf     -draw "text 0,835  '    medium    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka/iosevka-bold.ttf       -draw "text 0,1013 '      bold    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-font dist/iosevka/iosevka-heavy.ttf      -draw "text 0,1192 '     heavy    float Fox.quick(h){ is_brown && it_jumps_over(doges.lazy) }'" \
		-trim images/weights.png
	optipng images/weights.png

images/variants.png : fonts-default fonts-slab fonts-hooky fonts-zshaped
	convert -size 6800x1700 xc:white -pointsize 125 \
		-fill black \
		-font dist/iosevka/iosevka-italic.ttf          -draw "text 0,121  'default:    '" \
		-font dist/iosevka/iosevka-regular.ttf         -draw "fill blue text 750,121 'set ' fill black text 1000,121 'font.name.uniqueSubFamily ' fill green text 2625,121 '\"\\(para.family) \\(para.style) \\(para.version) (\\(para.codename))\"'" \
		-font dist/variant-hooky-iosevka/hooky-iosevka-italic.ttf    -draw "text 0,308  '  hooky:    '" \
		-font dist/variant-hooky-iosevka/hooky-iosevka-regular.ttf   -draw "fill blue text 750,308 'set ' fill black text 1000,308 'font.name.uniqueSubFamily ' fill green text 2625,308 '\"\\(para.family) \\(para.style) \\(para.version) (\\(para.codename))\"'" \
		-font dist/variant-zshaped-iosevka/zshaped-iosevka-italic.ttf  -draw "text 0,496  'zshaped:    '" \
		-font dist/variant-zshaped-iosevka/zshaped-iosevka-regular.ttf -draw "fill blue text 750,496 'set ' fill black text 1000,496 'font.name.uniqueSubFamily ' fill green text 2625,496 '\"\\(para.family) \\(para.style) \\(para.version) (\\(para.codename))\"'" \
		-trim images/variants.png
	optipng images/variants.png

electronsnaps1: pages
	cd pages && electron getsnap.js --dir ../images
images/opentype.png: electronsnaps1
	optipng $@
images/languages.png: electronsnaps1
	optipng $@
images/languages-slab.png: electronsnaps1
	optipng $@
images/languages-light.png: electronsnaps1
	optipng $@
images/languages-slab-light.png: electronsnaps1
	optipng $@
images/preview.png: electronsnaps1
	optipng $@
images/preview-slab.png: electronsnaps1
	optipng $@
images/preview-light.png: electronsnaps1
	optipng $@
images/preview-slab-light.png: electronsnaps1
	optipng $@

sampleimages: images/weights.png images/variants.png images/opentype.png images/languages.png images/languages-slab.png images/languages-light.png images/languages-slab-light.png images/preview.png images/preview-slab.png images/preview-light.png images/preview-slab-light.png