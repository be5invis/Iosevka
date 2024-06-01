## Modifications since last major version

### 30.1.2

* Fix Te bar terminal for Cyrillic TeTse (`U+04B4`..`U+04B5`) and Tche (`U+A693`..`U+A694`) under sans italic/oblique when `T` (`cv19`) is serifed.
* Make presence of non-Te serifs of Cyrillic TeTse automatic.
* Add characters:
  - COMBINING KAVYKA ABOVE RIGHT (`U+1DF6`).
  - COMBINING KAVYKA ABOVE LEFT (`U+1DF7`).
  - DOTTED OBELOS (`U+2E13`).
  - DASH WITH LEFT UPTURN (`U+2E43`) ... DOTTED SOLIDUS (`U+2E4A`).
  - COMBINING CYRILLIC VZMET (`U+A66F`).
  - COMBINING CYRILLIC KAVYKA (`U+A67C`) ... CYRILLIC PAYEROK (`U+A67F`).
  - MODIFIER LETTER DOT VERTICAL BAR (`U+A717`) ... MODIFIER LETTER DOT HORIZONTAL BAR (`U+A719`).
  - CROSSED NEGATIVE SQUARED LATIN CAPITAL LETTER P (`U+1F18A`).
* Fix mark placement of Sideways U with Diaeresis (`U+1D1E`) when a CV/SS is applied to it (#2353).


### 30.1.1

* Fix broken Cyrillic Ef (#2343).


### 30.1.0

* Reduce fully-serifed variants of turned m (`U+019C`, `U+026F`, `U+0270`) and Cyrillic Italic Lower {Sha|Scha} (`U+0448`, `U+0449`) under monospace.
* Add characters:
  - WATCH (`U+231A`).
  - HOURGLASS (`U+231B`).
  - ALARM CLOCK (`U+23F0`) ... HOURGLASS WITH FLOWING SAND (`U+23F3`).
  - SQUAT BLACK RIGHTWARDS ARROW (`U+27A7`).
  - CYRILLIC CAPITAL LETTER DZWE (`U+A682`).
  - CYRILLIC SMALL LETTER DZWE (`U+A683`).
  - CYRILLIC CAPITAL LETTER CCHE (`U+A686`).
  - CYRILLIC SMALL LETTER CCHE (`U+A687`).
  - CYRILLIC CAPITAL LETTER TCHE (`U+A692`) ... CYRILLIC SMALL LETTER HWE (`U+A695`).
  - LATIN SMALL LETTER U WITH SHORT RIGHT LEG (`U+AB4E`).
  - LATIN SMALL LETTER U BAR WITH SHORT RIGHT LEG (`U+AB4F`).
  - LATIN SMALL LETTER DEZH DIGRAPH WITH PALATAL HOOK (`U+1DF12`).
  - LATIN SMALL LETTER TESH DIGRAPH WITH PALATAL HOOK (`U+1DF17`).
  - WINE GLASS (`U+1F377`).
  - BELL (`U+1F514`).
  - LEFTWARDS ARROW WITH SMALL TRIANGLE ARROWHEAD (`U+1F800`) ... DOWNWARDS ARROW WITH LARGE TRIANGLE ARROWHEAD (`U+1F80B`).
  - LEFTWARDS ARROW WITH SMALL EQUILATERAL ARROWHEAD (`U+1F810`) ... DOWNWARDS HEAVY ARROW (`U+1F847`).


### 30.0.1

* Remove top-left serifs of `z`-parts of phonetic digraphs involving `d` (`U+02A3`..`U+02A5`, `U+AB66`).
* Fix stroke width of hook part of LATIN CAPITAL LETTER ENG (`U+014A`) under heavy weight.
* Add characters:
  - LATIN SMALL LETTER L WITH BELT AND PALATAL HOOK (`U+1DF13`) ... LATIN SMALL LETTER R WITH FISHHOOK AND PALATAL HOOK (`U+1DF16`).
  - LATIN SMALL LETTER EZH WITH PALATAL HOOK (`U+1DF18`).
  - LATIN SMALL LETTER I WITH STROKE AND RETROFLEX HOOK (`U+1DF1A`).
  - LATIN SMALL LETTER O WITH RETROFLEX HOOK (`U+1DF1B`).
  - LATIN SMALL LETTER C WITH RETROFLEX HOOK (`U+1DF1D`).


### 30.0.0

* \[**Breaking**\] A separate variant selector, `tittle`, was added to allow users to configure the shape of the dots in `i` and `j` separately.
  - As a result, feature tags for `cv95` ... `cv99`, `VSAA` ... `VSAQ` are shifted by one place to `cv96` ... `cv99` `VSAA`, `VSAB` ... `VSAR`.
* \[**BREAKING**\] Add `semi-chancery-straight-serifed` and `semi-chancery-curly-serifed` variants for `x` (`cv48`). As a result, variants of `x` are reordered. Change of variant names:
  - `x`.`semi-chancery-straight` → `x`.`semi-chancery-straight-serifless`
  - `x`.`semi-chancery-curly` → `x`.`semi-chancery-curly-serifless`
* Refine shape of CYRILLIC CAPITAL LETTER SHHA (`U+04BA`).
* Fix leaning mark anchors for letters with top hooks (`U+0187`, `U+0188`, `U+0193`, `U+0199`, `U+01A5`, `U+01AD`, `U+0253`, `U+0257`, `U+0260`, `U+0266`, `U+0267`, `U+0284`, `U+029B`, `U+0280`, `U+1D91`, `U+1DF09`).
* Fix H bar position of CYRILLIC {CAPITAL|SMALL} LETTER NJE (`U+040A`, `U+045A`).
* Fix earedness of Bulgarian Cyrillic Lower Pe (`U+043F`).
* Add Italic form for CYRILLIC SMALL LETTER REVERSED TSE (`U+A661`).
* Make CYRILLIC SMALL LETTER REVERSED YU (`U+A655`) follow tailed variants of Cyrillic Lower Yery (`cv82`).
* Fix mapping of LEFT-FACING SNAKE HEAD WITH OPEN MOUTH (`U+1CC70`) ... DOWN-FACING SNAKE HEAD WITH CLOSED MOUTH (`U+1CC77`).
* Add characters:
  - BOTTOM RIGHT CROP (`U+230C`) ... TOP LEFT CROP (`U+230F`).
  - KEYBOARD (`U+2328`).
  - COUNTERBORE (`U+2334`).
  - LESS-THAN ABOVE SIMILAR OR EQUAL (`U+2A8D`).
  - GREATER-THAN ABOVE SIMILAR OR EQUAL (`U+2A8E`).

