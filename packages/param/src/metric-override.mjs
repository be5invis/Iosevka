import { monotonicInterpolate } from "@iosevka/util/monotonic-interpolate";

export function applyMetricOverride(para, mo, argv) {
	const bindings = initBindings(para, argv);
	for (const [field, expr] of Object.entries(mo)) {
		if (!validMetricOverrideFields.has(field)) {
			console.error(`Field ${field} cannot be get overridden.`);
			continue;
		}
		if (typeof expr === "number") {
			para[field] = expr;
		} else if (typeof expr === "string") {
			const e = RootExpression(new State(expr), bindings);
			if (typeof e !== "number")
				throw new TypeError(`Expression ${e} do not evaluate to a number`);
			para[field] = e;
		} else {
			throw new SyntaxError(`Invalid expression ${JSON.stringify(expr)}`);
		}
	}
}
const validMetricOverrideFields = new Set([
	"cap",
	"ascender",
	"xHeight",
	"sb",
	"accentWidth",
	"accentClearance",
	"accentHeight",
	"accentStackOffset",
	"dotSize",
	"periodSize",
	"leading",
	"winMetricAscenderPad",
	"winMetricDescenderPad",
	"symbolMid",
	"parenSize",
	"powerlineScaleY",
	"powerlineScaleX",
	"powerlineShiftY",
	"powerlineShiftX",
	"onumZeroHeightRatio",
	"essRatioUpper",
	"essRatioLower",
	"essRatioQuestion",
	"essRatio",
	"archDepth",
	"smallArchDepth",
]);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Function bindings

function initBindings(para, argv) {
	const valueBindings = new Map();
	for (const k of validMetricOverrideFields) {
		valueBindings.set("default_" + k, para[k]);
	}
	valueBindings.set("weight", argv.shape.weight);
	valueBindings.set("width", argv.shape.width);
	valueBindings.set("slopeAngle", argv.shape.slopeAngle);
	const functionBindings = new Map();
	functionBindings.set("blend", blend);
	return { val: valueBindings, functions: functionBindings };
}

function blend(against, ...pairs) {
	const xs = [],
		ys = [];
	for (const [x, y] of pairs) {
		xs.push(x), ys.push(y);
	}
	return monotonicInterpolate(xs, ys)(against);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Simple expression parser

class State {
	constructor(input) {
		this.input = input;
		this.cp = 0;
	}
	fetch(ch) {
		return this.input[this.cp];
	}
	test(ch) {
		return this.input[this.cp] === ch;
	}
	testCk(f) {
		return f(this.input[this.cp]);
	}
	advance() {
		return this.input[this.cp++];
	}
	expectAndAdvance(ch) {
		if (!this.test(ch)) this.fail();
		this.advance();
	}
	expectEnd() {
		if (this.cp < this.input.length) this.fail();
	}
	fail() {
		throw new SyntaxError("Failed to parse expression: " + this.input + "@" + this.cp);
	}
}

function RootExpression(state, bindings) {
	const e = Expression(state, bindings);
	state.expectEnd();
	return e;
}
function Expression(state, bindings) {
	skipSpaces(state);
	const e = Sum(state, bindings);
	skipSpaces(state);
	return e;
}
function Sum(state, bindings) {
	let f = Term(state, bindings);
	skipSpaces(state);
	while (state.test("+") || state.test("-")) {
		let op = state.advance();
		skipSpaces(state);
		const g = Term(state, bindings);
		skipSpaces(state);
		switch (op) {
			case "+":
				f = f + g;
				break;
			case "-":
				f = f - g;
				break;
		}
	}
	return f;
}
function Term(state, bindings) {
	let f = Factor(state, bindings);
	skipSpaces(state);
	while (state.test("*") || state.test("/")) {
		let op = state.advance();
		skipSpaces(state);
		const g = Factor(state, bindings);
		skipSpaces(state);
		switch (op) {
			case "*":
				f = f * g;
				break;
			case "/":
				f = f / g;
				break;
		}
	}
	return f;
}
function Factor(state, bindings) {
	if (state.test("+")) {
		state.advance();
		skipSpaces(state);
		return Factor(state, bindings);
	} else if (state.test("-")) {
		state.advance();
		skipSpaces(state);
		return -Factor(state, bindings);
	} else {
		return Primitive(state, bindings);
	}
}
function Primitive(state, bindings) {
	if (state.testCk(isDigit)) return Lit(state, bindings);
	if (state.testCk(isAlpha)) return BindingOrCall(state, bindings);
	if (state.test("(")) return Group(state, bindings);
	if (state.test("[")) return List("[", "]", state, bindings);
	state.fail();
}
function Lit(state, bindings) {
	let integerPart = 0;
	let fractionPart = 0;
	let fractionScale = 1;
	while (state.testCk(isDigit)) {
		const digit = state.advance().codePointAt(0) - "0".codePointAt(0);
		integerPart = integerPart * 10 + digit;
	}
	if (state.test(".")) {
		state.advance();
		while (state.testCk(isDigit)) {
			fractionScale /= 10;
			const digit = state.advance().codePointAt(0) - "0".codePointAt(0);
			fractionPart += digit * fractionScale;
		}
	}
	return integerPart + fractionPart;
}
function BindingOrCall(state, bindings) {
	let symbolName = "";
	while (state.testCk(isAlpha)) symbolName += state.advance();
	if (state.test("(")) {
		const args = List("(", ")", state, bindings);
		if (bindings.functions.has(symbolName)) return bindings.functions.get(symbolName)(...args);
		else throw new TypeError(`Unknown function ${symbolName}.`);
	} else {
		if (bindings.val.has(symbolName)) return bindings.val.get(symbolName);
		else throw new TypeError(`Unknown identifier ${symbolName}.`);
	}
}
function Group(state, bindings) {
	state.expectAndAdvance("(");
	skipSpaces(state);
	const e = Expression(state, bindings);
	skipSpaces(state);
	state.expectAndAdvance(")");
	return e;
}
function List(start, end, state, bindings) {
	let results = [];
	state.expectAndAdvance(start);
	skipSpaces(state);
	results.push(Expression(state, bindings));
	skipSpaces(state);
	while (state.test(",")) {
		state.expectAndAdvance(",");
		skipSpaces(state);
		results.push(Expression(state, bindings));
		skipSpaces(state);
	}
	state.expectAndAdvance(end);
	return results;
}

function skipSpaces(state) {
	while (state.testCk(isSpace)) state.advance();
}
function isSpace(ch) {
	return ch === " " || ch === "\t";
}
function isDigit(ch) {
	return ch >= "0" && ch <= "9";
}
function isAlpha(ch) {
	return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || ch === "_";
}
