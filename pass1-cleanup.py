import fontforge
import psMat
import math
import sys

source = sys.argv[1]
font = fontforge.open(source)

if len(sys.argv) < 5 or sys.argv[4] != "true":
	# Replace accented characters into references
	font.selection.select(("ranges", None), ".notdef", "nonmarkingreturn")
	font.replaceWithReference()

	font.selection.select("braille1", "braille13", "braille12", "braille17", "braille123", "braille127", "braille137", "braille1237")
	for i in font.selection:
		glyph = font[i]
		glyph.unlinkRef()

# Remove overlapped area
font.selection.all()
font.removeOverlap()
for i in font:
	glyph = font[i]
	if len(glyph.references) > 0 and len(glyph.layers["Fore"]) > 0: # a mixed glyph
		glyph.unlinkRef()
		glyph.removeOverlap()

for u in range(0x20, 0x7F):
	font.selection.select(("unicode", None), u)
	for g in font.selection:
		font[g].unlinkRef()

font.selection.all()
font.simplify(0.05, ("smoothcurves", "choosehv"), 0.1)

#font.em = 2000
font.selection.all()
font.layers["Fore"].is_quadratic = True
font.transform(psMat.skew(float(sys.argv[3]) / 180 * math.pi))
font.em = 1000

font.selection.all()
font.round()
font.removeOverlap()
font.simplify(0.01)
font.selection.all()
font.removeOverlap()

font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2], flags = ("opentype"))