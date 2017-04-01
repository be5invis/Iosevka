VERSION = 1.12.1

include utility/makefile.dirs.mk
include utility/makefile.scripts.mk

GENERATE = @node --expose-gc generator

include $(BUILD)/targets-$(set).mk
