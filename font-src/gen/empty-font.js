"use strict";

const { Ot } = require("ot-builder");

module.exports = function () {
	return {
		head: new Ot.Head.Table(),
		hhea: new Ot.MetricHead.Hhea(),
		os2: new Ot.Os2.Table(4),
		post: new Ot.Post.Table(3, 0),
		maxp: Ot.Maxp.Table.TrueType(),
		name: new Ot.Name.Table()
	};
};
