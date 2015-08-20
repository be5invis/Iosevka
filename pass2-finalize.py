import fontforge
import psMat
import sys
import math

source = sys.argv[1]
font = fontforge.open(source)

font.selection.all()
font.removeOverlap()
if sys.argv[1].find("italic") >= 0:
	italicangle = math.pi / 18
else:
	italicangle = 0
font.simplify(0.5);
font.em = 2048

font.layers["Fore"].is_quadratic = False
font.transform(psMat.skew(-italicangle))
font.simplify(1, ("smoothcurves"), 0.05)
font.transform(psMat.skew(italicangle))
font.addExtrema()
font.layers["Fore"].is_quadratic = True
font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2], flags = ("short-post", "opentype"))