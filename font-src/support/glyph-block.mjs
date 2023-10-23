export class GlyphBuildExecutor {
	constructor() {
		this.currentBlockName = null;
		this.dependencyManager = new DependencyManager();
		this.pendingGlyphBlocks = [];
		this.glyphBlockStore = {};
	}
	setGlyphToBlockDependency(glyph) {
		if (this.currentBlockName) {
			this.dependencyManager.glyphToBlock.set(glyph, this.currentBlockName);
		}
	}
	defineGlyphBlock(capture, blockName, body) {
		const block = new GlyphBlock(capture, this, blockName, body);
		this.glyphBlockStore[blockName] = block;
		this.pendingGlyphBlocks.push(block);
	}
}

export class RecursiveBuildFilter {
	constructor(glyphIdFilter) {
		this.glyphIdFilter = glyphIdFilter;
	}
	glyphIsNeeded(id) {
		return this.glyphIdFilter.has(id);
	}
}

export class DependencyManager {
	constructor() {
		this.glyphToGlyph = new WeakMap();
		this.glyphToBlock = new WeakMap();
	}
	addDependency(dependent, dependency) {
		let s = this.glyphToGlyph.get(dependent);
		if (!s) {
			s = new Set();
			this.glyphToGlyph.set(dependent, s);
		}
		s.add(dependency);
	}
	traverseDependencies(glyphs) {
		let state = new Map();
		const PENDING = 1,
			CHECKED = 2;
		for (const glyph of glyphs) state.set(glyph, PENDING);

		for (;;) {
			let found = false;
			for (const [glyph, s] of state) {
				if (s !== PENDING) continue;
				const deps = this.glyphToGlyph.get(glyph);
				if (deps) {
					for (const g of deps) state.set(g, PENDING);
					found = true;
				}
				state.set(glyph, CHECKED);
			}
			if (!found) break;
		}

		let glyphIdFilter = new Set();
		for (const g of state.keys()) {
			if (g.identifier) glyphIdFilter.add(g.identifier);
		}
		return new RecursiveBuildFilter(glyphIdFilter);
	}
}

export class GlyphBlock {
	constructor(capture, execState, blockName, body) {
		this.capture = capture;
		this.execState = execState;
		this.blockName = blockName;
		this.body = body;
		this.resolved = 0;
		this.exports = {};
	}
	resolve() {
		if (this.resolved == 2) return this.exports;
		if (this.resolved == 1) throw new Error(`Circular dependency detected: ${this.blockName}`);
		this.resolved = 1;

		const prevBlockName = this.execState.currentBlockName;
		this.execState.currentBlockName = this.blockName;

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

		this.execState.currentBlockName = prevBlockName;
		this.resolved = 2;
		return this.exports;
	}
}
