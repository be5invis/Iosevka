JSFILES = font.js

all : $(JSFILES)

$(JSFILES) :
	patel-c $< -o $@

font.js : font.patel