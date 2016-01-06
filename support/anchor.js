// Anchors records how glyphs are combined.
function Anchor(x, y, type, mbx, mby){
	this.x = x;
	this.y = y;
	this.type = type;
	this.mbx = mbx;
	this.mby = mby;
}
Anchor.BASE = 'base'
Anchor.MARK = 'mark'

Anchor.transform = function(tfm, a){
	var x = a.x * tfm.xx + a.y * tfm.yx + tfm.x;
	var y = a.x * tfm.xy + a.y * tfm.yy + tfm.y;
	if(a.mbx !== void 0 && a.mby !== void 0) {
		var mbx = a.mbx * tfm.xx + a.mby * tfm.yx + tfm.x;
		var mby = a.mbx * tfm.xy + a.mby * tfm.yy + tfm.y;
		return new Anchor(x, y, a.type, mbx, mby)
	} else {
		return new Anchor(x, y, a.type)
	}
}

Anchor.prototype.transform = function(tfm){ return Anchor.transform(this) }

module.exports = Anchor