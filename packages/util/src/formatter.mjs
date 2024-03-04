export function struct(leader, ...items) {
	return "" + leader + "(" + items.join(";") + ")";
}
export function tuple(...items) {
	return "(" + items.join(";") + ")";
}
export function list(items) {
	return "{" + items.join(";") + "}";
}
export function n(x) {
	return String(Math.round(x * 0x10000));
}
export function typedPoint(z) {
	return tuple(z.type, n(z.x), n(z.y));
}
export function gizmo(g) {
	return tuple(n(g.xx), n(g.xy), n(g.yx), n(g.yy), n(g.tx), n(g.ty));
}
