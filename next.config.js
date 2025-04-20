const path = require("path");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
	output: "export",
	pageExtensions: ["tsx"],

	sassOptions: {
		silenceDeprecations: ["legacy-js-api", "mixed-decls"],
	},
};
