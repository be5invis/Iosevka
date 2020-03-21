"use strict";

module.exports = function maskBit(x, y) {
	return x & (1 << y);
};
