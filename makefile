JSFILES = support/glyph.js support/stroke.js

all : $(JSFILES) font.js

$(JSFILES) :
	patel-c $< -o $@

font.js : font.patel glyphs/latin-capital.patel glyphs/latin-lower.patel
	cat $^ | patel-c -o $@
support/glyph.js : support/glyph.patel
support/stroke.js : support/stroke.patel