## Modifications since last major version

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

