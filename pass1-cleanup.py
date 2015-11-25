import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)

# Replace accented characters into references
if len(sys.argv) <= 3:
	print "    Reference finding: ", font.fontname
	font.selection.select(("ranges", "unicode", None), 0x1FCD, 0x1FCF, 0x1FDD, 0x1FDF)
	font.replaceWithReference(2)
	font.selection.all()
	font.selection.select(("less", None), "I.straight", "dotlessi.straight", "l.straight", "ltailBR", "rtailBR")
	font.replaceWithReference(2)

# Remove overlapped area
print "    Overlap Removal: ", font.fontname
font.selection.all()
font.removeOverlap()
font.round()
font.removeOverlap()
for i in font:
	glyph = font[i]
	if len(glyph.references) > 0 and len(glyph.layers["Fore"]) > 0: # a mixed glyph
		glyph.unlinkRef()
		glyph.removeOverlap()
if len(sys.argv) <= 3:
	font.selection.all()
	font.replaceWithReference(2)
	font.selection.select(("ranges", "unicode", None), 0x20, 0x7e)
	font.unlinkReferences()

# Outline simplify
print "    Simplify: ", font.fontname
font.layers["Fore"].is_quadratic = False
font.selection.all()
font.simplify(font.em / 2000.0, ("smoothcurves", "choosehv"), 0.1)

print "    Finalize: ", font.fontname
oldem = font.em
font.em = 1000
font.layers["Fore"].is_quadratic = True
font.transform(psMat.skew(-font.italicangle / 180 * math.pi))
font.em = oldem

font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2])