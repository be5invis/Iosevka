const { Ot } = require("ot-builder");

exports.convertHead = convertHead;
function convertHead(otdHead) {
	const head = new Ot.Head.Table();
	head.fontRevision = otdHead.fontRevision;
	head.flags = otdHead.flags;
	head.fontDirectionHint = otdHead.fontDirectionHint;
	head.unitsPerEm = otdHead.unitsPerEm;
	head.macStyle = macStyleObjToEnum(otdHead.macStyle);
	head.lowestRecPPEM = otdHead.lowestRecPPEM;
	head.glyphDataFormat = otdHead.glyphDataFormat;
	return head;
}

exports.convertHhea = convertHhea;
function convertHhea(otdHhea) {
	const hhea = new Ot.MetricHead.Hhea();
	hhea.ascender = otdHhea.ascender;
	hhea.descender = otdHhea.descender;
	hhea.lineGap = otdHhea.lineGap;
	hhea.caretSlopeRise = otdHhea.caretSlopeRise;
	hhea.caretSlopeRun = otdHhea.caretSlopeRun;
	hhea.caretOffset = otdHhea.caretOffset;
	return hhea;
}

exports.convertPost = convertPost;
function convertPost(otdPost) {
	const post = new Ot.Post.Table(3, 0);
	post.italicAngle = otdPost.italicAngle;
	post.underlinePosition = otdPost.underlinePosition;
	post.underlineThickness = otdPost.underlineThickness;
	post.isFixedPitch = otdPost.isFixedPitch;
	return post;
}

exports.convertMaxp = convertMaxp;
function convertMaxp(otdMaxp) {
	const maxp = Ot.Maxp.Table.TrueType();
	return maxp;
}

exports.convertOs2 = convertOs2;
function convertOs2(otdOs2) {
	const os2 = new Ot.Os2.Table(4);
	os2.achVendID = otdOs2.achVendID;
	os2.panose = otdOs2.panose;
	os2.fsSelection = fsSelectionObjToEnum(otdOs2.fsSelection);
	os2.fsType = otdOs2.fsType;
	os2.sCapHeight = otdOs2.sCapHeight;
	os2.sFamilyClass = otdOs2.sFamilyClass;
	os2.sTypoAscender = otdOs2.sTypoAscender;
	os2.sTypoDescender = otdOs2.sTypoDescender;
	os2.sTypoLineGap = otdOs2.sTypoLineGap;
	os2.sxHeight = otdOs2.sxHeight;
	os2.usBreakChar = otdOs2.usBreakChar;
	os2.usDefaultChar = otdOs2.usDefaultChar;
	os2.usFirstCharIndex = otdOs2.usFirstCharIndex;
	os2.usLastCharIndex = otdOs2.usLastCharIndex;
	os2.usMaxContext = otdOs2.usMaxContext;
	os2.usWeightClass = otdOs2.usWeightClass;
	os2.usWidthClass = otdOs2.usWidthClass;
	os2.usWinAscent = otdOs2.usWinAscent;
	os2.usWinDescent = otdOs2.usWinDescent;
	os2.xAvgCharWidth = otdOs2.xAvgCharWidth;
	os2.yStrikeoutPosition = otdOs2.yStrikeoutPosition;
	os2.yStrikeoutSize = otdOs2.yStrikeoutSize;
	os2.ySubscriptXOffset = otdOs2.ySubscriptXOffset;
	os2.ySubscriptXSize = otdOs2.ySubscriptXSize;
	os2.ySubscriptYOffset = otdOs2.ySubscriptYOffset;
	os2.ySubscriptYSize = otdOs2.ySubscriptYSize;
	os2.ySuperscriptXOffset = otdOs2.ySuperscriptXOffset;
	os2.ySuperscriptXSize = otdOs2.ySuperscriptXSize;
	os2.ySuperscriptYOffset = otdOs2.ySuperscriptYOffset;
	os2.ySuperscriptYSize = otdOs2.ySuperscriptYSize;
	os2.ulCodePageRange1 = otdOs2.ulCodePageRange1;
	os2.ulCodePageRange2 = otdOs2.ulCodePageRange2;
	return os2;
}

function macStyleObjToEnum(o) {
	return (
		(o.bold ? Ot.Head.MacStyle.Bold : 0) |
		(o.italic ? Ot.Head.MacStyle.Italic : 0) |
		(o.condensed ? Ot.Head.MacStyle.Condensed : 0) |
		(o.extended ? Ot.Head.MacStyle.Extended : 0)
	);
}
function fsSelectionObjToEnum(o) {
	return (
		(o.oblique ? Ot.Os2.FsSelection.OBLIQUE : 0) |
		(o.bold ? Ot.Os2.FsSelection.BOLD : 0) |
		(o.italic ? Ot.Os2.FsSelection.ITALIC : 0) |
		(o.regular ? Ot.Os2.FsSelection.REGULAR : 0) |
		(o.useTypoMetrics ? Ot.Os2.FsSelection.USE_TYPO_METRICS : 0)
	);
}
