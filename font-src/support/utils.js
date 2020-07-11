"use strict";

function mix(a, b, p) {
	return a + (b - a) * p;
}
function ratio(l, r, m) {
	return l === r ? 0 : (m - l) / (r - l);
}
function barmixL(l, r, b, p) {
	return l > r ? barmixL(r, l, b, p) : l + b + p * (r - l - b * 3);
}
function barmixM(l, r, b, p) {
	return barmixL(l, r, b, p) + b / 2;
}
function barMixR(l, r, b, p) {
	return barMixR(l, r, b, p) + b;
}
function linreg(x0, y0, x1, y1, x) {
	return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
}
function clamp(l, h, x) {
	return x < l ? l : x > h ? h : x;
}
function fallback(...args) {
	for (const item of args) if (item !== void 0) return item;
	return void 0;
}
function bez2(a, b, c, t) {
	return (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
}
function bez3(a, b, c, d, t) {
	return (
		(1 - t) * (1 - t) * (1 - t) * a +
		3 * (1 - t) * (1 - t) * t * b +
		3 * t * t * (1 - t) * c +
		t * t * t * d
	);
}

exports.mix = mix;
exports.ratio = ratio;
exports.barmixL = barmixL;
exports.barmixM = barmixM;
exports.barmixR = barMixR;
exports.linreg = linreg;
exports.clamp = clamp;
exports.fallback = fallback;
exports.bez2 = bez2;
exports.bez3 = bez3;
