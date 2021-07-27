## Modifications since version 2.x

### 8.0.2

 * Fix TTC grouping (#1167).


### 8.0.1

 * Fix filenames in 9-file TTC (#1167).
 * Fix gap in Bulgarian De (#1168).


### 8.0.0

 * \[**Breaking**\] Add support for slope customization (#599, #1165).
   - Slope customization format has a major change, giving ability to customize slope grade used for variant selection, as well as slope angle.
   - The format will look like this:
     ``` toml
     [buildPlans.iosevka-custom.slopes.upright]
     angle = 0             # Angle in degrees. Valid range [0, 15]
     shape = "upright"     # Slope grade used for shape selection.  `upright` | `oblique` | `italic`
     menu  = "upright"     # Slope grade used for naming.           `upright` | `oblique` | `italic`
     css   = "normal"      # Slope grade used for webfont CSS.      `normal`  | `oblique` | `italic`

     [buildPlans.iosevka-custom.slopes.oblique]
     angle = 9.4
     shape = "oblique"
     menu  = "oblique"
     css   = "oblique"

     [buildPlans.iosevka-custom.slopes.italic]
     angle = 9.4
     shape = "italic"
     menu  = "italic"
     css   = "italic"
     ```


### 7.3.3

 * Fix serif placement of Latin Small Letter Reversed R with Fishhook (`U+027F`) (#1163).


### 7.3.2

 * Fix anchor placement of:
   - Latin Letter Small Capital R (`U+0280`) (#1159)
   - Latin Letter Small Capital L (`U+029F`) (#1159)
   - Cyrillic Small Letter Psi (`U+0471`) (#1159)
   - Latin Letter Small Capital E (`U+1D07`) (#1159)
   - Latin Letter Small Capital L with Stroke (`U+1D0C`) (#1159)
   - Latin Letter Small Capital U (`U+1D1C`) (#1159)
   - Modifier Letter Small Capital U (`U+1DB8`) (#1159)
   - Turned Small F (`U+214E`) (#1159)
   - Latin Letter Small Capital Turned E (`U+2C7B`) (#1159)
   - Latin Small Letter Egyptological Alef (`U+A723`) (#1159)
   - Latin Small Letter Egyptological Ain (`U+A725`) (#1159)
   - Latin Letter Small Capital F (`U+A730`) (#1159)
   - Latin Small Letter R Rotunda (`U+A75B`) (#1159)
   - Combining Homothetic Above (`U+034B`) (#1162)
   - Combining Almost Equal To Above (`U+034C`) (#1162)
   - Combining Latin Small Letter Long S (`U+1DE5`) (with `cv51 = 5`) (#1162)
   - Combining Cyrillic Letter De (`U+2DE3`) (#1162)


### 7.3.1

 * Fix placement of above marks over Cyrillic Small Ge, Te, and Ya (#1157).


### 7.3.0

 * Add Greek Upsilon with Hook Symbol (`U+03D2`).
 * Add flat-topped lowercase Delta (#856).
 * Add rounded lowercase Xi (#856).
 * Fix Bulgarian Small Ka's variant assignment (#1147).
 * Fix shape of Ruble Sign (#1155).


### 7.2.8

 * Fix broken shape of Cyrillic Small Letter Sha when `cv45 = 9` (#1154).


### 7.2.7

 * Fix incorrect shape of Proportional To (`U+221D`), Infinity (`U+221E`) and Inverted Lazy S (`U+223E`) under Italic/Oblique.
 * Fix shape of `d` `serifed-tailed` (#1150).
 * Make Latin Small Letter Dotless J with Stroke and Hook (`U+0284`) follow shape of `f` (#1151).
 * Fix `cv44` application on phonetic letters (#1152).
 * Fix shape of Combining Low Line (#1153).


### 7.2.6

 * Fixed shape of Bulgarian I with Breve, Yer, Yeri, De, Che and En (#1147).


### 7.2.5

 * Fix placement of overlay bar in Latin Small Letter D with Stroke (`U+0111`) (#1146).


### 7.2.4

 * Turn on square-dot punctuations in these stylistic sets:
   - `ss02` Anonymous Pro;
   - `ss04` Menlo;
   - `ss06` Liberation Mono;
   - `ss13` Lucida Grande Mono;
   - `ss17` Recursive Mono.


### 7.2.3

 * Fix geometry of `y` (#1144).
 * Make the Zero in SS13 more distinctive (#1141).


### 7.2.2

 * Fix broken geometry of Apl Functional Symbol Quad Question (`U+2370`) (#1138).
 * Add Tugrik Sign (`U+20AE`) (#1139).


### 7.2.1

 * Fix missing variants of square dots of the following characters (#1136):
   * Inverted Question Mark (`U+00BF`);
   * Latin Capital Letter L with Middle Dot (`U+013F`);
   * Latin Small Letter L with Middle Dot (`U+0140`);
   * Reference Mark (`U+203B`);
   * Questioned Equal To (`U+225F`);
   * Multiset Multiplication (`U+228D`);
   * Apl Functional Symbol Quad Divide (`U+2339`);
   * Apl Functional Symbol Quad Colon (`U+2360`);
   * Apl Functional Symbol Quad Question (`U+2370`);
   * Line Integration with Rectangular Path Around Pole (`U+2A12`);
   * Line Integration with Semicircular Path Around Pole (`U+2A13`);
   * Line Integration Not Including the Pole (`U+2A14`);
   * Integral Around a Point Operator (`U+2A15`);
   * Intersection with Dot (`U+2A40`);
   * Inverted Interrobang (`U+2E18`);
   * Modifier Letter Colon (`U+A789`);
   * Colon, Semicolon, Exclamation Mark and Question Mark in ligations.


### 7.2.0

 * Add square-dot variants for period, comma, colon, semicolon and all punctuations and symbols involving dot shape (diacritics are not included; #927).
 * Refine geometry of Partial Differential Symbol (`U+2202`) (#862).
 * Refine geometry of Cyrillic Small Be (`U+0431`), De (`U+0414`, `U+0434`), El (`U+041B`, `U+043B`), Ef (`U+0424`, `U+0444`), Che (`U+0247`, `U+0447`), E (`U+042D`, `U+044D`) and Ye (`U+0404`, `U+0454`) (#1128).


### 7.1.1

 * Add Greek Number Sign (`U+0374`).
 * Fix Misplaced diacritics in `U+A7BA`, `U+A7BC`, and `U+A7BE` (#1125).
 * Make Modifier Letter Colon (`U+A789`) smaller than Colon (#1126).


### 7.1.0

 * Add single-spacing TTC and Super TTC (#1112).
 * Add Greek Beta Symbol (`U+03D0`), Greek Kai Symbol (`U+03D7`), Greek Letter Digamma (`U+03DC`), Greek Small Letter Digamma (`U+03DD`), Greek Kappa Symbol (`U+03F0`), Greek Rho Symbol (`U+03F1`), Greek Lunate Epsilon Symbol (`U+03F5`) and Greek Reversed Lunate Epsilon Symbol (`U+03F6`).
 * Add Hryvnia sign (`U+20B4`) (#1117).
 * Fix placement of diacritics over uppercase Greek (#1115).
 * Adjust metrics of punctuations in Aile and Etoile (#1115).
 * Fix placement of mathematical colon-like operators; Add Modifier Letter Colon (`U+A789`) (#1118).
 * Improve handling of diacritics in [Kitty](https://sw.kovidgoyal.net/kitty/) (#1007, kovidgoyal/kitty#3716)).
 * Fix variant application of `cv30` on derived letters of `e` (#1120).
 * Make brailles always upright (#1124).
 * Fix geometry of:
   - Latin Capital Letter I with Ogonek (`U+012E`), Latin Small Letter with Ogonek (`U+012F`) (#1115).
   - Latin Capital Letter L with Middle Dot (`U+013F`) (#1123).
   - Latin Small Letter B with Stroke (`U+0180`) (#1115).
   - Latin Capital Letter K with Hook (`U+0198`) (#1123).
   - Latin Capital Letter Gha (`U+01A2`), Latin Small Letter Gha (`U+01A3`) (#1115).
   - Latin Capital Letter V with Hook (`U+01B2`), Latim Small Letter V with Hook (`U+028B`).
   - Latin Letter Inverted Glottal Stop with Stroke (`U+01BE`) (#1115).
   - Latin Capital Letter Hwair (`U+01F6`), Latin Small Letter Hwair (`U+0195`) (#1115).
   - Latin Capital Letter Y with Stroke (`U+024E`) (#1115).
   - Greek Capital Letter Theta (`U+0398`) (#1115).
   - Greek Capital Letter Xi (`U+039E`) (#1115).
   - Greek Capital Letter Delta (`U+0394`), Increment Symbol (`U+2206`) under Slab (#1115).
   - Greek Capital Letter Psi (`U+03A8`), Greek Small Letter Psi (`U+03C8`), Cyrillic Small Letter Psi (`U+0471`) (#1115).
   - Greek Small Letter Upsilon (`U+03C5`) (#1115).
   - Greek Small Letter Chi (`U+03C7`) (#1115).
   - Latin Small Letter A With Right Half Ring (`U+1E9A`) (#1115).
   - Latin Small Letter Y With Dot Below (`U+1EF5`) (#1115).
   - Mathematical Double-struck Capital E (`U+1D53C`) (#1119).


### 7.0.4

 * Exported glyphs' names in production fonts, which enables ligatures in [Kitty](https://sw.kovidgoyal.net/kitty/) (#1007).
 * Fix broken connecting underscore ligatures (#1110).


### 7.0.3

 * Fix assignment of italic `d`, `ss03`, `ss06` and `ss08` (#1104).


### 7.0.2

 * Fix Aile's long-S at Italic (#1098).
 * Fix assignment of capital Gamma in `ss14` (#1099).
 * Fix rounding errors found in certain Extended glyphs (#1100).
 * Fix assignment of `k` in `ss20` (#1102).


### 7.0.1

 * Add cursive for Latin Small Letter W with Hook (`U+2C73`) (#1081).
 * Fix missing variants of Latin Small Letter Turned M with Long Leg (`U+0270`) (#1082).
 * Fix broken geometry of Single-arch Latin Capital Letter Turned M (`U+019C`) (#1083).
 * Fix broken geometry of Single-arch Mathematical Bold Small M (`U+1D426`) (#1084).
 * Fix missing serif and `cv39` variants of Latin Small Letter Feng Digraph (`U+02A9`) (#1085).
 * Fix missing variant of Latin Small Letter Ue (`U+1D6B`) (#1086).
 * Fix missing serif of Italic Latin Phi (#1087).
 * Remove `U+1FB93` ("Left Half Block and Right Half Inverse Medium Shade") since it is a reserved code point for now (#1088).
 * Add Black Rightwards Arrowhead (`U+27A4`) (#1090).
 * Fix inconsistent hook shape on Latin Small Letter T with Retroflex Hook (`U+0288`) (#1091).
 * Fix regression of diacritic placement of over-the-tie marks (#1092).
 * Fix missing variants of white curly brackets (`U+2983`, `U+2984`) (#1093).
 * Fix the placement of the diacritic in Latin Small Letter L with Cedilla (`U+1E29`) (#1095).
 * Improve legibility of Ampersand (closed and upper-open) (#1096).


### 7.0.0

 * \[**Breaking**\] Variant tags are reordered.
 * \[**Breaking**\] Variant names of certain letters are renamed and reorganized, including:
   - `E`.
   - `F`.
   - `H`.
   - `K`.
   - `L`.
   - `U`.
   - `a`.
   - `g`.
   - `k`.
   - `h`.
   - `l`.
   - `m`.
   - `n`.
   - `q`.
   - `u`.
   - Long-S (`ſ`).
   - Eszet (`ß`).
   - Greek Small Iota (`ι`).
   - Upper Gamma (`Γ`).
   - Cyrillic Ze (`З` and `з`).
   - Cyrillic Ka (`К` and `к`).
   - Cyrillic Small En (`н`).
 * \[**Breaking**\] Variant selector of Cyrillic Ya (`Я` / `я`) are detached from `R`.
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
   - Turned Sans-serif Capital L (`U+2142`).
   - Turned Sans-serif Capital Y (`U+2144`).
   - Measured Angle (`U+2221`).
   - Spherical Angle (`U+2222`).
   - Homothetic (`U+223B`).
   - Sine Wave (`U+223F`).
   - Wreath Product (`U+2240`).
   - Between Symbol (`U+226C`).
   - Intercalate Symbol (`U+22BA`).
   - Right Angle with Arc (`U+22BE`).
   - Element Of with Overbar (`U+22F6`).
   - Small Element Of with Overbar (`U+22F7`).
   - Contains with Overbar (`U+22FD`).
   - Small Contains with Overbar (`U+22FE`).
   - Helm symbol (`U+2388`).
   - Heavy Black Heart (`U+2764`) (#920).
   - Squared Three D ... Squared VOD (`U+1F19B` ... `U+1F1AC`).
 * Add variants and stylistic sets:
   - Add tailed variants for Cyrillic El, En, Che, Yery and Ya (#972).
   - Add more serifed variants for `K`, `k`, `n`, Cyrillic Ka (`К` and `к`) and Cyrillic Ef (`ф`) to better reproduce PT Mono (#986).
   - Add top-left serifed variant for `m` (#1052).
   - Add descending variants for Long-S and Eszet (#1070).
   - Add SS18 to represent Input Mono (#990).
 * Fixes of variant selector application on derived letters or letter forms, including:
   - Cyrillic En (#1006).
   - Small U with Retroflex Hook (`U+1D99`) and Capital T with Retroflex Hook (`U+01AE`) (#1008).
   - Derivatives of Latin Small Letter L (#1015).
   - Latin Small Ligature Fi (`U+FB01`), Latin Small Ligature Fl (`U+FB02`) (#1015).
   - Latin Small Letter Ue (`U+1D6B`) (#1022).
   - Latin Capital Letter AE (`U+00C6`), Latin Capital Letter OE (`U+0152`) and derivatives (#1031).
   - Polytonic Greek letters with dual-diacritics (#1031).
   - Latin Capital B with Stroke (`U+0243`) and derivatives (#1033).
   - Latin Capital Letter F with Hook (`U+0191`) (#1038).
   - Latin Capital Letter K with Hook (`U+0198`), Latin Small Letter K with Hook (`U+0199`) (#1042).
   - Naira Sign (`U+20A6`) (#1045).
   - Greek Lunate Sigma (`U+03F9`) and derivatives (#1046).
   - P with Hook (`U+01A4`), Ruble sign (`U+20BD`) (#1047).
   - Yr (`U+01A6`), R-rotunda (`U+A75A`, `U+A75B`) (#1049).
   - Hwair (`U+01F6`), Cyrillic Capital Nje (`U+040A`) (#1059).
   - Cyrillic Izhitsa (`U+0474`) (#1061).
   - Latin Capital Letter W with Hook (`U+2C72`), Latin Small Letter W with Hook (`U+2C73`) (#1062).
   - Latin Small Letter with Palatial Hook (`U+01AB`), Latin Small Letter T with Hook (`U+01AD`), Latin Small Letter T with Retroflex Hook (`U+0288`),
   - Latin Small Letter FEng Digraph (`U+02A9`) (#1063)
   - Latin Small Letter Reversed Open E with Hook (`U+025D`) (#1063).
   - Latin Capital Letter Z with Swash Tail (`U+2C7F`), Latin Small Letter Z with Swash Tail (`U+0240`) (#1064).
   - Latin Small Letter D with Curl (`U+0221`), Latin Small Letter D with Tail (`U+0256`), Latin Small Letter D with Hook and Tail (`U+1D91`) (#1067).
   - Interrobang (`U+203D`), APL Functional Symbol Quad Question (`U+2370`), Inverted Interrobang （`U+2E18`) (#1075).
   - Latin Small Letter N with Long Leg (`U+019E`), Latin Capital Letter N with Lon gLeg (`U+0220`).
   - Latin Small Letter N with Curl (`U+0235`).
   - Latin Small Letter T with Curl (`U+0236`).
   - Latin Small Letter J with Curl (`U+029D`).
   - Latin Capital Letter Turned M (`U+019C`), Latin Small Letter Turned M (`U+026F`), Latin Small Letter Turned M with Long Leg (`U+0270`), Latin Small Letter M with Hook (`U+0271`).
   - Latin Small Letter G with Hook (`U+0260`), Latin Small Letter Script G (`U+0261`).
   - Latin Small Letter Turned H (`U+0265`), Latin Small Letter H with Hook (`U+0266`), Latin Small Letter Heng with Hook (`U+0267`).
 * Fix incorrect or inconsistent serifs for Slab, including:
   - Cyrillic Small Capital El (`U+1D2B`) (#1014).
   - Latin Capital Reversed E (`U+018E`) and Modifier Capital Reversed E (`U+1D32`) (#1016).
   - Modifier Cyrillic En (`U+1D78`) under Italic (#1017).
   - Turned Sans-Serif Capital G (`U+2141`) (#1019).
   - Micro Sign (`U+00B5`) (#1025).
   - All mathematical sans-serif letters under any CV/SS application (#1030).
 * Geometry fixes:
   - Fix misplaced descender on Cyrillic Small Letter Te with Descender (`U+04AD`) (#1005).
   - Fix gap in the curly variant of R-rotunda (`U+A75A`, `U+A75B`) (#1012).
   - Fix incorrect shape of Modifier Letter Capital H with Stroke (`U+A7F8`) (#1024).
   - Fix shape of Copyleft Symbol (`U+1F12F`) (#1034).
   - Fix incorrect mapping of Greek Small Reversed Lunate Sigma Symbol (`U+037B`) and Greek Capital Reversed Lunate Sigma Symbol (`U+03FD`) (#1036).
   - Fix incorrect shape of Symbol For Device Control One (`U+2411`) (#1037).
   - Fix incorrect glyph shape mapping of Up Right Diagonal Ellipsis (`U+22F0`) and Down Right Diagonal Ellipsis (`U+22F1`) (#1039).
   - Fix missing dot on Latin Small Letter I with Stroke (`U+0268`) and Modifier Letter Small I with Stroke (`U+1DA4`) (#1043, #1066).
   - Fix incorrect slope of Circled Italic Latin Capital C (`U+1F12B`) and Circled Italic Latin Capital R (`U+1F12C`) (#1051).
   - Fix wrong glyphs for Letter Tone Five (`U+01BC`, `U+01BD`) (#1074).
   - Fix top hooks on some phonetic letters (`U+0253`, `U+0266`, `U+0267`, `U+01A5`) (#1072).
   - Fix geometry of mathematical tileable brackets and integral signs in Italic/Oblique (#1076).
   - Fix geometry of Latin Small Letter Tone Six (`U+0185`) to follow L2/19-201 (#1078).
 * Geometry refinements:
   - Balance stroke width of curly W/w in bold weights (#1011).
   - Increase visibility of Cyrillic Descender (#1018).
   - Increase oval size of Cyrillic Be (`U+0431`) (#1023).
   - Make lowercase Cyrillic Em wider (Aile/Etoile) (#1028).
   - Make combining parentheses more significant (#1032).
   - Latin Small Letter Schwa with Hook (`U+025A`), Latin Small Letter Reversed Open E with Hook (`U+025D`) (#1063).
 * Refine mark placement:
   - `E`, `t` and `r` (#1063).

