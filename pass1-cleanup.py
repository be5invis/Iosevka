import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)

# Replace accented characters into references
print "    Reference finding: ", font.fontname
font.selection.select(("ranges", "unicode", None), 0x1FCD, 0x1FCF, 0x1FDD, 0x1FDF)
font.replaceWithReference(1)
font.selection.all()
font.selection.select(("less", None), "I.straight", "dotlessi.straight", "l.straight", "ltailBR", "rtailBR")
font.selection.select(("less", "ranges", "unicode"), 0x207A, 0x207E, 0x208A, 0x208E)
font.replaceWithReference(1)

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
font.replaceWithReference(1)

print "    Simplify: ", font.fontname
font.selection.all()
font.transform(psMat.scale(5))
font.simplify(0.05, ("smoothcurves", "choosehv"), 0.1)
font.transform(psMat.scale(0.2))
font.simplify(0.2, ("smoothcurves", "choosehv"), 0.1)

#font.em = 2000
font.layers["Fore"].is_quadratic = True
font.transform(psMat.skew(float(sys.argv[3]) / 180 * math.pi))
#font.em = 1000

font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2])