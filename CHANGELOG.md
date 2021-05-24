## Modifications since version 2.x

### 7.0.0-preview.5

 * Fix missing serifs on `U+0198` and `U+0199` (#1042).
 * Fix missing dot on `U+1DA4` (#1043).
 * Fix missing variants of `U+1D2D` (Regression, #1044).
 * Fix missing variants of `U+20A6` (#1045).
 * Fix missing serifs on capital Greek lunate sigmas (#1046).
 * Make `cv15` able to influence P with Hook (`U+01A4`) and Ruble sign (`U+20BD`) (#1047).
 * Make `cv17` able to influence Yr (`U+01A6`) and R-roundta (`U+A75A`, `U+A75B`) (#1049).
 * Correct width of Latin Small Letter UE (`U+1D6B`) (Regression, #1050).
 * Fix incorrect slope of Circled Italic Latin Capital Letter C (`U+1F12B`) and Circled Italic Latin Capital Letter R (`U+1F12C`) (#1051).


### 7.0.0-preview.4

 * \[**Breaking**\] Variant names of certain letters are renamed and reorganized, including:
   - `E`, `F`, `H`, Cyrillic Small En (`н`).
 - Force all variants of mathematical sans-serif characters to remove all serifs, including motion serifs (#1030).
 - Fix broken variant selectors for Polytonic Greek letters with dual-diacritics (#1031).
 - Make variant selectors of `A` and `E` able to influence AE and OE letters (#1031).
 - Make combining parentheses more significant (#1032).
 - Make `cv02` apply to B with bar (#1033).
 - Fix shape of Copyleft Symbol `U+1F12F` (#1034).
 - Fix incorrect mapping of `U+037B` and `U+03FD` (#1036).
 - Correct glyph of `U+2411` (#1037).
 - Make `cv06` able to influence `U+0191` (#1038).
 - Fix incorrect glyph shape mapping of `U+22F0` and `U+22F1` (#1039).


### 7.0.0-preview.3

 * \[**Breaking**\] Variant names of certain letters are renamed and reorganized, including:
   - `L`.
 * Add characters:
   - Turned Sans-serif Capital L (`U+2142`).
   - Turned Sans-serif Capital Y (`U+2144`).
   - Between Symbol (`U+226C`).
   - Intercalate Symbol (`U+22BA`).
   - Right Angle with Arc (`U+22BE`).
   - Element Of with Overbar (`U+22F6`).
   - Small Element Of with Overbar (`U+22F7`).
   - Contains with Overbar (`U+22FD`).
   - Small Contains with Overbar (`U+22FE`).
   - Heavy Black Heart (`U+2764`) (#920).
   - Squared Three D ... Squared VOD (`U+1F19B` ... `U+1F1AC`).
 * Fix misplaced descender on `U+04AD` (#1005).
 * Fix inconsistent serif on italic variants of Cyrillic En (#1006).
 * Fix inconsistent serifs on letters with retroflex hooks, like `U+1D99` and `U+01AE` (#1008).
 * Balance stroke width of curly W/w in bold weights (#1011).
 * Fix gap in the curly variant of `U+A75A` and `U+A75B` (#1012).
 * Make CV feature for `l` effective on more derived letters (#1015).
 * Fix wrong serifs on italic `U+1D2B` (#1014).
 * Fix missing serifs on `U+018E` and `U+1D32` (#1016).
 * Fix wrong serifs on italic `U+1D78` (#1017).
 * Increase visibility of Cyrillic Descender (#1018).
 * Fix wrong serifs on italic `U+2141` (#1019).
 * Fix missing serif on `U+1D6B` (#1022).
 * Increase oval size of Cyrillic Be (`U+0431`) (#1023).
 * Fix shape of `U+A7F8` (#1024).
 * Fix inconsistent serif on `U+00B5` (#1025).
 * Make lowercase Cyrillic Em wider (Aile/Etoile) (#1028).


### 7.0.0-preview.2

 * Add characters:
   - Measured Angle (`U+2221`).
   - Spherical Angle (`U+2222`).
   - Homothetic (`U+223B`).
   - Sine Wave (`U+223F`).
   - Wreath Product (`U+2240`).


### 7.0.0-preview.1

 * \[**Breaking**\] Variant tags are reordered.
 * \[**Breaking**\] Variant names of certain letters are renamed and reorganized, including:
   - `a` and `g`.
   - Upper Gamma (`grek-upper-gamma`).
   - `K`, `k`, Cyrillic Ka (`К` and `к`).
   - Cyrillic Ze (`З` and `з`).
 * Add characters:
   - All remaining letters in Cyrillic block, including:
     - Cyrillic Iotified E (`U+0464`, `U+0465`).
     - Cyrillic Omega (`U+0460`, `U+0461`), Ot (`U+047E`, `U+047F`).
     - Cyrillic Psi (`U+0470`, `U+0471`).
     - Cyrillic Broad On (`U+047A`, `U+047B`).
     - Cyrillic combining Dasia (`U+0485`), Psili (`U+0486`), Pokrytie (`U+0478`).
     - Cyrillic Ornate Omega (`U+047C`, `U+047D`).
     - Cyrillic Koppa (`U+0480`, `U+0481`).
     - Cyrillic Semi-soft Sign (`U+048C`, `U+048D`).
     - Cyrillic Er with Tick (`U+048E`, `U+048F`).
     - Cyrillic tailed Short I (`U+048A`, `U+048B`), tailed El (`U+04C5`, `U+04C6`), railed En (`U+04C9`, `U+04CA`), tailed Em (`U+04CD`, `U+04CE`).
     - Cyrillic Ka with Vertical Stroke (`U+049C`, `U+049D`).
     - Cyrillic Ka with Stroke (`U+049E`, `U+049F`).
     - Cyrillic Pe with Middle Hook (`U+04A6`, `U+04A7`).
     - Cyrillic Abkhasian Ha (`U+04A8`, `U+04A9`).
     - Cyrillic Te-Tse (`U+04B4`, `U+04B5`).
     - Cyrillic Abkhazian Che (`U+04BC` ... `U+04BF`).
     - Cyrillic Ka with Hook (`U+04C3`, `U+04C4`).
     - Cyrillic Ghe with Stroke and Hook (`U+04FA`, `U+04FB`).
     - Cyrillic Ha with Hook (`U+04FC`, `U+04FD`).
     - Cyrillic Ha with Stroke (`U+04FE`, `U+04FF`).
   - Extended Cyrillic letters, including:
     - Cyrillic Reversed Ze (`U+0510`, `U+0511`).
     - Cyrillic El with Hook (`U+0512`, `U+0513`).
     - Cyrillic Pe with Descender (`U+0524`, `U+0525`).
     - Cyrillic Shha with Descender (`U+0526`, `U+0527`).
     - Cyrillic El with Descender (`U+052E`, `U+052F`).
     - Broad Omega (`U+A64C`, `U+A64D`).
   - Low asterisk (`U+204E`) and double asterisk (`U+2051`).
   - Helm symbol (`U+2388`).
 * Add tailed variants for Cyrillic El, En, Che, Yery and Ya (#972).
 * Add more serifed variants for `K`, `k`, `n`, Cyrillic Ka (`К` and `к`) and Cyrillic Ef (`ф`) to better reproduce PT Mono (#986).
 * Add SS18 to represent Input Mono (#990).


### 6.1.3

 * Fix MinTTY's warning about missing code pages (#980).


### 6.1.2

 * Make shape of straight-neck `2` less crooked (#978).


### 6.1.1

 * Fix macOS warning about `hhea` table (#977).


### 6.1.0

 * Refinement of shape of short-neck `t` (#970).
 * Refinement of shape of Ogonek (#971).


### 6.0.1

 * Increase weight of bolder weight grades for better distinction with lighter weights (#964).


### 6.0.0

 * \[**Breaking**\]: The grades for width is updated to make the unit width of Extended subfamily being 0.6em.
 * \[**Breaking**\]: Various variants are renamed or reordered, including:
   - Variants of Asterisk (`*`).
   - Order of variants of `t`.
 * \[**Breaking**\]: Made serifed variants of `X`, `Y`, `Z`, `x` and `z` selectable via variant selector (#939).
 * \[**Breaking**\]: Reorganize variants of `A`, `B`, `D`, `J`, `X`, `Y`, `Z`, `d`, `x` and `z`.
 * Refine shape of closed and upper-open Ampersand (#912).
 * Update SS02 and SS16 to better reflect their source fonts (#939).
 * Remove unnecessary serifs of Slab Italic Small Cyrillic KA (#938).
 * Add flat-hook variants of `J` (#940, #945).
 * Add flat-arc parenthesis (#941).
 * Fixed broken shape of Motion Serifed Cyrl/Shcha (#944).
 * Add vertical-sides variants of `W` and `w` (#950).
 * Add cursive capital `Z` (#951).
 * Add flat-hooked Long S and Eszet (#952).
 * Add slant-sided `M` (#953).
 * Add turned six-pointed asterisk (#958).
 * Adjusted shape of wave ligations (#959).

