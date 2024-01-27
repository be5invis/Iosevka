## Modifications since last major version

### 28.0.7

* Make superscript/subscript/overscript Cyrillic characters obey localization forms of base letters (#2177).
* Add IPA localization forms for Greek Lower Beta (`β`) and Chi (`χ`).
* Add APLF variants for `U+25F0`, `U+25F3`, and `U+25F4`.
* Make Ezh follow variants of `Z`/`z` (#1957).
* Fix serif form for Cyrillic Lower Tall / Iotified Yat (#2178).
* Make top serifs of Cyrillic Lower Straight U (`ү`, `ұ`) and Latin Lower Gamma (`ɣ`) respond to italics.
* Fix leaning marks of Capital Turned/Half H (`U+2C75`, `U+2C76`, `U+A78D`, `U+A7F5`, `U+A7F6`).
* Fix leaning marks of Wynn (`U+01BF`, `U+01F7`).
* Fix leaning marks of Insular R (`U+A782`, `U+A783`).
* Fix leaning marks of Greek/Latin Beta (`U+03B2`, `U+A7B4`, `U+A7B5`).
* Fix leaning marks of Greek Lower San (`U+03FB`).


### 28.0.6

* Fix application of `APLF` for several [Uiua](https://www.uiua.org/) operators.
* Adjust serif shapes for lowercase italic Yeri glyphs with corner body shape (#2151).
* Adjustments to CV defaults:
  - Make `a` (`cv26`) use `single-storey-tailed` under slab italic by default.
  - Make `b` (`cv27`) use `toothed-motion-serifed` under slab italic by default.
  - Make `g` (`cv32`) use `single-storey-serifless` under slab italic by default.
  - Make `q` (`cv41`) use `straight-bottom-serifed` under slab italic by default.


### 28.0.5

* Add characters:
  - LIGHTNING (`U+2607`) (#2158).
  - SUBSET WITH DOT (`U+2ABD`).
  - SUPERSET WITH DOT (`U+2ABE`).
* Add untagged variant selector for Cyrillic Capital Ef (`Ф`) for style-driven variation.
* Allow turned h (`ɥ`) and turned m with long leg (`ɰ`) to use toothless-corner variants.
* Fix leaning marks of Turned/Reversed Sans-Serif Capital L.
* Fix leaning marks of Cyrillic Tall Te.
* Fix leaning marks of Greek Lower Mu/Rho.
* `APLF` feature will apply to all [Uiua](https://www.uiua.org/) operators.


### 28.0.4

* Fix leaning marks of turned capital F/L (#2137).
* Fix overlay bar placement of Z with Hook and Z with Swash Tail (#2141).
* Fix attachment of descender parts of Cyrillic Lower Ha/X under `x` = `cursive` (#2142).
* Make the Eng part in LATIN SMALL LETTER FENG DIGRAPH always connected to the f part (#2143).
* Fix top bar shape in CYRILLIC CAPITAL LETTER DJE (#2145).
* Fix leaning marks placement for reversed k/F/P (#2150).


### 28.0.3

* Add characters:
  - COMBINING SUSPENSION MARK (`U+1DC3`).
  - FROWN (`U+2322`).
  - SMILE (`U+2323`).
  - CIRCLE WITH HORIZONTAL BAR (`U+29B5`).
  - LATIN CAPITAL LETTER P WITH STROKE THROUGH DESCENDER (`U+A750`) (#1797).
  - LATIN SMALL LETTER P WITH STROKE THROUGH DESCENDER (`U+A751`) (#1797).
* Remove tailless variants for Latin Iota (`U+0196`, `U+0269`) and Cyrillic Iota (`U+A646`, `U+A647`).
* Fix slash ligations when `frac` feature is enabled (#2130).
* Fix leaning marks of turned `r` (#2133).


### 28.0.2

* Add characters:
  - LATIN CAPITAL LETTER AU (`U+A736`) (#1689).
  - LATIN SMALL LETTER AU (`U+A737`) (#1689).
* Refine shape of Tshe and Cyrillic Capital Letter Te with Middle Hook (`U+A68A`) (#2123).
* Remove bottom serif of Cyrillic Small Letter Ghe with Middle Hook (`U+0495`) under italics.
* Make serif variants of Cyrillic Small Letter Tall Te (`U+1C84`) respond to italics.
* Make terminal serif behavior of palatalized Komi consonants (`U+0502`...`U+0505`, `U+0508`...`U+050F`) more consistent with each other.
* Refine serifs of Turned M (`U+019C`, `U+026F`, `U+0270`, `U+1D1F`, `U+1D5A`, `U+1DAD`), Cyrillic Sha (`U+0448`, `U+2DF2`, `U+1E046`, `U+1E064`), and Cyrillic Shcha (`U+0449`, `U+2DF3`) under monospace.


### 28.0.1

* Add italic form of CYRILLIC SMALL LETTER TE WITH MIDDLE HOOK (`U+A68B`) (#2119).
* Add missing feature tag to chaining plus ligation (#2118).
* Make the central part of Cyrillic Twe to follow lowercase Tau variants (#2122).


### 28.0.0

* \[**BREAKING**\] The filenames and package filenames are changed.
   - They will now use PascalCase instead of kebab-case.
   - To package manager maintainers: Please upgrade your script to make it capable to download and install the fonts under new names, and properly uninstall the fonts under old names.
* \[**BREAKING**\] Certain properties in the build plans are changed to camelCase. Using them will trigger a build failure.
   - `no-cv-ss` → `noCvSs`
   - `no-ligation` → `noLigation`
   - `export-glyph-names` → `exportGlyphNames`
   - `build-texture-feature` → `buildTextureFeature`
   - `metric-override` → `metricOverride`
   - `compatibility-ligatures` → `compatibilityLigatures`
   - `exclude-chars` → `excludeChars`
   - `webfont-formats` → `webfontFormats`
* \[**BREAKING**\] The "SGr" TTC packages for Iosevka Aile and Etoile will no longer be generated, as they are duplicates to the non-SGr TTC packages.
* \[**BREAKING**\] Reorder of glyph variants:
   - Influenced characters: `M`, `R`, `f`, `i`, `l`, `t`, `x`, Long S (`ſ`), Lower Lambda (`λ`), Lower Tau (`τ`), Lower Chi (`χ`), Cyrillic Lower Em (`м`), Cyrillic Lower Ef (`ф`), Cyrillic Ya (`Я`, `я`), `5`.
* \[**BREAKING**\] Tags for variant features for Cyrillic lowercase Er and U are changed to `cv76` and `cv78`.
   - Various other glyph variant tags are also changed to reflect this insertion.
* \[**BREAKING**\] Make the ligation group names for symbol connections more intuitive, and add alternatives to start chaining from at least 3 continuous characters (#2100):
   - `plusplus` → `plus-plus`, `plus-plus-plus`.
   - `connected-hyphen` → `minus-minus`, `minus-minus-minus`.
   - `connected-tilde-as-wave` → `tilde-tilde`, `tilde-tilde-tilde`.
   - `connected-underscore` → `underscore-underscore`, `underscore-underscore-underscore`.
   - `connected-number-sign` → `hash-hash`, `hash-hash-hash`.
* Add Characters:
  - CYRILLIC CAPITAL LETTER LHA (`U+0514`) ... CYRILLIC SMALL LETTER YAE (`U+0519`) (#2018).
  - GEORGIAN PARAGRAPH SEPARATOR (`U+10FB`).
  - COMBINING BREVE-MACRON (`U+1DCB`) ... COMBINING MACRON-BREVE (`U+1DCC`) (#1880).
  - COMBINING DOUBLE CIRCUMFLEX ABOVE (`U+1DCD`).
  - COMBINING LATIN SMALL LETTER FLATTENED OPEN A ABOVE (`U+1DD3`).
  - COMBINING DELETION MARK (`U+1DFB`).
  - LINE SEPARATOR (`U+2028`) ... PARAGRAPH SEPARATOR (`U+2029`).
  - TRIANGLE-HEADED RIGHTWARDS ARROW (`U+279D`).
  - LONG RIGHTWARDS SQUIGGLE ARROW (`U+27FF`).
  - LEFTWARDS DOUBLE ARROW WITH VERTICAL STROKE (`U+2902`) ... LEFT RIGHT DOUBLE ARROW WITH VERTICAL STROKE (`U+2904`).
  - LONG LEFTWARDS SQUIGGLE ARROW (`U+2B33`).
  - DOWNWARDS TRIANGLE-HEADED ZIGZAG ARROW (`U+2B4D`).
  - RAISED SQUARE (`U+2E0B`).
  - HYPODIASTOLE (`U+2E12`).
  - TWO DOTS OVER ONE DOT PUNCTUATION (`U+2E2A`) ... FIVE DOT MARK (`U+2E2D`).
  - LATIN SMALL LETTER U WITH LEFT HOOK (`U+AB52`).
  - MODIFIER LETTER SMALL U WITH LEFT HOOK (`U+AB5F`).
* Add hook-inward-serifed variants for `a` (#2085).
* Add single-storey-double-serifed and single-storey-tailed-serifed variants for `a` and Greek Lower Alpha (`α`) (#1949).
  - Make `a`.`single-storey-tailed-serifed` the default for slab italic to match `g` and `q`.
* Add bottom-serifed variants for `d`, and `q`.
* Add bottom-right-serifed variants for `U`.
* Add tailless variants for Greek Lower Iota (`ι`).
* Make Greek Lower Iota (`ι`) and Greek Lower Tau (`τ`) semi-tailed under default upright and tailed under default italic.
* Remove earless-rounded variants for `U+01A5`, `U+0256`, `U+02A0`, and `U+1D91`.
* Remove earless-corner variants for `U+027E`.
* Improve serifs for turned k (`U+029E`) to match `q` and turned h (`U+0265`).
* Improve top-left serif for LATIN SMALL LETTER KRA (`U+0138`) to match `k`.
* Make Greek Kappa (`U+03BA`) respond to more serif variants for `k` (`cv36`).
* Add a top-left serif to GREEK SMALL LETTER HETA (`U+0371`) under slab.
* Add a serif to MATHEMATICAL DOUBLE-STRUCK SMALL J (`U+1D55B`) to match that of MATHEMATICAL DOUBLE-STRUCK SMALL I (`U+1D55A`).
* Improve vertical alignmant of bowl for LATIN CAPITAL LETTER THORN WITH STROKE (`U+A764`) and LATIN CAPITAL LETTER THORN WITH STROKE THROUGH DESCENDER (`U+A766`).
* Stylistic set fixes:
  - Fix `cv10` for `ss01`, `ss02`, and `ss08` under slab.
  - Fix `cv53` for `ss16`.
  - Fix `cv64` and `cv65` for `ss07`.
  - Fix `cv66` for `ss17`.
  - Fix `cv81` and `cv82` for `ss03` and `ss08` under italic slab.
  - Fix `cv93` for `ss01`.
  - Fix `vsAJ` for `ss10`.
  - Fix `vlAB` for `ss09` and `ss14`.
  - Fix `vlAD` for `ss05` and `ss14`.

