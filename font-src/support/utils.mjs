export function mix(a, b, p) {
	return a + (b - a) * p;
}
export function barMixL(l, r, b, p) {
	return l > r ? barMixL(r, l, b, p) : l + b + p * (r - l - b * 3);
}
export function linreg(x0, y0, x1, y1, x) {
	return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
}
export function clamp(l, h, x) {
	return x < l ? l : x > h ? h : x;
}
export function fallback(...args) {
	for (const item of args) if (item !== void 0) return item;
	return void 0;
}
export function bez2(a, b, c, t) {
	return (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
}
export function bez3(a, b, c, d, t) {
	return (
		(1 - t) * (1 - t) * (1 - t) * a +
		3 * (1 - t) * (1 - t) * t * b +
		3 * t * t * (1 - t) * c +
		t * t * t * d
	);
}
