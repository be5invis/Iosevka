function struct(leader, ...items) {
	return "" + leader + "(" + items.join(";") + ")";
}
function tuple(...items) {
	return "(" + items.join(";") + ")";
}
function list(items) {
	return "{" + items.join(";") + "}";
}
function n(x) {
	return String(Math.round(x * 0x10000));
}
function typedPoint(z) {
	return tuple(z.type, n(z.x), n(z.y));
}
function gizmo(g) {
	return tuple(n(g.xx), n(g.xy), n(g.yx), n(g.yy), n(g.x), n(g.y));
}
export { struct };
export { tuple };
export { list };
export { n };
export { typedPoint };
export { gizmo };
