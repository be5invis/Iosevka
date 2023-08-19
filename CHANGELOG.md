## Modifications since version 2.x

### 26.2.0

* Add variant selectors for lowercase Greek Pi (`π`) and Tau (`τ`) (#1924).
* Add characters:
  - CYRILLIC SMALL LETTER ROUNDED VE (`U+1C80`).
  - CYRILLIC SMALL LETTER TALL TE (`U+1C84`) (#1911).
  - CYRILLIC SMALL LETTER TALL HARD SIGN (`U+1C86`) (#1911).
  - CYRILLIC SMALL LETTER TALL YAT (`U+1C87`) (#1911).
  - LEFTWARDS OPEN-HEADED ARROW (`U+21FD`) ... LEFT RIGHT OPEN-HEADED ARROW (`U+21FF`) (#1912).
  - DIAMETER SIGN (`U+2300`) (#1923).
  - CIRCLE WITH SUPERIMPOSED X (`U+29BB`).
  - LEFTWARDS TWO-HEADED ARROW WITH TRIANGLE ARROWHEADS (`U+2BEC`) ... DOWNWARDS TWO-HEADED ARROW WITH TRIANGLE ARROWHEADS (`U+2BEF`).
  - CLOCK FACE ONE OCLOCK (`U+1F550`) ... CLOCK FACE TWELVE-THIRTY (`U+1F567`) (#1850).
* Make below marks to avoid bottom-right Ogoneks (#1789).
* Use oval shape for Empty Set symbols to distinguish with O-Slash (#1822).
* Implement leaning mark mechanism for `F`, `L`, `P`, `b`, `d`, `h`, `k`, `p`, `q`, `r` to get better mark placement. Now, "narrow" marks will align to these letters' extension parts (#1851).
* Add variant selection for Guillemets (#1899).
* Fix detached cedilla in Hookless asymmetric LATIN SMALL LETTER T WITH CEDILLA (`U+0163`) (#1914).
* Fix broken hookless/tailless/asymmetric `t` variants in `ﬅ` ligature (`U+FB05`) (#1915).
* Remove unnecessary tailed variants for Cyrillic Shha with Descender (`U+0527`) (#1916).
* Remove unnecessary lower-right serif variants for Latin Lower K with Descender (`U+2C6A`) (#1917).
* Add italic form of CYRILLIC SMALL LETTER KOMI TJE (`U+050F`) (#1920).
* Remove unnecessary serifed/tailed variants of italic Cyrillic Te with descender (`U+04AD`) and `m` with palatal hook (`U+1D86`) (#1926).
* Remove unnecessary bottom-right serifed variants of Cyrillic Ka with descender (`U+049A`..`U+049B`) (#1927).
* Fix two off-center APL Quad characters in Quasi-proportional (#1930).
* Refine shape of `U+0184`, `U+0185` (#1938).
* Determine serifs of Bulgarian/Serbian De automatically when `g` is double-storey.
* Fix variant assignment of `cv51` for `ss03` under italic slab.
* Fix variant assignment of `cv31`, `cv36`, `cv46`, `cv47`, `cv48`, `cv49`, and `cv51` for `ss18` under italic slab.


### 26.1.0

* Add characters:
  - RIGHT ARROW WITH SMALL CIRCLE (`U+21F4`) (#1900).
  - LEFT RIGHT ARROW THROUGH SMALL CIRCLE (`U+2948`) (#1900).
  - LEFT ARROW WITH SMALL CIRCLE (`U+2B30`) (#1900).
* Make Cyrillic Abkhasian Che respond to C's serifs (#1898).
* Make lowercase Wynn respond to thorn's serifs.
* Drop APL form for `U+220D` as it is not used by any APL languages (#1901).
* Add XH-height middle-serifed and dual-serifed variants for Eszet (#1904).
* Remove duplicate variant glyphs for `U+0272` (#1905).
* Make the top serif of Yogh (`U+021C`, `U+021D`) to follow Cyrillic Ze's variant selector (#1908).
* Merge duplicate variants of t with retroflex hook (`U+0288`, `U+1DF09`) (#1909).
* Fix detached palatal hook on `U+01AB`` when t is both hookless/tailless and asymmetric (#1910).
* Fix `cv36`, `cv46`, `cv47`, `cv48`, `cv49`, `cv50`, `cv61`, and `cv74` under Curly Slab.
* Fix serifs of `w` under Etoile Italic.


### 26.0.2

* Fix incorrect code assignment for `U+2B6E`, `U+2B6F`, `U+2B71`, `U+2B72` (#1895).
* Fix CYRILLIC CAPITAL LETTER KOMI SJE (`U+050C`) to follow serifs of `C` instead of `c` (#1896).


### 26.0.1

* Fix shape of `ij` in Aile under NWID.


### 26.0.0

* \[**Breaking**\] Add asymmetric variant to all `t` styles (#1836).
* \[**Breaking**\] Add separate variant selector for lowercase Thorn (#1854).
* \[**Breaking**\] Drop `tailed-top-left-serifed` variant of `n` as it duplicates with `tailed-motion-serifed` (#1859).
* \[**Breaking**\] Disunified the variant selector for Greek Delta and Greek Lambda, and added selectable serif variants for Lambda (#1866).
* \[**Breaking**\] Add serif variant selection for Eszet (#1881).
* \[**Breaking**\] Add a separate variant selector for lowercase Greek Chi.
* Add Characters:
  - COMBINING DOUBLED CIRCUMFLEX ACCENT (`U+1AB0`) (#1879).
  - COMBINING DOUBLE PLUS SIGN ABOVE (`U+1AC9`) (#1879).
  - COMBINING DOUBLE PLUS SIGN BELOW (`U+1ACA`) (#1879).
  - ANTICLOCKWISE GAPPED CIRCLE ARROW (`U+27F2`).
  - CLOCKWISE GAPPED CIRCLE ARROW (`U+27F3`).
  - ANTICLOCKWISE CLOSED CIRCLE ARROW (`U+2940`).
  - CLOCKWISE CLOSED CIRCLE ARROW (`U+2941`).
  - LEFTWARDS TRIANGLE-HEADED ARROW (`U+2B60`) ... DOWNWARDS TRIANGLE-HEADED ARROW TO BAR (`U+2B73`).
  - LEFTWARDS TRIANGLE-HEADED ARROW WITH DOUBLE HORIZONTAL STROKE (`U+2B7A`) ... DOWNWARDS TRIANGLE-HEADED PAIRED ARROWS (`U+2B87`).
  - LATIN CAPITAL LETTER K WITH DIAGONAL STROKE (`U+A742`).
  - LATIN SMALL LETTER K WITH DIAGONAL STROKE (`U+A743`).
  - LATIN CAPITAL LETTER K WITH STROKE AND DIAGONAL STROKE (`U+A744`).
  - LATIN SMALL LETTER K WITH STROKE AND DIAGONAL STROKE (`U+A745`).
  - LATIN CAPITAL LETTER VOLAPUK AE (`U+A79A`) ... LATIN SMALL LETTER VOLAPUK UE (`U+A79F`) (#1865).
  - CIRCLED ANTICLOCKWISE ARROW (`U+1F10E`).
  - CIRCLED HUMAN FIGURE (`U+1F16F`).
* Drop `<=` and `>=` as inequality for Verilog (#1864).
* Support variant selection for INCREMENT and NABLA (#1873).
* Add APL-specific form for `U+220A` (#1876).
* Enable `<>` ligation as diamond for C-like (#1878).
* Fix support for serifs in Rounded Schwa (#1883).
* Add script-cut corner to `U+0261` (#1887).
* Make Lowercase Schwa to respond to `c`'s serif variants (#1892).
* Fix variant selection for `cv27`, `cv33`, `cv36`, and `cv49` for `ss17` under italics.
* Make Greek Kappa respond to top-left serifed variants of `k`.
* Fix slabs for `U+019C`, `U+0257`, `U+026F`, and `U+0270`.
* Add single-storey variants support for `U+A657`.

