"use strict";

class GlyphBlock {
	constructor(capture, blockName, body) {
		this.capture = capture;
		this.blockName = blockName;
		this.body = body;

		this.resolved = false;
		this.exports = {};
	}
	resolve() {
		if (this.resolved) return this.exports;
		this.resolved = true;

		const pendingApplications = [];
		const ExportCapture = fnObj => {
			pendingApplications.push(() => {
				for (const [k, v] of Object.entries(fnObj())) {
					this.exports[k] = v;
				}
			});
		};

		this.body(this.capture, ExportCapture);
		for (const f of pendingApplications) f();
		return this.exports;
	}
}

module.exports = GlyphBlock;
