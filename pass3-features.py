import fontforge
import psMat
import sys
import math

source = sys.argv[1]
font = fontforge.open(source)
font.selection.select(("ranges", "unicode", None), 0x20, 0x7e)
font.unlinkReferences()
font.selection.all()
font.removeOverlap()
font.simplify(0.1)
font.mergeFeature(sys.argv[2])
font.generate(sys.argv[3], flags = ("short-post", "opentype"))