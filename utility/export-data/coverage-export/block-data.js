const UnicodeDataIndex = require("@unicode/unicode-14.0.0");

const BlockData = [
	[[0xe0a0, 0xe0df], "Private Use Area — Powerline"],
	[[0xee00, 0xee3f], "Private Use Area — Progress Bar"],
	// Missing ranges in UnicodeDataIndex
	[[0x1fa70, 0x1faff], "Symbols and Pictographs Extended-A "],
	[[0x1fb00, 0x1fbff], "Symbols for Legacy Computing"]
];

for (const id of UnicodeDataIndex.Block) {
	if (!id || /Private_Use_Area/.test(id) || /undefined/.test(id)) continue;
	const rg = require(`@unicode/unicode-14.0.0/Block/${id}/ranges`);
	BlockData.push([[rg[0].begin, rg[0].end - 1], id.replace(/_/g, " ")]);
}

BlockData.sort((a, b) => a[0][0] - b[0][0]);

exports.BlockData = BlockData;
