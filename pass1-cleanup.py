import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)
font.mergeFeature(sys.argv[2])
# Replace accented characters into references
font.selection.select(("ranges", "unicode", None), 0x1FCD, 0x1FCF, 0x1FDD, 0x1FDF)
font.replaceWithReference(4)
font.selection.none()
font.selection.select(("ranges", "unicode", None), 0x0300, 0x036F)
font.replaceWithReference(4)
font.selection.none()
font.selection.select(("ranges", "unicode", None), 0x0000, 0xFFFF)
font.replaceWithReference(4)
font.selection.none()
font.selection.all()
font.removeOverlap()
font.round()
font.removeOverlap()
for i in font:
	glyph = font[i]
	if len(glyph.references) > 0 and len(glyph.layers["Fore"]) > 0: # a mixed glyph
		glyph.unlinkRef()
		glyph.removeOverlap()

font.layers["Fore"].is_quadratic = False
font.selection.all()
font.simplify(font.em / 1000.0, ("smoothcurves"), 0.05)
font.transform(psMat.skew(-font.italicangle / 180 * math.pi))
# convert cubic outlines to quadratic under 1000upm
oldem = font.em
font.em = 1000
for i in font:
	font[i].addExtrema(("all"))
font.layers["Fore"].is_quadratic = True
font.round()
font.simplify(1)
font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[3], flags = ("short-post", "opentype"))