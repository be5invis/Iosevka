## Modifications since last major version

### 31.6.1

- Fix broken accent stacking behavior for partially precomposed characters with leaning anchors (#2492).


### 31.6.0

* Add Latin localization forms for Polish and Romanian.
* Make Combining Square Below (`U+033B`) slightly narrower.
* Improve glyph visual for Combining Suspension Mark (`U+1DC3`).
* Make Cyrillic Capital/Small Letter Uk (`U+0478`..`U+0479`) slightly narrower under Quasi-Proportional.
* Make Cyrillic Capital/Small Letter Round Omega (`U+047A`..`U+047B`) slightly wider under Quasi-Proportional.


### 31.5.0

* Add characters:
  - KAYAH LI SIGN CWI (`U+A92E`).
  - ZERO WIDTH NON-BREAKING SPACE (`U+FEFF`).
* Add APL form (`APLF`) for `U+25E0` and `U+25E1`, for UIUA.
* Add Cyrillic localization forms for Bashkir and Chuvash.


### 31.4.0

* Add characters:
  - OCR HOOK (`U+2440`) .. OCR BOW TIE (`U+2445`) (#2465).
* Add slanted dollar and cent sign (#2408).
* Add round-top capital A (#2472).
* Fix `cv41` application to `ss01`, `ss02`, `ss04`, `ss06`, and `ss15`.
* Fix `cv54` application to `ss01`, `ss03`, `ss04`, `ss06`, `ss07`, `ss09`, `ss12`, `ss14`, `ss15`, `ss17`, and `ss18`.
* Fix `cv62` application to `ss01`, `ss02`, `ss04`, `ss07`, `ss09`, `ss13`, `ss15`, `ss16`, and `ss18`.


### 31.3.0

* Add `diagonal-tailed-cursive` variants for Cyrillic Lower Ef (`cv93`).
* Add `rounded-vertical-sides` variants for Capital/Lower W (`cv32`, `cv57`).
* Make Aile and Etoile use `straight` variants for `brace` and `guillemet`.
* Prevent clipping of texture-extended glyphs in Kitty.


### 31.2.0

* Add variant selectors for Greek lower Phi/Psi (`VXAG`, `VXAH`).
* Optimize cross position for Cyrillic Lower Straight U (`U+04AF`, `U+04B1`).
* Optimize glyph shape for `lower-gamma`.`straight` and `lower-gamma`.`curly`.
* Optimize glyph shape for `U+1DF15`.


### 31.1.0

* Add characters:
  - BLACK-LETTER CAPITAL H (`U+210C`) (#714).
  - BLACK-LETTER CAPITAL I (`U+2111`) (#714).
  - BLACK-LETTER CAPITAL R (`U+211C`) (#714).
  - BLACK-LETTER CAPITAL Z (`U+2128`) (#714).
  - BLACK-LETTER CAPITAL C (`U+212D`) (#714).
  - LATIN SMALL LETTER BLACKLETTER E (`U+AB32`) (#2443).
  - LATIN SMALL LETTER BLACKLETTER O (`U+AB3D`) (#2443).
  - LATIN SMALL LETTER BLACKLETTER O WITH STROKE (`U+AB3E`) (#2443).
  - LEFT-POINTING ROCKET SHIP (`U+1CC56`) ... DOWN-POINTING ROCKET SHIP (`U+1CC59`) (Proposed for Unicode 16; L2/21-235).
  - LEFT-POINTING ATOMIC BOMB (`U+1CC60`) ... DOWN-POINTING ATOMIC BOMB (`U+1CC63`) (Proposed for Unicode 16; L2/21-235).
  - LEFT-POINTING RIFLE (`U+1CC65`) ... DOWN-POINTING RIFLE (`U+1CC68`) (Proposed for Unicode 16; L2/21-235).
  - MOON LANDER (`U+1CDF5`) (Proposed for Unicode 16; L2/21-235).
  - UP-POINTING FROG (`U+1CDFB`) (Proposed for Unicode 16; L2/21-235).
  - DOWN-POINTING FROG (`U+1CDFC`) (Proposed for Unicode 16; L2/21-235).
  - MATHEMATICAL FRAKTUR CAPITAL A (`U+1D504`) .. MATHEMATICAL FRAKTUR SMALL Z (`U+1D537`) (#444).
  - MATHEMATICAL BOLD FRAKTUR CAPITAL A (`U+1D56C`) .. MATHEMATICAL BOLD FRAKTUR SMALL Z (`U+1D59F`) (#444).
* Add separate variant selectors for Cyrillic Capital En/Er (`VXAA`, `VXAB`).
* Add variant selectors for Greek lower Beta/Gamma/Nu/Upsilon (`VXAC`, `VXAD`, `VXAE`, `VXAF`).
* Optimize glyph for VERTICAL LINE WITH MIDDLE DOT (`U+2327`).
* Improve `k` (`cv46`) and `x` (`cv58`) variants used by `ss03`, `ss08`, `ss09`, `ss10`, `ss12`, `ss14`, and `ss18` under slab italic.


### 31.0.0

* \[**Breaking**] Changed the mapping between variants and OpenType tags:
  - Variants for digits (`1` .. `9`) are assigned to tag `cv01` ... `cv09`.
  - Variant for `0` is assigned to tag `cv10`.
  - Variants for basic Latin are assigned to tag `cv11` ... `cv60` (50 tags; `O` and `o` do not have variants).
  - Variants for extended Latin are assigned to tag `cv61` ... `cv66`.
  - Variants for Greek letters are assigned to tag `cv67` ... `cv78`.
  - Variants for Cyrillic letters are assigned to tag `cv79` ... `cv99` and `VAAA`.
  - Variants for dot shapes are assigned to tag `VDAA` ... `VDAD`.
  - Variants for symbol shapes are assigned to tag `VSAA` ... `VSAT`.
  - Variants for ligature shapes are assigned to tag `VLAA` ... `VLAG`.
  - Correspondence table

    <details>    

    | Selector Name | Tag in v30.x | Tag in v31 |
    | ------------- | ------------ | ---------- |
    | `one` | `cv86` | `cv01` |
    | `two` | `cv87` | `cv02` |
    | `three` | `cv88` | `cv03` |
    | `four` | `cv89` | `cv04` |
    | `five` | `cv90` | `cv05` |
    | `six` | `cv91` | `cv06` |
    | `seven` | `cv92` | `cv07` |
    | `eight` | `cv93` | `cv08` |
    | `nine` | `cv94` | `cv09` |
    | `zero` | `cv85` | `cv10` |
    | `capital-a` | `cv01` | `cv11` |
    | `capital-b` | `cv02` | `cv12` |
    | `capital-c` | `cv03` | `cv13` |
    | `capital-d` | `cv04` | `cv14` |
    | `capital-e` | `cv05` | `cv15` |
    | `capital-f` | `cv06` | `cv16` |
    | `capital-g` | `cv07` | `cv17` |
    | `capital-h` | `cv08` | `cv18` |
    | `capital-i` | `cv09` | `cv19` |
    | `capital-j` | `cv10` | `cv20` |
    | `capital-k` | `cv11` | `cv21` |
    | `capital-l` | `cv12` | `cv22` |
    | `capital-m` | `cv13` | `cv23` |
    | `capital-n` | `cv14` | `cv24` |
    | `capital-p` | `cv15` | `cv25` |
    | `capital-q` | `cv16` | `cv26` |
    | `capital-r` | `cv17` | `cv27` |
    | `capital-s` | `cv18` | `cv28` |
    | `capital-t` | `cv19` | `cv29` |
    | `capital-u` | `cv20` | `cv30` |
    | `capital-v` | `cv21` | `cv31` |
    | `capital-w` | `cv22` | `cv32` |
    | `capital-x` | `cv23` | `cv33` |
    | `capital-y` | `cv24` | `cv34` |
    | `capital-z` | `cv25` | `cv35` |
    | `a` | `cv26` | `cv36` |
    | `b` | `cv27` | `cv37` |
    | `c` | `cv28` | `cv38` |
    | `d` | `cv29` | `cv39` |
    | `e` | `cv30` | `cv40` |
    | `f` | `cv31` | `cv41` |
    | `g` | `cv32` | `cv42` |
    | `h` | `cv33` | `cv43` |
    | `i` | `cv34` | `cv44` |
    | `j` | `cv35` | `cv45` |
    | `k` | `cv36` | `cv46` |
    | `l` | `cv37` | `cv47` |
    | `m` | `cv38` | `cv48` |
    | `n` | `cv39` | `cv49` |
    | `p` | `cv40` | `cv50` |
    | `q` | `cv41` | `cv51` |
    | `r` | `cv42` | `cv52` |
    | `s` | `cv43` | `cv53` |
    | `t` | `cv44` | `cv54` |
    | `u` | `cv45` | `cv55` |
    | `v` | `cv46` | `cv56` |
    | `w` | `cv47` | `cv57` |
    | `x` | `cv48` | `cv58` |
    | `y` | `cv49` | `cv59` |
    | `z` | `cv50` | `cv60` |
    | `capital-eszet` | `VXAC` | `cv61` |
    | `long-s` | `cv51` | `cv62` |
    | `eszet` | `cv52` | `cv63` |
    | `lower-eth` | `cv53` | `cv64` |
    | `capital-thorn` | `VXAD` | `cv65` |
    | `lower-thorn` | `cv54` | `cv66` |
    | `lower-alpha` | `cv55` | `cv67` |
    | `capital-gamma` | `cv56` | `cv68` |
    | `capital-delta` | `cv57` | `cv69` |
    | `lower-delta` | `cv58` | `cv70` |
    | `lower-iota` | `cv59` | `cv71` |
    | `capital-lambda` | `cv60` | `cv72` |
    | `lower-lambda` | `cv61` | `cv73` |
    | `lower-mu` | `cv62` | `cv74` |
    | `lower-xi` | `cv63` | `cv75` |
    | `lower-pi` | `cv64` | `cv76` |
    | `lower-tau` | `cv65` | `cv77` |
    | `lower-chi` | `cv66` | `cv78` |
    | `cyrl-a` | `——` | `cv79` |
    | `cyrl-ve` | `——` | `cv80` |
    | `cyrl-capital-zhe` | `cv67` | `cv81` |
    | `cyrl-zhe` | `cv68` | `cv82` |
    | `cyrl-capital-ze` | `cv69` | `cv83` |
    | `cyrl-ze` | `cv70` | `cv84` |
    | `cyrl-capital-ka` | `cv71` | `cv85` |
    | `cyrl-ka` | `cv72` | `cv86` |
    | `cyrl-el` | `cv73` | `cv87` |
    | `cyrl-em` | `cv74` | `cv88` |
    | `cyrl-en` | `cv75` | `cv89` |
    | `cyrl-er` | `cv76` | `cv90` |
    | `cyrl-capital-u` | `cv77` | `cv91` |
    | `cyrl-u` | `cv78` | `cv92` |
    | `cyrl-ef` | `cv79` | `cv93` |
    | `cyrl-che` | `cv80` | `cv94` |
    | `cyrl-yeri` | `cv81` | `cv95` |
    | `cyrl-yery` | `cv82` | `cv96` |
    | `cyrl-capital-e` | `VXAA` | `cv97` |
    | `cyrl-e` | `VXAB` | `cv98` |
    | `cyrl-capital-ya` | `cv83` | `cv99` |
    | `cyrl-ya` | `cv84` | `VAAA` |
    | `tittle` | `cv95` | `VDAA` |
    | `diacritic-dot` | `cv96` | `VDAB` |
    | `punctuation-dot` | `cv97` | `VDAC` |
    | `braille-dot` | `VXAE` | `VDAD` |
    | `tilde` | `cv98` | `VSAA` |
    | `asterisk` | `cv99` | `VSAB` |
    | `underscore` | `VSAA` | `VSAC` |
    | `caret` | `VSAB` | `VSAD` |
    | `ascii-grave` | `VSAC` | `VSAE` |
    | `ascii-single-quote` | `VSAD` | `VSAF` |
    | `paren` | `VSAE` | `VSAG` |
    | `brace` | `VSAF` | `VSAH` |
    | `guillemet` | `VSAG` | `VSAI` |
    | `number-sign` | `VSAH` | `VSAJ` |
    | `ampersand` | `VSAI` | `VSAK` |
    | `at` | `VSAJ` | `VSAL` |
    | `dollar` | `VSAK` | `VSAM` |
    | `cent` | `VSAL` | `VSAN` |
    | `percent` | `VSAM` | `VSAO` |
    | `bar` | `VSAN` | `VSAP` |
    | `question` | `VSAO` | `VSAQ` |
    | `pilcrow` | `VSAP` | `VSAR` |
    | `partial-derivative` | `VSAQ` | `VSAS` |
    | `micro-sign` | `VSAR` | `VSAT` |
    | `lig-ltgteq` | `VLAA` | `VLAA` |
    | `lig-neq` | `VLAB` | `VLAB` |
    | `lig-equal-chain` | `VLAC` | `VLAC` |
    | `lig-hyphen-chain` | `VLAD` | `VLAD` |
    | `lig-plus-chain` | `VLAE` | `VLAE` |
    | `lig-double-arrow-bar` | `VLAF` | `VLAF` |
    | `lig-single-arrow-bar` | `VLAG` | `VLAG` |
  
    </details>
* \[**Breaking**] Reordered variants for Cyrillic Capital/Lower Ze.
* \[**Breaking**] Add `bilateral-motion-serifed` variants for Capital/Lower X. Change of variant names:
  - `capital-x`.`straight-motion-serifed` → `capital-x`.`straight-unilateral-motion-serifed`
  - `capital-x`.`curly-motion-serifed` → `capital-x`.`curly-unilateral-motion-serifed`
  - `x`.`straight-motion-serifed` → `x`.`straight-unilateral-motion-serifed`
  - `x`.`curly-motion-serifed` → `x`.`curly-unilateral-motion-serifed`
  - `lower-chi`.`straight-motion-serifed` → `lower-chi`.`straight-unilateral-motion-serifed`
  - `lower-chi`.`curly-motion-serifed` → `lower-chi`.`curly-unilateral-motion-serifed`
* \[**Breaking**] Add `semi-chancery-straight-serifed` and `semi-chancery-curly-serifed` variants for Greek Lower Chi. Change of variant names:
  - `lower-chi`.`semi-chancery-straight` → `lower-chi`.`semi-chancery-straight-serifless`
  - `lower-chi`.`semi-chancery-curly` → `lower-chi`.`semi-chancery-curly-serifless`
  - `lower-chi`.`straight-serifed` → `lower-chi`.`straight-bilateral-motion-serifed`
  - `lower-chi`.`curly-serifed` → `lower-chi`.`curly-bilateral-motion-serifed`
* Add separate variant selectors For Cyrillic Lower A/Ve (`cv79`, `cv99`).
* Optimize the shape of rounded `e` (#2424).

