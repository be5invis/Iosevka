const UnicodeDataIndex = require("@unicode/unicode-14.0.0");

const BlockData = [
	[[0xe0a0, 0xe0df], "Private Use Area — Powerline"],
	[[0xee00, 0xee3f], "Private Use Area — Progress Bar"]
];

for (const id of UnicodeDataIndex.Block) {
	if (!id || /Private_Use_Area/.test(id) || /undefined/.test(id)) continue;
	const rg = require(`@unicode/unicode-14.0.0/Block/${id}/ranges`);
	BlockData.push([[rg[0].begin, rg[0].end - 1], id.replace(/_/g, " ")]);
}

BlockData.sort((a, b) => a[0][0] - b[0][0]);

exports.BlockData = BlockData;
