VERSION = 1.13.0
export VERSION

start : __start

include utility/dirs.mk

# Standard
$(BUILD)/targets.mk : maker.js | $(BUILD)/
	node maker.js > $@

__start : $(BUILD)/targets.mk
	@$(MAKE) -f utility/standard.mk __default

web : $(BUILD)/targets.mk
	@$(MAKE) -f utility/standard.mk web

sans : $(BUILD)/targets.mk
	@$(MAKE) -f utility/standard.mk fonts-sans

release : $(BUILD)/targets.mk
	@$(MAKE) -f utility/standard.mk release

test : $(BUILD)/targets.mk
	@$(MAKE) -f utility/standard.mk test

fw : $(BUILD)/targets.mk
	@$(MAKE) -f utility/standard.mk fw

sample-images :
	@$(MAKE) -f utility/standard.mk sample-images

# Custom
ifndef set
set = custom
endif
ifndef design
design = sans
endif
ifndef upright
upright = normal
endif
ifndef italic
italic = normal
endif
ifndef oblique
oblique = normal
endif
ifndef prestyle
prestyle = nothing
endif

CREATECONFIG = node maker.js --custom $(set) --design '$(design)' --upright '$(upright)' --italic '$(italic)' --oblique '$(oblique)' --prestyle '$(prestyle)' > $(BUILD)/targets-$(set).mk

custom-config : maker.js | $(BUILD)/
	$(CREATECONFIG)

export set
custom : $(BUILD)/targets-$(set).mk $(BUILD)/targets.mk
	@$(MAKE) -f utility/custom.mk fonts-customized-$(set) __IOSEVKA_CUSTOM_BUILD__=true
custom-web : $(BUILD)/targets-$(set).mk $(BUILD)/targets.mk
	@$(MAKE) -f utility/custom.mk web-customized-$(set) __IOSEVKA_CUSTOM_BUILD__=true

# Cleaning
clean :
	@$(MAKE) -f utility/scripts.mk cleanscripts
	@-rm -rf $(BUILD)
	@-rm -rf $(DIST)
	@-rm -rf $(ARCHIVEDIR)
