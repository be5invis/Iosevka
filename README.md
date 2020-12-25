# Iosevka ![Version](https://img.shields.io/github/release/be5invis/Iosevka.svg)
**Iosevka** is an *open-source*, *sans-serif* + *slab-serif*, *monospace* + *quasi‑proportional* typeface family, designed for *writing code*, using in *terminals*, and preparing *technical documents*.

![](images/preview-all.png)

## Installation

Quit your editor/program. Unzip and open the folder.

* **Windows**: Download the fonts from the [Releases](https://github.com/be5invis/Iosevka/releases), select the font files and right click, then hit “Install”.  
  
  * On Windows 10 1809 or newer the default font installation is per-user, and it may cause compatibility issues for some applications, mostly written in Java. To cope with this, right click and select “Install for all users” instead. [Ref.](https://youtrack.jetbrains.com/issue/JRE-1166?p=IDEA-200145)
* **[macOS](http://support.apple.com/kb/HT2509)**
  * Standard distribution in Homebrew: 
    ```bash
    brew tap homebrew/cask-fonts
    brew cask install font-iosevka
    ```
  *  Search for other variants using `brew search font-iosevka` and install what you want.
  * Customizable install using Homebrew: see [robertgzr/homebrew-tap](https://github.com/robertgzr/homebrew-tap).
* **Linux** : Copy the TTF files to your fonts directory → Run `sudo fc-cache`. 
  - Arch Linux users can install the font from the AUR [here](https://aur.archlinux.org/packages/ttf-iosevka) using an AUR wrapper or by doing it manually. [All variants](https://aur.archlinux.org/packages/?O=0&SeB=nd&K=ttf-iosevka&SB=n&SO=a&PP=50&do_Search=Go).
  - Void Linux users can install the font with `xbps-install font-iosevka`.
  - Fedora Linux users can install the font(s) from the copr [here](https://copr.fedorainfracloud.org/coprs/peterwu/iosevka/). Run `dnf search iosevka` to discover available fonts and `dnf install` to install the chosen one(s).
* **FreeBSD**: The font can be installed with `pkg install iosevka`.
* **OpenBSD**: Run `pkg_info -Q iosevka` to see which Iosevka packages are available. Use `pkg_add` to install the chosen package(s).

## Features

In the official package, Iosevka provides 6 monospace subfamilies and 3 quasi-proportional subfamilies. In all the monospace subfamilies, 9 weights (Thin to Heavy), 2 widths (Normal and Extended), and 3 slopes (Upright, Italic and Oblique) are included. In the quasi-proportional subfamilies, the quantity of widths is reduced to 1.

![Weights sample](images/weights.png)

All versions include the same ranges of characters: Latin letters, Greek letters (including Polytonic), some Cyrillic letters, IPA symbols and common punctuations and some symbols. You can check out the full list [here](http://be5invis.github.io/Iosevka/specimen).

![Languages Sample](images/languages.png)

<!-- BEGIN Section-Language-List -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

162 Supported Languages: 

Afrikaans, Aghem, Akan, Albanian, Asturian, Asu, Azerbaijani, Bafia, Bambara, Basaa, Basque, Belarusian, Bemba, Bena, Bosnian, Breton, Bulgarian, Catalan, Cebuano, Central Atlas Tamazight, Chechen, Chiga, Colognian, Cornish, Croatian, Czech, Danish, Duala, Dutch, Embu, English, Esperanto, Estonian, Ewe, Ewondo, Faroese, Filipino, Finnish, French, Friulian, Fulah, Galician, Ganda, German, Greek, Gusii, Hausa, Hawaiian, Hungarian, Icelandic, Igbo, Inari Sami, Indonesian, Interlingua, Irish, Italian, Javanese, Jola-Fonyi, Kabuverdianu, Kabyle, Kako, Kalaallisut, Kalenjin, Kamba, Kazakh, Kikuyu, Kinyarwanda, Koyra Chiini, Koyraboro Senni, Kurdish, Kwasio, Kyrgyz, Lakota, Langi, Latvian, Lingala, Lithuanian, Low German, Lower Sorbian, Luba-Katanga, Luo, Luxembourgish, Luyia, Macedonian, Machame, Makhuwa-Meetto, Makonde, Malagasy, Malay, Maltese, Manx, Maori, Masai, Meru, Metaʼ, Mongolian, Morisyen, Mundang, Nama, Ngiemboon, Nigerian Pidgin, North Ndebele, Northern Sami, Norwegian Bokmål, Norwegian Nynorsk, Nuer, Nyankole, Oromo, Ossetic, Polish, Portuguese, Prussian, Quechua, Romanian, Romansh, Rombo, Rundi, Russian, Rwa, Sakha, Samburu, Sango, Sangu, Scottish Gaelic, Sena, Serbian, Shambala, Shona, Slovak, Slovenian, Soga, Somali, Spanish, Sundanese, Swahili, Swedish, Swiss German, Tachelhit (shi_latn), Taita, Tajik, Tasawaq, Tatar, Teso, Tongan, Turkish, Turkmen, Ukrainian, Upper Sorbian, Uzbek, Vai (vai_latn), Vietnamese, Volapük, Vunjo, Walser, Welsh, Western Frisian, Wolof, Xhosa, Yangben, Yoruba, Zarma, Zulu

<!-- END Section-Language-List -->

### Stylistic Sets

Monospace Iosevka contains various stylistic sets to change the shape of certain characters. Enabling corresponded OpenType feature to enable.

<!-- BEGIN Section-OT-Stylistic-Sets -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

<table>
<tr>
<td><code>ss01</code></td>
<td>Andale Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss01-1.png"/></td>
</tr>
<tr>
<td><code>ss02</code></td>
<td>Anonymous Pro Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss02-1.png"/></td>
</tr>
<tr>
<td><code>ss03</code></td>
<td>Consolas Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss03-1.png"/></td>
</tr>
<tr>
<td><code>ss04</code></td>
<td>Menlo Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss04-1.png"/></td>
</tr>
<tr>
<td><code>ss05</code></td>
<td>Fira Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss05-1.png"/></td>
</tr>
<tr>
<td><code>ss06</code></td>
<td>Liberation Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss06-1.png"/></td>
</tr>
<tr>
<td><code>ss07</code></td>
<td>Monaco Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss07-1.png"/></td>
</tr>
<tr>
<td><code>ss08</code></td>
<td>Pragmata Pro Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss08-1.png"/></td>
</tr>
<tr>
<td><code>ss09</code></td>
<td>Source Code Pro Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss09-1.png"/></td>
</tr>
<tr>
<td><code>ss10</code></td>
<td>Envy Code R Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss10-1.png"/></td>
</tr>
<tr>
<td><code>ss11</code></td>
<td>X Window Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss11-1.png"/></td>
</tr>
<tr>
<td><code>ss12</code></td>
<td>Ubuntu Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss12-1.png"/></td>
</tr>
<tr>
<td><code>ss13</code></td>
<td>Lucida Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss13-1.png"/></td>
</tr>
<tr>
<td><code>ss14</code></td>
<td>JetBrains Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss14-1.png"/></td>
</tr>
<tr>
<td><code>ss20</code></td>
<td>Curly Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-ss20-1.png"/></td>
</tr>
</table>

<!-- END Section-OT-Stylistic-Sets -->

### Character Variants

Alongside stylistic sets, Monospace Iosevka can also be configured to cherry-pick variants for each character using OpenType. The variants are shown below. To enable, assign the feature tag to the variant index. For example, setting `cv11` to `2` will enable single-storey `a`.

**Caution :**  Certain software may limit the quantity of OpenType features and drop some of them if the feature list is too long. Please validate your feature configuration to ensure that it worked in your software.

![Character Variants](images/charvars.png)

### Ligations

Monospace subfamilies support ligations. Iosevka’s default ligation set is assigned to `calt` feature, though not all of them are enabled by default.

<!-- BEGIN Section-OT-Ligation-Tags-1 -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

<table>
<tr>
<td><code>calt off</td>
<td>Ligation Off</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-calt-0.png"/></td>
</tr>
<tr>
<td><code>calt</code></td>
<td>Default setting in text editors</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-calt-1.png"/></td>
</tr>
</table>

<!-- END Section-OT-Ligation-Tags-1 -->

Iosevka supports Language-Specific Ligations, which is the ligation set enabled only under certain languages. These ligation sets are assigned to custom feature tags. To use them, you need to turn **off** `calt` and enable the corresponded feature. The feature list is:

<!-- BEGIN Section-OT-Ligation-Tags-2 -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

<table>
<tr>
<td><code>dlig</code></td>
<td>Discretionary ligatures</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-dlig-1.png"/></td>
</tr>
<tr>
<td><code>CLIK</code>; <code>JSPT</code>; <code>PHPX</code></td>
<td>C-Like, JavaScript, PHP</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-CLIK-1.png"/></td>
</tr>
<tr>
<td><code>MLXX</code>; <code>FSHP</code></td>
<td>ML, F#</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-MLXX-1.png"/></td>
</tr>
<tr>
<td><code>FSTA</code></td>
<td>F*</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-FSTA-1.png"/></td>
</tr>
<tr>
<td><code>HSKL</code>; <code>IDRS</code>; <code>ELMX</code>; <code>PURS</code></td>
<td>Haskell, Idris, Elm, PureScript</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-HSKL-1.png"/></td>
</tr>
<tr>
<td><code>SWFT</code></td>
<td>Swift</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-SWFT-1.png"/></td>
</tr>
<tr>
<td><code>COQX</code></td>
<td>Coq</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-COQX-1.png"/></td>
</tr>
<tr>
<td><code>MTLB</code></td>
<td>Matlab</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-MTLB-1.png"/></td>
</tr>
<tr>
<td><code>VRLG</code></td>
<td>Verilog</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-VRLG-1.png"/></td>
</tr>
<tr>
<td><code>WFLM</code></td>
<td>Wolfram Language (Mathematica)</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-WFLM-1.png"/></td>
</tr>
</table>

<!-- END Section-OT-Ligation-Tags-2 -->

Please note that, due to the complex interactions when forming ligations, cherry-picking ligation groups will require a custom Iosevka build. The instructions could be seen below.

## Building from Source

To build Iosevka you should:

1. Ensure that [`nodejs`](http://nodejs.org) (≥ 12.16.0) and [`ttfautohint`](http://www.freetype.org/ttfautohint/) are present, and accessible from `PATH`.
2. Run `npm install`. This command will install **all** the NPM dependenceis, and will also validate whether external dependencies are present.
3. `npm run build -- contents::iosevka`.

You will find TTFs, as well as WOFF(2) web fonts and one Webfont CSS in the `dist/` directory.

### Using a Docker container

A Docker container handling the build environment for you can be found [here](https://github.com/avivace/fonts-iosevka).

To pull it from Docker Hub and start a standard build of the latest released version, run

```
docker run -it -v $(pwd):/build avivace/iosevka-build
```

Fonts files will be placed in the `dist` folder.

You can provide `private-build.plans.toml` for a customized build and/or specify the desired release appending `-e FONT_VERSION=X.X.X`. to the Docker command.

## Customized Build

To create a custom build, you need:

1. Create `private-build-plans.toml` file if absent.

2. Add a build plan into `private-build-plans.toml`. The configurable properties are described in the following sections.
   
3. Run `npm run build -- contents::<your plan name>` and the built fonts would be available in `dist/`. Aside from `contents::<plan>`, other options are:

   1. `contents::<plan>` : TTF (Hinted and Unhinted), WOFF(2) and Web font CSS;
   2. `ttf::<plan>` : TTF;
   3. `ttf-unhinted::<plan>` : Unhinted TTF only;
   4. `webfont::<plan>` : Web fonts only (CSS + WOFF2);
   5. `woff2::<plan>` : WOFF2 only.

### Configuring Custom Build

Configuration of build plans are organized under `[buildPlans.<plan name>]` sections in the `private-build-plans.toml`. You can use [the Customizer](https://be5invis.github.io/Iosevka/customizer) to create the build plan, and/or manulally edit them, following the instructions below.

Inside the plan, top-level properties include:

* `family`: String, defines the family name of your custom variant.
* `spacing`: Optional, String, denotes the spacing of the custom variant. Valid values include:
  - `term`: Make the symbols' width suitable for terminal emulators. Arrows and geometric symbols will become narrower.
  - `fontconfig-mono`: Apply `term` spacing changes and further apply changes to be compatible with FontConfig's Mono spacing, which recognizes a font as monospace if and only if its every non-combining characters having the same width. The changes include:
    - Completely remove wide glyphs. All non-combining glyphs will be exactly the same width.
      - As a consequence, the following characters will be **removed**:
        - `U+27F5` LONG LEFTWARDS ARROW
        - `U+27F6` LONG RIGHTWARDS ARROW
    - Remove `NWID` and `WWID` OpenType feature.
  - `fixed`: Apply `fontconfig-mono` changes and further remove ligations.
* `serifs`: Optional, String, configures style of serifs.
  - When set to `slab`, the font will be converted into slab-serif.
  - Otherwise the font will be sans-serif.
* `no-cv-ss`: Optional, Boolean, disables `cv##` and `ss##` OpenType features.
* `no-ligation`: Optional, Boolean, disables ligations.

Build plan could have 5 optional subsections: `ligations`, `variants`, `weights`, `widths` and `slopes`.

#### Configuring Ligations

Subsection `ligations` is used to customize the ligation set assigned to `calt` OpenType feature. Properties include:

<!-- BEGIN Section-Predefined-Ligation-Sets -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

* `inherits`: Optional, String, defines the inherited ligation set. When absent, the ligation set will not inherit any other sets. Valid values are:

  - `default-calt`: Inherit default ligation set.
  - `dlig`: Default ligation set would be assigned to Discretionary ligatures.
  - `clike`: Default ligation set would be assigned to C-Like.
  - `javascript`: Default ligation set would be assigned to JavaScript.
  - `php`: Default ligation set would be assigned to PHP.
  - `ml`: Default ligation set would be assigned to ML.
  - `fsharp`: Default ligation set would be assigned to F#.
  - `fstar`: Default ligation set would be assigned to F*.
  - `haskell`: Default ligation set would be assigned to Haskell.
  - `idris`: Default ligation set would be assigned to Idris.
  - `elm`: Default ligation set would be assigned to Elm.
  - `purescript`: Default ligation set would be assigned to PureScript.
  - `swift`: Default ligation set would be assigned to Swift.
  - `coq`: Default ligation set would be assigned to Coq.
  - `matlab`: Default ligation set would be assigned to Matlab.
  - `verilog`: Default ligation set would be assigned to Verilog.
  - `wolfram`: Default ligation set would be assigned to Wolfram Language (Mathematica).

<!-- END Section-Predefined-Ligation-Sets -->

<!-- BEGIN Section-Cherry-Picking-Ligation-Sets -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

* `disables` and `enables`: Optional, String Array, Cherry-picking ligation groups to be disabled or enabled. Valid values include:

  - `center-ops`: Vertically align some of the operators (like `*`) to the center position it is before or after a "center" operator (like `+`).
  - `arrow`: Enable ligation set that forms arrows.
  - `arrow2`: Enable ligation for more arrows, like `>>=`.
  - `trig`: Enable ligation for `<|`, `|>` , `<||`, and other bar-and-angle-bracket symbols.
  - `eqeqeq`: Enable special ligation for `===` with triple lines.
  - `eqeq`: Enable ligation for `==` and `===`.
  - `ineq`: Enable ligation for `<=` and `>=`.
  - `exeqeq`: Enable special ligation for `!==` with triple lines.
  - `exeqeq-dotted`: Enable special ligation for `!==` with triple lines, and a dot at below for distinction.
  - `eqexeq`: Enable special ligation for `=!=` with triple lines.
  - `eqexeq-dotted`: Enable special ligation for `=!=` with triple lines and a dot at below for distinction.
  - `eqexeq-dl`: Enable special ligation for `=!=` with double lines.
  - `eqexeq-dl-dotted`: Enable special ligation for `=!=` with double lines, and a dot at below for distinction.
  - `exeq`: Enable ligation for `!=` and `!==`.
  - `exeq-dotted`: Enable ligation for `!=` and `!==` with a dot at below for distinction.
  - `tildeeq`: Enable ligation for `~=` as inequality.
  - `eqslasheq`: Enable special triple-line ligation for `=/=` as inequality.
  - `slasheq`: Enable ligation for `/=` and `=/=` as inequality.
  - `ltgt-ne`: Enable ligation for `<>` as inequality.
  - `ltgt-diamond`: Enable ligation for `<>` as diamond.
  - `brst`: Center asterisk in `(*` and `*)`.
  - `plusplus`: Enable ligation for `++` and further plus-chaining.
  - `kern-dotty`: Move connecting dotty punctuations closer, like for `::`, `:::` and `...`.
  - `logic`: Enable ligation for `/\` and `\/`.
  - `llgg`: Enable ligation for `<<`, `>>` and other angle-bracket chaining.
  - `llggeq`: Enable ligation for `<<=`, `>>=` as shift operator.
  - `dot-as-operator`: Treat dot (`.`) as operator and perform chained centering.
  - `lteq-as-arrow`: Treat `<=` as arrow.
  - `gteq-as-co-arrow`: Treat `>=` as co-arrow.
  - `html-comment`: Enable ligation for `<!--` and `<!---`.
  - `colon-greater-as-colon-arrow`: Transform `:>` into `:` and a narrow arrow..
  - `brace-bar`: Enable ligation for `{|` and `|}`.
  - `brack-bar`: Enable ligation for `[|` and `|]`.

<!-- END Section-Cherry-Picking-Ligation-Sets -->

#### Configuring Character Variants

Subsection `variants` is used to configure character variants in the font. Properties include:

<!-- BEGIN Section-Stylistic-Sets -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

* `inherits`: Optional, String, defines the inherited stylistic set. Valid options include:

  - `ss01`: Set character variant to “Andale Mono Style”.
  - `ss02`: Set character variant to “Anonymous Pro Style”.
  - `ss03`: Set character variant to “Consolas Style”.
  - `ss04`: Set character variant to “Menlo Style”.
  - `ss05`: Set character variant to “Fira Mono Style”.
  - `ss06`: Set character variant to “Liberation Mono Style”.
  - `ss07`: Set character variant to “Monaco Style”.
  - `ss08`: Set character variant to “Pragmata Pro Style”.
  - `ss09`: Set character variant to “Source Code Pro Style”.
  - `ss10`: Set character variant to “Envy Code R Style”.
  - `ss11`: Set character variant to “X Window Style”.
  - `ss12`: Set character variant to “Ubuntu Mono Style”.
  - `ss13`: Set character variant to “Lucida Style”.
  - `ss14`: Set character variant to “JetBrains Mono Style”.
  - `ss20`: Set character variant to “Curly Style”.

<!-- END Section-Stylistic-Sets -->

<!-- BEGIN Section-Cherry-Picking-Styles -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

* `design`, `upright`, `italic`, and `oblique`: Optional, Dictionary, defines styles for individual characters. The choices are organized in key-value pairs, assigning a variant to a character group. Alternatively, you could assign numbers to `cv##` tags, like what you did when using OpenType in CSS. Assignments under `design` will be applied to all the slopes, and `upright`, `italic`, and `oblique` will apply to corresponded slopes. 

  In addition, style selector for default digit form also uses these dictionaries.
  
  The valid combinations include:

  - Default digit form:
    - `digit-form = 'lining'`: Lining (default).
    - `digit-form = 'old-style'`: Old-style.
  - Styles for `A`, `Λ`, `Δ`:
    + `turn-v = 'straight'`, `cv01 = 1`: Standard, straight `A`, `Λ`, `Δ` (default).
    + `turn-v = 'curly'`, `cv01 = 2`: Slightly curly `A`, `Λ`, `Δ`, like Iosevka 2.x.
  - Styles for `B`:
    + `capital-b = 'standard'`, `cv02 = 1`: Standard `B` (default).
    + `capital-b = 'more-asymmetric'`, `cv02 = 2`: More asymmetric `B` to differentiate with `8`.
  - Styles for `D`:
    + `capital-d = 'standard'`, `cv03 = 1`: Standard `D` (default).
    + `capital-d = 'more-rounded'`, `cv03 = 2`: More rounded `D` to differentiate with `O`.
  - Styles for `G`:
    + `capital-g = 'toothed'`, `cv04 = 1`: Toothed G (default).
    + `capital-g = 'toothless-corner'`, `cv04 = 2`: Corner toothless G.
    + `capital-g = 'toothless-rounded'`, `cv04 = 3`: Round toothless G.
  - Styles for `I`:
    + `capital-i = 'serifed'`, `cv05 = 1`: I with standard (long) serifs (default).
    + `capital-i = 'serifless'`, `cv05 = 2`: I without serifs, like a straight bar.
    + `capital-i = 'short-serifed'`, `cv05 = 3`: I with short serifs.
  - Styles for `J`:
    + `capital-j = 'serifless'`, `cv06 = 1`: J without top serif.
    + `capital-j = 'serifed'`, `cv06 = 2`: J with top serif at left side (default).
    + `capital-j = 'serifed-both-sides'`, `cv06 = 3`: J with symmetric at both sides.
    + `capital-j = 'serifed-symmetric'`, `cv06 = 4`: J with symmetric at both sides and is symmetric.
  - Styles for `K`:
    + `capital-k = 'straight'`, `cv07 = 1`: `K` with standard shape (default).
    + `capital-k = 'curly'`, `cv07 = 2`: Slightly curly `K`, like Iosevka 2.x.
  - Styles for `M`:
    + `capital-m = 'hanging'`, `cv08 = 1`: `M` with middle being hanging off baseline (default).
    + `capital-m = 'flat-bottom'`, `cv08 = 2`: `M` with middle aligned to baseline.
  - Styles for `Q`:
    + `capital-q = 'taily'`, `cv09 = 1`: `Q` with a curly tail (default).
    + `capital-q = 'straight'`, `cv09 = 2`: `Q` with a straight tail like in the old versions.
    + `capital-q = 'crossing'`, `cv09 = 3`: `Q` with a tail crossing the ring.
  - Styles for `R`:
    + `capital-r = 'straight'`, `cv10 = 1`: Standard, straight-leg `R` (default).
    + `capital-r = 'curly'`, `cv10 = 2`:  Slightly curly-legged `R`, like Iosevka 2.x.
  - Styles for `Y`:
    + `capital-y = 'straight'`, `cv11 = 1`: Standard, straight `Y` (default).
    + `capital-y = 'curly'`, `cv11 = 2`: Slightly curly `Y`, like Iosevka 2.x.
  - Styles for `a`:
    + `a = 'doublestorey'`, `cv12 = 1`: Double-storey `a` (default for Upright).
    + `a = 'doublestorey-tailed'`, `cv12 = 2`: Double-storey `a` with curly tail.
    + `a = 'doublestorey-toothless-corner'`, `cv12 = 3`: Toothless (cornered bottom-right) double-storey `a`.
    + `a = 'doublestorey-toothless-rounded'`, `cv12 = 4`: Toothless (rounded bottom-right) double-storey `a`.
    + `a = 'singlestorey'`, `cv12 = 5`: Single-storey `a`.
    + `a = 'singlestorey-tailed'`, `cv12 = 6`: Single-storey `a` with curly tail (default for Italic).
    + `a = 'singlestorey-earless-corner'`, `cv12 = 7`: Earless (cornered top-right) single-storey `a`.
    + `a = 'singlestorey-earless-corner-tailed'`, `cv12 = 8`: Earless (cornered top-right) single-storey `a` with curly tail.
    + `a = 'singlestorey-earless-rounded'`, `cv12 = 9`: Earless (rounded top-right) single-storey `a`.
    + `a = 'singlestorey-earless-rounded-tailed'`, `cv12 = 10`: Earless (rounded top-right) single-storey `a` with curly tail.
  - Styles for `b`:
    + `b = 'toothed'`, `cv13 = 1`: `b` with bottom-left tooth (default).
    + `b = 'toothless-corner'`, `cv13 = 2`: `b` without bottom-left tooth, with a corner transition.
    + `b = 'toothless-rounded'`, `cv13 = 3`: `b` without bottom-left tooth, with a rounded transition.
  - Styles for `d`:
    + `d = 'toothed'`, `cv14 = 1`: `d` with bottom-right tooth (default for Upright).
    + `d = 'toothless-corner'`, `cv14 = 2`: `d` without bottom-right tooth, with a corner transition.
    + `d = 'toothless-rounded'`, `cv14 = 3`: `d` without bottom-right tooth, with a rounded transition.
    + `d = 'tailed'`, `cv14 = 4`: `d` with a slightly tail bottom-right tail (default for Italic).
  - Styles for `e`:
    + `e = 'flat-crossbar'`, `cv59 = 1`: `e` with flat crossbar (default for Upright).
    + `e = 'rounded'`, `cv59 = 2`: `e` with more rounded shape (default for Italic).
  - Styles for `f`:
    + `f = 'serifless'`, `cv15 = 1`: `f` without bottom serif, hook or exension (default for Sans Upright).
    + `f = 'serifed'`, `cv15 = 2`: `f` with bottom serif (default for Slab Upright).
    + `f = 'tailed'`, `cv15 = 3`: `f` with bottom hook.
    + `f = 'extended'`, `cv15 = 4`: `f` with bar extended to descender.
    + `f = 'serifless-crossbar-at-x-height'`, `cv15 = 5`: `f` without bottom serif, hook or exension; crossbar is placed right at X-height.
    + `f = 'serifed-crossbar-at-x-height'`, `cv15 = 6`: `f` with bottom serif; crossbar is placed right at X-height.
    + `f = 'tailed-crossbar-at-x-height'`, `cv15 = 7`: `f` with bottom hook; crossbar is placed right at X-height.
    + `f = 'extended-crossbar-at-x-height'`, `cv15 = 8`: `f` with bar extended to descender; crossbar is placed right at X-height.
    + `f = 'flat-hook'`, `cv15 = 9`: `f` with flat top hook, without bottom serif, hook or exension.
    + `f = 'flat-hook-serifed'`, `cv15 = 10`: `f` with flat top hook and bottom serif.
    + `f = 'flat-hook-tailed'`, `cv15 = 11`: `f` with flat top hook and bottom hook (default for Italic).
    + `f = 'flat-hook-extended'`, `cv15 = 12`: `f` with flat top hook and bar extended to descender.
    + `f = 'flat-hook-crossbar-at-x-height'`, `cv15 = 13`: `f` with flat top hook, without bottom serif, hook or exension; crossbar is placed right at X-height.
    + `f = 'flat-hook-serifed-crossbar-at-x-height'`, `cv15 = 14`: `f` with flat top hook, bottom serif; crossbar is placed right at X-height.
    + `f = 'flat-hook-tailed-crossbar-at-x-height'`, `cv15 = 15`: `f` with flat top hook, bottom hook; crossbar is placed right at X-height.
    + `f = 'flat-hook-extended-crossbar-at-x-height'`, `cv15 = 16`: `f` with flat top hook, bar extended to descender; crossbar is placed right at X-height.
  - Styles for `g`:
    + `g = 'singlestorey'`, `cv16 = 1`: Single-storey `g` (default).
    + `g = 'doublestorey'`, `cv16 = 2`: Double-storey `g`.
    + `g = 'opendoublestorey'`, `cv16 = 3`: Open Double-storey `g`, like Trebuchet MS or Fira Code.
    + `g = 'earless-corner'`, `cv16 = 4`: Earless (cornered top-right) single-storey `g`.
    + `g = 'earless-rounded'`, `cv16 = 5`: Earless (rounded top-right) single-storey `g`.
    + `g = 'singlestorey-flat-hook'`, `cv16 = 6`: Single-storey `g` with flat terminal hook.
    + `g = 'singlestorey-earless-corner-flat-hook'`, `cv16 = 7`: Earless (cornered top-right) single-storey `g` with flat terminal hook.
    + `g = 'singlestorey-earless-rounded-flat-hook'`, `cv16 = 8`: Earless (rounded top-right) single-storey `g` with flat terminal hook.
  - Styles for `h`:
    + `h = 'straight'`, `cv17 = 1`: `h` with straight ending (default).
    + `h = 'tailed'`, `cv17 = 2`: `h` with curly tailed ending.
    + `h = 'motion-serifed-straight'`, `cv17 = 3`: `h` with straight ending.
    + `h = 'motion-serifed-tailed'`, `cv17 = 4`: `h` with curly tailed ending.
  - Styles for `i`:
    + `i = 'serifed'`, `cv18 = 1`: Serifed `i` (default for Upright).
    + `i = 'serifless'`, `cv18 = 2`: `i` like a straight line.
    + `i = 'hooky'`, `cv18 = 3`: Hooky `i`.
    + `i = 'zshaped'`, `cv18 = 4`: Z-shaped `i`.
    + `i = 'hooky-bottom'`, `cv18 = 5`: `i` with a straight tail.
    + `i = 'serifed-asymmetric'`, `cv18 = 6`: `i` with shorter top serif and full bottom serif.
    + `i = 'tailed'`, `cv18 = 7`: `i` with curly tail.
    + `i = 'serifed-tailed'`, `cv18 = 8`: `i` with curly tail and top serif (default for Italic).
    + `i = 'flat-tailed'`, `cv18 = 9`: `i` with top serif and a curly-then-flat tail.
    + `i = 'serifed-flat-tailed'`, `cv18 = 10`: `i` with top serif and a curly-then-flat tail.
  - Styles for `j`:
    + `j = 'serifed'`, `cv19 = 1`: `j` with top serif (default).
    + `j = 'serifless'`, `cv19 = 2`: `j` without serif.
    + `j = 'straight-line'`, `cv19 = 3`: `j` like a straight line.
    + `j = 'flat-hook-serifed'`, `cv19 = 4`: undefined.
    + `j = 'flat-hook-serifless'`, `cv19 = 5`: undefined.
  - Styles for `k`:
    + `k = 'straight'`, `cv20 = 1`: `k` with standard shape (default for Upright).
    + `k = 'curly'`, `cv20 = 2`: Slightly curly `k`, like Iosevka 2.x.
    + `k = 'cursive'`, `cv20 = 3`: `k` with a cursive loop (default for Italic).
  - Styles for `l`:
    + `l = 'serifed'`, `cv21 = 1`: Serifed `l` (default for Upright).
    + `l = 'serifless'`, `cv21 = 2`: `l` like a straight line.
    + `l = 'hooky'`, `cv21 = 3`: Hooky `l`.
    + `l = 'zshaped'`, `cv21 = 4`: Z-shaped `l`.
    + `l = 'hooky-bottom'`, `cv21 = 5`: `l` with a straight tail.
    + `l = 'serifed-asymmetric'`, `cv21 = 6`: `l` with shorter top serif and full bottom serif.
    + `l = 'tailed'`, `cv21 = 7`: `l` with curly tail.
    + `l = 'serifed-tailed'`, `cv21 = 8`: `l` with top serif and curly tail (default for Italic).
    + `l = 'flat-tailed'`, `cv21 = 9`: `l` with top serif and a curly-then-flat tail.
    + `l = 'serifed-flat-tailed'`, `cv21 = 10`: `l` with top serif and a curly-then-flat tail.
  - Styles for `m`:
    + `m = 'normal'`, `cv22 = 1`: `m` with normal middle leg, touching the baseline (default).
    + `m = 'shortleg'`, `cv22 = 2`: `m` with shorter middle leg, like Ubuntu Mono.
    + `m = 'tailed'`, `cv22 = 3`: `m` with normal middle leg, touching the baseline, and a curly tail.
    + `m = 'shortleg-tailed'`, `cv22 = 4`: `m` with shorter middle leg, like Ubuntu Mono, and a curly tail.
    + `m = 'earless-corner-double-arch'`, `cv22 = 5`: Earless (corner top-left) `m` with normal middle leg touching baseline.
    + `m = 'earless-corner-double-arch-shortleg'`, `cv22 = 6`: Earless (corner top-left) `m` with a shorter middle leg like Ubuntu Mono.
    + `m = 'earless-corner-double-arch-tailed'`, `cv22 = 7`: Earless (corner top-left) `m` with normal middle leg touching baseline, and a curly tail.
    + `m = 'earless-corner-double-arch-shortleg-tailed'`, `cv22 = 8`: Earless (corner top-left) `m` with a shorter middle leg like Ubuntu Mono, and a curly tail.
    + `m = 'earless-rounded-double-arch'`, `cv22 = 9`: Earless (rounded top-left) `m` with normal middle leg touching baseline.
    + `m = 'earless-rounded-double-arch-shortleg'`, `cv22 = 10`: Earless (rounded top-left) `m` with a shorter middle leg like Ubuntu Mono.
    + `m = 'earless-rounded-double-arch-tailed'`, `cv22 = 11`: Earless (rounded top-left) `m` with normal middle leg touching baseline, and a curly tail.
    + `m = 'earless-rounded-double-arch-shortleg-tailed'`, `cv22 = 12`: Earless (rounded top-left) `m` with a shorter middle leg like Ubuntu Mono, and a curly tail.
    + `m = 'earless-single-arch'`, `cv22 = 13`: Earless (single-arch) `m` with normal middle leg touching baseline.
    + `m = 'earless-single-arch-shortleg'`, `cv22 = 14`: Earless (single-arch) `m` with a shorter middle leg like Ubuntu Mono.
    + `m = 'earless-single-arch-tailed'`, `cv22 = 15`: Earless (single-arch) `m` with normal middle leg touching baseline, and a curly tail.
    + `m = 'earless-single-arch-shortleg-tailed'`, `cv22 = 16`: Earless (single-arch) `m` with a shorter middle leg like Ubuntu Mono, and a curly tail.
    + `m = 'motion-serifed'`, `cv22 = 17`: `m` with motion serifs, normal middle leg touching baseline.
    + `m = 'motion-serifed-shortleg'`, `cv22 = 18`: `m` with motion serifs, a shorter middle leg like Ubuntu Mono.
    + `m = 'motion-serifed-tailed'`, `cv22 = 19`: `m` with motion serifs, normal middle leg touching baseline, and a curly tail.
    + `m = 'motion-serifed-shortleg-tailed'`, `cv22 = 20`: `m` with motion serifs, a shorter middle leg like Ubuntu Mono, and a curly tail.
  - Styles for `n`:
    + `n = 'straight'`, `cv23 = 1`: `n` with straight ending (default).
    + `n = 'tailed'`, `cv23 = 2`: `n` with a curly tail.
    + `n = 'earless-corner-straight'`, `cv23 = 3`: Earless (corner top-left) `n` with straight ending.
    + `n = 'earless-corner-tailed'`, `cv23 = 4`: Earless (corner top-left) `n` with a curly tail.
    + `n = 'earless-rounded-straight'`, `cv23 = 5`: Earless (rounded top-left) `n` with straight ending.
    + `n = 'earless-rounded-tailed'`, `cv23 = 6`: Earless (rounded top-left) `n` with a curly tail.
    + `n = 'motion-serifed-straight'`, `cv23 = 7`: `n` with motion serifs and straight ending.
    + `n = 'motion-serifed-tailed'`, `cv23 = 8`: `n` with motion serifs and a curly tail.
  - Styles for `p`:
    + `p = 'eared'`, `cv24 = 1`: `p` with top-left ear (default).
    + `p = 'earless-corner'`, `cv24 = 2`: `p` without top-left ear (corner).
    + `p = 'earless-rounded'`, `cv24 = 3`: `p` without top-left ear (rounded).
    + `p = 'motion-serifed'`, `cv24 = 4`: `p` with motion serifs.
  - Styles for `q`:
    + `q = 'straight'`, `cv25 = 1`: `q` with straight bar (default).
    + `q = 'tailed'`, `cv25 = 2`: `q` with tail.
    + `q = 'earless-corner'`, `cv25 = 3`: Earless (cornered top-left) single-storey `q`.
    + `q = 'earless-corner-tailed'`, `cv25 = 4`: Earless (cornered top-left) single-storey `q` with curly tail.
    + `q = 'earless-rounded'`, `cv25 = 5`: Earless (rounded top-left) single-storey `q`.
    + `q = 'earless-rounded-tailed'`, `cv25 = 6`: Earless (rounded top-left) single-storey `q` with curly tail.
  - Styles for `r`:
    + `r = 'serifless'`, `cv26 = 1`: Straight, serif-less `r` (default for Sans).
    + `r = 'serifed'`, `cv26 = 2`: `r` with serif at both top and bottom (default for Slab Upright).
    + `r = 'top-serifed'`, `cv26 = 3`: `r` with serifs at top-left only (default for Slab Italic).
    + `r = 'earless-corner'`, `cv26 = 4`: Earless (corner top-left), serif-less `r`.
    + `r = 'earless-corner-serifed'`, `cv26 = 5`: Earless (corner top-left), serifed `r`.
    + `r = 'earless-rounded'`, `cv26 = 6`: Earless (rounded top-left), serif-less `r`.
    + `r = 'earless-rounded-serifed'`, `cv26 = 7`: Earless (rounded top-left), serifed `r`.
  - Styles for `t`:
    + `t = 'standard'`, `cv27 = 1`: Standard `t` shape (default).
    + `t = 'cross'`, `cv27 = 2`: Futura-like `t` shape.
    + `t = 'flat-hook'`, `cv27 = 3`: `t` with flat hook.
    + `t = 'hookless-asymmetric'`, `cv27 = 4`: `t` without hook and ony half the cross bar.
    + `t = 'flat-hook-short-neck'`, `cv27 = 5`: `t` with flat hook and a slightly shorter neck.
    + `t = 'flat-hook-short-neck2'`, `cv27 = 6`: `t` with flat hook and a more shorter neck.
  - Styles for `u`:
    + `u = 'toothed'`, `cv28 = 1`: Normal `u` with bottom-right tooth (default for Upright).
    + `u = 'toothless-corner'`, `cv28 = 2`: Toothless (corner bottom-right) `u`.
    + `u = 'toothless-rounded'`, `cv28 = 3`: Toothless (rounded) `u`, like a smaller uppercase `U`.
    + `u = 'tailed'`, `cv28 = 4`: `u` with right bar and a slightly curly tail (default for Italic).
    + `u = 'motion-serifed'`, `cv28 = 5`: Normal `u` with right bar and motion serifs.
    + `u = 'motion-serifed-tailed'`, `cv28 = 6`: `u` with right bar, motion serifs and a slightly curly tail.
  - Styles for `v`, `V`:
    + `v = 'straight'`, `cv29 = 1`: Standard, straight `V` and `v` (default).
    + `v = 'curly'`, `cv29 = 2`:  Slightly curly `V` and `v`, like Iosevka 2.x.
  - Styles for `w`, `W`:
    + `w = 'straight'`, `cv30 = 1`: Standard, straight `W` and `w` (default).
    + `w = 'curly'`, `cv30 = 2`: Slightly curly `W` and `w`, like Iosevka 2.x.
    + `w = 'straight-flat-top'`, `cv30 = 3`: Standard, straight `W` and `w`, and the middle is forced to be aligned the top.
  - Styles for `x`, `X`:
    + `x = 'straight'`, `cv31 = 1`: Standard, straight `X` and `x` (default).
    + `x = 'curly'`, `cv31 = 2`: Slightly curly `X` and `x`, like Iosevka 2.x.
  - Styles for `y`:
    + `y = 'straight'`, `cv32 = 1`: Letter `y` that is fully straight (default for Sans Upright).
    + `y = 'straight-turn'`, `cv32 = 2`: Letter `y` with straight upper and a tail turns leftward (default for Slab Upright).
    + `y = 'curly'`, `cv32 = 3`: More curly letter `y`, like Iosevka 2.x.
    + `y = 'cursive'`, `cv32 = 4`: Cursive-like `y` (default for Italic).
    + `y = 'cursive-flat-hook'`, `cv32 = 5`: Cursive-like `y` with flat terminal hook.
    + `y = 'curly-turn'`, `cv32 = 6`: More curly letter `y`, like Iosevka 2.x, with a tail turns leftward.
  - Styles for `z`, `Z`:
    + `z = 'standard'`, `cv33 = 1`: Standard `Z` and `z` (default).
    + `z = 'with-crossbar'`, `cv33 = 2`: Standard `Z` and `z` with a diagonal cross bar for better dsitinction with `2`.
    + `z = 'with-horizontal-crossbar'`, `cv33 = 3`: Standard `Z` and `z` with a horizontal cross bar for better dsitinction with `2`.
    + `z = 'curly'`, `cv33 = 4`: Curly `Z` and `z`.
    + `z = 'curly-with-crossbar'`, `cv33 = 5`: Curly `Z` and `z` with a diagonal cross bar for better dsitinction with `2`.
    + `z = 'curly-with-horizontal-crossbar'`, `cv33 = 6`: Curly `Z` and `z` with a horizontal cross bar for better dsitinction with `2`.
  - Styles for `ß` (Eszet):
    + `eszet = 'traditional'`, `cv34 = 1`: Traditional, Fraktur-like Eszet (`ß`).
    + `eszet = 'sulzbacher'`, `cv34 = 2`: More modern, beta-like Eszet (`ß`) (default).
    + `eszet = 'longs-s-lig'`, `cv34 = 3`: Eszet (`ß`) shown as a ligature of long-S (`ſ`) and `s`.
  - Styles for `λ` (Greek small Lambda):
    + `lambda = 'straight'`, `cv35 = 1`: More-straight Greek small Lambda (`λ`) (default).
    + `lambda = 'curly'`, `cv35 = 2`: More curly Greek small Lambda (`λ`), like Iosevka 2.x.
  - Styles for `У` (Cyrillic Capital U):
    + `cyrl-capital-u = 'straight'`, `cv60 = 1`: Cyrillic capital U (`У`) that is fully straight (default for Sans).
    + `cyrl-capital-u = 'straight-turn'`, `cv60 = 2`: Cyrillic capital U (`У`) with straight upper and a tail turns leftward (default for Slab).
    + `cyrl-capital-u = 'curly'`, `cv60 = 3`: More curly cyrillic capital U (`У`), like Iosevka 2.x.
    + `cyrl-capital-u = 'cursive'`, `cv60 = 4`: Cursive-like Cyrillic capital U (`У`).
    + `cyrl-capital-u = 'cursive-flat-hook'`, `cv60 = 5`: Cursive-like Cyrillic capital U (`У`) with flat terminal hook.
    + `cyrl-capital-u = 'curly-turn'`, `cv60 = 6`: More curly cyrillic capital U (`У`), like Iosevka 2.x, with a tail turns leftward.
  - Styles for `0`:
    + `zero = 'slashed'`, `cv36 = 1`: Slashed Zero `0` (default).
    + `zero = 'dotted'`, `cv36 = 2`: Dotted Zero `0`.
    + `zero = 'unslashed'`, `cv36 = 3`: O-like `0`.
    + `zero = 'reverse-slashed'`, `cv36 = 4`: Reverse-slashed `0`.
    + `zero = 'long-dotted'`, `cv36 = 5`: Long-dotted Zero `0` like Hack.
  - Styles for `1`:
    + `one = 'nobase'`, `cv37 = 1`: `1` without bottom serif (default for Sans).
    + `one = 'base'`, `cv37 = 2`: `1` with bottom serif (default for Slab).
    + `one = 'line'`, `cv37 = 3`: `1` drawn just like a straight line.
  - Styles for `3`:
    + `three = 'flattop'`, `cv38 = 1`: Flat top `3` (Like Museo Sans / Montserrat).
    + `three = 'twoarcs'`, `cv38 = 2`: Arched top `3` (default).
  - Styles for `4`:
    + `four = 'closed'`, `cv39 = 1`: `4` with closed contour (default).
    + `four = 'closed-non-crossing'`, `cv39 = 2`: `4` with closed contour but the horizontal bar does not overflow the vertical bar.
    + `four = 'semi-open'`, `cv39 = 3`: `4` with semi-open contour.
    + `four = 'semi-open-non-crossing'`, `cv39 = 4`: `4` with semi-open contour but the horizontal bar does not overflow the vertical bar.
    + `four = 'open'`, `cv39 = 5`: `4` with open contour.
    + `four = 'open-non-crossing'`, `cv39 = 6`: `4` with open contour but the horizontal bar does not overflow the vertical bar.
  - Styles for `6`:
    + `six = 'closed-contour'`, `cv40 = 1`: `6` with a more closed contour.
    + `six = 'open-contour'`, `cv40 = 2`: `6` with a more open contour.
    + `six = 'straight-bar'`, `cv40 = 3`: `6` with a straight bar (default).
  - Styles for `7`:
    + `seven = 'noserif'`, `cv41 = 1`: `7` without serif (default for Sans).
    + `seven = 'serifed'`, `cv41 = 2`: `7` with initial serif (default for Slab).
    + `seven = 'crossbar'`, `cv41 = 3`: `7` with crossbar.
    + `seven = 'crossbar-serifed'`, `cv41 = 4`: `7` with crossbar and initial serif.
  - Styles for `9`:
    + `nine = 'closed-contour'`, `cv42 = 1`: `9` with a more closed contour.
    + `nine = 'open-contour'`, `cv42 = 2`: `9` with a more open contour.
    + `nine = 'straight-bar'`, `cv42 = 3`: `9` with a straight bar (default).
  - Styles for `~`:
    + `tilde = 'high'`, `cv43 = 1`: Higher tilde `~`.
    + `tilde = 'low'`, `cv43 = 2`: Lower tilde `~` (default).
  - Styles for `*`:
    + `asterisk = 'high'`, `cv44 = 1`: Higher five-pointed asterisk `*` (default).
    + `asterisk = 'low'`, `cv44 = 2`: Lower five-pointed asterisk `*`.
    + `asterisk = 'hexhigh'`, `cv44 = 3`: Higher six-pointed asterisk `*`.
    + `asterisk = 'hexlow'`, `cv44 = 4`: Lower six-pointed asterisk `*`.
    + `asterisk = 'flip-penta-high'`, `cv44 = 5`: Higher five-pointed and turned asterisk `*`.
    + `asterisk = 'flip-penta-low'`, `cv44 = 6`: Lower five-pointed and turned asterisk `*`.
  - Styles for `_`:
    + `underscore = 'high'`, `cv45 = 1`: Higher underscore `_`, placed right below baseline (default).
    + `underscore = 'low'`, `cv45 = 2`: Lower underscore `_`, placed right above descender line.
    + `underscore = 'above-baseline'`, `cv45 = 3`: Extra-high `_`, placed right below baseline.
  - Styles for `¶`:
    + `paragraph-sign = 'high'`, `cv46 = 1`: Higher paragraph sign `¶` (default).
    + `paragraph-sign = 'low'`, `cv46 = 2`: Lower paragraph sign `¶`.
  - Styles for `^`:
    + `caret = 'high'`, `cv47 = 1`: Higher circumflex `^` (default).
    + `caret = 'low'`, `cv47 = 2`: Lower circumflex `^`.
  - Styles for `(`, `)`:
    + `paren = 'normal'`, `cv48 = 1`: Parenthesis with normal contour (default).
    + `paren = 'large-contour'`, `cv48 = 2`: Parenthesis with larger contour, like that in Monaco.
  - Styles for `{`, `}`:
    + `brace = 'straight'`, `cv49 = 1`: More straight braces.
    + `brace = 'curly'`, `cv49 = 2`: More curly braces (default).
  - Styles for `#`:
    + `number-sign = 'upright'`, `cv50 = 1`: Number sign with vertical bars (default).
    + `number-sign = 'slanted'`, `cv50 = 2`: Number sign with slanted bars.
    + `number-sign = 'upright-open'`, `cv50 = 3`: Number sign with vertical bars and open inner.
    + `number-sign = 'slanted-open'`, `cv50 = 4`: Number sign with slanted bars and open inner.
  - Styles for `&`:
    + `ampersand = 'closed'`, `cv51 = 1`: Ampersand (`&`) with a closed contour (default).
    + `ampersand = 'upper-open'`, `cv51 = 2`: Ampersand (`&`) with an open contour at upper half.
    + `ampersand = 'lower-open'`, `cv51 = 3`: Ampersand (`&`) with an open contour at lower half.
    + `ampersand = 'et-toothed'`, `cv51 = 4`: Ampersand (`&`) drawn like a ligature of Ɛ and t with tooth.
    + `ampersand = 'et-toothless-corner'`, `cv51 = 5`: Ampersand (`&`) drawn like a ligature of Ɛ and t without tooth (corner).
    + `ampersand = 'et-toothless-rounded'`, `cv51 = 6`: Ampersand (`&`) drawn like a ligature of Ɛ and t without tooth (rounded).
    + `ampersand = 'flat-top'`, `cv51 = 7`: Ampersand (`&`) drawn with a flat top.
  - Styles for `@`:
    + `at = 'threefold'`, `cv52 = 1`: The long, three-fold At symbol (`@`) (default).
    + `at = 'fourfold'`, `cv52 = 2`: The traditional, four-fold At symbol (`@`).
    + `at = 'short'`, `cv52 = 3`: The shorter, Fira-like At symbol (`@`).
  - Styles for `$`:
    + `dollar = 'open'`, `cv53 = 1`: Dollar symbol with open contour.
    + `dollar = 'through'`, `cv53 = 2`: Dollar symbol with strike-through vertical bar (default).
    + `dollar = 'opencap'`, `cv53 = 3`: Dollar symbol with open contour, not exceeding baseline and ascender.
    + `dollar = 'throughcap'`, `cv53 = 4`: Dollar symbol with strike-through vertical bar, not exceeding baseline and ascender.
  - Styles for `%`:
    + `percent = 'dots'`, `cv54 = 1`: Percent `%`, Per-mille `‰` and basis point `‱` using rectangular dots.
    + `percent = 'rings'`, `cv54 = 2`: Percent `%` with rings and broken bar; Per-mille `‰` and basis point `‱` with rings (default).
    + `percent = 'rings-connected'`, `cv54 = 3`: Percent `%`, Per-mille `‰` and basis point `‱` using rings and continuous bar.
  - Styles for `|`:
    + `bar = 'natural-slope'`, `cv55 = 1`: Bar punctuations (`|`) has a natural slope under italics and oblique (default).
    + `bar = 'force-upright'`, `cv55 = 2`: Bar punctuations (`|`) is forced upright under italics and oblique.
  - Styles for `<=`, `>=`:
    + `lig-ltgteq = 'flat'`, `cv56 = 1`: The lower bar of `<=` and `>=` ligation is flat (default).
    + `lig-ltgteq = 'slanted'`, `cv56 = 2`: The lower bar of `<=` and `>=` ligation is slanted.
  - Styles for `'`:
    + `ascii-single-quote = 'straight'`, `cv57 = 1`: Show ASCII quote (`'`) as short vertical straight bar. (default).
    + `ascii-single-quote = 'raised-comma'`, `cv57 = 2`: Show ASCII quote (`'`) as raised comma..
  - Styles for `` ` ``:
    + `ascii-grave = 'straight'`, `cv58 = 1`: Show ASCII grave (`` ` ``) as short diagonal straight bar. (default).
    + `ascii-grave = 'raised-inverse-comma'`, `cv58 = 2`: Show ASCII grave (`` ` ``) as raised comma..

<!-- END Section-Cherry-Picking-Styles -->

#### Configuring Weights, Widths and Slopes

Subsection `weights` is used to change the weight grades that the custom family needs. It is a dictionary of sub-objects with properties:

* `shape`: Integer, configures the weight grade of the glyphs' shapes.
* `menu`: Integer, configures the weight grade used when naming fonts.
* `css`: Integer, configures the weight grade used in web font CSS.

Subsection `widths` is used to change the weight grades that the custom family needs. It is a dictionary of sub-objects with properties:

* `shape`: Integer, configures the width of the glyphs' shapes, measured in 1/1000 em.
* `menu`: Integer, configures the width grade used when naming fonts. The valid values are `1` to `9`, inclusive.
* `css`: String, configures the [font-stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch) value used in web font CSS.

Subsection `slopes` is a simple string-to-string dictionary maps slopes (`upright`, `italic` or `oblique`) to [CSS font-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style) values, represented in string.

#### Compatibility Ligatures

Certain software, notably Emacs, relies on pre-encoded ligatures instead of OpenType to provide ligations. Iosevka could be configured with additional subsection `compatibility-ligatures`, being an array of records with following fields:

* `unicode`: The PUA code point being assigned to.
* `featureTag`: The feature tag to compute ligations.
* `sequence`: The source character sequence.

A sample of compatibility ligature config is:

```toml
[[buildPlans.iosevka-custom.compatibility-ligatures]]
unicode = 57600 # 0xE100
featureTag = 'calt'
sequence = '<*>'
```

#### Sample Configuration

A sample configuration could be found at [private-build-plans.sample.toml](private-build-plans.sample.toml).

## For Chinese and Japanese users...

→ [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic).

---

![Family Matrix](images/matrix.png)
