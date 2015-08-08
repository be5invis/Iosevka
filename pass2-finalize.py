import fontforge
import sys

source = sys.argv[1]
font = fontforge.open(source)
font.selection.all()
font.replaceWithReference(4)
font.simplify(4, ("smoothcurves", "removesingletonpoints", "setstarttoextremum"), 0.2)
font.generate(sys.argv[2], flags = ("short-post", "opentype"))