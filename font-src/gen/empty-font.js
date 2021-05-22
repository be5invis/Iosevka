"use strict";

const { Ot } = require("ot-builder");

module.exports = function () {
	var font = {
		head: new Ot.Head.Table(),
		hhea: new Ot.MetricHead.Hhea(),
		os2: new Ot.Os2.Table(4),
		post: new Ot.Post.Table(3, 0),
		maxp: Ot.Maxp.Table.TrueType(),
		name: new Ot.Name.Table()
	};
	if (process.env.SOURCE_DATE_EPOCH) {
		font.head.created  = new Date(process.env.SOURCE_DATE_EPOCH * 1000);
		font.head.modified = new Date(process.env.SOURCE_DATE_EPOCH * 1000);
	}
	return font;
};
