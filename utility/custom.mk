VERSION = 1.12.1

include utility/dirs.mk
include utility/scripts.mk

GENERATE = @node --expose-gc generator

include $(BUILD)/targets-$(set).mk
