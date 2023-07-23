## Modifications since version 2.x

### 25.1.1

* Fix `U+1D786` variant selection (#1861).
* Fix serifs in `U+0257` and `U+026F` (#1862).


### 25.1.0

* Add Characters:
  - CYRILLIC CAPITAL LETTER ALEUT KA (`U+051E`) (#1839).
  - CYRILLIC SMALL LETTER ALEUT KA (`U+051F`) (#1839).
  - COMBINING DOUBLE PARENTHESES ABOVE (`U+1ABC`) (#1855).
  - COMBINING LATIN SMALL LETTER INSULAR T (`U+1ACE`) (#1811).
  - ORTHODOX CROSS (`U+2626`).
  - CROSS OF LORRAINE (`U+2628`).
  - LATIN CROSS (`U+271D`) (#1841).
  - LONG LEFT RIGHT ARROW (`U+27F7`) .. LONG LEFT RIGHT DOUBLE ARROW (`U+27FA`).
  - LONG LEFTWARDS DOUBLE ARROW FROM BAR (`U+27FD`).
  - LONG RIGHTWARDS DOUBLE ARROW FROM BAR (`U+27FE`).
  - LEFTWARDS DOUBLE ARROW FROM BAR (`U+2906`).
  - RIGHTWARDS DOUBLE ARROW FROM BAR (`U+2907`).
  - LATIN SMALL LETTER V WITH CURL (`U+2C74`) (#1857).
  - LATIN SMALL LETTER E WITH NOTCH (`U+2C78`) (#1857).
  - LEFT DOUBLE PARENTHESIS (`U+2E28`) (#1855).
  - RIGHT DOUBLE PARENTHESIS (`U+2E29`) (#1855).
  - LATIN CAPITAL LETTER INSULAR T (`U+A786`) (#1811).
  - LATIN SMALL LETTER INSULAR T (`U+A787`) (#1811).
  - LATIN SMALL LETTER L WITH INVERTED LAZY S (`U+AB37`) (#1673).
  - MODIFIER LETTER SMALL L WITH INVERTED LAZY S (`U+AB5D`) (#1673).
  - HEAVY LATIN CROSS (`U+1F547`).
  - CELTIC CROSS (`U+1F548`).
* Refine shape of `U+A666` and `U+A667` (#1838).
* Make `cv28` affect `U+0297`.
* Make `cv33` affect `U+0270`, `U+02AE`, and `U+02AF`.
* Make `cv42` affect serifs of `U+027F`.
* Make `cv45` affect Turned M (`U+019C`, `U+026F`).
* Make `cv46` affect serifs of V with Hook (`U+01B2`, `U+028B`).
* Make Cyrillic small ze have an inward serif under Italic Slab by default to match `c` and `s`.
* Fix variant assignment of `cv29` for `ss05`..`ss07`.
* Fix variant assignment of `cv45` for `ss01`..`ss10`, `ss13`, `ss15`, and `ss18`.
* Fix variant assignment of `cv61` and `cv62` for `ss01`..`ss04`, `ss08`, and `ss12`.
* Improve variant assignment of `cv46`..`cv50`, `cv66`, and `cv84` for `ss01`..`ss10`, `ss12`..`ss16`, and `ss18` under Italic Slab.
* Fix math sans-serif variant assignment for Greek Iota and Chi (#1847).
* Fix Greek dialytika display in Specimen (#1849).
* Unify tail length of Eszet and long-s (#1856).
* Make Latin (Small Capital | Modifier Letter) Reversed N (`U+1D0E`, `U+1D3B`) respond to `cv14` (#1852).
* Fix detached shape of `U+FB05` (#1858).


### 25.0.1

* Fix unnecessary serifs of U+03B7 GREEK SMALL LETTER ETA (#1837).


### 25.0.0

* \[**BREAKING**\] Add middle serifed and XH serifed variants for Long S (`U+017F`) without a baseline serif. As a result, current variants are reordered (#1807).
* \[**BREAKING**\] Add separate variant selector for CYRILLIC SMALL LETTER EM (`U+043C`). As a result, current variant selectors are reordered (#1825).
* \[**Breaking**\] Change of variant names:
  - `lower-mu`.`tailless` → `lower-mu`.`toothed-serifless`
  - `lower-mu`.`tailed` → `lower-mu`.`tailed-serifless`
  - `lower-mu`.`toothless-corner` → `lower-mu`.`toothless-corner-serifless`
  - `lower-mu`.`toothless-rounded` → `lower-mu`.`toothless-rounded-serifless`
  - `micro-sign`.`tailless` → `micro-sign`.`toothed-serifless`
  - `micro-sign`.`tailed` → `micro-sign`.`tailed-serifless`
  - `micro-sign`.`toothless-corner` → `micro-sign`.`toothless-corner-serifless`
  - `micro-sign`.`toothless-rounded` → `micro-sign`.`toothless-rounded-serifless`
* Add diamond-shaped zero (#1727).
* Add tailless bar, earless corner, and earless corner tailed variants for Greek Alpha (`U+03B1`).
* Add bottom serifed variant for Greek Gamma (`U+0393`).
* Add serifed variants for Greek Mu (`U+03BC`).
* Add Characters:
  - CYRILLIC CAPITAL LETTER DZZE (`U+A688`) (#1799).
  - CYRILLIC SMALL LETTER DZZE (`U+A689`) (#1799).
  - LATIN CAPITAL LETTER L WITH HIGH STROKE (`U+A748`).
  - LATIN SMALL LETTER L WITH HIGH STROKE (`U+A749`).
  - LATIN CAPITAL LETTER G WITH OBLIQUE STROKE (`U+A7A0`) ... LATIN SMALL LETTER S WITH OBLIQUE STROKE (`U+A7A9`) (#1818).
  - LATIN SMALL LETTER L WITH MIDDLE RING (`U+AB39`) (#1673).
  - MODIFIER LETTER CYRILLIC SMALL DZZE (`U+1E04A`) (#1799).
  - CIRCLED DOLLAR SIGN WITH OVERLAID BACKSLASH (`U+1F10F`).
  - CIRCLED C WITH OVERLAID BACKSLASH (`U+1F16E`).
* Fix reversed shape of `U+1D12` (#1814).
* Fix right leg height of LATIN CAPITAL LETTER INSULAR R (`U+A782`) and LATIN SMALL LETTER INSULAR R (`U+A783`).
* Fix effect of `cv23` on LATIN CAPITAL LETTER CHI (`A7B3`).
* Fix effect of `cv46` on LATIN SMALL LETTER TURNED V (`U+028C`).
* Make `cv36` affect LATIN SMALL LETTER KRA (`U+0138`) and GREEK SMALL LETTER KAPPA (`U+03BA`).
* Make `cv39` affect GREEK SMALL LETTER ETA (`U+03B7`).
* Fix variant assignment of `cv45` on `ss16`.
* Fix variant assignment of `cv72` on `ss12` and `ss15`.
* Fix variant assignment of `vxsa` on `ss09`.
* Fix variant assignment of `vxaa` on `ss16` and `ss17`.
* Fix variant assignment of `vxsg` and `vxsh` on `ss18`.
* Improve density of quadruple arrows for better legibility at smaller font sizes.
* Make capital Schwa respond to capital C variants (#1829).

