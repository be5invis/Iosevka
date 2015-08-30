import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)

# Replace accented characters into references
print "Reference finding: ", font.fontname
font.selection.select(("ranges", "unicode", None), 0x1FCD, 0x1FCF, 0x1FDD, 0x1FDF)
font.replaceWithReference(2)
font.selection.all()
font.selection.select(("less", None), "I.straight", "dotlessi.straight", "l.straight")
font.replaceWithReference(2)

# Remove overlapped area
print "Overlap Removal: ", font.fontname
font.selection.all()
font.removeOverlap()
font.round()
font.removeOverlap()
for i in font:
	glyph = font[i]
	if len(glyph.references) > 0 and len(glyph.layers["Fore"]) > 0: # a mixed glyph
		glyph.unlinkRef()
		glyph.removeOverlap()
font.selection.all()
font.replaceWithReference(2)

# Outline simplify
print "Simplify, pass 1: ", font.fontname
font.layers["Fore"].is_quadratic = False
font.selection.all()
font.simplify(font.em / 1000.0 * 0.75, ("smoothcurves", "choosehv"), 0.1)

print "Simplify, pass 2: ", font.fontname
oldem = font.em
font.em = 1000
font.layers["Fore"].is_quadratic = True
font.transform(psMat.skew(-font.italicangle / 180 * math.pi))

# Feature merging and output
print "Finalize: ", font.fontname
font.em = oldem
font.mergeFeature(sys.argv[2])

font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[3], flags = ("short-post", "opentype"))