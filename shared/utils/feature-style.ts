import type { FeatureAssignment } from "../data-import/grades";

type SizedKeys<T> = { readonly size: number; keys(): Iterable<T> };

/**
 * Render a per-character OpenType feature assignment as a `font-feature-settings` value.
 *
 * Eg:
 *
 * ```
 * { cv01: 2, ss08: 1 }
 * ```
 *
 * gets retured as:
 *
 * ```
 * 'cv01' 2,'ss08' 1
 * ```
 */
export function featureAssignmentToCss(f: FeatureAssignment): string {
	return Object.entries(f)
		.map(([tag, value]) => `'${tag}' ${value}`)
		.join(",");
}

function escapeRegExp(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildHotCharRegex(charSet: SizedKeys<string>): RegExp | null {
	if (!charSet.size) return null;
	// Build a capturing regex that matches any of the given characters
	return new RegExp(`(${Array.from(charSet.keys()).map(escapeRegExp).join("|")})`, "g");
}
