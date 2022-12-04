## Modifications since version 2.x

### 16.6.0

 * Add characters:
  - LATIN CAPITAL LETTER P WITH STROKE (`U+2C63`) (#1448);
  - LATIN CAPITAL LETTER R WITH TAIL (`U+2C64`) (#1448);
  - LATIN SMALL LETTER A WITH STROKE (`U+2C65`) (#1448);
  - LATIN SMALL LETTER T WITH DIAGONAL STROKE (`U+2C66`) (#1448);
  - LATIN CAPITAL LETTER M WITH HOOK (`U+2C6E`) (#1448);
  - LATIN CAPITAL LETTER TURNED H (`U+A78D`) (#1451);
  - LATIN CAPITAL LETTER H WITH HOOK (`U+A7AA`) (#1451);
  - LATIN CAPITAL LETTER REVERSED OPEN E (`U+A7AB`) (#1451);
  - LATIN CAPITAL LETTER SCRIPT G (`U+A7AC`) (#1451);
  - LATIN CAPITAL LETTER L WITH BELT (`U+A7AD`) (#1451);
  - LATIN CAPITAL LETTER SMALL CAPITAL I (`U+A7AE`) (#1451);
  - LATIN CAPITAL LETTER J WITH CROSSED-TAIL (`U+A7B2`) (#1451);
  - LATIN CAPITAL LETTER CHI (`U+A7B3`) (#1451);
  - LATIN CAPITAL LETTER S WITH HOOK (`U+A7C5`) (#1451);
  - MODIFIER LETTER CAPITAL C (`U+A7F2`) (#1451);
  - MODIFIER LETTER CAPITAL F (`U+A7F3`) (#1451);
  - MODIFIER LETTER CAPITAL Q (`U+A7F4`) (#1451);


### 16.5.0

 * Improve T's metrics for Etoile (#1449).
 * Fix custom build of ligations when `ineq` is disabled but `ltgt-diamond-tag` or `ltgt-slash-tag` are enabled (#1450).


### 16.4.0

* Add ligation for C-style multiline comments (#1444).


### 16.3.6

 * Fix shape of y-ogonek (used by Elfdalian) (#1437).


### 16.3.5

 * Update Powerline line number and column number symbol (`U+E0A1`, `U+E0A3`) to follow other fonts’ design.


### 16.3.4

 * Fix inconsistent serifs in Exists and Forall sign (#1435).


### 16.3.3

 * Fix application of CV/SS on certain composites and some of the sample images (#1433).


### 16.3.2

 * Fix alignment of Ogonek in LATIN SMALL LETTER I WITH OGONEK (`U+012F`) at with `'cv34' = 5` (#1431).
 * Fix soft dot of LATIN SMALL LETTER I WITH OGONEK (`U+012F`) (#1432).


### 16.3.1

 * Fix shape of LATIN SMALL LETTER E WITH OGONEK (`U+0119`) (#1427).
 * Width grade will now influence marks' width.


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

