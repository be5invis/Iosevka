exports.transformPoint = function(tfm, pt){
	return {
		x : pt.x * tfm.xx + pt.y * tfm.yx + tfm.x,
		y : pt.x * tfm.xy + pt.y * tfm.yy + tfm.y,
		onCurve: pt.onCurve,
		cubic: pt.cubic,
		subdivided: pt.subdivided
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
		x : (xx * tfm.yy - yy * tfm.yx) / denom,
		y : (yy * tfm.xx - xx * tfm.xy) / denom,
		onCurve: pt.onCurve,
		cubic: pt.cubic,
		subdivided: pt.subdivided
	}
}