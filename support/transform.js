exports.transformPoint = function(tfm, pt){
	return {
		onCurve: pt.onCurve || false,
		cubic: pt.cubic || false,
		subdivided: pt.subdivided || false,
		x : pt.x * tfm.xx + pt.y * tfm.yx + tfm.x,
		y : pt.x * tfm.xy + pt.y * tfm.yy + tfm.y
	}
}
exports.inverse = function(tfm){
	var denom = tfm.xx * tfm.yy - tfm.xy * tfm.yx;
	return {
		xx : tfm.yy / denom,
		yx : -tfm.yx / denom,
		xy : -tfm.xy / denom,
		yy : tfm.xx / denom,
		x : -(tfm.x * tfm.yy - tfm.y * tfm.yx) / denom,
		y : -(-tfm.x * tfm.xy + tfm.y * tfm.xx) / denom,
	}
}
exports.untransform = function(tfm, pt){
	var xx = pt.x - tfm.x
	var yy = pt.y - tfm.y
	var denom = tfm.xx * tfm.yy - tfm.xy * tfm.yx
	return {
		onCurve: pt.onCurve || false,
		cubic: pt.cubic || false,
		subdivided: pt.subdivided || false,
		x : (xx * tfm.yy - yy * tfm.yx) / denom,
		y : (yy * tfm.xx - xx * tfm.xy) / denom
	}
}