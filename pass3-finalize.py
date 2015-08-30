import fontforge
import psMat
import sys
import math

source = sys.argv[1]
font = fontforge.open(source)
font.em = int(sys.argv[3])
font.selection.all()
font.round()
font.removeOverlap()
font.simplify(0.1)
font.generate(sys.argv[2], flags = ("short-post", "opentype"))