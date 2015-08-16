import fontforge
import sys

source = sys.argv[1]
font = fontforge.open(source)

font.selection.all()
font.removeOverlap()
font.em = 1000
font.addExtrema()
font.simplify(0.1)
font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2], flags = ("short-post", "opentype"))