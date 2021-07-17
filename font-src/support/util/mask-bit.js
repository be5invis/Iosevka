"use strict";

exports.maskBit = function maskBit(x, y) {
	return x & (1 << y);
};

exports.maskBits = function maskBits(x, y) {
	return x & y;
};

const pcNibbleLookup = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];
exports.popCountByte = function (x) {
	return pcNibbleLookup[x & 0x0f] + pcNibbleLookup[(x >>> 4) & 0x0f];
};
