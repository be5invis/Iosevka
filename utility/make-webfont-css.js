const fs = require("fs");

module.exports = function(output, family, hs, formats) {
	let ans = ``;
	for (const term of hs) {
		let src = formats
			.map(([ext, format]) => `url('${ext}/${term.name}.${ext}') format('${format}')`)
			.join(", ");
		ans += `
@font-face {
	font-family: '${family + " Web"}';
	font-weight: ${term.cssWeight};
	font-style: ${term.cssStyle};
	src: ${src};
}
`;
		if (term.cssStyle === "oblique") {
			// CHROME hates a family with both Italic and Oblique
			ans += `
@font-face {
	font-family: '${family + " Web Oblique"}';
	font-weight: ${term.cssWeight};
	src: ${src};
}
`;
		}
	}
	fs.writeFileSync(output, ans);
};
