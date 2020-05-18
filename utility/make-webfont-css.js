const fs = require("fs");

module.exports = function (output, family, hs, formats) {
	let ans = ``;
	for (const term of hs) {
		let src = formats
			.map(([ext, format]) => `url('${ext}/${term.name}.${ext}') format('${format}')`)
			.join(", ");
		ans += `
@font-face {
	font-family: '${family + " Web"}';
	font-display: swap;
	font-weight: ${term.css.weight};
	font-stretch: ${term.css.stretch};
	font-style: ${term.css.style};
	src: ${src};
}
`;
		if (term.css.style === "oblique") {
			// CHROME hates a family with both Italic and Oblique
			ans += `
@font-face {
	font-family: '${family + " Web Oblique"}';
	font-display: swap;
	font-weight: ${term.css.weight};
	font-stretch: ${term.css.stretch};
	src: ${src};
}
`;
		}
	}
	fs.writeFileSync(output, ans);
};
