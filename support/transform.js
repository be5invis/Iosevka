var Point = require('./point');

function Transform(xx, yx, xy, yy, x, y){
	this.xx = xx;
	this.yx = yx;
	this.xy = xy;
	this.yy = yy;
	this.x = x;
	this.y = y;
}
Transform.prototype.inverse = function(){
	return Transform.inverse(this)
}
module.exports = Transform

Transform.Id = function(){
	return new Transform(1, 0, 0, 1, 0, 0);
}
Transform.transformPoint = function(tfm, pt){
	return new Point(
		pt.x * tfm.xx + pt.y * tfm.yx + tfm.x,
		pt.x * tfm.xy + pt.y * tfm.yy + tfm.y,
		pt.onCurve,
		pt.cubic,
		pt.subdivided
	)
}
Transform.inverse = function(tfm){
	var denom = tfm.xx * tfm.yy - tfm.xy * tfm.yx;
	return new Transform (
		tfm.yy / denom, -tfm.yx / denom,
		-tfm.xy / denom, tfm.xx / denom,
		-(tfm.x * tfm.yy - tfm.y * tfm.yx) / denom,
		-(-tfm.x * tfm.xy + tfm.y * tfm.xx) / denom
	)
}
Transform.untransform = function(tfm, pt){
	var xx = pt.x - tfm.x;
	var yy = pt.y - tfm.y;
	var denom = tfm.xx * tfm.yy - tfm.xy * tfm.yx;
	return new Point(
		(xx * tfm.yy - yy * tfm.yx) / denom,
		(yy * tfm.xx - xx * tfm.xy) / denom,
		pt.onCurve,
		pt.cubic,
		pt.subdivided
	)
}