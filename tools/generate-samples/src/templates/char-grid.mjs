import * as themes from "../themes/index.mjs";

export default CharGrid;

function CharGrid(args) {
	const theme = themes[args.theme];
	const udatMap = args.udatMap;
	const gcMap = new Map();
	for (const [ch, gc, _name] of udatMap) {
		gcMap.set(ch, gc);
	}

	const EM = 48;
	const ITEMS_PER_ROW = 16;
	const ITEMS_START_X = 2;
	const ITEM_SIZE = 1.5;

	let rows = 0;
	let frames = [];
	for (let offset = 0; offset < ITEMS_PER_ROW; offset++) {
		frames.push({
			"horizontal-align": "center",
			"vertical-align": "center",
			left: (ITEMS_START_X + offset) * ITEM_SIZE * EM,
			right: (ITEMS_START_X + offset + 1) * ITEM_SIZE * EM,
			top: 0,
			bottom: ITEM_SIZE * EM,
			contents: [
				{ "font-family": "Iosevka" },
				{ "font-weight": 600 },
				{ "font-size": 0.5 * EM },
				{ color: theme.body },
				offset.toString(16).toUpperCase(),
			],
		});
	}

	for (const char of args.characters) {
		if (char.lch % ITEMS_PER_ROW === 0) {
			rows++;
			frames.push({
				"horizontal-align": "center",
				"vertical-align": "center",
				left: 0,
				right: ITEMS_START_X * ITEM_SIZE * EM,
				top: rows * ITEM_SIZE * EM,
				bottom: (rows + 1) * ITEM_SIZE * EM,
				contents: [
					{ "font-family": "Iosevka" },
					{ "font-weight": 600 },
					{ "font-size": 0.5 * EM },
					{ color: theme.body },
					"U+" + char.lch.toString(16).toUpperCase().padStart(4, "0"),
				],
			});
		}

		const isMark = char.inFont && gcMap.get(char.lch) === "Nonspacing_Mark";
		const dimensions = {
			"horizontal-align": "center",
			"vertical-align": "center",
			left: (ITEMS_START_X + (char.lch % ITEMS_PER_ROW)) * ITEM_SIZE * EM,
			right: (ITEMS_START_X + (char.lch % ITEMS_PER_ROW) + 1) * ITEM_SIZE * EM,
			top: rows * ITEM_SIZE * EM,
			bottom: (rows + 1) * ITEM_SIZE * EM,
		};
		const fontSettings = [
			{ "font-family": "Iosevka" },
			{ "font-weight": 400 },
			{ "font-size": EM },
		];
		if (isMark) {
			// Dotted circle
			frames.push({
				...dimensions,
				contents: [...fontSettings, { color: theme.stress }, "\u25CC"],
			});
		}
		frames.push({
			...dimensions,
			contents: [
				...fontSettings,
				{ color: char.inFont ? theme.body : theme.dimmed },
				char.inFont ? (isMark ? "\uE00E" : "") + String.fromCodePoint(char.lch) : "\uF00F",
			],
		});
	}

	rows++;

	return {
		width: (ITEMS_PER_ROW + ITEMS_START_X) * ITEM_SIZE * EM,
		height: rows * ITEM_SIZE * EM,
		frames,
	};
}
