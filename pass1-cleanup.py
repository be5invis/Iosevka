import fontforge
import sys

source = sys.argv[1]
font = fontforge.open(source)
font.mergeFeature(sys.argv[2])
font.selection.all()
font.replaceWithReference(4)
font.removeOverlap()
font.round()
font.removeOverlap()
font.unlinkReferences()
font.removeOverlap()
font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[3], flags = ("short-post", "opentype"))