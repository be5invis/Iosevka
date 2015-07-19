JSFILES = font.js support/glyph.js support/stroke.js

all : $(JSFILES)

$(JSFILES) :
	patel-c $< -o $@

font.js : font.patel
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel