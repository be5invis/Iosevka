## Modifications since version 2.x

### 15.5.2

* Add characters:
  - BOWTIE WITH LEFT HALF BLACK (`U+29D1`) ... BLACK HOURGLASS (`U+29D7`) (#1370);


### 15.5.1

* Add characters:
  - QUADRUPLE PRIME (`U+2057`);
  - CARET INSERTION POINT (`U+2041`);
  - DOTTED CROSS (`U+205C`);
* Unhinted webfonts are added into releases.


### 15.5.0

* Add characters
  - LATIN SMALL LETTER B WITH MIDDLE TILDE (`U+1D6C`) ... LATIN SMALL LETTER Z WITH MIDDLE TILDE (`U+1D76`);
  - LATIN SMALL CAPITAL LETTER U WITH STROKE (`U+1D7E`);


### 15.4.2

* Fix ranks of `cv72` (variants applying to `1`) (#1358).


### 15.4.1

* Fix VXDD application on U+1D1E (#1357).


### 15.4.0

* Add characters:
  - LATIN SMALL LETTER SIDEWAYS O (`U+1D11`);
  - LATIN SMALL LETTER SIDEWAYS OPEN O (`U+1D12`);
  - LATIN SMALL LETTER SIDEWAYS O WITH STROKE (`U+1D13`);
  - LATIN SMALL LETTER SIDEWAYS U (`U+1D1D`);
  - LATIN SMALL LETTER SIDEWAYS DIAERESIZED U (`U+1D1E`);
  - LATIN SMALL LETTER SIDEWAYS TURNED M (`U+1D1F`);
  - MODIFIER LETTER SMALL SIDEWAYS U (`U+1D59`);
* Make user build plans' variants inheritable (#1345).
* Add top-cut variants of `1` (#1354).


### 15.3.1

* Fix display of Kleisli arrows under Kitty (#1350).
* Ascender height and Cap height is decoupled. Now they could be configured separately (#1334).


### 15.3.0

* Add characters (#1337):
  - SUMMATION TOP (`U+23B2`);
  - SUMMATION BOTTOM (`U+23B3`);
  - BLACK RIGHT-POINTING DOUBLE TRIANGLE (`U+23E9`);
  - BLACK LEFT-POINTING DOUBLE TRIANGLE (`U+23EA`);
  - BLACK UP-POINTING DOUBLE TRIANGLE (`U+23EB`);
  - BLACK DOWN-POINTING DOUBLE TRIANGLE (`U+23EC`);
  - BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR (`U+23ED`);
  - BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR (`U+23EE`);
  - BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR (`U+23EF`);
* Enlarged `U+02BE` and `U+02BF` to match the dimensions of other quotes (#1346).


### 15.2.0

 * Add characters:
  - FLOWER PUNCTUATION MARK (`U+2055`);
  - VERTICAL FOUR DOTS (`U+205E`);
  - BLACK LEFTWARDS BULLET (`U+204C`);
  - BLACK RIGHTWARDS BULLET (`U+204D`);
  - THREE DOT PUNCTUATION (`U+2056`);
  - FOUR DOT PUNCTUATION (`U+2058`);
  - FIVE DOT PUNCTUATION (`U+2059`);
  - TWO DOT PUNCTUATION (`U+205A`);
  - FOUR DOT MARK (`U+205B`);
 * Shape adjustment of `t` (#1336).
 * Pilcrow signs are adjusted to have fills.


### 15.1.0

* Add Characters
  - MODIFIER LETTER YIN DEPARTING TONE MARK (`U+02EA`);
  - MODIFIER LETTER YANG DEPARTING TONE MARK (`U+02EB`);
  - MODIFIER LETTER DOUBLE APOSTROPHE (`U+02EE`);
  - MODIFIER LETTER MIDDLE GRAVE ACCENT (`U+02F4`);
  - MODIFIER LETTER MIDDLE DOUBLE GRAVE ACCENT (`U+02F5`);
  - MODIFIER LETTER MIDDLE DOUBLE ACUTE ACCENT (`U+02F6`);
  - MODIFIER LETTER RAISED COLON (`U+02F8`);
  - MODIFIER LETTER BEGIN HIGH TONE (`U+02F9`);
  - MODIFIER LETTER END HIGH TONE (`U+02FA`);
  - MODIFIER LETTER BEGIN LOW TONE (`U+02FB`);
  - MODIFIER LETTER END LOW TONE (`U+02FC`);
  - MODIFIER LETTER SHELF (`U+02FD`);
  - MODIFIER LETTER OPEN SHELF (`U+02FE`);
  - MODIFIER LETTER LOW LEFT ARROW (`U+02FF`);
  - COMBINING LEFT ARROW BELOW (`U+20EE`);
  - COMBINING RIGHT ARROW BELOW (`U+20EF`);


### 15.0.3

 * Add Asterism (`U+2042`) character (#1324).


### 15.0.2

 * Fix placement of COMBINING DOT ABOVE RIGHT (`U+0358`) (#1318).
 * Fix fourfold width of `@` under quasi-proportionals (#1319).


### 15.0.1

 * Fix `cv99`/`VXDD` applications on `U+0149`, `U+0310`, `U+034B`, `U+0352`, `U+037C`, `U+037D`, `U+03FE`, `U+03FF`, `U+1E0B`, and `U+1EF5` (#1317).


### 15.0.0

 * \[**Breaking**\] Metric override name change: `xheight` → `xHeight`.
 * Add variant selector for dot and comma diacritics (#1309).
 * Fix enclosed glyphs' placement when having glyphs with different Y-shifting (#1310).
 * Add metric override for `archDepth` and `smallArchDepth` (#1313).
 * Fix feature application on OBJECT REPLACEMENT CHARACTER (`U+FFFC`) and REPLACEMENT CHARACTER (`U+FFFD`) (#1314).

