## Modifications since version 2.x

### 5.0.0-beta.2

 * Fix broken curly variants of `x` and `X` (#824).
 * Add compact-serifed and compact-top-serifed variants of `r` (#826).
 * Allow Zeta to share variants with `Z` (#827).
 * Add serifed and top-serifed variants for `S` and `s` (#822).
 * Add oblique-upper-left-bar variant for `5` (#820).
 * Add oval variant for `0` (#828).
 * Add corner and flat-hooked variants for `?` (#829).


### 5.0.0-beta.1

 * **Breaking** Iosevka Aile and Iosevka Etoile now support `cv##` and `ss##` features.
 * **Breaking** Iosevka Sparkle is removed from prebuilt packages.
 * **Breaking** Reorder `cv##` features and variant assignments for better organization.
 * **Breaking** Spilt out variant selector for `A`, `V`, `W`, `Z` (#806).
 * **Breaking** Certain variants' names are changed:
   - Phrase `singlestorey` and `doublestorey` used in  `a` and `g` variants are renamed to `single-storey` and `double-storey`.
 * Add diagonal-tailed variants for `f`, `i`, `j`, `k`, `l`, `q`, `t` (#795).
 * Add motion-serifed variants for `A`, `B`, `D`, `E`, `F`, `H`, `K`, `M`, `N`, `P`, `R`, `T`, `V`, `W`, `X`, `Y`, `Z`, `v`, `w`, `x`, `y`, `z` (#806, #815, #818).
 * Add symmetric-legged variants for `K` and `k` (#807).
 * Add horizontal-tailed and detach-tailed variants for `Q` (#808).
 * Add hookless and capped variants for `G` (#809).
 * Add open-contour variants for `P` and `R` (#810).
 * Add standing variants for `R` (#810).
 * Add toothed and motion-serifed variants for `U` (#811).
 * Add double-v and asymmetric variants for `W` and `w` (#812).
 * Add motion-serifed toothless variants for `u` (#813).
 * Add flat-serifed variants for `1` (#819).
 * Add IBM Plex Mono style set (#796).
 * Fix broken geometry of `K` and `%` under ultra-wide (#800).
 * Add straight-bar AE (`Æ`), follows variant selector for `A` (#800).
 * Refine the shape of Slab `S` and `s` to add serifs at both terminals (#800).
 * Fix broken shape of tailed Cyrillic DJE (`U+0452`, #803).
 * Slightly increase size of `⊂`, `⊃`, `⊏` and `⊐` for better distinction (#804).


### 4.5.0

 * Fix broken shape of `LCaron` (`U+013D`, #791).
 * Fix missing serifs in Latin Small Capital I (`U+026A`, #793).
 * Add characters:
   - Latin Capital K and Small K with Descender (`U+2C69`, `U+2C6A`).
   - Advanced Ring Integrals (`U+222F` ... `U+2233`, `U+2A11` ... `U+2A16`).
   - Inverted Lazy S (`U+223E`).
   - Equivalent To and Not Equivalent To (`U+224D`, `U+226D`).
   - XOR, NAND and NOR (`U+22BB` ... `U+22BD`).
   - Division Times (`U+22C7`).
   - Upper-half and Lower-half filled square (`U+2B12`, `U+2B13`).
   - Ellipses (`U+2B2C` ... `U+2B2F`).
   - Medium and Small Stars, Large Heavy White Circle (`U+2B50` ... `U+2B52`, `U+2B55`).
   - Barb Arrows (`U+2794`, `U+1F860` ... `U+1F887`, #792).
   - Sans Serif Arrows (`U+1F850` ... `U+1F859`).
   - Isosceles Right-Angle Triangles (`U+1F780` ... `U+1F783`).


### 4.4.0

 * Add motion serif variants for `a`, `b`, `d`, `g`, `k`, `L`, `q`, `Z` and `z` (#789).
 * Add vertical-crossing variant for `Q` (#789).
 * Split variant assignment for `Z` and `z` (#789).


### 4.3.0

 * Add two-circle variant of `8` (#786).
 * Add leading serif for `C`, `c`, `G`, `S`, `s` in Slab (#787).
 * Made per-mille symbol and base-point symbol wide in non-terminal variants.
 * Add super-ttc (single-file TTC) into releases.


### 4.2.0

 * Add character:
   - Narrow no-break space (`U+202F`).
   - Thai Currency Symbol Baht (`U+0E3F`, #781).
   - Bitcoin Symbol (`U+20BF`).
   - Projection (`U+2305`) and Perspective(`U+2306`, #780).
 * Add `raised-turn-comma` variant for ASCII grave (#778).
 * Add `straight-neck` variant for digit TWO (`2`, #779).
 * Add long-top-serif variants of `1` (#783).
 * Add metric override `onumZeroHeightRatio` for height of old-style numbers (#784).


### 4.1.1

 * Fix letterform of `t` in `ss14`.
 * Add curly-turn variant of `y` (#775).


### 4.1.0

 * Add rounded variant of `e` (#771).
 * Add flat-hook single-storey variants for `g` and `y` (#772).
 * Create separate variant selector for Cyrillic capital U (#773).


### 4.0.3

 * Fix operator centering chain propagation under Apple platform (#768).
 * Fix Cyrillic Small ER's variant selection, always keeping ears (#769).


### 4.0.2

 * Add ligation group `brack-bar` and `brace-bar`, and enabled in `dlig` (#767).
 * Add characters:
   - Telephone Sign (`U+2121`) and Facsimile Sign (`U+213B`).
   - Cross Mark (`U+274C`).


### 4.0.1

 * Improve of component glyph coloring of non-equal ligation (like `!=`).
 * Correct shape of `4` in SS14.
 * Add Characters:
   - Atom Symbol (`U+269B`).
   - Black Slightly Small Circle Circle ... Very Heavy Eight-Spoked Asterisk (`U+1F784` ... `U+1F7BF`).


### 4.0.0

 * \[**Breaking**\] Change implementation of character variants to `cv##` and alternate substitutions (#572).
 * \[**Breaking**\] Change the building configuration format -- now we use dicts instead of “array of styles”.
 * \[**Breaking**\] Cleanup of weight levels and increase contrast under heavier weights.
 * \[**Breaking**\] Remove WOFF 1 web font building.
 * \[**Breaking**\] Release packages will now be divided by formats.
 * Add Characters:
   - Derived bold, italic, sans-serif, typewriter, and double-struck letters / digits, in Mathematical Alphanumeric Symbols block (#444, #712).
   - Half-filled stars (`U+2BE8` ... `U+2BEB`, #708).
   - `U+0462` CYRILLIC CAPITAL LETTER YAT and `U+0463` CYRILLIC SMALL LETTER YAT (#727).
   - `U+1D6A4` MATHEMATICAL ITALIC SMALL DOTLESS I, `U+1D6A5` MATHEMATICAL ITALIC SMALL DOTLESS J (#730).
   - U+23CF EJECT SYMBOL (#728).
 * Add Variants:
   - `u`/`toothless-corner` (#706).
   - Curly variants of `Z` / `z` (#362).
   - Toothless-corner variant of `G` and Ampersand (`&`).
 * Update `ss09` style for capital G to Toothless (#726).
 * Add ligation set for Verilog (#710).
 * Add more alternative exclamation-related ligation sets (`exeqeq-dotted`, `eqexeq-dotted`, `eqexeq-dl-dotted`) (#748).
 * Fix the shape of hook-top V's.
 * Make check and cross marks wide-aware.
 * Fix middle bar placement of `U+2180` under quasi-proportional.
 * Correct description of `1` variants (#711).
 * Fix broken Bulgarian localization of Cyrillic Small Sha and Cyrillic Capital El (#716).
 * Fix broken serif shapes in Italic Cyrillic Small I (#717).
 * Fix incorrect serifs of Greek Small Rho (#718).
 * Fix inconsistent italic serif of `U+0463` CYRILLIC SMALL LETTER YAT (#729).
 * Fix inconsistent serif on Bulgarian `U+044E` CYRILLIC SMALL LETTER YU (#732).
 * Fix variant application on italic Cyrillic Small Te and Cyrillic Small I (#734).
 * Fix variant application on fraction 1/10 (`U+2152`, #736).
 * Fix variant application on LATIN SMALL LETTER WITH STROKE (`U+0167`, #737).
 * Fix centering of `Q` variants when occurred in enclosures (#751).
 * Fix broken descender connection of `cyrl/tse` (U+0446) under Italic (#754).
 * Fix missing serifs in earless-corner `m` variants (#752).
 * Remove slight curvature of italic single-storey `a` (#755).
 * Fix kerned dotty operators' placement when placed near brackets and commas (#757).


### 3.7.1

 * Fix broken line height under Macintosh (#704).


### 3.7.0

 * Make `v-k-cursive` visible in Upright and Oblique; Split variant selectors for `k` and `K` (#700).
 * Add flat hooked but tailed variants for `f` (`VXEX` ... `VXFA`) (#697).
 * Fix mark position of Small Heng With Hook (`U+0267`) and Small Heng (`U+A727`); add letter Cyrillic Iotified Small and Big Yus (`U+0468`, `U+0469`, `U+046C`, `U+046D`), Capital Heng (`U+A726`), and Cyrillic En With Hook (`U+04C7`, `U+04C8`).
 * Corrected shape of descender-accented Cyrillic letters under Slab; Add letter Khakassian Che (`U+04CB`, `U+04CC`) and Ghe With Descender (`U+04F6`, `U+04F7`).
 * Add more asterisk and star dingbats (`U+2733`, `U+2734`, `U+2737` ... `U+273A`).
 * Add more sized geometric shapes (`U+26AA`, `U+26AB`, `U+2B1A` ... `U+2B1E`, `U+2B25` ... `U+2B2B`, `U+2BC0` ... `U+2BC8`, `U+2BCA`, `U+2BCB`).
 * Fix variant selection for `ɳ` (`U+0273`), `ɖ` (`U+0256`), and `ᶑ` (`U+1D91`).
 * Fix shape of capital `J` under Aile.
 * Fix `lSlash`'s shape under Aile.
 * Add graphic form of CGJ(`U+034F`), ZWNJ (`U+200C`), ZWJ (`U+200D`), Object Replacement Character (`U+FFFC`), and Replacement Character (`U+FFFD`, #698).
 * Add semicircle arrows (`U+21B6`, `U+21B7`) and open-circle arrows (`U+21BA`, `U+21BB`).


### 3.6.3

 * Add Gear symbol (`U+2699`).
 * Make motion-serif variants work for Cyrillic letters having same outline like Latin `u` (#692).
 * Fix the italic shape of Cyrillic GE (`U+0491`).
 * Add Egyptological Alef (`U+A722`, `U+A723`), Ayin (`U+A724`, `U+A725`) and Glottal `a`, `i` and `u` (`U+A7BA` ... `U+A7BF`) (#695).


### 3.6.2

 * Add compile option to default to old-style figures (#397).
 * Add control picture symbols (`U+2400` ... `U+2422`, `U+2424`).
 * Add Claudian letters (`U+2132`, `U+214E`, `U+2183`, `U+2184`, `U+2C75`, `U+2C76`).


### 3.6.1

 * Add dice symbols (`U+2680` ... `U+2685`).
 * Add medium and extra-small squares (`U+25FB` ... `U+25FE`), white squares and circles with quadrants (`U+25F0` ... `U+25F7`) and white diagonal half triangles (`U+25F8` ... `U+25FA`, `U+25FF`).


### 3.6.0

 * Add `v-f-flat-hook-serifed` and `v-f-flat-hook-serifed-crossbar-at-x-height` for `f` (#686).


### 3.5.0

 * Increase size of bullet characters (#678).
 * Move registered trademark symbol (U+00A9, ®) to superscript (#679).
 * Balance old-style figures to reduce raggedness (#402).
 * Add ligation set for Wolfram Language (#680).
 * Add "Motion-serifed" variants for `h`, `m`, `n`, `p` and `u` (#684).


### 3.4.7

 * Fix broken slab-serif variants of `m` and `n` in italics (#681).


### 3.4.6

 * Fix unbalanced shape of `v`-related shapes.
 * Fix below marks of `Q`.


### 3.4.5

 * Fix shape of `ɻ` under Aile variant.


### 3.4.4

 * Add toothless variant for `a` (#669).
 * Add earless variants for `m`, `n`, `r` (#669).
 * Add asymmetric hookless and short-neck flat-hook variant of `t` (#669, #672).


### 3.4.3

 * Fix conflicting CV tag of `VXDA`. Variant for `l` is renamed to `VXDL` (#668).
 * Fix compat-ligature building (#667).
 * Massively reduce the glyph quantity needed to support glyph variants.


### 3.4.2

 * Add curly variant for ASCII single quote (`'`) and ASCII grave (`` ` ``) (#660).
 * Fix broken marks of U+1AB2, U+0356 and U+035A.
 * Fix bar placement of italic `џ`.


### 3.4.1

 * Fix broken shape of heavy `v`.
 * Fix weight balancing (#656).
 * Fix image clipping in README (#657).


### 3.4.0

 * Add tailed two-story `a` (#637).
 * Add turned five-pointing asterisk `*` (#638).
 * Add horizontal crossbar variant of `Z` and `z` (#640, #595).
 * Add serifless `J` (#640).
 * Add crossing `Q` (#640).
 * Add tailed variant for `m`, `n` and `h`.
 * Add flat-top `W`, `w` and flat-bottom `M` (#640).
 * Add continuous-bar-rings percent sign `%` (#643).
 * Fix combining letters' overlapping (#646).
 * Add earless variants for `a`, `g`, `p` and `q` (#648).
 * Add force-upright bar symbols (#652).
 * Add `v-l-serifed-asymmetric` for `l` (#522).
 * Add two "symmetric" variants of `J` (#654).
 * Add flat-hook `f`, `j` and `t` (#581).


### 3.3.1

 * Add a slightly-curly tailed `a` and `u` (#631, #636).
 * Add triangle operators, bowtie operators and diagonal ellipsis.
 * Refine the crossbar width of `7` in `v-seven-crossbar` variant (#634).
 * Fix the broken shape of U-horns.


### 3.3.0

 * Change shape of Peseta sign to `P` with crossbar (#451).
 * Add Cyrillic Fita (#617).
 * Add a more rounded variant of `D` (#616).
 * Add support for open number sign (`VXBI` and `VXBJ`, #621).
 * Add toothless variant of `b` and `d` (#462).
 * Fix italic Cyrillic I and Tse shape when `v-u-without-bar` is applied (#625).
 * Add `v-k-curly-cursive` combination (#627).
 * Add `calt-exeq-dotted` as an alternative style of `!=` ligation (#608).


### 3.2.2

 * Fix broken ligation of kerning colons and dot-related symbols.


### 3.2.1

 * Fix placement of comma-shaped caron in l-caron and t-caron (#613).
 * Fix placement of crossbar of `7` under onum and `VXAX`/`VXAY` (#615).
 * Fix placement of overflowing bar of R-bar (#614).
 * Fix shape of Reversed-E (#618).


### 3.2.0

 * Add variants for six (`6`) : `v-six-closed-contour` (`VXAE`) and `v-six-open-contour` (`VXAF`). `v-nine-turned-six` is renamed to `v-nine-open-contour` (#562).
 * Make variant selectors able to influence `l-dot` (U+0140, #566).
 * Add variants for Ampersand (#211).
 * Fix small gaps of l-belt and l-rtail-belt (#569).
 * Fix R-bar's bar position (#574).
 * Add U+228C, U+228E, U+2214, U+221B, U+221C (#567).
 * Add straight-line variant for `1` (#573).
 * Cover all the characters in CP437 (#577).
 * Add parenthesis variant with larger contour (#570).
 * Fix placement of U+0315 COMBINING COMMA ABOVE RIGHT (#583).
 * Fix shape of U+1D24 LATIN LETTER VOICED LARYNGEAL SPIRANT (#584).
 * Allow the user to customize the characters' width freely (#554).
 * Fix placement of descenders in U+04AC/U+04AD CYRILLIC CAPITAL/SMALL LETTER TE WITH DESCENDER (#585).
 * Fix shape of U+01A6 LATIN LETTER YR under curly variant (#586).
 * Fix serif placement of U+044E CYRILLIC SMALL LETTER YU under Bulgarian locale (#587).
 * Make combining lines connect left and right (#590).
 * Make the curly-slab shape of `R`, `v`, `x` and `y` more distinctive (#591, #609).
 * Add U+02BE MODIFIER LETTER RIGHT HALF RING and U+02BF MODIFIER LETTER LEFT HALF RING (#588).
 * Add variant `v-capital-b-more-asymmetric` (`VXAQ`) for `B` for better differentiation with `8` (#589).
 * Fix inconsistent stroke widths in heavy delta-like components (#593).
 * Made the ties move further away from above marks, and implement diacritics above ties (#596).
 * Add variants for `4`, `7`, `6`, `9`, `q` and `z` (#595).
 * Fix missing slab on `v-u-without-bar` (#601).
 * Change shape of U+0192 for better differentiation (#611).


### 3.1.1

 * Fix localized form of U+045D (#560).
 * Fix broken shape of R under CV83 (#561).
 * Fix broken shape of U+235d (#563).
 * Fix broken shape of U+0494, U+0495 (#564).
 * Fix missing serif of U+1DB2 (#565).
 * Fix incorrect serifs of Sho (U+03F8, #568).


### 3.1.0

 * Add Pitman duodecimal digits (#483).
 * Add proper support for IPA tone letters (#508).
 * Moved low caret upward a little to make it more legible (#526).
 * Add support for WHITE SUN WITH RAYS (U+263C, ☼, #521).
 * Add preview image building in release notes.
 * Added `v-underscore-above-baseline` (`cv99`) and redefined the `v-underscore-high` to the right-below-baseline variant (#515).
 * Match styles of `1` and `7` in `ss##` variants (#539).
 * Refine the width of `A` and `V`.
 * Changed the layout of character variants sample image for better clarity.
 * Fix `head.fontRevision` computation (#545).
 * Add Cyrillic Ghe-with-hook and En-Ghe (#540).
 * Fix typo of `v-l-zshaped`'s description (#547).
 * Add long-dotted zero (#437).
 * Fix broken long ligature at beginning of line in macOS TextEdit (#548).
 * Add `v-eszet-longs-s-lig` (#455).
 * Make `cv##` and `ss##` features work on enclosed/braced/superscript/subscript letters (#516).
 * Add playback symbols.
 * Add `f` with straight tail (`v-f-straight-tailed`, `VXAD`, #519).
 * Fix the position of the bar in U+1E9D LATIN SMALL LETTER LONG S (#558).


### 3.0.1

 * Fixed incorrect influence of Latin character variant features on Bulgarian Cyrillic (#532).
 * Added TTC-only packages back.


### 3.0.0

 * Fix missing mapping regression of U+1D0D (#510).
 * Fix dot removal on various derived glyphs (#513).
 * Fix styling features for Bulgarian, Macedonian, or Serbian (#514).
 * Fix seam on certain Cyrillic letters with descender shape (#517).
 * Fix compatibility ligature building (#524). Also moved metric override configuration, compatibility ligature configuration and character removal configuration into build plans.
 * **Prerelease changes**
   * **3.0.0-rc.8**
      * Fix shape of combining small capitals (U+1DDB, U+1DDE, U+1DDF, U+1DE1, and U+1DE2; #500).
      * Fix shape of H-cedilla (U+1E28 and U+1E29; #499).
      * Fix incorrect mapping of U+228D (was U+228E) (#501).
      * Fix shape of U+0478 and U+0479 (#503).
      * Fix broken shape of R-stroke (#504).
      * Fix shape of U+21B9 (#505).
      * Change feature name `fwid` → `WWID`, `hwid` → `NWID`.
      * Fix Iosevka Curly's default mapping of `@` (#509).      
   * **3.0.0-rc.7**
      * Fixed phonetic ligatures' shape. Now they are connected more closely (#488).
      * Fix shape of U+AB30, U+AB64 and U+1DE7 (#489).
      * Fix export of U+478 and U+479.
      * Fix shape of U+029A, U+1D08, U+1D4C (#491).
      * Add U+AB66 and U+AB67 (#488).
      * Fix shape of U+1DF0 (#497).      
   * **3.0.0-rc.6**
      * Add IEC power symbol.
      * Add straight lambda (`λ`) shape, and corresponded variant selector `cv94`. Old shape is placed under `cv95` (#467).
      * Add U+2423 `OPEN BOX` (`␣`) (#469).
      * Add Bashkir Ka (U+04A0, U+04A1) (#441).
      * Fixed mapping for U+028C, U+034D.
      * Fixed the thickness of thick arrows under full width.
      * Fixed missing `TM` and `SM` symbol.
      * Fixed weight of dotted numbers.
      * Fix APL symbols' metric under Aile.
      * Make `m.short-leg` more distinctive (#471).
      * Add ligation for waved double-headed-arrow (#475).
      * Expand the ligation set for colons to all dotty operators (#476).
      * Added variants for `9` like a turned `6` (#363).      
   * **3.0.0-rc.5**
      * Add reverse-slashed zero (#438).
      * Add U+1F8B0 and U+1F8B1 (#459).
      * Fixed broken shape around `srtail`, `Sswash` and `sswash`.
      * Fix `no-cv-ss` building (#460).
      * Retrocomputing symbols are now defaults to half-width.
      * Made variant selectors work for turned letters.
      * Make `ligset-dlig` usable from custom build (#463).      
   * **3.0.0-rc.4**
      * Fix OTL script tag of default script (`dflt` -> `DFLT`). Though most shaping engine would not be impacted by the incorrect tag in earlier versions.
      * Add large brackets (U+239B ... U+23AD) and extensible integral symbols (U+2320, U+2321, U+23AE).
      * Add arrow U+21DE, U+21DF, U+2908, U+2909.
      * Add logical symbol U+22A9, U+22AA, U+22AB, U+22AE, U+22AF.
      * Cancelled ligation around regex look-around.
      * Implement thousand-digit grouping under `THND` feature.
      * Shape refinements of digit `1` and `6`.      
   * **3.0.0-rc.3**
      * Fix shape of `smcpGhooktop` (U+029B) and `uogonek.withoutBar`.
      * Make the dotless `i` and `j` CCMP feature work for more related characters and stylized forms.
      * Fix substitution of i-ogonek and upper combining marks.
      * Fix broken shape of tildes.
      * Fix broken degree-C and degree-F ligature.
      * Fix broken cup (`∪`) and cap (`∩`) symbol.      
   * **3.0.0-rc.2**
      * Change the glyph shape for U+1E10 “Ḑ” and U+1E11 “ḑ” to D-comma rather than D-cedilla.
      * Add toothless `G`.
      * Rename private feature tags to follow [OTSpec’s vendor-specific tag guide](https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags).      
   * **3.0.0-rc.1**
      * The packaging and spacing is significantly changed:
         * `Iosevka` → Kept, but made arrows and geometric symbols wide.
         * `Iosevka Term` → `Iosevka Fixed`.
         * `Iosevka TermLig` → `Iosevka Term`.
         * `Iosevka Type` → Removed.
         * `Iosevka CC` → Removed.
      * Fix “Lucida” style's `one` character.
      * Added weight “Book”.
      * Fix broken shape of heavy curly V, etc.
      * Improve double-line arrow ligations.
      * Add diamond-shaped `<>` ligation, and enabled that for Haskell.
      * Added bar-less `u` variants, and JetBrains Mono:
         * Assigned `cv90` to this variant.
         * Assigned `ss14` to the stylistic set.      
   * **3.0.0-beta.3**
      * Made the curly-bar variant via OpenType tag `ss20`.
      * Alias U+2B95 to U+27A1.
      * Add symbol U+22DA, U+22DB, U+23B0, U+23B1, etc.
      * Finished the unicode block that supports retro computer characters.
      * Building: The shape weight is now a continuous space.      
   * **3.0.0-beta.2**
      * Fix horn connection on O-horn with tone marks: `Ờ ờ Ớ ớ Ở ở Ỡ ỡ Ợ ợ`.
      * Optimize the anchor position of `R` and `ɏ` (U+024F).      
   * **3.0.0-beta.1**
      * Fix the shape of `Rrotunda` (U+A75A) and `rrotunda` (U+A75B).
      * Make curly `k` under Slab variants look more different than the straight ones.
      * Fixed minor stroke overflow on `A`.
      * Fix O-hook connection.
      * Add more math symbols (`≺`, `≻`, `⊏`, `⊐`, etc.) for Agda.      
   * **3.0.0-alpha.5**
      * Made hooks' terminal flat, which applies to `a`, `c`, `e`, etc.
      * Add variant selector for `f`: `v-f-serifed`.
      * Add variant selectors for `r`: `v-r-standard`, `v-r-serifed`, `v-r-top-serifed`.
      * Fix various `r`-related glyphs' shape.
      * Fix shape of cursive `k` under Slab shape.
      * Fix Bulgarian Tse shape.
      * Add `fwid` and `hwid` for Powerline.
      * Default `g` to single-storey.      
   * **3.0.0-alpha.4**
      * Added three-line ligation of `===` and `!==` for JavaScript, PHP, etc.
      * Default ligature set selector: `ligset-javascript` and `ligset-php`.
      * Cherry-picking configuration selector: `eqeqeq` and `exeqeq`.
      * OpenType tags: `XJS0`, `XPHP`.
      * Exposed curly-vs-straight letterform selectors.
      * OpenType tags are from `cv70` to `cv83`.
      * Fixed style linking for extended variants.      
   * **3.0.0-alpha.3**
      * Added ligation for `~>`, `<~`, `~~>`, etc.
      * Further refined the shapes of APL symbols.
      * Added old-style numbers. Feature `onum` and `lnum` are enabled.      
   * **3.0.0-alpha.2**
      * Extended width will be built automatically and integrate into existing families.
      * Added more letter-like symbols: `⅋`, `ℂ`, `ℍ`, `ℙ`, `ℕ`, `ℚ`, `ℝ`, `ℤ`, `ℵ`, `ℶ`.
      * Refine the height of brackets and symbols.
      * Renamed various variant selectors:
         * `v-m-longleg` → `v-m-normal`
         * `v-one-hooky` → `v-one-nobase`
         * `v-one-serifed` → `v-one-base`
         * `v-seven-normal` → `v-seven-noserif`
         * `v-seven-force-serifed` → `v-seven-serifed`
      * Added `v-lig-ltgteq-flat` (`cv66`) and `v-lig-ltgteq-slanted` (`cv67`) to change the shape of `<=` and `>=` ligation.      
   * **3.0.0-alpha.1**
      * The letters `k`, `x`, `v`, `A`, etc. will now use straight legs by default. The “curly” families will keep the old shape.
      * Note this is a parameter difference rather than variant. So there won’t be a `cv##` or `ss##` variant selector.
      * Introduced a curly italic `k` with untagged variant `v-k-italic`.
      * Introduced `ss12` OpenType tag for Ubuntu-Mono style as well as a prebuilt `SS12` family.

