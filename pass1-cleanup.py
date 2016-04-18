import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)
font.mergeFeature(sys.argv[2])
font.selection.all()
# Replace accented characters into references
font.selection.select(("ranges", "unicode", None), 0x1FCD, 0x1FCF, 0x1FDD, 0x1FDF)
font.replaceWithReference()
font.selection.all()
font.selection.select(("less", None), "I.straight", "dotlessi.straight", "l.straight", "ltailBR", "rtailBR")
font.selection.select(("less", "ranges", "unicode"), 0x207A, 0x207E, 0x208A, 0x208E)

hasLigation = True
try:
	font['lighy.fr']
	hasLigation = True
except TypeError:
	hasLigation = False

if hasLigation:
	font.selection.select(("less", "ranges"), "lighy.fr", "lighy.cc", "ligeq.fr", "ligeq.cc")
font.replaceWithReference()

# Remove overlapped area
font.selection.all()
font.removeOverlap()
for i in font:
	glyph = font[i]
	if len(glyph.references) > 0 and len(glyph.layers["Fore"]) > 0: # a mixed glyph
		glyph.unlinkRef()
		glyph.removeOverlap()

font.selection.all()
font.simplify(0.05, ("smoothcurves", "choosehv"), 0.1)

#font.em = 2000
font.selection.all()
font.layers["Fore"].is_quadratic = True
font.transform(psMat.skew(float(sys.argv[4]) / 180 * math.pi))
font.em = 1000

font.selection.all()
font.round()
font.removeOverlap()
font.simplify(0.01)
font.selection.all()
font.removeOverlap()

font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[3], flags = ("opentype"))