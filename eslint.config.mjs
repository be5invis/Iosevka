import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
	js.configs.recommended,
	eslintPluginPrettierRecommended,

	// Ignore machine-generated files
	{
		ignores: [
			"packages/font-glyphs/**/*.mjs",
			"packages/font-otl/**/*.mjs",
			"packages/font/src/generated/ttfa-ranges.mjs", // Machine-generated
		],
	},

	// Main monorepo
	{
		files: ["packages/*/src/**/*.mjs", "tools/*/src/**/*.mjs", "verdafile.mjs"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.node,
				...globals.nodeBuiltin,

				...globals.es2021,
			},
		},

		rules: {
			semi: ["error", "always"],
			"no-var": "error",
			"no-console": 0,
			"no-constant-condition": ["error", { checkLoops: false }],
			"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
			"no-unused-vars": ["off"],
			complexity: ["warn", 16],
		},
	},
];
