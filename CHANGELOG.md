## Modifications since last major version

### 27.3.0

* Make the tailed variants of `i` and `l` use the fully-tailed shape even when upright, as is consistent with `t = bent-hook` (#1692).
  - The old, slightly-curly variants for `i`, `l`, iota (`ι`) and tau (`τ`) are moved to `semi-tailed` variants.
  - Corresponded SSes are changed to keep the shape identical to the old version.
* Make Cyrillic Yat to follow Yeri variants. Italic Yat will also respond to variants of `n` (#2047).
* Add short-tailed lowercase tau (`τ`) (#2050).
* Fix tailed variants for `U+02A0`.
* Stylistic set fixes:
  * Fix `cv44` and `cv99` for `ss13`.
  * Fix `cv48` and `cv54` for `ss17`.
  * Fix `cv51` for Etoile.
  * Fix `cv52` for `ss15` and Etoile.
  * Fix `cv58` for `ss15`.
  * Fix `cv59` for `ss07`.
  * Fix `cv61` for `ss15` and `ss17`.
  * Fix `cv66` for `ss01`, `ss06`, and `ss15`.
  * Fix `vsAF` for `ss11`.
  * Fix `vsAL` for `ss09` and `ss18`.


### 27.2.1

* Refine shape of flat `5` (#2030).
* Fix `ss02`, `ss04`, `ss06`, `ss13`, `ss17`'s application on `i` and `j` (#2033).
* Add tailed lower lambda (#2036).
* Add Chancery and Semi-Chancery variants for lowercase `x` and Greek Chi (#2037).
* Add `arrow-lr` ligation group for C-like's spaceship operators (#2041).
* Add raised cap-height cent sign (`¢`) variants to `VSAM` (#2044).
* Fix `cv02`, `cv04`, `cv05`, `cv06`, `cv11`, `cv12`, `cv15`, `cv17`, `cv18`, `cv25`, `cv28`, `cv43`, `cv70`, `cv71`, `cv81`, and `cv82` for `ss17` under slab.


### 27.2.0

* Add characters
  - TELEPHONE RECORDER (`U+2315`) (#2020).
  - COUNTERSINK (`U+2335`) (#2020).
  - BROKEN CIRCLE WITH NORTHWEST ARROW (`U+238B`) (#2020).
  - TRIPLE PLUS (`U+29FB`) (#2020).
* Correction of letter assignments for stylistic styles:
  - Fix `cv10` and `cv30` for `ss14`.
  - Fix `cv12`, `cv36`, and `cv82` for `ss16`.
  - Fix `cv22`, `cv31`, `cv47`, and `cv91` for `ss07`.
  - Fix `cv26` for `ss07`, `ss14`, and `ss15`.
  - Fix `cv28`, `cv43`, and `cv70` for `ss01`, `ss04`, `ss05`, `ss06`, `ss07`, `ss13`, and `ss16`.
  - Fix `cv55` for `ss03`, `ss09`, `cv12`, and `ss14`.
  - Fix `cv53` and `cv84` for `ss10`.
  - Fix `cv58` for `ss06` and `ss10`.
  - Fix `cv59` for `ss09` and `ss18`.
  - Fix `cv61` for `ss08` and `ss20`.
  - Fix `cv62` for `ss01`.
  - Fix `cv63` for `ss02`, `ss05`, and `ss12`.
  - Fix `cv68` for `ss03`.
  - Fix `cv72` for `ss03`, `ss05`, `ss06`, `cv07`, and `ss13`.
  - Fix `cv77` for `ss03`, `ss04`, `ss06`, `ss07`, `ss08`, `ss12`, `ss13`, and `ss18`.
  - Fix `cv79` and `cv80` for `ss01`, `ss02`, `ss04`, `ss05`, `ss06`, `ss07`, `ss09`, `ss12`, `ss13`, `ss14`, `ss16`, `ss18`, and Aile.
  - Fix `cv88` for `ss18`.
  - Fix `vsAA` and `vsAM` for `ss06`.
  - Fix `vsAG` for `ss03` and Etoile.


### 27.1.0

* \[**Breaking**\] Change of variant names:
  - `five`.`vertical-upper-left-bar` → `five`.`upright-arched`
  - `five`.`oblique-upper-left-bar` → `five`.`oblique-arched`
* Add characters:
  - CYRILLIC CAPITAL LETTER DCHE (`U+052C`) (#1897).
  - CYRILLIC SMALL LETTER DCHE (`U+052D`) (#1897).
* Add separate variant selector `VXAA` for Cyrillic Lower Er (`р`) (#2006).
* Add separate variant selector `VXAB` for Cyrillic Lower U (`у`) (#2006).
* Add flat middle stroke variant for `5` (#1995).
* Fix variants for Serbian Cyrillic Lower Pe (`п`).


### 27.0.2

* Add Characters
  - LATIN LETTER SMALL CAPITAL R WITH RIGHT LEG (`U+AB46`).
* Add variants for Cyrillic lower Ef (`ф`) with a split bowl (#1992).
* Add Bulgarian local variants for Cyrillic Ef (`Ф`,`ф`).
* Fix serifs in `U+01A6`.
* Improve serifs of Turn M (`U+019C`, `U+026F`) under quasi-proportional.
* Make Turn h (`U+0265`) and Turn M with Long Leg (`U+0270`) follow serif variants of `u`.
* Optimize geometry for `U+A65A` and `U+A65B` under extended width.
* Fix assignment of `8` for `ss14` (#1999).


### 27.0.1

* Add Characters
  - VERY MUCH LESS-THAN (`U+22D8`) (#1990).
  - VERY MUCH GREATER-THAN (`U+22D9`) (#1990).


### 27.0.0

* \[**Breaking**\] Variants for `π`, `τ` and `«` are inserted into the main tag sequence. As a consequence, variant features after them have the tags changed.
* \[**Breaking**\] Reordered variants of Eszet.
* \[**Breaking**\] Change of variant names:
  - `upper-r`.`straight-motion-serifed` → `upper-r`.`straight-top-left-serifed`
  - `upper-r`.`curly-motion-serifed` → `upper-r`.`curly-top-left-serifed`
  - `upper-r`.`standing-motion-serifed` → `upper-r`.`standing-top-left-serifed`
  - `upper-r`.`straight-open-motion-serifed` → `upper-r`.`straight-open-top-left-serifed`
  - `upper-r`.`curly-open-motion-serifed` → `upper-r`.`curly-open-top-left-serifed`
  - `upper-r`.`standing-open-motion-serifed` → `upper-r`.`standing-open-top-left-serifed`
* Add characters:
  - COMBINING RING OVERLAY (`U+20D8`).
* Add bottom-right and top-left bottom-right serifed variants of `R`.
* Add bottom-left motion serifed variants of Cyrillic Ya (`Я`,`я`).
* Add cursive variants for Cyrillic Capital/Small Zhe (`Ж`,`ж`) (#1762).
* Allow R Rotunda (`U+A75A`, `U+A75B`) and Indian Rupee Sign (`U+20B9`) to have a bottom-right serif.
* Add OpenType `zero` feature (#1966).
* Fix broken geometry of `U+AB3A` under condensed width.
* Improve bowl shape of Latin Phi (`U+0278`).
* Fix dot radius of COMBINING THREE DOTS ABOVE (`U+20DB`), COMBINING FOUR DOTS ABOVE (`U+20DC`), and COMBINING TRIPLE UNDERDOT (`U+20D8`).

