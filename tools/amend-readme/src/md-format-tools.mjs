export class MdCol {
	constructor(sectionName) {
		this.data = "";
		this.sectionName = sectionName;
		this.matchRegex = new RegExp(
			`^([ \\t]*)<!-- BEGIN ${sectionName} -->\\n[\\s\\S]*?<!-- END ${sectionName} -->\\n`,
			`m`,
		);
	}
	log(...s) {
		this.data += s.join("") + "\n";
	}
	apply(s) {
		return s.replace(this.matchRegex, (m, $1) => {
			return (
				`<!-- BEGIN ${this.sectionName} -->\n` +
				`<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->\n\n` +
				this.data +
				`\n<!-- END ${this.sectionName} -->\n`
			).replace(/^/gm, $1);
		});
	}
}

export function ImgX(path, w) {
	const widthProp = w ? ` width=${w}` : ``;
	return (
		`<img src="${path}.light.svg#gh-light-mode-only"${widthProp}/>` +
		`<img src="${path}.dark.svg#gh-dark-mode-only"${widthProp}/>`
	);
}
