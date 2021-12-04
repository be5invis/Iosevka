## Modifications since version 2.x

### 11.2.0

 * Slightly reduce X-height by 0.01em foe better geometric balancing.
 * Make low-crossbar variants of `f` more distinctive with `crossbar-at-x-height` (#1254).
 * Add Fira Code V6's progress bar symbols.
 * Add BLACK FOUR POINTED STAR (`U+2726`) and WHITE FOUR POINTED STAR (`U+2727`).
 * Add MATHEMATICAL LEFT FLATTENED PARENTHESIS (`U+27EE`) and MATHEMATICAL RIGHT FLATTENED PARENTHESIS (`U+27EF`).
 * Add Hookless variants for `r` (#1255).


### 11.1.1

 * Fix broken geometry of SECTION SIGN (`U+00A7`) under extra-wide widths (#1252).
 * Fix broken geometry of K under extra-wide widths (#1253).


### 11.1.0

 * Add characters
   - MODIFIER LETTER CHINESE TONE YIN PING .. MODIFIER LETTER CHINESE TONE YANG RU (`U+A700` .. `U+A707`) (#1249).
   - LONG LEFTWARDS ARROW FROM BAR (`U+27FB`), LONG RIGHTWARDS ARROW FROM BAR (`U+27FC`) (#1251).
   - PITCHFORK (`U+22D4`).
   - ELEMENT OF WITH DOT ABOVE (`U+22F5`).
   - ELEMENT OF WITH TWO HORIZONTAL STROKES (`U+22F9`).

 * Fix serif of Cyrillic capital Ya under italics (#1250).


### 11.0.1

 * Fix custom builds with compatibility ligatures (#1248).


### 11.0.0

 * \[**Breaking**\] Fixed width and removal logic for Long Leftwards Arrow (`U+27F5`) and Long Rightwards Arrow (`U+27F6`) (#1245).
 * \[**Breaking**\] Fix the metrics of wide characters, making Extended families compatible with FontConfig’s “dual” width (#1247).
 * Change the shape of Eng (`U+014A`) into "N with Hook", to follow Unicode code chart (#1239).
 * Increase shoulder arc thickness of lowercase `r` for better thickness contrast (#1243).
 * Fix metrics of Swung Dash (`U+2053`) (#1246).

