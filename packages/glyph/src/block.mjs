export class GlyphBuildExecutor {
	constructor(recursiveBuildFilter) {
		this.recursiveBuildFilter = recursiveBuildFilter;
		this.currentBlockId = null;
		this.dependencyManager = new DependencyManager();
		this.pendingGlyphBlocks = [];
		this.glyphBlockStore = {};
	}
	setGlyphToBlockDependency(glyph) {
		if (this.currentBlockId) {
			this.dependencyManager.glyphToBlock.set(glyph, this.currentBlockId);

			let s = this.dependencyManager.blockToGlyph.get(this.currentBlockId);
			if (!s) {
				s = new Set();
				this.dependencyManager.blockToGlyph.set(this.currentBlockId, s);
			}
			s.add(glyph);
		}
	}
	executePendingBlocks() {
		if (!this.recursiveBuildFilter) {
			for (const block of this.pendingGlyphBlocks) block.resolve();
		} else {
			for (const block of this.pendingGlyphBlocks)
				if (this.recursiveBuildFilter.blockIsNeeded(block.id)) block.resolve();
		}
	}
	defineGlyphBlock(capture, id, body) {
		const block = new GlyphBlock(capture, this, id, body);
		if (this.glyphBlockStore[id]) throw new Error(`Duplicate glyph block: ${id}`);
		this.glyphBlockStore[id] = block;
		this.pendingGlyphBlocks.push(block);
	}
}

export class RecursiveBuildFilter {
	constructor(glyphIdFilter, blockIdFilter) {
		this.glyphIdFilter = glyphIdFilter;
		this.blockIdFilter = blockIdFilter;
	}
	glyphIsNeeded(id) {
		return this.glyphIdFilter.has(id);
	}
	blockIsNeeded(id) {
		return this.blockIdFilter.has(id);
	}
}

export class DependencyManager {
	constructor() {
		this.glyphToGlyph = new WeakMap();
		this.glyphToBlock = new WeakMap();
		this.blockToGlyph = new Map();
	}
	addDependency(dependent, dependency) {
		let s = this.glyphToGlyph.get(dependent);
		if (!s) {
			s = new Set();
			this.glyphToGlyph.set(dependent, s);
		}
		s.add(dependency);
	}
	hasGlyphToGlyphDependency(dependent, dependency) {
		return this.hasGlyphToGlyphDependencyImpl(new Set(), dependent, dependency);
	}

	hasGlyphToGlyphDependencyImpl(alreadyScanned, dependent, dependency) {
		// Prevent infinite recursion
		if (alreadyScanned.has(dependent)) return true;
		alreadyScanned.add(dependent);

		// Check for direct dependency
		if (!this.glyphToGlyph.has(dependent)) return false;
		const ds = this.glyphToGlyph.get(dependent);
		if (ds.has(dependency)) return true;

		// Check for indirect dependency
		for (const d of ds) {
			if (this.hasGlyphToGlyphDependencyImpl(alreadyScanned, d, dependency)) return true;
		}
		return false;
	}

	traverseGlyphDependenciesImpl(glyphs, fBlockwiseExpand) {
		let state = new Map();
		const PENDING = 1,
			CHECKED = 2;

		for (const glyph of glyphs) state.set(glyph, PENDING);

		// When fBlockwiseExpand is true, we need to expand the initial glyph set
		// to include all glyphs in the same block.
		if (fBlockwiseExpand) {
			let blocks = new Set();
			for (const glyph of glyphs) {
				let b = this.glyphToBlock.get(glyph);
				if (b) blocks.add(b);
			}
			for (const b of blocks) {
				const glyphs = this.blockToGlyph.get(b);
				if (glyphs) {
					for (const g of glyphs) state.set(g, PENDING);
				}
			}
		}

		// Traverse the dependency graph
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

		return state;
	}

	traverseDependencies(glyphs) {
		const gGlyphGraph = this.traverseGlyphDependenciesImpl(glyphs, false);
		const gBlockGraph = this.traverseGlyphDependenciesImpl(glyphs, true);

		let glyphIdFilter = new Set();
		let blockIdFilter = new Set();
		for (const g of gGlyphGraph.keys()) {
			if (g.identifier) glyphIdFilter.add(g.identifier);
		}
		for (const g of gBlockGraph.keys()) {
			let b = this.glyphToBlock.get(g);
			if (b) blockIdFilter.add(b);
		}

		return new RecursiveBuildFilter(glyphIdFilter, blockIdFilter);
	}
}

export class GlyphBlock {
	constructor(capture, execState, blockName, body) {
		this.capture = capture;
		this.execState = execState;
		this.id = blockName;
		this.body = body;
		this.resolved = 0;
		this.exports = {};
	}
	resolve() {
		if (this.resolved == 2) return this.exports;
		if (this.resolved == 1) throw new Error(`Circular dependency detected: ${this.id}`);
		this.resolved = 1;

		const prevBlockName = this.execState.currentBlockId;
		this.execState.currentBlockId = this.id;

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

		this.execState.currentBlockId = prevBlockName;
		this.resolved = 2;
		return this.exports;
	}
}
