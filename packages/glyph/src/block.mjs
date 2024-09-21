import { Glyph } from "./glyph.mjs";

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

const DEP_TRAVERSE_PENDING = 1,
	DEP_TRAVERSE_CHECKED = 2;

export class DependencyManager {
	constructor() {
		this.glyphToGlyph = new WeakMap();
		this.glyphToGlyphVariant = new WeakMap();
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
	addVariantDependency(dependent, dependency) {
		let s = this.glyphToGlyphVariant.get(dependent);
		if (!s) {
			s = new Set();
			this.glyphToGlyphVariant.set(dependent, s);
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

	traverseGlyphDependenciesImpl(glyphs, fBlockwiseExpand) {
		let state = new Map();
		for (const glyph of glyphs) if (glyph) state.set(glyph, DEP_TRAVERSE_PENDING);

		for (let cycle = 0; cycle < 64; cycle++) {
			let szBefore = state.size;
			this.expandeByVariants(state);
			if (fBlockwiseExpand) this.blockwiseExpandGlyphs(state);
			this.traverseDirectDependenciesImpl(state);
			if (state.size === szBefore) break;
		}

		return state;
	}
	expandeByVariants(state) {
		for (const glyph of state.keys()) {
			const vs = this.glyphToGlyphVariant.get(glyph);
			if (!vs) continue;
			for (const v of vs) if (v && !state.has(v)) state.set(v, DEP_TRAVERSE_PENDING);
		}
	}
	blockwiseExpandGlyphs(state) {
		let blocks = new Set();
		for (const glyph of state.keys()) {
			let b = this.glyphToBlock.get(glyph);
			if (b) blocks.add(b);
		}
		for (const b of blocks) {
			const glyphs = this.blockToGlyph.get(b);
			if (!glyphs) continue;
			for (const g of glyphs) if (g && !state.has(g)) state.set(g, DEP_TRAVERSE_PENDING);
		}
	}
	traverseDirectDependenciesImpl(state) {
		// Traverse the dependency graph
		for (let cycle = 0; cycle < 64; cycle++) {
			let found = false;
			for (const [glyph, s] of state) {
				if (s !== DEP_TRAVERSE_PENDING) continue;
				const deps = this.glyphToGlyph.get(glyph);
				if (deps) {
					for (const g of deps) if (g) state.set(g, DEP_TRAVERSE_PENDING);
					found = true;
				}
				state.set(glyph, DEP_TRAVERSE_CHECKED);
			}
			if (!found) break;
		}
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

/// The class used to handle glyph saving.
export class GlyphSaveSink {
	constructor(exec, metrics, store) {
		this.exec = exec;
		this.metrics = metrics;
		this.glyphStore = store;
	}

	glyphIsNeeded(name) {
		return (
			!this.exec.recursiveBuildFilter || this.exec.recursiveBuildFilter.glyphIsNeeded(name)
		);
	}

	saveFalse($1, $2, contents) {
		return this.saveImpl(true, $1, $2, contents);
	}
	save($1, $2, contents) {
		return this.saveImpl(false, $1, $2, contents);
	}

	saveImpl(fForce, $1, $2, contents) {
		// Figure out the glyph name and unicode to save
		let saveGlyphName = null;
		let unicode = null;
		if ($1 && typeof $1 === "string") {
			saveGlyphName = $1;
			unicode = $2 || 0;
		} else if ($1 && typeof $1 === "number") {
			saveGlyphName = "uni" + $1.toString(16).padStart(4, "0").toUpperCase();
			unicode = $1;
		}

		// If we are in a recursive build run, and the glyph is not needed, skip it
		if (!fForce && saveGlyphName && !this.glyphIsNeeded(saveGlyphName)) return;

		// Create the glyph object & include the contents
		const glyphObject = new Glyph(saveGlyphName);
		glyphObject.setWidth(this.metrics.Width);
		glyphObject.gizmo = this.metrics.GlobalTransform;
		glyphObject._m_dependencyManager = this.exec.dependencyManager;

		glyphObject.include(contents, true, true);

		// Set the glyph-to-block dependency
		this.exec.setGlyphToBlockDependency(glyphObject);

		// Save the glyph if requested
		if (saveGlyphName) {
			if (this.glyphStore.queryByName(saveGlyphName)) {
				throw new Error(`Duplicate glyph: ${saveGlyphName}`);
			}

			this.glyphStore.addGlyph(saveGlyphName, glyphObject);
			if (unicode) {
				let u = typeof unicode === "string" ? unicode.codePointAt(0) : unicode;
				this.glyphStore.encodeGlyph(u, glyphObject);
			}
		}

		return glyphObject;
	}
}
