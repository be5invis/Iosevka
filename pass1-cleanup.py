import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)

# Replace accented characters into references
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
for i in font:
	glyph = font[i]
	if len(glyph.references) > 0 and len(glyph.layers["Fore"]) > 0: # a mixed glyph
		glyph.unlinkRef()
		glyph.removeOverlap()
font.selection.all()
font.replaceWithReference(2)
font.selection.select(("ranges", "unicode", None), 0x20, 0x7e)
font.unlinkReferences()

print "    Simplify: ", font.fontname
font.selection.all()
font.transform(psMat.scale(5, 1))
font.simplify(1, ("smoothcurves", "choosehv"), 0.1)
font.transform(psMat.scale(0.2, 1))
font.simplify(1, ("smoothcurves", "choosehv"), 0.1)
font.layers["Fore"].is_quadratic = True
font.transform(psMat.skew(float(sys.argv[3]) / 180 * math.pi))

font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2])