## Modifications since last major version

### 32.2.0

* Make M-width small-capital characters slightly narrower under Quasi-Proportional. Affected characters:
  - LATIN LETTER SMALL CAPITAL OE (`U+0276`).
  - GREEK SMALL LETTER SAN (`U+03FB`).
  - CYRILLIC SMALL LETTER EM (`U+043C`).
  - CYRILLIC SMALL LETTER EM WITH TAIL (`U+04CE`).
  - LATIN LETTER SMALL CAPITAL AE (`U+1D01`).
  - LATIN LETTER SMALL CAPITAL M (`U+1D0D`).
  - LATIN LETTER SMALL CAPITAL W (`U+1D21`).
  - GREEK LETTER SMALL CAPITAL PSI (`U+1D2A`).
  - TELEPHONE SIGN (`U+2121`).
  - FACSIMILE SIGN (`U+213B`).
  - CYRILLIC SMALL LETTER SOFT EM (`U+A667`).
  - LATIN LETTER SMALL CAPITAL TURNED M (`U+A7FA`).
  - MODIFIER LETTER SMALL CAPITAL AA (`U+10780`).
  - MODIFIER LETTER SMALL CAPITAL OE (`U+107A3`).
  - MODIFIER LETTER CYRILLIC SMALL EM (`U+1E03B`).
* Make LATIN SMALL LIGATURE FF (`U+FB00`) ... LATIN SMALL LIGATURE FFL (`U+FB04`) slightly narrower under Quasi-Proportional.
* Optimize glyphs for Bulgarian Cyrillic Capital/Small Letter Ef (`U+0424`, `U+0444`).


### 32.1.0

* Make dense letters less outstanding (#2581).
* Optimize glyphs for Armenian Capital Ini (`U+053B`), Ken (`U+053F`), and Vew (`U+054E`).
* Remove bottom-right serif from Armenian Capital Now (`U+0546`).
* Remove top-right serif from Armenian Lower Ben (`U+0562`).
* Make serif of Armenian Lower Yi (`U+0575`) consistent with Armenian Lower Liwn (`U+056C`).
* Make hook of Armenian Lower Co (`U+0581`) consistent with Armenian Lower Yi (`U+0575`).


### 32.0.1

* Fix inconsistent serifs of `U+0284` and `U+10798` with the variants of `j` (#2569).


### 32.0.0

* Add Armenian letters:
  - ARMENIAN CAPITAL LETTER AYB (`U+0531`) ... ARMENIAN DRAM SIGN (`U+058F`).
* Add characters:
  - LEFT AND RIGHT DOUBLE TURNSTILE (`U+27DA`).
  - LEFT AND RIGHT TACK (`U+27DB`).
  - LONG RIGHT TACK (`U+27DD`).
  - LONG LEFT TACK (`U+27DE`).
  - UP ARROW THROUGH CIRCLE (`U+29BD`).
  - UPPER LEFT QUADRANT STANDING KNIGHT (`U+1CCD2`) ... LOWER RIGHT QUADRANT STANDING KNIGHT (`U+1CCD5`).
  - HORIZONTAL ZIGZAG LINE (`U+1CEB0`).
* Optimize `semi-chancery-straight-serifed` and `semi-chancery-curly-serifed` variants for `x` (`cv58`).
* Make Dotless J with Stroke and Hook (`U+0284`) have a serif under slab.

