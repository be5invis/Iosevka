include utility/dirs.mk
include utility/scripts.mk

GENERATE = @node --expose-gc generator

include $(BUILD)/targets-$(set).mk
