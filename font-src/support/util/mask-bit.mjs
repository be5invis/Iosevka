export function maskBit(x, y) {
	return x & (1 << y);
}
export function maskBits(x, y) {
	return x & y;
}
export function maskOffBits(x, y) {
	return x & ~y;
}
export function bitOr(...xs) {
	let x = 0;
	for (const a of xs) x |= a;
	return x;
}

const pcNibbleLookup = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];
export function popCountByte(x) {
	return pcNibbleLookup[x & 0x0f] + pcNibbleLookup[(x >>> 4) & 0x0f];
}
