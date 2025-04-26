## Modifications since last major version

### 33.2.2

* Refine shape of the following characters:
  - LATIN CAPITAL LETTER G WITH HOOK (`U+0193`).
  - LATIN LETTER SMALL CAPITAL G WITH HOOK (`U+029B`).
  - CYRILLIC CAPITAL LETTER KOMI DZJE (`U+0506`).
  - CYRILLIC SMALL LETTER KOMI DZJE (`U+0507`).
  - THERE DOES NOT EXIST (`U+2204`).
  - CYRILLIC CAPITAL LETTER IOTIFIED A (`U+A656`).
  - CYRILLIC CAPITAL LETTER IOTIFIED CLOSED LITTLE YUS (`U+A65C`).
  - CYRILLIC SMALL LETTER IOTIFIED CLOSED LITTLE YUS (`U+A65D`).
  - LATIN CAPITAL LETTER VOLAPUK UE (`U+A79E`).
  - LATIN SMALL LETTER VOLAPUK UE (`U+A79F`).
  - MODIFIER LETTER SMALL CAPITAL G WITH HOOK (`U+10794`).
  - MUSICAL SYMBOL DOUBLE SHARP (`U+1D12A`).
* Add Characters:
  - MUSICAL SYMBOL FERMATA (`U+1D110`).
  - MUSICAL SYMBOL FERMATA BELOW (`U+1D111`).


### 33.2.1

* Refine shape of the following characters:
  - ARMENIAN CAPITAL LETTER TO (`U+0539`).
  - ARMENIAN SMALL LETTER TO (`U+0569`).
  - MATHEMATICAL DOUBLE-STRUCK DIGIT TWO (`U+1D7DA`) (#2728).


### 33.2.0

* Add `flat-top` variants for `curly`, `straight-vertical-sides`, and `rounded-vertical-sides` forms of `W` and `w` (#2146).
* Add `almost-flat-top` variants for `curly` forms of `W` and `w`.
* Refine shape of the following characters:
  - GREEK CAPITAL LETTER HETA (`U+0370`).
  - GREEK SMALL LETTER HETA (`U+0371`).
  - LATIN CAPITAL LETTER HALF H (`U+2C75`).
  - LATIN SMALL LETTER HALF H (`U+2C76`).
  - LATIN CAPITAL LETTER AU (`U+A736`).
  - LATIN CAPITAL LETTER REVERSED HALF H (`U+A7F5`).
  - LATIN SMALL LETTER REVERSED HALF H (`U+A7F6`).
  - LATIN SMALL LIGATURE FFI (`U+FB03`).
* Make certain characters slightly wider under Quasi-Proportional. Affected characters:
  - ARMENIAN CAPITAL LETTER TO (`U+0539`).
  - ARMENIAN SMALL LETTER TO (`U+0569`).
  - ARMENIAN SMALL LIGATURE ECH YIWN (`U+0587`).
* Fix variant application of `cv38` on `U+1DF0F`.


### 33.1.0

* Add `full-serifed` variants for `K` and `k`, and related letters (#2696).
* Add `top-right-serifed` and `tri-serifed` variants for `K` and `k`, and related letters.
* Add `cursive` variant for Greek Lower Theta (`θ`).
* Add `closed-swash` variant for `Q` (#2392).
* Add IPA localization form for Latin Lower `a` and `g`.
* Add IPA localization form for Latin Lower G with Stroke (`ǥ`) (#2632).
* Add variant selectors for Greek Lower Eta (`η`) and Kappa (`κ`).
* Add Characters:
  - LATIN SMALL LETTER TURNED T WITH CURL (`U+1DF0D`) (#1931).
  - LATIN LETTER INVERTED GLOTTAL STOP WITH CURL (`U+1DF0E`) (#1931).
  - LATIN LETTER STRETCHED C WITH CURL (`U+1DF0F`) (#1931).


### 33.0.1

* Make certain characters slightly wider under Quasi-Proportional. Affected characters:
  - LATIN SMALL LETTER TH WITH STRIKETHROUGH (`U+1D7A`).
* Allow Latin Alpha (`ɑ`) and Script G (`ɡ`) to use eared/earless variants of `a` (`cv36`) and `g` (`cv42`) respectively.


### 33.0.0

* \[**Breaking**\] Adjusted width of spaces in quasi-porportional
  - Slightly narrower by default
  - Adjustable via metric override
* \[**Breaking**\] Reordered variants for `W`, `a`, `b`, `g`, `q`, `w`, `α`, Cyrillic `а`, Cyrillic `ф`, and `$`.
* \[**Breaking**\] Add variants for Capital Thorn (`Þ`) with symmetric/asymmetric bowl position.
* \[**Breaking**\] Add variant selector for Greek Lower Theta (#2630).
  - As a result, character variant feature tags are reordered.
* Add almost-flat-top variant for `W` and `w` (#2693).
* Add `closed-contour` variant for Partial derivative symbol (#2148).
* Refine shape of the following characters:
  - GREEK CAPITAL LETTER HETA (`U+0370`).
  - GREEK SMALL LETTER HETA (`U+0371`).
  - GREEK CAPITAL LETTER SHO (`U+03F7`).
  - CYRILLIC CAPITAL LETTER SHHA (`U+04BA`).
  - CYRILLIC CAPITAL LETTER KOMI DJE (`U+0502`) ... CYRILLIC SMALL LETTER KOMI ZJE (`U+0505`).
  - CYRILLIC CAPITAL LETTER KOMI LJE (`U+0508`) ... CYRILLIC SMALL LETTER KOMI TJE (`U+050F`).
  - CYRILLIC CAPITAL LETTER SHHA WITH DESCENDER (`U+0526`).
  - ARMENIAN CAPITAL LETTER EH (`U+0537`).
  - ARMENIAN CAPITAL LETTER INI (`U+053B`).
  - ARMENIAN CAPITAL LETTER XEH (`U+053D`).
  - ARMENIAN CAPITAL LETTER CA (`U+053E`).
  - ARMENIAN CAPITAL LETTER HO (`U+0540`).
  - ARMENIAN CAPITAL LETTER CO (`U+0551`).
  - ARMENIAN CAPITAL LETTER FEH (`U+0556`).
  - ARMENIAN SMALL LETTER BEN (`U+0562`).
  - ARMENIAN SMALL LETTER ECH (`U+0565`).
  - ARMENIAN SMALL LETTER EH (`U+0567`).
  - ARMENIAN SMALL LETTER ZHE (`U+056A`).
  - ARMENIAN SMALL LETTER XEH (`U+056D`).
  - ARMENIAN SMALL LETTER CHA (`U+0579`).
  - ARMENIAN SMALL LETTER TIWN (`U+057F`).
  - ARMENIAN SMALL LETTER PIWR (`U+0583`).
  - ARMENIAN SMALL LETTER FEH (`U+0586`).
  - ARMENIAN SMALL LIGATURE ECH YIWN (`U+0587`).
  - LATIN CAPITAL LETTER HALF H (`U+2C75`).
  - LATIN SMALL LETTER HALF H (`U+2C76`).
  - CYRILLIC CAPITAL LETTER HWE (`U+A694`).
  - LATIN CAPITAL LETTER REVERSED HALF H (`U+A7F5`).
  - LATIN SMALL LETTER REVERSED HALF H (`U+A7F6`).
* Make certain characters slightly wider under Quasi-Proportional. Affected characters:
  - CYRILLIC CAPITAL LETTER UK (`U+0478`).
  - LATIN SMALL LIGATURE FF (`U+FB00`) ... LATIN SMALL LIGATURE FFL (`U+FB04`).
* Add Characters:
  - OBSERVER EYE SYMBOL (`U+23FF`).
  - LATIN SMALL LETTER SCRIPT R (`U+AB4B`).
  - LATIN SMALL LETTER SCRIPT R WITH RING (`U+AB4C`).
  - KEYHOLE (`U+1CEB1`). 
  - BLACK RIGHT TRIANGLE CARET (`U+1CEB3`). 
  - RIGHTWARDS ARROW WITH LOWER HOOK (`U+1F8B2`). 
  - LEFTWARDS ARROW FROM DOWNWARDS ARROW (`U+1F8C0`). 
  - RIGHTWARDS ARROW FROM DOWNWARDS ARROW (`U+1F8C1`).

