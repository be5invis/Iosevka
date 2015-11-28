var Point = function(x, y, onCurve, cubic, subdivided){
	this.x = x;
	this.y = y;
	this.onCurve = onCurve || false;
	this.subdivided = subdivided || false;
	this.cubic = cubic || false;
}
Point.transformed = function(tfm, x, y, onCurve, cubic, subdivided) {
	return new Point(x * tfm.xx + y * tfm.yx + tfm.x, x * tfm.xy + y * tfm.yy + tfm.y, onCurve, cubic, subdivided)
}

module.exports = Point