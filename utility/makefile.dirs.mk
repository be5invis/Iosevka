VERSION = 1.12.1

BUILD = build
DIST = dist
ARCHIVEDIR = release-archives

$(BUILD)/ :
	-@mkdir -p $@
$(DIST)/ :
	-@mkdir -p $@
$(ARCHIVEDIR)/ :
	-@mkdir -p $@
