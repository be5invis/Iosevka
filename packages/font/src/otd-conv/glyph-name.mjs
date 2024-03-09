import { Joining, AnyCv, TieMark, Nwid, Wwid, VS01, CvDecompose } from "@iosevka/glyph/relation";

const ApplePostNames = new Map([
	/* spell-checker: disable */
	[0xd, "nonmarkingreturn"],
	[0x20, "space"],
	[0x21, "exclam"],
	[0x22, "quotedbl"],
	[0x23, "numbersign"],
	[0x24, "dollar"],
	[0x25, "percent"],
	[0x26, "ampersand"],
	[0x27, "quotesingle"],
	[0x28, "parenleft"],
	[0x29, "parenright"],
	[0x2a, "asterisk"],
	[0x2b, "plus"],
	[0x2c, "comma"],
	[0x2d, "hyphen"],
	[0x2e, "period"],
	[0x2f, "slash"],
	[0x30, "zero"],
	[0x31, "one"],
	[0x32, "two"],
	[0x33, "three"],
	[0x34, "four"],
	[0x35, "five"],
	[0x36, "six"],
	[0x37, "seven"],
	[0x38, "eight"],
	[0x39, "nine"],
	[0x3a, "colon"],
	[0x3b, "semicolon"],
	[0x3c, "less"],
	[0x3d, "equal"],
	[0x3e, "greater"],
	[0x3f, "question"],
	[0x40, "at"],
	[0x41, "A"],
	[0x42, "B"],
	[0x43, "C"],
	[0x44, "D"],
	[0x45, "E"],
	[0x46, "F"],
	[0x47, "G"],
	[0x48, "H"],
	[0x49, "I"],
	[0x4a, "J"],
	[0x4b, "K"],
	[0x4c, "L"],
	[0x4d, "M"],
	[0x4e, "N"],
	[0x4f, "O"],
	[0x50, "P"],
	[0x51, "Q"],
	[0x52, "R"],
	[0x53, "S"],
	[0x54, "T"],
	[0x55, "U"],
	[0x56, "V"],
	[0x57, "W"],
	[0x58, "X"],
	[0x59, "Y"],
	[0x5a, "Z"],
	[0x5b, "bracketleft"],
	[0x5c, "backslash"],
	[0x5d, "bracketright"],
	[0x5e, "asciicircum"],
	[0x5f, "underscore"],
	[0x60, "grave"],
	[0x61, "a"],
	[0x62, "b"],
	[0x63, "c"],
	[0x64, "d"],
	[0x65, "e"],
	[0x66, "f"],
	[0x67, "g"],
	[0x68, "h"],
	[0x69, "i"],
	[0x6a, "j"],
	[0x6b, "k"],
	[0x6c, "l"],
	[0x6d, "m"],
	[0x6e, "n"],
	[0x6f, "o"],
	[0x70, "p"],
	[0x71, "q"],
	[0x72, "r"],
	[0x73, "s"],
	[0x74, "t"],
	[0x75, "u"],
	[0x76, "v"],
	[0x77, "w"],
	[0x78, "x"],
	[0x79, "y"],
	[0x7a, "z"],
	[0x7b, "braceleft"],
	[0x7c, "bar"],
	[0x7d, "braceright"],
	[0x7e, "asciitilde"],
	[0xc4, "Adieresis"],
	[0xc5, "Aring"],
	[0xc7, "Ccedilla"],
	[0xc9, "Eacute"],
	[0xd1, "Ntilde"],
	[0xd6, "Odieresis"],
	[0xdc, "Udieresis"],
	[0xe1, "aacute"],
	[0xe0, "agrave"],
	[0xe2, "acircumflex"],
	[0xe4, "adieresis"],
	[0xe3, "atilde"],
	[0xe5, "aring"],
	[0xe7, "ccedilla"],
	[0xe9, "eacute"],
	[0xe8, "egrave"],
	[0xea, "ecircumflex"],
	[0xeb, "edieresis"],
	[0xed, "iacute"],
	[0xec, "igrave"],
	[0xee, "icircumflex"],
	[0xef, "idieresis"],
	[0xf1, "ntilde"],
	[0xf3, "oacute"],
	[0xf2, "ograve"],
	[0xf4, "ocircumflex"],
	[0xf6, "odieresis"],
	[0xf5, "otilde"],
	[0xfa, "uacute"],
	[0xf9, "ugrave"],
	[0xfb, "ucircumflex"],
	[0xfc, "udieresis"],
	[0x2020, "dagger"],
	[0xb0, "degree"],
	[0xa2, "cent"],
	[0xa3, "sterling"],
	[0xa7, "section"],
	[0x2022, "bullet"],
	[0xb6, "paragraph"],
	[0xdf, "germandbls"],
	[0xae, "registered"],
	[0xa9, "copyright"],
	[0x2122, "trademark"],
	[0xb4, "acute"],
	[0xa8, "dieresis"],
	[0x2260, "notequal"],
	[0xc6, "AE"],
	[0xd8, "Oslash"],
	[0x221e, "infinity"],
	[0xb1, "plusminus"],
	[0x2264, "lessequal"],
	[0x2265, "greaterequal"],
	[0xa5, "yen"],
	[0xb5, "mu"],
	[0x2202, "partialdiff"],
	[0x2211, "summation"],
	[0x220f, "product"],
	[0x3c0, "pi"],
	[0x222b, "integral"],
	[0xaa, "ordfeminine"],
	[0xba, "ordmasculine"],
	[0x2126, "Omega"],
	[0xe6, "ae"],
	[0xf8, "oslash"],
	[0xbf, "questiondown"],
	[0xa1, "exclamdown"],
	[0xac, "logicalnot"],
	[0x221a, "radical"],
	[0x192, "florin"],
	[0x2248, "approxequal"],
	[0x2206, "Delta"],
	[0xab, "guillemotleft"],
	[0xbb, "guillemotright"],
	[0x2026, "ellipsis"],
	[0xa0, "nonbreakingspace"],
	[0xc0, "Agrave"],
	[0xc3, "Atilde"],
	[0xd5, "Otilde"],
	[0x152, "OE"],
	[0x153, "oe"],
	[0x2013, "endash"],
	[0x2014, "emdash"],
	[0x201c, "quotedblleft"],
	[0x201d, "quotedblright"],
	[0x2018, "quoteleft"],
	[0x2019, "quoteright"],
	[0xf7, "divide"],
	[0x25ca, "lozenge"],
	[0xff, "ydieresis"],
	[0x178, "Ydieresis"],
	[0x2044, "fraction"],
	[0xa4, "currency"],
	[0x2039, "guilsinglleft"],
	[0x203a, "guilsinglright"],
	[0xfb01, "fi"],
	[0xfb02, "fl"],
	[0x2021, "daggerdbl"],
	[0xb7, "periodcentered"],
	[0x201a, "quotesinglbase"],
	[0x201e, "quotedblbase"],
	[0x2030, "perthousand"],
	[0xc2, "Acircumflex"],
	[0xca, "Ecircumflex"],
	[0xc1, "Aacute"],
	[0xcb, "Edieresis"],
	[0xc8, "Egrave"],
	[0xcd, "Iacute"],
	[0xce, "Icircumflex"],
	[0xcf, "Idieresis"],
	[0xcc, "Igrave"],
	[0xd3, "Oacute"],
	[0xd4, "Ocircumflex"],
	[0xf8ff, "apple"],
	[0xd2, "Ograve"],
	[0xda, "Uacute"],
	[0xdb, "Ucircumflex"],
	[0xd9, "Ugrave"],
	[0x131, "dotlessi"],
	[0x2c6, "circumflex"],
	[0x2dc, "tilde"],
	[0xaf, "macron"],
	[0x2d8, "breve"],
	[0x2d9, "dotaccent"],
	[0x2da, "ring"],
	[0xb8, "cedilla"],
	[0x2dd, "hungarumlaut"],
	[0x2db, "ogonek"],
	[0x2c7, "caron"],
	[0x141, "Lslash"],
	[0x142, "lslash"],
	[0x160, "Scaron"],
	[0x161, "scaron"],
	[0x17d, "Zcaron"],
	[0x17e, "zcaron"],
	[0xa6, "brokenbar"],
	[0xd0, "Eth"],
	[0xf0, "eth"],
	[0xdd, "Yacute"],
	[0xfd, "yacute"],
	[0xde, "Thorn"],
	[0xfe, "thorn"],
	[0x2212, "minus"],
	[0xd7, "multiply"],
	[0xb9, "onesuperior"],
	[0xb2, "twosuperior"],
	[0xb3, "threesuperior"],
	[0xbd, "onehalf"],
	[0xbc, "onequarter"],
	[0xbe, "threequarters"],
	[0x20a3, "franc"],
	[0x11e, "Gbreve"],
	[0x11f, "gbreve"],
	[0x130, "Idotaccent"],
	[0x15e, "Scedilla"],
	[0x15f, "scedilla"],
	[0x106, "Cacute"],
	[0x107, "cacute"],
	[0x10c, "Ccaron"],
	[0x10d, "ccaron"],
	[0x111, "dcroat"],
	/* spell-checker: enable */
]);

export function byCode(gSrc, primaryUnicode, conflictSet) {
	if (gSrc.glyphRank === 9999) return ".notdef";
	if (gSrc.glyphRank === 9998) return ".null";
	let preferredName = null;
	if (primaryUnicode) {
		preferredName =
			ApplePostNames.get(primaryUnicode) || `uni${formatCodePointHex(primaryUnicode)}`;
	}
	if (preferredName && !conflictSet.has(preferredName)) {
		conflictSet.add(preferredName);
	}
	return preferredName;
}
function formatCodePointHex(u) {
	return u.toString(16).padStart(4, "0").toUpperCase();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function bySpacing(gSrcBase, gOtBase, internalNameMap, conflictSet) {
	if (!gOtBase.name) return 0;
	let n = 0;
	n += byPairGrImpl(Nwid, "NWID", "WWID", gSrcBase, gOtBase, internalNameMap, conflictSet);
	n += byPairGrImpl(Wwid, "WWID", "NWID", gSrcBase, gOtBase, internalNameMap, conflictSet);
	return n;
}
function byPairGrImpl(grCis, tagCis, tagTrans, gSrcBase, gOtBase, nm, conflictSet) {
	const gnDst = grCis.get(gSrcBase);
	if (!gnDst) return 0;
	const gOtDst = nm.get(gnDst);
	if (!gOtDst || gOtDst.name) return 0;
	const nameS = gOtBase.name + "." + tagTrans;
	const nameT = gOtBase.name + "." + tagCis;
	if (!conflictSet.has(nameS) && !conflictSet.has(nameT)) {
		conflictSet.add(nameS);
		conflictSet.add(nameT);
		gOtBase.name = nameS;
		gOtDst.name = nameT;
		return 1;
	}
	return 0;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function byDecompose(gSrcBase, gOtBase, internalNameMap, conflictSet) {
	const parts = CvDecompose.get(gSrcBase);

	if (!parts || !parts.length) return 0;

	let newNamesCount = 0;
	for (const [index, gnPart] of parts.entries()) {
		const gComponent = internalNameMap.get(gnPart);

		if (!gComponent || gComponent.name) continue;

		const nameT = CvDecompose.amendOtName(gOtBase.name, index);
		if (!conflictSet.has(nameT)) {
			conflictSet.add(nameT);
			gComponent.name = nameT;
			newNamesCount++;
		}
	}

	return newNamesCount;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const NamingGr = [TieMark, VS01];
export function byGr(gSrcBase, gOtBase, internalNameMap, conflictSet) {
	if (!gOtBase.name) return 0;
	let n = 0;
	for (const cv of AnyCv.query(gSrcBase)) {
		n += nameByGrImpl(cv, gSrcBase, gOtBase, internalNameMap, conflictSet);
	}
	for (const gr of NamingGr) {
		if (gr.get(gSrcBase)) {
			n += nameByGrImpl(gr, gSrcBase, gOtBase, internalNameMap, conflictSet);
		}
	}
	return n;
}
function nameByGrImpl(gr, gSrcBase, gOtBase, internalNameMap, conflictSet) {
	const gnDst = gr.get(gSrcBase);
	if (!gnDst) return 0;
	const gOtDst = internalNameMap.get(gnDst);
	if (!gOtDst || gOtDst.name) return 0;
	const nameT = gr.amendOtName(gOtBase.name);
	if (!conflictSet.has(nameT)) {
		conflictSet.add(nameT);
		gOtDst.name = nameT;
		return 1;
	}
	return 0;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function byBuildOrder(rank, gSrc, gnOrig) {
	if (!gnOrig) gnOrig = `.g${rank}`;
	gnOrig = Joining.amendOtName(gnOrig, Joining.get(gSrc));
	return gnOrig;
}
