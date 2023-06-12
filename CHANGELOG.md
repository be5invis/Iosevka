## Modifications since version 2.x

### 24.1.3

* Add Characters:
  - LATIN CAPITAL LETTER INSULAR F (`U+A77B`) (#1786).
  - LATIN SMALL LETTER INSULAR F (`U+A77C`) (#1786).
  - LATIN CAPITAL LETTER INSULAR S (`U+A784`) (#1786).
  - LATIN SMALL LETTER INSULAR S (`U+A785`) (#1786).
* Fix missing U+1D7F mapping (#1787).
* Fix shape of U serifs (#1788).


### 24.1.2

* Add characters
  - LATIN SMALL LETTER SCRIPT G WITH CROSSED-TAIL (`U+AB36`).
  - LATIN SMALL LETTER M WITH CROSSED-TAIL (`U+AB3A`).
  - LATIN SMALL LETTER N WITH CROSSED-TAIL (`U+AB3B`).
  - LATIN SMALL LETTER ENG WITH CROSSED-TAIL (`U+AB3C`).
  - MODIFIER LETTER SMALL S WITH CURL (`U+107BA`).
  - LATIN SMALL LETTER S WITH CURL (`U+1DF1E`).
* Fix broken geometry of CYRILLIC CAPITAL LETTER ZHWE (`U+A684`) and CYRILLIC SMALL LETTER ZHWE (`U+A685`) under some settings of `cv63` and `cv64` (#1769).
* Improve glyphs of PITCHFORK WITH TEE TOP (`U+2ADA`) ... NONFORKING (`U+2ADD`) such that their terminals are of consistent height with each other.
* Fix alignment in various APL characters (#1771).
* Fix shape and variant selection for LATIN EPIGRAPHIC LETTER SIDEWAYS I (`U+A7F7`) (#1773).
* Fix combining mark anchors for LATIN CAPITAL LETTER UPSILON (`U+01B1`) and LATIN CAPITAL LETTER V WITH HOOK (`U+01B2`).
* Fix combining mark anchors for LATIN SMALL LETTER EZH WITH TAIL (`U+01BA`), LATIN SMALL LETTER D WITH CURL (`U+0221`), LATIN SMALL LETTER EZH WITH CURL (`U+0293`), and LATIN CAPITAL LETTER INSULAR G (`U+A77D`) (#1777).
* Fix shape of bent arrows (#1774).
* Fix placement of marks in phonetic ligatures (#1783).


### 24.1.1

* Add characters
  - CYRILLIC CAPITAL LETTER DZZHE (`U+052A`).
  - CYRILLIC SMALL LETTER DZZHE (`U+052B`).
  - COMBINING DOT ABOVE LEFT (`U+1DF8`) (#1597).
  - COMBINING DOT BELOW LEFT (`U+1DFA`) (#1597).
  - SALTIRE (`U+2613`).
  - MERCURY (`U+263F`).
  - MEDIUM SMALL WHITE CIRCLE (`U+26AC`).
  - NEUTER (`U+26B2`).
  - UPWARDS QUADRUPLE ARROW (`U+27F0`) (#1756).
  - DOWNWARDS QUADRUPLE ARROW (`U+27F1`) (#1756).
  - LEFTWARDS QUADRUPLE ARROW (`U+2B45`) (#1756).
  - RIGHTWARDS QUADRUPLE ARROW (`U+2B46`) (#1756).
  - CYRILLIC CAPITAL LETTER ZHWE (`U+A684`).
  - CYRILLIC SMALL LETTER ZHWE (`U+A685`).
  - LATIN EPIGRAPHIC LETTER INVERTED M (`U+A7FD`) (#1597).
  - MUSICAL SYMBOL DOUBLE SHARP (`U+1D12A`) (#1299).
  - MUSICAL SYMBOL DOUBLE FLAT (`U+1D12B`) (#1299).
  - MUSICAL SYMBOL QUARTER TONE SHARP (`U+1D132`).
  - MUSICAL SYMBOL QUARTER TONE FLAT (`U+1D133`).
  - LATIN SMALL LETTER REVERSED SCRIPT G (`U+1DF01`) (#1597).
  - LATIN SMALL LETTER REVERSED K (`U+1DF03`) (#1597).
  - LATIN SMALL LETTER REVERSED ENG (`U+1DF07`) (#1597).
* Fix hook alignment of LATIN SMALL LETTER T WITH HOOK AND RETROFLEX HOOK (`U+1DF09`) (#1754).
* Improve glyph of CROSS MARK (`U+274C`) to be both heavy and large to match its intended counterpart HEAVY LARGE CIRCLE (`U+2B55`).
* Disunify LATIN CAPITAL LETTER OMEGA (`U+A7B6`) and LATIN SMALL LETTER OMEGA (`U+A7B7`) from CYRILLIC CAPITAL LETTER BROAD OMEGA (`U+A64C`) and CYRILLIC SMALL LETTER BROAD OMEGA (`U+A64D`).
* Fix `cv86` application to HYPHEN WITH DIAERESIS (`U+2E1A`) (#1755).
* Make partial-derivative (`∂`) curly by default.
* Fix variant assignment of `cv31` under `ss07`.
* Fix variant assignment of `cv55` under `ss08`.
* Fix variant assignments of `cv59` under `ss08`, `ss10`, and `ss14`.
* Fix variant assignments of `cv76`, `cv80`, `cv89`, `cv91`, and `cv98` under `ss11`.
* Fix variant assignments of `VXSG` under `ss03`, `ss04`, `ss09`, `ss13`, and `ss18`.
* Fix variant assignments of `VXAA` under `ss01`, `ss02`, `ss03`, `ss04`, and `ss14`.
* Correct description of `k` and eszet (`ß`) variants.


### 24.1.0

 * Fix missing serif in cursive-motion-serifed variants of `y` (#1751).
 * Correct description of various character variants.
 * Disunify variant selectors of PARTIAL DIFFERENTIAL (`U+2202`) and LATIN SMALL LETTER ETH (`U+00F0`) (#1746).


### 24.0.0

* \[**BREAKING**\] Add taller slash, broken slash and broken zero variants for Zero. As a result, current variants are reordered (#1307, #1509, #1678).
* \[**BREAKING**\] Add above-baseline crossed variant for Q. As a result, current variants are reordered (#1533).
* \[**BREAKING**\] Add `threefold-solid-inline` variant for `@`. As a result, current variants are reordered (#1495).
* \[**BREAKING**\] Rectify the variant atlas. As a result, if a character's variant list has motion-serifed, then it will have serifless and serifed variants: the serifed-ness will no longer be controlled by SLAB variable. The characters influenced are `M`, `N`, `P`, `R`, `U`, `V`, `W`, `b`, `h`, `m`, `n`, `p`, `q`, `u`, `v`, `w`, `y`.
* \[**BREAKING**\] Renamed and/or reordered various variants.
* Add Characters:
  - VERTICAL BAR WITH HORIZONTAL STROKE (`U+27CA`).
  - ELEMENT OF OPENING UPWARDS (`U+27D2`).
  - TRIPLE VERTICAL BAR DELIMITER (`U+2980`).
  - Z NOTATION SPOT (`U+2981`).
  - DOTTED FENCE (`U+2999`).
  - CIRCLED ANTICLOCKWISE-ROTATED DIVISION SIGN (`U+29BC`).
  - CIRCLED WHITE BULLET (`U+29BE`).
  - CIRCLED BULLET (`U+29BF`).
  - SQUARED RISING DIAGONAL SLASH (`U+29C4`) ... SQUARED SQUARE (`U+29C8`).
  - EQUALS SIGN AND SLANTED PARALLEL (`U+29E3`) ... IDENTICAL TO AND SLANTED PARALLEL (`U+29E5`).
  - THERMODYNAMIC (`U+29E7`).
  - REVERSE SOLIDUS OPERATOR (`U+29F5`) ... REVERSE SOLIDUS WITH HORIZONTAL STROKE (`U+29F7`).
  - PLUS SIGN WITH SMALL CIRCLE ABOVE (`U+2A22`) ... PLUS SIGN WITH TILDE ABOVE (`U+2A24`).
  - PLUS SIGN WITH TILDE BELOW (`U+2A26`).
  - PLUS SIGN IN LEFT HALF CIRCLE (`U+2A2D`).
  - PLUS SIGN IN RIGHT HALF CIRCLE (`U+2A2E`).
  - MULTIPLICATION SIGN IN LEFT HALF CIRCLE (`U+2A34`) ... CIRCLED MULTIPLICATION SIGN WITH CIRCUMFLEX ACCENT (`U+2A36`).
  - CIRCLED DIVISION SIGN (`U+2A38`).
  - UNION WITH MINUS SIGN (`U+2A41`) ... INTERSECTION WITH OVERBAR (`U+2A43`).
  - LOGICAL AND WITH DOUBLE OVERBAR (`U+2A5E`) ... LOGICAL OR WITH DOUBLE UNDERBAR (`U+2A63`).
  - TRIPLE HORIZONTAL BAR WITH DOUBLE VERTICAL STROKE (`U+2A68`).
  - TRIPLE HORIZONTAL BAR WITH TRIPLE VERTICAL STROKE (`U+2A69`).
  - ALMOST EQUAL TO WITH CIRCUMFLEX ACCENT (`U+2A6F`).
  - ELEMENT OF OPENING DOWNWARDS (`U+2AD9`) ... NONFORKING (`U+2ADD`).
  - PARALLEL WITH HORIZONTAL STROKE (`U+2AF2`) ... TRIPLE COLON OPERATOR (`U+2AF6`).
  - LARGE TRIPLE VERTICAL BAR OPERATOR (`U+2AFC`).
  - GROUP MARK (`U+2BD2`).
  - HYPHEN WITH DIAERESIS (`U+2E1A`).
  - TILDE WITH RING ABOVE (`U+2E1B`).
  - LEFT VERTICAL BAR WITH QUILL (`U+2E20`).
  - RIGHT VERTICAL BAR WITH QUILL (`U+2E21`).
  - DOUBLE HYPHEN (`U+2E40`).
* Improve height of glyphs derived from DIVIDES (`U+2223`) and PARALLEL TO (`U+2225`) to be the same as APL tacks as they are often used as APL stiles.
* Add diagonal-tailed variants for lowercase Iota (#1737).
* Make `VXSF` to influence Eth too (#1738).

