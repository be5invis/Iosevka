import UnicodeDataIndex from "@unicode/unicode-15.1.0";

export async function collectBlockData() {
	const BlockData = [
		[[0xe0a0, 0xe0df], "Private Use Area — Powerline"],
		[[0xee00, 0xee0f], "Private Use Area — Progress Bar"],
		[[0xef10, 0xef1f], "Private Use Area — Iosevka Private Dingbats"],
		[[0x1cc00, 0x1ceaf], "Symbols for Legacy Computing Supplement (Proposed)"],
	];

	for (const id of UnicodeDataIndex.Block) {
		if (!id || /Private_Use_Area/.test(id) || /undefined/.test(id)) continue;
		const rangesModule = await import(`@unicode/unicode-15.1.0/Block/${id}/ranges.js`);
		const rg = rangesModule.default;
		BlockData.push([[rg[0].begin, rg[0].end - 1], id.replace(/_/g, " ")]);
	}
	BlockData.sort((a, b) => a[0][0] - b[0][0]);
	return BlockData;
}
