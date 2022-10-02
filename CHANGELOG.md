## Modifications since version 2.x

### 16.3.0

 * Add variant selector to remove notches for equality ligations (#1425).
 * Fix `cv40`'s application to CYRILLIC SMALL LETTER ER (`U+0440`) (#1426).


### 16.2.1

 * Fix shape of `p` @ `motion-serifed` (#1423).


### 16.2.0

* Add ligation set for HTML/XML/React tags (`<>`, `</`, `/>` and `</>`) (#1413).


### 16.1.0

* Add characters:
  - HEAVY ROUND-TIPPED RIGHTWARDS ARROW (`U+279C`) (#1401).
* Add ligation sets for Julia and Raku (#1386, #1391).


### 16.0.3

* Add characters:
  - HEAVY ROUND-TIPPED RIGHTWARDS ARROW (`U+279C`) (#1401).


### 16.0.2

 * Fix mapping of MODIFIER LETTER VERTICAL LINE (`U+02C8`) and MODIFIER LETTER LOW VERTICAL LINE (`U+02CC`) (#1407).
 * Fix shape of LATIN SMALL LETTER T WITH CURL (`U+0236`) (#1408).
 * Fix `cv99` application on ELEMENT OF WITH DOT ABOVE (`U+22F5`) (#1409).
 * Fix `cv33` application on Hwair (`U+0195`) (#1410).
 * Fix letterform of Cyrillic Small Letter Ghe With Upturn under Italic.


### 16.0.1

 * Fix `cv99` application on ASCII single quotes and graves (#1404).
 * Fix `cv44` application on certain t-derived letters (`U+01AB`, `U+0236`, `U+0288`, `U+1DB5`, and `U+20A7`) (#1405).
 * Fix shape of BLANK SYMBOL (`U+2422`, #1406).


### 16.0.0

 * \[**Breaking**\] Change the mechanism of variants of not-equal ligation (#1400):
   - The "dotted" ligation groups (`exeqeq-dotted`, `eqexeq-dotted`, `eqexeq-dl-dotted`, `exeq-dotted`) are removed.
   - A character variant, "lig-neq" (feature tag `VXAF`), is added to control the shape instead.
 * Ensure that the middle point between Typo Ascender and Descender lies on the middle of symbols/operators (#1398).

