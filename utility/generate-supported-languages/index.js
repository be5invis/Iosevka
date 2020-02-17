const getSupportedLanguageList = require("./proc");

main().catch(e => {
	console.error(e);
	process.exit(1);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	await getSupportedLanguageList(process.argv[2]);
}
