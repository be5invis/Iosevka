start : __start

include utility/makefile.dirs.mk
include utility/makefile.scripts.mk

# Standard
$(BUILD)/targets.mk : maker.js $(SCRIPTS) | $(BUILD)/
	node maker.js > $@

__start : $(BUILD)/targets.mk
	@$(MAKE) -f utility/makefile.standard.mk __default

release : $(BUILD)/targets.mk
	@$(MAKE) -f utility/makefile.standard.mk release

test : $(BUILD)/targets.mk
	@$(MAKE) -f utility/makefile.standard.mk test

fw : $(BUILD)/targets.mk
	@$(MAKE) -f utility/makefile.standard.mk fw

sample-images :
	@$(MAKE) -f utility/makefile.standard.mk sample-images

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


CREATECONFIG = node maker.js --custom $(set) --design '$(design)' --upright '$(upright)' --italic '$(italic)' --oblique '$(oblique)' > $(BUILD)/targets-$(set).mk

custom-config : | $(BUILD)/
	$(CREATECONFIG)

export set
custom : $(BUILD)/targets-$(set).mk $(BUILD)/targets.mk
	@$(MAKE) -f utility/makefile.custom.mk fonts-customized-$(set) __IOSEVKA_CUSTOM_BUILD__=true
custom-web : $(BUILD)/targets-$(set).mk $(BUILD)/targets.mk
	@$(MAKE) -f utility/makefile.custom.mk web-customized-$(set) __IOSEVKA_CUSTOM_BUILD__=true

# Cleaning
clean : cleanscrcipts
	@-rm -rf $(BUILD)
	@-rm -rf $(DIST)
	@-rm -rf $(ARCHIVEDIR)
