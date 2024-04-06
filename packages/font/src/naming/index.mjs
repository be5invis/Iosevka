import { Ot } from "ot-builder";
import semver from "semver";

export function createNamingDictFromArgv(argv) {
	return {
		// Strings
		family: argv.menu.family,
		version: argv.menu.version,
		...argv.namingOverride,

		// Generated from argv property
		weight: argv.menu.weight - 0,
		width: argv.menu.width - 0,
		slope: argv.menu.slope,
	};
}

export function assignFontNames(font, naming, isQuasiProportional) {
	setMainNames(font, naming);
	setMiscStyleProps(font, isQuasiProportional);
	setInformaticNames(font, naming);
	setVersion(font, naming);
	applyMiscProps(font);
}

function setMainNames(font, naming) {
	// Preferred names
	const family = naming.family.trim();
	const style = getStyle(naming.weight, naming.width, naming.slope);

	nameFont(font, Ot.Name.NameID.PreferredFamily, family);
	nameFont(font, Ot.Name.NameID.PreferredSubfamily, style);
	nameFont(font, Ot.Name.NameID.WwsFamily, family);
	nameFont(font, Ot.Name.NameID.WwsSubfamily, style);

	// Compat names
	const compat = getStyleLinkedStyles(naming.weight, naming.width, naming.slope);
	let compatFamily = family;
	if (compat.familySuffix !== "Regular") compatFamily = family + " " + compat.familySuffix;
	if (compatFamily.length >= 31) compatFamily = family + " " + compat.familySuffixShort;

	nameFont(font, Ot.Name.NameID.LegacyFamily, compatFamily);
	nameFont(font, Ot.Name.NameID.LegacySubfamily, compat.style);

	// Unique and Full name
	const uniqueName = `${family} ${style} ${naming.version}`;
	const fullName = style !== "Regular" ? `${family} ${style}` : family;
	const postscriptName = fullName.replace(/ /g, "-");
	nameFont(font, Ot.Name.NameID.UniqueFontId, uniqueName);
	nameFont(font, Ot.Name.NameID.FullFontName, fullName);
	nameFont(font, Ot.Name.NameID.PostscriptName, postscriptName);

	// Weight, width and slope numbers
	font.os2.usWeightClass = naming.weight;
	font.os2.usWidthClass = naming.width;
	font.os2.panose.bWeight = 1 + naming.weight / 100;
	font.os2.sFamilyClass = 0x809;

	// HEAD and OS/2 flags
	const isItalic = naming.slope === "italic";
	const isOblique = naming.slope === "oblique";
	const isBold = naming.weight > 650;

	// prettier-ignore
	font.os2.fsSelection = accumulateFlags(
		[Ot.Os2.FsSelection.OBLIQUE,          isOblique],
		[Ot.Os2.FsSelection.BOLD,             isBold],
		[Ot.Os2.FsSelection.ITALIC,           isItalic || isOblique],
		[Ot.Os2.FsSelection.REGULAR,          !isBold && !isItalic && !isOblique],
		[Ot.Os2.FsSelection.USE_TYPO_METRICS, true]
	);

	// prettier-ignore
	font.head.macStyle = accumulateFlags(
		[Ot.Head.MacStyle.Bold,               isBold],
		[Ot.Head.MacStyle.Italic,             isItalic || isOblique],
		[Ot.Head.MacStyle.Condensed,          naming.width < 5],
		[Ot.Head.MacStyle.Extended,           naming.width > 5]
	);
}

function setMiscStyleProps(font, isQuasiProportional) {
	// Panose
	font.os2.panose.bFamilyType = 2;
	font.os2.panose.bContrast = 3;
	font.os2.panose.bXHeight = 4;

	// Pitch
	if (!isQuasiProportional) {
		font.os2.panose.bProportion = 9; // Monospaced
		font.post.isFixedPitch = true;
	} else {
		font.os2.panose.bProportion = 0;
		font.post.isFixedPitch = false;
	}
}

function setInformaticNames(font, naming) {
	if (naming.copyright) {
		nameFont(font, Ot.Name.NameID.Copyright, ancNameEntry(naming.copyright));
	}
	if (naming.manufacturer) {
		nameFont(font, Ot.Name.NameID.Manufacturer, ancNameEntry(naming.manufacturer));
	}
	if (naming.designer) {
		nameFont(font, Ot.Name.NameID.Designer, ancNameEntry(naming.designer));
	}
	if (naming.description) {
		nameFont(font, Ot.Name.NameID.Description, ancNameEntry(naming.description));
	}
	if (naming.urlVendor) {
		nameFont(font, Ot.Name.NameID.UrlVendor, ancNameEntry(naming.urlVendor));
	}
	if (naming.urlDesigner) {
		nameFont(font, Ot.Name.NameID.UrlDesigner, ancNameEntry(naming.urlDesigner));
	}
	if (naming.licence) {
		nameFont(font, Ot.Name.NameID.LicenseDescription, ancNameEntry(naming.licence));
	}
	if (naming.license) {
		nameFont(font, Ot.Name.NameID.LicenseDescription, ancNameEntry(naming.license));
	}
	if (naming.licenceURL) {
		nameFont(font, Ot.Name.NameID.LicenseInfoUrl, ancNameEntry(naming.licenceURL));
	}
	if (naming.licenseURL) {
		nameFont(font, Ot.Name.NameID.LicenseInfoUrl, ancNameEntry(naming.licenseURL));
	}
}

function setVersion(font, naming) {
	if (naming.version) {
		// Trim the "Version " prefix if it exists
		const versionString = naming.version.trim().replace(/^Version\s+/i, "");
		const ver = semver.parse(versionString);
		if (!ver) throw new Error(`Version string ${naming.version} does not follow semver format`);
		if (ver.minor > 99 || ver.patch > 99) throw new RangeError("Version number overflow");

		// Set Name entry
		nameFont(font, Ot.Name.NameID.VersionString, `Version ${versionString}`);
		// Set Font Revision
		font.head.fontRevision = ver.major + (ver.minor * 100 + ver.patch) / 10000;
	}
}

function applyMiscProps(font) {
	font.os2.ulCodePageRange1 = 0x2000011f;
	font.os2.ulCodePageRange2 = 0xc4000000;
	font.head.flags = accumulateFlags(
		[Ot.Head.Flags.BaseLineYAt0, true],
		[Ot.Head.Flags.LeftSidebearingAtX0, true],
		[Ot.Head.Flags.InstructionsMayDependOnPointSize, true],
		[Ot.Head.Flags.ForcePpemToBeInteger, true],
		[Ot.Head.Flags.InstructionMayAlterAdvanceWidth, true],
	);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function accumulateFlags(...entries) {
	let s = 0;
	for (const [flag, cond] of entries) {
		if (cond) s |= flag;
	}
	return s;
}

function getStyleLinkedStyles(weight, width, slope) {
	let linkWeight = weight;
	let linkSlope = slope;
	let nameSuffixWeight = 400;
	let nameSuffixWidth = width;
	let nameSuffixSlope = "normal";

	if (!(linkWeight === 400 || linkWeight == 700)) {
		nameSuffixWeight = linkWeight;
		linkWeight = 400;
	}

	if (!(linkSlope === "normal" || linkSlope === "italic")) {
		nameSuffixSlope = linkSlope;
		linkSlope = "normal";
	}

	return {
		style: getStyle(linkWeight, 5, linkSlope),
		familySuffix: getStyle(nameSuffixWeight, nameSuffixWidth, nameSuffixSlope),
		familySuffixShort: getShortStyle(nameSuffixWeight, nameSuffixWidth, nameSuffixSlope),
	};
}

function nameFont(font, nameID, str) {
	nameFontImpl(font.name.records, 1, 0, 0, nameID, Buffer.from(str, "utf-8")); // Mac Roman
	nameFontImpl(font.name.records, 3, 1, 1033, nameID, str); // Windows Unicode English
}
function nameFontImpl(records, platformID, encodingID, languageID, nameID, value) {
	for (let record of records) {
		if (record.platformID !== platformID) continue;
		if (record.encodingID !== encodingID) continue;
		if (record.languageID !== languageID) continue;
		if (record.nameID !== nameID) continue;
		record.value = value;
		return;
	}
	records.push({ platformID, encodingID, languageID, nameID, value });
}

function getStyle(weight, width, slope) {
	const weightPart = weightToMenuStyleMap[weight] ?? "W" + weight;
	const widthPart = widthToMenuStyleMap[width] ?? "Wd" + width;
	const slopePart = slopeToMenuStyleMap[slope] ?? "";
	const rawName = weightPart + " " + widthPart + " " + slopePart;
	return rawName.replace(/ +/g, " ").trim() || "Regular";
}
function getShortStyle(weight, width, slope) {
	const weightPart = weightToMenuStyleMapShort[weight] ?? "W" + weight;
	const widthPart = widthToMenuStyleMapShort[width] ?? "Wd" + width;
	const slopePart = slopeToMenuStyleMapShort[slope] ?? "";
	const rawName = weightPart + " " + widthPart + " " + slopePart;
	return rawName.replace(/ +/g, " ").trim() || "Regular";
}

const weightToMenuStyleMap = {
	100: "Thin",
	200: "Extralight",
	300: "Light",
	350: "SemiLight",
	400: "",
	450: "Book",
	500: "Medium",
	600: "Semibold",
	700: "Bold",
	800: "Extrabold",
	900: "Heavy",
};
const widthToMenuStyleMap = {
	1: "Ultra-Condensed",
	2: "Extra-Condensed",
	3: "Condensed",
	4: "Semi-Condensed",
	5: "",
	6: "Semi-Extended",
	7: "Extended",
	8: "Extra-Extended",
	9: "Ultra-Extended",
};
const slopeToMenuStyleMap = {
	normal: "",
	italic: "Italic",
	oblique: "Oblique",
};
const weightToMenuStyleMapShort = {
	100: "Th",
	200: "XLt",
	300: "Lt",
	350: "SmLt",
	400: "",
	450: "Bk",
	500: "Md",
	600: "SmBd",
	700: "Bd",
	800: "XBd",
	900: "Hv",
};
const widthToMenuStyleMapShort = {
	1: "UltCn",
	2: "XCn",
	3: "Cn",
	4: "SmCn",
	5: "",
	6: "SmEx",
	7: "Ex",
	8: "XEx",
	9: "UltEx",
};
const slopeToMenuStyleMapShort = {
	normal: "",
	italic: "It",
	oblique: "Obl",
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

function ancNameEntry(input) {
	return input.replace(/\{\{currentYear\}\}/g, () => String(new Date().getFullYear()));
}
