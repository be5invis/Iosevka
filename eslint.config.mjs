import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
	eslint.configs.recommended,
	eslintPluginPrettierRecommended,
	importPlugin.flatConfigs.recommended,
	...tseslint.configs.recommended,

	{
		ignores: [".next", "eslint.config.mjs", "next.config.js"],
	},

	{
		files: ["pages/*.tsx", "shared/**/*.ts", "shared/**/*.tsx"],

		rules: {
			semi: ["error", "always"],
			"no-var": "error",
			"no-console": 0,
			"no-constant-condition": ["error", { checkLoops: false }],
			"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
			"no-unused-vars": ["off"],
			complexity: ["warn", 32],

			// TypeScript config
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],

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
);
