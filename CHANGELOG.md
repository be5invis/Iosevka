## Modifications since version 2.x

### 21.1.1

* Add Characters
  - COMBINING LATIN SMALL LETTER AO (`U+1DD5`).
  - UPWARDS TRIPLE ARROW (`U+290A`).
  - DOWNWARDS TRIPLE ARROW (`U+290B`).
  - THREE LEFTWARDS ARROWS (`U+2B31`).
  - CYRILLIC CAPITAL LETTER DOUBLE O (`U+A698`).
  - CYRILLIC SMALL LETTER DOUBLE O (`U+A699`).
  - LATIN SMALL LETTER AO (`U+A735`).
  - LATIN CAPITAL LETTER OO (`U+A74E`).
  - LATIN SMALL LETTER OO (`U+A74F`).
  - LATIN SMALL LETTER UO (`U+AB63`).
* Fix variant application to `U+A7C7` (#1613).
* Fix broken shape of `p` under `cv40 = 3` (#1614).


### 21.1.0

* Add Characters
  - CYRILLIC CAPITAL LETTER EN WITH LEFT HOOK (`U+0528`) (#1516, #1603).
  - CYRILLIC SMALL LETTER EN WITH LEFT HOOK (`U+0529`) (#1516, #1603).
  - COMBINING LATIN SMALL LETTER INSULAR G (`U+1ACC`) (#1600).
  - COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW (`U+1DFF`) (#1600).
  - TURNED ANGLE (`U+29A2`) (#1597).
  - TURNED COMMA (`U+2E32`) (#1597).
  - RAISED DOT (`U+2E33`) (#1597).
  - RAISED COMMA (`U+2E34`) (#1597).
  - TURNED SEMICOLON (`U+2E35`) (#1597).
  - TURNED DAGGER (`U+2E38`) (#1597).
  - CYRILLIC CAPITAL LETTER REVERSED DZE (`U+A644`) (#1597).
  - CYRILLIC SMALL LETTER REVERSED DZE (`U+A645`) (#1597).
  - LATIN EPIGRAPHIC LETTER REVERSED P (`U+A7FC`) (#1597).
  - LATIN LETTER SMALL CAPITAL TURNED G (`U+1DF02`) (#1597).
  - LATIN LETTER SMALL CAPITAL TURNED K (`U+1DF10`) (#1597).
* Fix variant selection for Cyrillic Koppa (#1584).
* Further fixup for Rs sign (#1585).
* Optimize shape consistency of `e`-related glyphs (#1587).
* Fix inconsistent height of circumflex and caron marks (#1598).
* Optimize shape for Cyrillic Yat (#1601).
* Fix broken shape of Thai Baht under Sans Thin (#1602).
* Fix broken shape of R-rotunda under Slab, cv17=7 (#1604).
* Fix broken shape of double-stroke (blackboard bold) R (#1605).
* Fix inverted circles (`U+25D8` .. `U+25DB`) to reflect that they are inverted mosaics (#1606).
* Optimize shape of db and qp (#1610).
* Further optimize shape of `k` (#1611).


### 21.0.0

* \[**Breaking**\] Added ligation support for Erlang. As a result, ligations groups for less-then-or-equal and greater-than-or-equal symbols are reorganized (#1595).
* Add characters:
  - MEDIUM MATHEMATICAL SPACE (`U+205F`).
  - MILL SIGN (`U+20A5`).
  - DONG SIGN (`U+20AB`).
  - TENGE SIGN (`U+20B8`).
  - SOM SIGN (`U+20C0`).
  - EULER CONSTANT (`U+2107`).
  - SCRUPLE (`U+2108`).
  - PLANCK CONSTANT OVER TWO PI (`U+210F`).
  - SQUARE LOZENGE (`U+2311`).
  - TURNED NOT SIGN (`U+2319`).
  - SOFTWARE-FUNCTION SYMBOL (`U+2394`).
  - PLUS SIGN WITH DOT BELOW (`U+2A25`).
  - MINUS SIGN WITH DOT BELOW (`U+2A2A`).
  - EQUALS SIGN WITH DOT BELOW (`U+2A66`).
  - LATIN CAPITAL LETTER H WITH DESCENDER (`U+2C67`) (#1572).
  - LATIN SMALL LETTER H WITH DESCENDER (`U+2C68`) (#1572).
  - RING POINT (`U+2E30`).
  - WORD SEPARATOR MIDDLE DOT (`U+2E31`).
  - LATIN LETTER SINOLOGICAL DOT (`U+A78F`).
  - LATIN CAPITAL LETTER N WITH DESCENDER (`U+A790`) (#1572).
  - LATIN SMALL LETTER N WITH DESCENDER (`U+A791`) (#1572).
  - LATIN CAPITAL LETTER OMEGA (`U+A7B6`) (#1572).
  - LATIN SMALL LETTER OMEGA (`U+A7B7`) (#1572).
  - LATIN CAPITAL LETTER D WITH SHORT STROKE OVERLAY (`U+A7C7`) (#1572).
  - LATIN SMALL LETTER D WITH SHORT STROKE OVERLAY (`U+A7C8`) (#1572).
  - LATIN CAPITAL LETTER S WITH SHORT STROKE OVERLAY (`U+A7C9`) (#1572).
  - LATIN SMALL LETTER S WITH SHORT STROKE OVERLAY (`U+A7CA`) (#1572).
  - LATIN SMALL LETTER OPEN O WITH STROKE (`U+AB3F`) (#1572).
* Make ASCII marks (grave, caret, tilde) more significant (#1576).
* Optimize shape for Italic long-dotted-oval zero (#1577).
* Fix ear-cuts of capital Y under Italics (#1578).
* Fix disconnected Cedillas for serifed italic glyphs on heavier weights (#1579).
* Fix disconnected underbars for Abkhasian Che (#1579).
* Fix shape of heavy-weight serifed Latin C With Hook, Epsilons (#1580).
* Fix heavy-weight ampersand's top arc alignment (#1581).
* Fix shape of heavy-weight lowercase r (#1582).
* Optimize shape for Sulzbacher Eszet (#1583).
* Fix missing serifs of Cyrillic Koppa (#1584).
* Fix shape of heavy-weight Rs (#1585).
* Fix shape of Latin Small Letter Y with Hook under heavy weights (#1588, #1589).
* Fix shape of Bashkir Ka under heavy weights (#1590).
* Fix artifacts of certain K-related letters (#1591).
* Optimize shape of small S (#1592).

