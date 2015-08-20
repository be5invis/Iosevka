import fontforge
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
font.addExtrema()
font.canonicalContours()
font.canonicalStart()
font.generate(sys.argv[3], flags = ("short-post", "opentype"))