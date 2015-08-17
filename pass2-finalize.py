import fontforge
import sys

source = sys.argv[1]
font = fontforge.open(source)

font.selection.all()
font.removeOverlap()
font.em = 1000
font.simplify(0.01)
font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[2], flags = ("short-post", "opentype"))