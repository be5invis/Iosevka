import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";

export default [
	js.configs.recommended,
	eslintPluginPrettierRecommended,
	importPlugin.flatConfigs.recommended,

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

			// eslint-import rules
			"import/no-unresolved": "off", // ESLint does not support subpath exports, but we do
			"import/no-extraneous-dependencies": "error",
			"import/newline-after-import": ["error", { count: 1 }],
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true },
				},
			],
		},
	},
];
