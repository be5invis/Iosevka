"use strict";

class Output {
	constructor() {
		this.buffer = "";
	}
	log(...s) {
		this.buffer += s.join("") + "\n";
	}
}

exports.Output = Output;
