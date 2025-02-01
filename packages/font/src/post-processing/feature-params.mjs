import { Ot, Sigma } from "ot-builder";

import { nameFont } from "../naming/index.mjs";

export function postProcessingFeatureParams(para, font) {
	if (!para.variants.composites) return;
	if (!font.gsub) return;
	if (!font.name) return;

	const nm = new NameManager();

	for (const [name, ss] of para.variants.composites) {
		if (!ss.description) continue;
		for (const feat of font.gsub.features) {
			if (feat.tag !== ss.tag) continue;
			const nameId = nm.getNameId(ss.description);
			feat.params = Sigma.DependentPair.create(Ot.GsubGpos.FeatureParams.TID_StylisticSet, {
				uiNameID: nameId,
			});
		}
	}

	nm.apply(font);
}

class NameManager {
	constructor() {
		this.nameId = 257;
		this.nameMap = new Map();
	}

	getNameId(name) {
		let nameId = this.nameMap.get(name);
		if (!nameId) {
			nameId = this.nameId++;
			this.nameMap.set(name, nameId);
		}
		return nameId;
	}

	apply(font) {
		for (const [name, id] of this.nameMap) {
			nameFont(font, id, name);
		}
	}
}
