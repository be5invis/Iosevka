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
    brew install --cask font-iosevka
    ```
  *  Search for other variants using `brew search font-iosevka` and install what you want.
  * Customizable install using Homebrew: see [robertgzr/homebrew-tap](https://github.com/robertgzr/homebrew-tap).
* **Linux** : Copy the TTF files to your fonts directory → Run `sudo fc-cache`. 
  - Arch Linux users can install one of the [ttc-iosevka packages](https://archlinux.org/packages/?q=ttc-iosevka).
  - Void Linux users can install the font with `xbps-install font-iosevka`.
  - Fedora Linux users can install the font(s) from the copr [here](https://copr.fedorainfracloud.org/coprs/peterwu/iosevka/). Run `dnf search iosevka` to discover available fonts and `dnf install` to install the chosen one(s).
* **FreeBSD**: The font can be installed with `pkg install iosevka`.
* **OpenBSD**: Run `pkg_info -Q iosevka` to see which Iosevka packages are available. Use `pkg_add` to install the chosen package(s).

## Features

In the official package, Iosevka provides 6 monospace subfamilies (sans-serif and slab-serif, each in the 3 spacings Default, Term and Fixed) and 2 quasi-proportional subfamilies (Aile (sans-serif) and Etoile (slab-serif)). In all the monospace subfamilies, 9 weights (Thin to Heavy), 2 widths (Normal and Extended), and 3 slopes (Upright, Italic and Oblique) are included. In the quasi-proportional subfamilies, the quantity of widths is reduced to 1.

![Weights sample](images/weights.png)

All versions include the same ranges of characters: Latin letters, Greek letters (including Polytonic), some Cyrillic letters, IPA symbols and common punctuations and some symbols. You can check out the full list [here](http://be5invis.github.io/Iosevka/specimen).

![Languages Sample](images/languages.png)

<!-- BEGIN Section-Language-List -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

161 Supported Languages: 

Afrikaans, Aghem, Akan, Albanian, Asturian, Asu, Azerbaijani, Bafia, Bambara, Basaa, Basque, Belarusian, Bemba, Bena, Bosnian, Breton, Bulgarian, Catalan, Cebuano, Central Atlas Tamazight, Chechen, Chiga, Colognian, Cornish, Croatian, Czech, Danish, Duala, Dutch, Embu, English, Esperanto, Estonian, Ewe, Ewondo, Faroese, Filipino, Finnish, French, Friulian, Fulah, Galician, Ganda, German, Greek, Gusii, Hausa, Hawaiian, Hungarian, Icelandic, Igbo, Inari Sami, Indonesian, Interlingua, Irish, Italian, Javanese, Jola-Fonyi, Kabuverdianu, Kabyle, Kako, Kalaallisut, Kalenjin, Kamba, Kazakh, Kikuyu, Kinyarwanda, Koyra Chiini, Koyraboro Senni, Kurdish, Kwasio, Kyrgyz, Lakota, Langi, Latvian, Lingala, Lithuanian, Low German, Lower Sorbian, Luba-Katanga, Luo, Luxembourgish, Luyia, Macedonian, Machame, Makhuwa-Meetto, Makonde, Malagasy, Malay, Maltese, Manx, Maori, Masai, Meru, Metaʼ, Mongolian, Morisyen, Mundang, Nama, Ngiemboon, Nigerian Pidgin, North Ndebele, Northern Sami, Norwegian, Norwegian Bokmål, Norwegian Nynorsk, Nuer, Nyankole, Oromo, Ossetic, Polish, Portuguese, Quechua, Romanian, Romansh, Rombo, Rundi, Russian, Rwa, Sakha, Samburu, Sango, Sangu, Scottish Gaelic, Sena, Serbian, Shambala, Shona, Slovak, Slovenian, Soga, Somali, Spanish, Sundanese, Swahili, Swedish, Swiss German, Tachelhit (shi_latn), Taita, Tajik, Tasawaq, Tatar, Teso, Tongan, Turkish, Turkmen, Ukrainian, Upper Sorbian, Uzbek, Vai (vai_latn), Vietnamese, Vunjo, Walser, Welsh, Western Frisian, Wolof, Xhosa, Yangben, Yoruba, Zarma, Zulu

<!-- END Section-Language-List -->

### Stylistic Sets

Monospace Iosevka contains various stylistic sets to change the shape of certain characters. Enabling corresponded OpenType feature to enable.

<!-- BEGIN Section-OT-Stylistic-Sets -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

<table>
<tr>
<td><code>ss01</code></td>
<td colspan="3">Andale Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss01-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss01-1.png"/></td>
</tr>
<tr>
<td><code>ss02</code></td>
<td colspan="3">Anonymous Pro Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss02-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss02-1.png"/></td>
</tr>
<tr>
<td><code>ss03</code></td>
<td colspan="3">Consolas Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss03-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss03-1.png"/></td>
</tr>
<tr>
<td><code>ss04</code></td>
<td colspan="3">Menlo Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss04-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss04-1.png"/></td>
</tr>
<tr>
<td><code>ss05</code></td>
<td colspan="3">Fira Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss05-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss05-1.png"/></td>
</tr>
<tr>
<td><code>ss06</code></td>
<td colspan="3">Liberation Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss06-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss06-1.png"/></td>
</tr>
<tr>
<td><code>ss07</code></td>
<td colspan="3">Monaco Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss07-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss07-1.png"/></td>
</tr>
<tr>
<td><code>ss08</code></td>
<td colspan="3">Pragmata Pro Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss08-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss08-1.png"/></td>
</tr>
<tr>
<td><code>ss09</code></td>
<td colspan="3">Source Code Pro Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss09-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss09-1.png"/></td>
</tr>
<tr>
<td><code>ss10</code></td>
<td colspan="3">Envy Code R Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss10-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss10-1.png"/></td>
</tr>
<tr>
<td><code>ss11</code></td>
<td colspan="3">X Window Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss11-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss11-1.png"/></td>
</tr>
<tr>
<td><code>ss12</code></td>
<td colspan="3">Ubuntu Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss12-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss12-1.png"/></td>
</tr>
<tr>
<td><code>ss13</code></td>
<td colspan="3">Lucida Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss13-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss13-1.png"/></td>
</tr>
<tr>
<td><code>ss14</code></td>
<td colspan="3">JetBrains Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss14-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss14-1.png"/></td>
</tr>
<tr>
<td><code>ss15</code></td>
<td colspan="3">IBM Plex Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss15-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss15-1.png"/></td>
</tr>
<tr>
<td><code>ss16</code></td>
<td colspan="3">PT Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss16-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss16-1.png"/></td>
</tr>
<tr>
<td><code>ss17</code></td>
<td colspan="3">Recursive Mono Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss17-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss17-1.png"/></td>
</tr>
<tr>
<td><code>ss20</code></td>
<td colspan="3">Curly Style</td>
</tr>
<tr>
<td colspan="2"><img src="images/stylistic-set-u-ss20-1.png"/></td>
<td colspan="2"><img src="images/stylistic-set-i-ss20-1.png"/></td>
</tr>
</table>

<!-- END Section-OT-Stylistic-Sets -->

### Character Variants

Alongside stylistic sets, Monospace Iosevka can also be configured to cherry-pick variants for each character using OpenType. The variants are shown below. To enable, assign the feature tag to the variant index. For example, setting `cv26` to `6` will enable single-storey `a`.

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
2. Run `npm install`. This command will install **all** the NPM dependencies, and will also validate whether external dependencies are present.
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
  - `quasi-proportional`: The font will become quasi-proportional.
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
  - `colon-greater-as-colon-arrow`: Transform `:>` into `:` and a narrow arrow.
  - `brace-bar`: Enable ligation for `{|` and `|}`.
  - `brack-bar`: Enable ligation for `[|` and `|]`.
  - `connected-underscore`: Make contiguous underscores (like `__`) connected.
  - `connected-number-sign`: Make contiguous number signs (like `##`) connected.
  - `connected-tilde-as-wave`: Make contiguous ASCII tildes (like `~~`) connected as a wave line.
  - `connected-hyphen-as-solid-line`: Make contiguous hyphen-minuses (like `--`) connected as a straight solid line.
  - `connected-hyphen-as-semi-dashed-line`: Make contiguous hyphen-minuses (like `--`) connected as a straight semi-dashed line, identifying each hyphen component.

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
  - `ss15`: Set character variant to “IBM Plex Mono Style”.
  - `ss16`: Set character variant to “PT Mono Style”.
  - `ss17`: Set character variant to “Recursive Mono Style”.
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
  - Styles for `A`:
    + `capital-a = 'straight-serifless'`, `cv01 = 1`: Standard, straight `A`, without serifs.
    + `capital-a = 'curly-serifless'`, `cv01 = 2`: Slightly curly `A`, like Iosevka 2.x, without serifs.
    + `capital-a = 'straight-top-serifed'`, `cv01 = 3`: Straight `A` with serif at top.
    + `capital-a = 'curly-top-serifed'`, `cv01 = 4`: Slightly curly `A`, like Iosevka 2.x, with serif at top.
    + `capital-a = 'straight-base-serifed'`, `cv01 = 5`: Straight `A` with serif at both top and bottom.
    + `capital-a = 'curly-base-serifed'`, `cv01 = 6`: Slightly curly `A`, like Iosevka 2.x, with serif at both top and bottom.
    + `capital-a = 'straight-tri-serifed'`, `cv01 = 7`: Straight `A` with serif at both top and bottom.
    + `capital-a = 'curly-tri-serifed'`, `cv01 = 8`: Slightly curly `A`, like Iosevka 2.x, with serif at both top and bottom.
  - Styles for `B`:
    + `capital-b = 'standard-serifless'`, `cv02 = 1`: `B` in near-symmetric proportion, without serifs.
    + `capital-b = 'more-asymmetric-serifless'`, `cv02 = 2`: `B` in more asymmetric proportion to differentiate with `8`, without serifs.
    + `capital-b = 'standard-unilateral-serifed'`, `cv02 = 3`: `B` in near-symmetric proportion with motion serifs at top.
    + `capital-b = 'more-asymmetric-unilateral-serifed'`, `cv02 = 4`: `B` in more asymmetric proportion with motion serifs at top.
    + `capital-b = 'standard-bilateral-serifed'`, `cv02 = 5`: `B` in near-symmetric proportion with motion serifs at both top and bottom.
    + `capital-b = 'more-asymmetric-bilateral-serifed'`, `cv02 = 6`: `B` in more asymmetric proportion with motion serifs at both top and bottom.
    + `capital-b = 'standard-interrupted-serifless'`, `cv02 = 7`: `B` in near-symmetric proportion with interupted middle bar, without serifs.
    + `capital-b = 'more-asymmetric-interrupted-serifless'`, `cv02 = 8`: `B` in more asymmetric proportion to differentiate with `8`, with interupted middle bar, without serifs.
    + `capital-b = 'standard-interrupted-unilateral-serifed'`, `cv02 = 9`: `B` in near-symmetric proportion with interupted middle bar and motion serifs at top.
    + `capital-b = 'more-asymmetric-interrupted-unilateral-serifed'`, `cv02 = 10`: `B` in more asymmetric proportion with interupted middle bar and `8` with motion serifs at top.
    + `capital-b = 'standard-interrupted-bilateral-serifed'`, `cv02 = 11`: `B` in near-symmetric proportion with interupted middle bar and motion serifs at both top and bottom.
    + `capital-b = 'more-asymmetric-interrupted-bilateral-serifed'`, `cv02 = 12`: `B` in more asymmetric proportion with interupted middle bar and `8` with motion serifs at both top and bottom.
  - Styles for `C`:
    + `capital-c = 'serifless'`, `cv03 = 1`: Serifless `C`.
    + `capital-c = 'unilateral-serifed'`, `cv03 = 2`: `C` with serif at top.
    + `capital-c = 'bilateral-serifed'`, `cv03 = 3`: `C` with serifs at both top and bottom.
    + `capital-c = 'unilateral-inward-serifed'`, `cv03 = 4`: `C` with inward serif at top.
    + `capital-c = 'bilateral-inward-serifed'`, `cv03 = 5`: `C` with inward serif at both top and bottom.
  - Styles for `D`:
    + `capital-d = 'standard-serifless'`, `cv04 = 1`: Standard `D` without serifs.
    + `capital-d = 'more-rounded-serifless'`, `cv04 = 2`: More rounded `D` to differentiate with `O`, without serifs.
    + `capital-d = 'standard-unilateral-serifed'`, `cv04 = 3`: Standard `B` with serifs at top.
    + `capital-d = 'more-rounded-unilateral-serifed'`, `cv04 = 4`: More rounded `B` to differentiate with `O` with motion serifs at top.
    + `capital-d = 'standard-bilateral-serifed'`, `cv04 = 5`: Standard `B` with serifs at both top and bottom.
    + `capital-d = 'more-rounded-bilateral-serifed'`, `cv04 = 6`: More rounded `B` to differentiate with `O` with serifs at both top and bottom.
  - Styles for `E`:
    + `capital-e = 'standard'`, `cv05 = 1`: Standard E.
    + `capital-e = 'motion-serifed'`, `cv05 = 2`: Motion-Serifed E.
  - Styles for `F`:
    + `capital-f = 'standard'`, `cv06 = 1`: Standard F.
    + `capital-f = 'motion-serifed'`, `cv06 = 2`: Motion-Serifed F.
  - Styles for `G`:
    + `capital-g = 'toothed-serifless-hookless'`, `cv07 = 1`: Toothed G.
    + `capital-g = 'toothless-corner-serifless-hookless'`, `cv07 = 2`: Corner toothless G.
    + `capital-g = 'toothless-rounded-serifless-hookless'`, `cv07 = 3`: Round toothless G.
    + `capital-g = 'toothed-serifless-hooked'`, `cv07 = 4`: Toothed G with inward hook at terminal.
    + `capital-g = 'toothless-corner-serifless-hooked'`, `cv07 = 5`: Corner toothless G with inward hook at terminal.
    + `capital-g = 'toothless-rounded-serifless-hooked'`, `cv07 = 6`: Round toothless G with inward hook at terminal.
    + `capital-g = 'toothed-serifless-capped'`, `cv07 = 7`: Toothed G with a cap terminal.
    + `capital-g = 'toothless-corner-serifless-capped'`, `cv07 = 8`: Corner toothless G with a cap terminal.
    + `capital-g = 'toothless-rounded-serifless-capped'`, `cv07 = 9`: Round toothless G with a cap terminal.
    + `capital-g = 'toothed-serifed-hookless'`, `cv07 = 10`: Toothed G with top serif.
    + `capital-g = 'toothless-corner-serifed-hookless'`, `cv07 = 11`: Corner toothless G with top serif.
    + `capital-g = 'toothless-rounded-serifed-hookless'`, `cv07 = 12`: Round toothless G with top serif.
    + `capital-g = 'toothed-serifed-hooked'`, `cv07 = 13`: Toothed G with inward hook at terminal and top serif.
    + `capital-g = 'toothless-corner-serifed-hooked'`, `cv07 = 14`: Corner toothless G with inward hook at terminal and top serif.
    + `capital-g = 'toothless-rounded-serifed-hooked'`, `cv07 = 15`: Round toothless G with inward hook at terminal and top serif.
    + `capital-g = 'toothed-serifed-capped'`, `cv07 = 16`: Toothed G with a cap terminal and top serif.
    + `capital-g = 'toothless-corner-serifed-capped'`, `cv07 = 17`: Corner toothless G with a cap terminal and top serif.
    + `capital-g = 'toothless-rounded-serifed-capped'`, `cv07 = 18`: Round toothless G with a cap terminal and top serif.
    + `capital-g = 'toothed-inward-serifed-hookless'`, `cv07 = 19`: Toothed G with inward top serif.
    + `capital-g = 'toothless-corner-inward-serifed-hookless'`, `cv07 = 20`: Corner toothless G with inward top serif.
    + `capital-g = 'toothless-rounded-inward-serifed-hookless'`, `cv07 = 21`: Round toothless G with inward top serif.
    + `capital-g = 'toothed-inward-serifed-hooked'`, `cv07 = 22`: Toothed G with inward hook at terminal and inward top serif.
    + `capital-g = 'toothless-corner-inward-serifed-hooked'`, `cv07 = 23`: Corner toothless G with inward hook at terminal and inward top serif.
    + `capital-g = 'toothless-rounded-inward-serifed-hooked'`, `cv07 = 24`: Round toothless G with inward hook at terminal and inward top serif.
    + `capital-g = 'toothed-inward-serifed-capped'`, `cv07 = 25`: Toothed G with a cap terminal and inward top serif.
    + `capital-g = 'toothless-corner-inward-serifed-capped'`, `cv07 = 26`: Corner toothless G with a cap terminal and inward top serif.
    + `capital-g = 'toothless-rounded-inward-serifed-capped'`, `cv07 = 27`: Round toothless G with a cap terminal and inward top serif.
  - Styles for `H`:
    + `capital-h = 'standard'`, `cv08 = 1`: Standard H.
    + `capital-h = 'motion-serifed'`, `cv08 = 2`: Motion-Serifed H.
  - Styles for `I`:
    + `capital-i = 'serifed'`, `cv09 = 1`: I with standard (long) serifs.
    + `capital-i = 'serifless'`, `cv09 = 2`: I without serifs, like a straight bar.
    + `capital-i = 'short-serifed'`, `cv09 = 3`: I with short serifs.
  - Styles for `J`:
    + `capital-j = 'serifless'`, `cv10 = 1`: J without top serif.
    + `capital-j = 'serifed'`, `cv10 = 2`: J with top serif at left side.
    + `capital-j = 'serifed-both-sides'`, `cv10 = 3`: J with symmetric at both sides.
    + `capital-j = 'serifed-symmetric'`, `cv10 = 4`: J with symmetric at both sides and is symmetric.
    + `capital-j = 'flat-hook-serifless'`, `cv10 = 5`: J with flat hook and without serif.
    + `capital-j = 'flat-hook-serifed'`, `cv10 = 6`: J with flat hook and top serif.
    + `capital-j = 'flat-hook-serifed-both-sides'`, `cv10 = 7`: J with flat hook and without serif.
    + `capital-j = 'flat-hook-serifed-symmetric'`, `cv10 = 8`: J with flat hook and top serif.
    + `capital-j = 'descending-serifless'`, `cv10 = 9`: J with hook goes below descender and without serif.
    + `capital-j = 'descending-serifed'`, `cv10 = 10`: J with hook goes below descender and top serif.
    + `capital-j = 'descending-serifed-both-sides'`, `cv10 = 11`: J with hook goes below descender and top serif at both sides (asymmetric).
    + `capital-j = 'descending-serifed-symmetric'`, `cv10 = 12`: J with hook goes below descender and top serif at both sides (symmetric).
    + `capital-j = 'descending-flat-hook-serifless'`, `cv10 = 13`: J with flat hook goes below descender and without serif.
    + `capital-j = 'descending-flat-hook-serifed'`, `cv10 = 14`: J with flat hook goes below descender and top serif.
  - Styles for `K`:
    + `capital-k = 'straight'`, `cv11 = 1`: `K` with standard shape.
    + `capital-k = 'curly'`, `cv11 = 2`: Slightly curly `K`, like Iosevka 2.x.
    + `capital-k = 'symmetric-touching'`, `cv11 = 3`: `K` with symmetric legs disconnected to the vertical bar.
    + `capital-k = 'symmetric-connected'`, `cv11 = 4`: `K` with symmetric legs connected to the vertical bar.
    + `capital-k = 'straight-motion-serifed'`, `cv11 = 5`: `K` with standard shape and motion serifs.
    + `capital-k = 'curly-motion-serifed'`, `cv11 = 6`: Slightly curly `K`, like Iosevka 2.x, with motion serifs.
    + `capital-k = 'symmetric-touching-motion-serifed'`, `cv11 = 7`: `K` with symmetric legs disconnected to the vertical bar, and motion serifs.
    + `capital-k = 'symmetric-connected-motion-serifed'`, `cv11 = 8`: `K` with symmetric legs connected to the vertical bar, and motion serifs.
  - Styles for `L`:
    + `capital-l = 'standard'`, `cv12 = 1`: Standard `L`.
    + `capital-l = 'motion-serifed'`, `cv12 = 2`: Standard `L` with motion serifs.
  - Styles for `M`:
    + `capital-m = 'hanging'`, `cv13 = 1`: `M` with middle being hanging off baseline.
    + `capital-m = 'flat-bottom'`, `cv13 = 2`: `M` with middle aligned to baseline.
    + `capital-m = 'slanted-sides-hanging'`, `cv13 = 3`: `M` with slanted sides and middle being hanging off baseline.
    + `capital-m = 'slanted-sides-flat-bottom'`, `cv13 = 4`: `M` with slanted sides and middle aligned to baseline.
    + `capital-m = 'hanging-motion-serifed'`, `cv13 = 5`: `M` with middle being hanging off baseline and motion serifs.
    + `capital-m = 'flat-bottom-motion-serifed'`, `cv13 = 6`: `M` with middle aligned to baseline and motion serifs.
    + `capital-m = 'slanted-sides-hanging-motion-serifed'`, `cv13 = 7`: `M` with slanted sides, middle being hanging off baseline, and motion serifs.
    + `capital-m = 'slanted-sides-flat-bottom-motion-serifed'`, `cv13 = 8`: `M` with slanted sides, middle aligned to baseline, and motion serifs.
  - Styles for `N`:
    + `capital-n = 'standard'`, `cv14 = 1`: Standard N.
    + `capital-n = 'asymmetric'`, `cv14 = 2`: More asymmetric N, with the diagonal bar stops at middle of right stem.
    + `capital-n = 'motion-serifed'`, `cv14 = 3`: Standard N with motion serifs.
    + `capital-n = 'asymmetric-motion-serifed'`, `cv14 = 4`: More asymmetric N, with the diagonal bar stops at middle of right stem and motion serifs.
  - Styles for `P`:
    + `capital-p = 'closed'`, `cv15 = 1`: Closed `P`.
    + `capital-p = 'open'`, `cv15 = 2`: P with open contour at bottom.
    + `capital-p = 'closed-motion-serifed'`, `cv15 = 3`: Closed `P` with motion serifs.
    + `capital-p = 'open-motion-serifed'`, `cv15 = 4`: P with open contour at bottom and motion serifs.
  - Styles for `Q`:
    + `capital-q = 'curly-tailed'`, `cv16 = 1`: `Q` with a curly tail.
    + `capital-q = 'crossing-curly-tailed'`, `cv16 = 2`: `Q` with a curly tail.
    + `capital-q = 'straight'`, `cv16 = 3`: `Q` with a straight tail like in the old versions.
    + `capital-q = 'crossing'`, `cv16 = 4`: `Q` with a tail crossing the ring.
    + `capital-q = 'vertical-crossing'`, `cv16 = 5`: `Q` with a vertical tail crossing the ring.
    + `capital-q = 'horizontal-tailed'`, `cv16 = 6`: `Q` with a horizontal tail, like Univers.
    + `capital-q = 'detached-tailed'`, `cv16 = 7`: `Q` with a oblique tail detached.
    + `capital-q = 'detached-bend-tailed'`, `cv16 = 8`: `Q` with a bend tail detached.
  - Styles for `R`:
    + `capital-r = 'straight'`, `cv17 = 1`: Standard, straight-leg `R`.
    + `capital-r = 'curly'`, `cv17 = 2`:  Slightly curly-legged `R`, like Iosevka 2.x.
    + `capital-r = 'standing'`, `cv17 = 3`: `R` with near-vertical standing leg.
    + `capital-r = 'straight-open'`, `cv17 = 4`: Standard, straight-leg `R`, with open contour at bottom.
    + `capital-r = 'curly-open'`, `cv17 = 5`:  Slightly curly-legged `R`, like Iosevka 2.x, with open contour at bottom.
    + `capital-r = 'standing-open'`, `cv17 = 6`: `R` with near-vertical standing leg, with open contour at bottom.
    + `capital-r = 'straight-motion-serifed'`, `cv17 = 7`: Standard, straight-leg `R`, with motion serifs.
    + `capital-r = 'curly-motion-serifed'`, `cv17 = 8`:  Slightly curly-legged `R`, like Iosevka 2.x, with motion serifs.
    + `capital-r = 'standing-motino-serifed'`, `cv17 = 9`: `R` with near-vertical standing leg.
    + `capital-r = 'straight-open-motion-serifed'`, `cv17 = 10`: Standard, straight-leg `R`, with open contour at bottom and motion serifs.
    + `capital-r = 'curly-open-motion-serifed'`, `cv17 = 11`:  Slightly curly-legged `R`, like Iosevka 2.x, with open contour at bottom and motion serifs.
    + `capital-r = 'standing-open-motion-serifed'`, `cv17 = 12`: `R` with near-vertical standing leg, with open contour at bottom.
  - Styles for `S`:
    + `capital-s = 'serifless'`, `cv18 = 1`: Serifless `S`.
    + `capital-s = 'unilateral-serifed'`, `cv18 = 2`: `S` with single serif at top.
    + `capital-s = 'bilateral-serifed'`, `cv18 = 3`: `S` with serifs at both end.
    + `capital-s = 'unilateral-inward-serifed'`, `cv18 = 4`: `S` with single inward serif at top.
    + `capital-s = 'bilateral-inward-serifed'`, `cv18 = 5`: `S` with inward serifs at both end.
  - Styles for `T`:
    + `capital-t = 'serifless'`, `cv19 = 1`: Serifless T.
    + `capital-t = 'motion-serifed'`, `cv19 = 2`: Motion-Serifed T.
    + `capital-t = 'serifed'`, `cv19 = 3`: Serifed T.
  - Styles for `U`:
    + `capital-u = 'toothed'`, `cv20 = 1`: `U` with bottom-right tooth.
    + `capital-u = 'toothless-corner'`, `cv20 = 2`: Toothless (corner bottom-right) `U`.
    + `capital-u = 'toothless-rounded'`, `cv20 = 3`: Toothless (rounded) `U`.
    + `capital-u = 'tailed'`, `cv20 = 4`: `U` with right bar and a slightly curly tail.
    + `capital-u = 'motion-serifed'`, `cv20 = 5`: Normal `U` with right bar and motion serifs.
    + `capital-u = 'motion-serifed-tailed'`, `cv20 = 6`: `U` with right bar, motion serifs and a slightly curly tail.
    + `capital-u = 'toothless-corner-unilateral-motion-serifed'`, `cv20 = 7`: Toothless (corner bottom-right) `U` with motion serifs, like Museo.
    + `capital-u = 'toothless-rounded-unilateral-motion-serifed'`, `cv20 = 8`: Toothless (rounded) `U` with motion serifs, like Museo.
    + `capital-u = 'toothless-corner-bilateral-motion-serifed'`, `cv20 = 9`: Toothless (corner bottom-right) `U` with motion serifs, like Museo.
    + `capital-u = 'toothless-rounded-bilateral-motion-serifed'`, `cv20 = 10`: Toothless (rounded) `U` with motion serifs, like Museo.
  - Styles for `V`:
    + `capital-v = 'straight'`, `cv21 = 1`: Standard, straight `V`.
    + `capital-v = 'curly'`, `cv21 = 2`:  Slightly curly `V`, like Iosevka 2.x.
    + `capital-v = 'straight-motion-serifed'`, `cv21 = 3`: Standard, straight `V`, and motion serifs.
    + `capital-v = 'curly-motion-serifed'`, `cv21 = 4`:  Slightly curly `V`, like Iosevka 2.x, and motion serifs.
  - Styles for `W`:
    + `capital-w = 'straight'`, `cv22 = 1`: Standard, straight `W`.
    + `capital-w = 'curly'`, `cv22 = 2`: Slightly curly `W`, like Iosevka 2.x.
    + `capital-w = 'straight-flat-top'`, `cv22 = 3`: Standard, straight `W`, and the middle is forced to be aligned the top.
    + `capital-w = 'straight-double-v'`, `cv22 = 4`: Straight `W` looks like double V.
    + `capital-w = 'straight-asymmetric'`, `cv22 = 5`: Straight `W` looks asymmetric.
    + `capital-w = 'straight-vertical-sides'`, `cv22 = 6`: Straight `W` with vertical sides.
    + `capital-w = 'straight-motion-serifed'`, `cv22 = 7`: Standard, straight `W`, with motion serifs.
    + `capital-w = 'curly-motion-serifed'`, `cv22 = 8`: Slightly curly `W`, like Iosevka 2.x, with motion serifs.
    + `capital-w = 'straight-flat-top-motion-serifed'`, `cv22 = 9`: Standard, straight `W`, and the middle is forced to be aligned the top, with motion serifs.
    + `capital-w = 'straight-double-v-motion-serifed'`, `cv22 = 10`: Straight `W` looks like double V, with motion serifs.
    + `capital-w = 'straight-asymmetric-motion-serifed'`, `cv22 = 11`: Straight `W` looks asymmetric, with motion serifs.
    + `capital-w = 'straight-vertical-sides-motion-serifed'`, `cv22 = 12`: Straight `W` with vertical sides and motion serifs.
  - Styles for `X`:
    + `capital-x = 'straight-serifless'`, `cv23 = 1`: Serifless, straight `X`.
    + `capital-x = 'curly-serifless'`, `cv23 = 2`: Serifless, slightly curly `X`, like Iosevka 2.x.
    + `capital-x = 'straight-motion-serifed'`, `cv23 = 3`: Straight `X` with motion serifs.
    + `capital-x = 'curly-motion-serifed'`, `cv23 = 4`: Slightly curly `X`, like Iosevka 2.x, with motion serifs.
    + `capital-x = 'straight-serifed'`, `cv23 = 5`: Straight `X` with full serifs.
    + `capital-x = 'curly-serifed'`, `cv23 = 6`: Slightly curly `X`, like Iosevka 2.x, with full serifs.
  - Styles for `Y`:
    + `capital-y = 'straight-serifless'`, `cv24 = 1`: Straight `Y` without serifs.
    + `capital-y = 'curly-serifless'`, `cv24 = 2`: Slightly curly `Y`, like Iosevka 2.x, without serifs.
    + `capital-y = 'straight-base-serifed'`, `cv24 = 3`: Standard, straight `Y`, with serif at bottom.
    + `capital-y = 'curly-base-serifed'`, `cv24 = 4`: Slightly curly `Y`, like Iosevka 2.x, with serif at bottom.
    + `capital-y = 'straight-motion-serifed'`, `cv24 = 5`: Standard, straight `Y`, with motion serifs.
    + `capital-y = 'curly-motion-serifed'`, `cv24 = 6`: Slightly curly `Y`, like Iosevka 2.x, with motion serifs.
    + `capital-y = 'straight-serifed'`, `cv24 = 7`: Standard, straight `Y`, with serifs.
    + `capital-y = 'curly-serifed'`, `cv24 = 8`: Slightly curly `Y`, like Iosevka 2.x, with serifs.
  - Styles for `Z`:
    + `capital-z = 'straight-serifless'`, `cv25 = 1`: Straight `Z` without serifs.
    + `capital-z = 'straight-serifless-with-crossbar'`, `cv25 = 2`: Straight `Z` with a diagonal crossbar, and without serifs.
    + `capital-z = 'straight-serifless-with-horizontal-crossbar'`, `cv25 = 3`: Straight `Z` with a horizontal crossbar, and without serifs.
    + `capital-z = 'curly-serifless'`, `cv25 = 4`: Curly `Z` without serifs.
    + `capital-z = 'curly-serifless-with-crossbar'`, `cv25 = 5`: Curly `Z` with a diagonal crossbar, and without serifs.
    + `capital-z = 'curly-serifless-with-horizontal-crossbar'`, `cv25 = 6`: Curly `Z` with a horizontal crossbar, and without serifs.
    + `capital-z = 'straight-serifed'`, `cv25 = 7`: Straight `Z` with top and bottom serifs.
    + `capital-z = 'straight-serifed-with-crossbar'`, `cv25 = 8`: Straight `Z` with a diagonal crossbar and serifs.
    + `capital-z = 'straight-serifed-with-horizontal-crossbar'`, `cv25 = 9`: Straight `Z` with a horizontal crossbar and serifs.
    + `capital-z = 'curly-serifed'`, `cv25 = 10`: Curly `Z` woth top and bottom serifs.
    + `capital-z = 'curly-serifed-with-crossbar'`, `cv25 = 11`: Curly `Z` with a diagonal crossbar and serifs.
    + `capital-z = 'curly-serifed-with-horizontal-crossbar'`, `cv25 = 12`: Curly `Z` with a horizontal crossbar and serifs.
    + `capital-z = 'straight-bottom-serifed'`, `cv25 = 13`: Standard `Z` with serif at bottom.
    + `capital-z = 'straight-bottom-serifed-with-crossbar'`, `cv25 = 14`: Standard `Z` with a diagonal crossbar and serif at bottom.
    + `capital-z = 'straight-bottom-serifed-with-horizontal-crossbar'`, `cv25 = 15`: Standard `Z` with a horizontal crossbar and serif at bottom.
    + `capital-z = 'curly-bottom-serifed-with-crossbar'`, `cv25 = 16`: Curly `Z` with serif at bottom.
    + `capital-z = 'curly-bottom-serifed-with-horizontal-crossbar'`, `cv25 = 17`: Curly `Z` with a diagonal crossbar and serif at bottom.
    + `capital-z = 'curly-bottom-serifed'`, `cv25 = 18`: Curly `Z` with a horizontal crossbar and serif at bottom.
    + `capital-z = 'straight-top-serifed'`, `cv25 = 19`: Standard `Z` with serif at top.
    + `capital-z = 'straight-top-serifed-with-crossbar'`, `cv25 = 20`: Standard `Z` with a diagonal crossbar and serif at top.
    + `capital-z = 'straight-top-serifed-with-horizontal-crossbar'`, `cv25 = 21`: Standard `Z` with a horizontal crossbar and serif at top.
    + `capital-z = 'curly-top-serifed'`, `cv25 = 22`: Curly `Z` with serif at top.
    + `capital-z = 'curly-top-serifed-with-crossbar'`, `cv25 = 23`: Curly `Z` with a diagonal crossbar and serif at top.
    + `capital-z = 'curly-top-serifed-with-horizontal-crossbar'`, `cv25 = 24`: Curly `Z` with a horizontal crossbar and serif at top.
    + `capital-z = 'cursive'`, `cv25 = 25`: Cursive `Z`.
    + `capital-z = 'cursive-with-crossbar'`, `cv25 = 26`: Cursive `Z` with a diagonal cross bar.
    + `capital-z = 'cursive-with-horizontal-crossbar'`, `cv25 = 27`: Cursive `Z` with a horizontal cross bar.
  - Styles for `a`:
    + `a = 'double-storey'`, `cv26 = 1`: Double-storey `a`.
    + `a = 'double-storey-tailed'`, `cv26 = 2`: Double-storey `a` with curly tail.
    + `a = 'double-storey-toothless-corner'`, `cv26 = 3`: Toothless (cornered bottom-right) double-storey `a`.
    + `a = 'double-storey-toothless-rounded'`, `cv26 = 4`: Toothless (rounded bottom-right) double-storey `a`.
    + `a = 'double-storey-motion-serifed'`, `cv26 = 5`: Double-storey `a` with motion serifs.
    + `a = 'single-storey'`, `cv26 = 6`: Single-storey `a`.
    + `a = 'single-storey-earless-corner'`, `cv26 = 7`: Earless (cornered top-right) single-storey `a`.
    + `a = 'single-storey-earless-rounded'`, `cv26 = 8`: Earless (rounded top-right) single-storey `a`.
    + `a = 'single-storey-tailed'`, `cv26 = 9`: Single-storey `a` with curly tail.
    + `a = 'single-storey-earless-corner-tailed'`, `cv26 = 10`: Earless (cornered top-right) single-storey `a` with curly tail.
    + `a = 'single-storey-earless-rounded-tailed'`, `cv26 = 11`: Earless (rounded top-right) single-storey `a` with curly tail.
    + `a = 'single-storey-motion-serifed'`, `cv26 = 12`: Single-storey `a` with motion serifs.
    + `a = 'single-storey-earless-corner-motion-serifed'`, `cv26 = 13`: Earless (cornered top-right) single-storey `a` with motion serifs.
    + `a = 'single-storey-earless-rounded-motion-serifed'`, `cv26 = 14`: Earless (rounded top-right) single-storey `a` with motion serifs.
  - Styles for `b`:
    + `b = 'toothed'`, `cv27 = 1`: `b` with bottom-left tooth.
    + `b = 'toothless-corner'`, `cv27 = 2`: `b` without bottom-left tooth, with a corner transition.
    + `b = 'toothless-rounded'`, `cv27 = 3`: `b` without bottom-left tooth, with a rounded transition.
    + `b = 'toothed-motion-serifed'`, `cv27 = 4`: `b` with motion serif, and with bottom-left tooth.
    + `b = 'toothless-corner-motion-serifed'`, `cv27 = 5`: `b` with motion serif, and without bottom-left tooth, with a corner transition.
    + `b = 'toothless-rounded-motion-serifed'`, `cv27 = 6`: `b` with motion serif, and without bottom-left tooth, with a rounded transition.
  - Styles for `c`:
    + `c = 'serifless'`, `cv28 = 1`: Serifless `c`.
    + `c = 'unilateral-serifed'`, `cv28 = 2`: `c` with serif at top.
    + `c = 'bilateral-serifed'`, `cv28 = 3`: `c` with serifs at both top and bottom.
    + `c = 'unilateral-inward-serifed'`, `cv28 = 4`: `c` with inward serif at top.
    + `c = 'bilateral-inward-serifed'`, `cv28 = 5`: `c` with inward serif at both top and bottom.
  - Styles for `d`:
    + `d = 'toothed-serifless'`, `cv29 = 1`: `d` with bottom-right tooth, and without serifs.
    + `d = 'toothless-corner-serifless'`, `cv29 = 2`: `d` without bottom-right tooth, with a corner transition, and without serif.
    + `d = 'toothless-rounded-serifless'`, `cv29 = 3`: `d` without bottom-right tooth, with a rounded transition, and without serif.
    + `d = 'tailed-serifless'`, `cv29 = 4`: `d` with a bottom-right tail, and without serif.
    + `d = 'toothed-top-serifed'`, `cv29 = 5`: `d` with bottom-right tooth and top serif.
    + `d = 'toothed-serifed'`, `cv29 = 6`: `d` with serifs.
    + `d = 'toothless-corner-serifed'`, `cv29 = 7`: `d` without bottom-right tooth, with a corner transition and top serif.
    + `d = 'toothless-rounded-serifed'`, `cv29 = 8`: `d` without bottom-right tooth, with a rounded transition and top serif.
    + `d = 'tailed-serifed'`, `cv29 = 9`: `d` with a bottom-right tail and top serif.
  - Styles for `e`:
    + `e = 'flat-crossbar'`, `cv30 = 1`: `e` with flat crossbar.
    + `e = 'rounded'`, `cv30 = 2`: `e` with more rounded shape.
  - Styles for `f`:
    + `f = 'serifless'`, `cv31 = 1`: `f` without bottom serif, hook or exension.
    + `f = 'serifed'`, `cv31 = 2`: `f` with bottom serif.
    + `f = 'tailed'`, `cv31 = 3`: `f` with bottom hook.
    + `f = 'extended'`, `cv31 = 4`: `f` with bar extended to descender.
    + `f = 'diagonal-tailed'`, `cv31 = 5`: `f` with bottom diagonal tail.
    + `f = 'serifless-crossbar-at-x-height'`, `cv31 = 6`: `f` without bottom serif, hook or exension; crossbar is placed right at X-height.
    + `f = 'serifed-crossbar-at-x-height'`, `cv31 = 7`: `f` with bottom serif; crossbar is placed right at X-height.
    + `f = 'tailed-crossbar-at-x-height'`, `cv31 = 8`: `f` with bottom hook; crossbar is placed right at X-height.
    + `f = 'extended-crossbar-at-x-height'`, `cv31 = 9`: `f` with bar extended to descender; crossbar is placed right at X-height.
    + `f = 'diagonal-tailed-crossbar-at-x-height'`, `cv31 = 10`: `f` with bottom diagonal tail; crossbar is placed right at X-height.
    + `f = 'flat-hook'`, `cv31 = 11`: `f` with flat top hook, without bottom serif, hook or exension.
    + `f = 'flat-hook-serifed'`, `cv31 = 12`: `f` with flat top hook and bottom serif.
    + `f = 'flat-hook-tailed'`, `cv31 = 13`: `f` with flat top hook and bottom hook.
    + `f = 'flat-hook-extended'`, `cv31 = 14`: `f` with flat top hook and bar extended to descender.
    + `f = 'flat-hook-diagonal-tailed'`, `cv31 = 15`: `f` with falt hook and bottom diagonal tail.
    + `f = 'flat-hook-crossbar-at-x-height'`, `cv31 = 16`: `f` with flat top hook, without bottom serif, hook or exension; crossbar is placed right at X-height.
    + `f = 'flat-hook-serifed-crossbar-at-x-height'`, `cv31 = 17`: `f` with flat top hook, bottom serif; crossbar is placed right at X-height.
    + `f = 'flat-hook-tailed-crossbar-at-x-height'`, `cv31 = 18`: `f` with flat top hook, bottom hook; crossbar is placed right at X-height.
    + `f = 'flat-hook-extended-crossbar-at-x-height'`, `cv31 = 19`: `f` with flat top hook, bar extended to descender; crossbar is placed right at X-height.
    + `f = 'flat-hook-diagonal-tailed-crossbar-at-x-height'`, `cv31 = 20`: `f` with falt hook and bottom diagonal tail; crossbar is placed right at X-height.
  - Styles for `g`:
    + `g = 'double-storey'`, `cv32 = 1`: Double-storey `g`.
    + `g = 'double-storey-open'`, `cv32 = 2`: Open Double-storey `g`, like Trebuchet MS or Fira Code.
    + `g = 'single-storey'`, `cv32 = 3`: Single-storey `g`.
    + `g = 'earless-corner'`, `cv32 = 4`: Earless (cornered top-right) single-storey `g`.
    + `g = 'earless-rounded'`, `cv32 = 5`: Earless (rounded top-right) single-storey `g`.
    + `g = 'single-storey-motion-serifed'`, `cv32 = 6`: Single-storey `g` with motion serifs.
    + `g = 'single-storey-flat-hook'`, `cv32 = 7`: Single-storey `g` with flat terminal hook.
    + `g = 'single-storey-earless-corner-flat-hook'`, `cv32 = 8`: Earless (cornered top-right) single-storey `g` with flat terminal hook.
    + `g = 'single-storey-earless-rounded-flat-hook'`, `cv32 = 9`: Earless (rounded top-right) single-storey `g` with flat terminal hook.
    + `g = 'single-storey-motion-serifed-flat-hook'`, `cv32 = 10`: Single-storey `g` with motion serifs and flat terminal hook.
  - Styles for `h`:
    + `h = 'straight'`, `cv33 = 1`: `h` with straight ending.
    + `h = 'tailed'`, `cv33 = 2`: `h` with curly tailed ending.
    + `h = 'straight-motion-serifed'`, `cv33 = 3`: `h` with straight ending.
    + `h = 'motion-serifed-tailed'`, `cv33 = 4`: `h` with curly tailed ending.
  - Styles for `i`:
    + `i = 'serifed'`, `cv34 = 1`: Serifed `i`.
    + `i = 'zshaped'`, `cv34 = 2`: Z-shaped `i`.
    + `i = 'serifless'`, `cv34 = 3`: `i` like a straight line.
    + `i = 'hooky'`, `cv34 = 4`: Hooky `i`.
    + `i = 'hooky-bottom'`, `cv34 = 5`: `i` with a sharp-turning horizontal tail.
    + `i = 'serifed-asymmetric'`, `cv34 = 6`: `i` with shorter top serif and full bottom serif.
    + `i = 'tailed'`, `cv34 = 7`: `i` with curly tail.
    + `i = 'serifed-tailed'`, `cv34 = 8`: `i` with top serif and curly tail.
    + `i = 'flat-tailed'`, `cv34 = 9`: `i` with curly-then-flat tail.
    + `i = 'serifed-flat-tailed'`, `cv34 = 10`: `i` with top serif and curly-then-flat tail.
    + `i = 'diagonal-tailed'`, `cv34 = 11`: `i` with diagonal tail.
    + `i = 'serifed-diagonal-tailed'`, `cv34 = 12`: `i` with top serif and diagonal tail.
  - Styles for `j`:
    + `j = 'serifless'`, `cv35 = 1`: `j` without serif.
    + `j = 'serifed'`, `cv35 = 2`: `j` with top serif.
    + `j = 'straight-line'`, `cv35 = 3`: `j` like a straight line.
    + `j = 'hooky'`, `cv35 = 4`: `j` like a straight line with top serif.
    + `j = 'flat-hook-serifless'`, `cv35 = 5`: `j` with flat terminal hook and top serif.
    + `j = 'flat-hook-serifed'`, `cv35 = 6`: `j` with flat terminal hook.
    + `j = 'diagonal-tailed-serifless'`, `cv35 = 7`: `j` with diagonal tail.
    + `j = 'diagonal-tailed-serifed'`, `cv35 = 8`: `j` with top serif and diagonal tail.
  - Styles for `k`:
    + `k = 'straight'`, `cv36 = 1`: `k` with standard shape.
    + `k = 'curly'`, `cv36 = 2`: Slightly curly `k`, like Iosevka 2.x.
    + `k = 'cursive'`, `cv36 = 3`: `k` with a cursive loop.
    + `k = 'diagonal-tailed-cursive'`, `cv36 = 4`: `k` with a cursive loop and diagonal tail.
    + `k = 'symmetric-touching'`, `cv36 = 5`: `k` with symmetric legs disconnected to the vertical bar.
    + `k = 'symmetric-connected'`, `cv36 = 6`: `k` with symmetric legs connected to the vertical bar.
    + `k = 'straight-motion-serifed'`, `cv36 = 7`: `k` with motion serifs.
    + `k = 'curly-motion-serifed'`, `cv36 = 8`: Slightly curly `k`, like Iosevka 2.x, with motion serifs.
    + `k = 'cursive-motion-serifed'`, `cv36 = 9`: `k` with a cursive loop and motion serifs.
    + `k = 'diagonal-tailed-cursive-motion-serifed'`, `cv36 = 10`: `k` with a cursive loop, motion serifs and diagonal tail.
    + `k = 'symmetric-touching-motion-serifed'`, `cv36 = 11`: `k` with symmetric legs disconnected to the vertical bar and motion serifs.
    + `k = 'symmetric-connected-motion-serifed'`, `cv36 = 12`: `k` with symmetric legs connected to the vertical bar and motion serifs.
  - Styles for `l`:
    + `l = 'serifed'`, `cv37 = 1`: Serifed `l`.
    + `l = 'serifless'`, `cv37 = 2`: `l` like a straight line.
    + `l = 'hooky'`, `cv37 = 3`: Hooky `l`.
    + `l = 'zshaped'`, `cv37 = 4`: Z-shaped `l`.
    + `l = 'hooky-bottom'`, `cv37 = 5`: `l` with a straight sharp-turning horizontal tail.
    + `l = 'serifed-asymmetric'`, `cv37 = 6`: `l` with shorter top serif and full bottom serif.
    + `l = 'tailed'`, `cv37 = 7`: `l` with curly tail.
    + `l = 'serifed-tailed'`, `cv37 = 8`: `l` with top serif and curly tail.
    + `l = 'flat-tailed'`, `cv37 = 9`: `l` with curly-then-flat tail.
    + `l = 'serifed-flat-tailed'`, `cv37 = 10`: `l` with top serif and curly-then-flat tail.
    + `l = 'diagonal-tailed'`, `cv37 = 11`: `l` with diagonal tail.
    + `l = 'serifed-diagonal-tailed'`, `cv37 = 12`: `l` with top serif and diagonal tail.
  - Styles for `m`:
    + `m = 'normal'`, `cv38 = 1`: `m` with normal middle leg, touching the baseline.
    + `m = 'short-leg'`, `cv38 = 2`: `m` with shorter middle leg, like Ubuntu Mono.
    + `m = 'tailed'`, `cv38 = 3`: `m` with normal middle leg, touching the baseline, and a curly tail.
    + `m = 'short-leg-tailed'`, `cv38 = 4`: `m` with shorter middle leg, like Ubuntu Mono, and a curly tail.
    + `m = 'earless-corner-double-arch'`, `cv38 = 5`: Earless (corner top-left) `m` with normal middle leg touching baseline.
    + `m = 'earless-corner-double-arch-short-leg'`, `cv38 = 6`: Earless (corner top-left) `m` with a shorter middle leg like Ubuntu Mono.
    + `m = 'earless-corner-double-arch-tailed'`, `cv38 = 7`: Earless (corner top-left) `m` with normal middle leg touching baseline, and a curly tail.
    + `m = 'earless-corner-double-arch-short-leg-tailed'`, `cv38 = 8`: Earless (corner top-left) `m` with a shorter middle leg like Ubuntu Mono, and a curly tail.
    + `m = 'earless-rounded-double-arch'`, `cv38 = 9`: Earless (rounded top-left) `m` with normal middle leg touching baseline.
    + `m = 'earless-rounded-double-arch-short-leg'`, `cv38 = 10`: Earless (rounded top-left) `m` with a shorter middle leg like Ubuntu Mono.
    + `m = 'earless-rounded-double-arch-tailed'`, `cv38 = 11`: Earless (rounded top-left) `m` with normal middle leg touching baseline, and a curly tail.
    + `m = 'earless-rounded-double-arch-short-leg-tailed'`, `cv38 = 12`: Earless (rounded top-left) `m` with a shorter middle leg like Ubuntu Mono, and a curly tail.
    + `m = 'earless-single-arch'`, `cv38 = 13`: Earless (single-arch) `m` with normal middle leg touching baseline.
    + `m = 'earless-single-arch-short-leg'`, `cv38 = 14`: Earless (single-arch) `m` with a shorter middle leg like Ubuntu Mono.
    + `m = 'earless-single-arch-tailed'`, `cv38 = 15`: Earless (single-arch) `m` with normal middle leg touching baseline, and a curly tail.
    + `m = 'earless-single-arch-short-leg-tailed'`, `cv38 = 16`: Earless (single-arch) `m` with a shorter middle leg like Ubuntu Mono, and a curly tail.
    + `m = 'motion-serifed'`, `cv38 = 17`: `m` with motion serifs, normal middle leg touching baseline.
    + `m = 'short-leg-motion-serifed'`, `cv38 = 18`: `m` with motion serifs, a shorter middle leg like Ubuntu Mono.
    + `m = 'motion-serifed-tailed'`, `cv38 = 19`: `m` with motion serifs, normal middle leg touching baseline, and a curly tail.
    + `m = 'short-leg-motion-serifed-tailed'`, `cv38 = 20`: `m` with motion serifs, a shorter middle leg like Ubuntu Mono, and a curly tail.
  - Styles for `n`:
    + `n = 'straight'`, `cv39 = 1`: `n` with straight ending.
    + `n = 'tailed'`, `cv39 = 2`: `n` with a curly tail.
    + `n = 'earless-corner-straight'`, `cv39 = 3`: Earless (corner top-left) `n` with straight ending.
    + `n = 'earless-corner-tailed'`, `cv39 = 4`: Earless (corner top-left) `n` with a curly tail.
    + `n = 'earless-rounded-straight'`, `cv39 = 5`: Earless (rounded top-left) `n` with straight ending.
    + `n = 'earless-rounded-tailed'`, `cv39 = 6`: Earless (rounded top-left) `n` with a curly tail.
    + `n = 'straight-motion-serifed'`, `cv39 = 7`: `n` with motion serifs and straight ending.
    + `n = 'motion-serifed-tailed'`, `cv39 = 8`: `n` with motion serifs and a curly tail.
  - Styles for `p`:
    + `p = 'eared'`, `cv40 = 1`: `p` with top-left ear.
    + `p = 'earless-corner'`, `cv40 = 2`: `p` without top-left ear (corner).
    + `p = 'earless-rounded'`, `cv40 = 3`: `p` without top-left ear (rounded).
    + `p = 'motion-serifed'`, `cv40 = 4`: `p` with motion serifs.
  - Styles for `q`:
    + `q = 'straight'`, `cv41 = 1`: `q` with straight bar.
    + `q = 'tailed'`, `cv41 = 2`: `q` with tail.
    + `q = 'earless-corner'`, `cv41 = 3`: Earless (cornered top-left) single-storey `q`.
    + `q = 'earless-corner-tailed'`, `cv41 = 4`: Earless (cornered top-left) single-storey `q` with curly tail.
    + `q = 'earless-rounded'`, `cv41 = 5`: Earless (rounded top-left) single-storey `q`.
    + `q = 'earless-rounded-tailed'`, `cv41 = 6`: Earless (rounded top-left) single-storey `q` with curly tail.
    + `q = 'straight-motion-serifed'`, `cv41 = 7`: `q` with straight bar and motion serifs.
    + `q = 'motion-serifed-tailed'`, `cv41 = 8`: `q` with tail and motion serifs.
    + `q = 'diagonal-tailed'`, `cv41 = 9`: `q` with diagonal tail.
    + `q = 'earless-corner-diagonal-tailed'`, `cv41 = 10`: Earless (cornered top-left) single-storey `q` with curly diagonal tail.
    + `q = 'earless-rounded-diagonal-tailed'`, `cv41 = 11`: Earless (rounded top-left) single-storey `q` with curly diagonal tail.
    + `q = 'motion-serifed-diagonal-tailed'`, `cv41 = 12`: `q` with diagonal tail and motion serifs.
  - Styles for `r`:
    + `r = 'serifless'`, `cv42 = 1`: Straight, serif-less `r`.
    + `r = 'serifed'`, `cv42 = 2`: `r` with serif at both top and bottom.
    + `r = 'top-serifed'`, `cv42 = 3`: `r` with serifs at top-left only.
    + `r = 'base-serifed'`, `cv42 = 4`: `r` with serifs at top-left only.
    + `r = 'earless-corner'`, `cv42 = 5`: Earless (corner top-left), serif-less `r`.
    + `r = 'earless-corner-serifed'`, `cv42 = 6`: Earless (corner top-left), serifed `r`.
    + `r = 'earless-rounded'`, `cv42 = 7`: Earless (rounded top-left), serif-less `r`.
    + `r = 'earless-rounded-serifed'`, `cv42 = 8`: Earless (rounded top-left), serifed `r`.
    + `r = 'compact'`, `cv42 = 9`: Compact, serifless `r`.
    + `r = 'compact-serifed'`, `cv42 = 10`: Compact `r` with top and bottom serifs.
    + `r = 'compact-top-serifed'`, `cv42 = 11`: Compact `r` with top serif.
    + `r = 'compact-base-serifed'`, `cv42 = 12`: Compact `r` with bottom serif.
    + `r = 'corner-hooked'`, `cv42 = 13`: `r` with vertical corner hook downwards.
    + `r = 'corner-hooked-serifed'`, `cv42 = 14`: `r` with vertical corner hook downwards, top and bottom serifs.
    + `r = 'corner-hooked-top-serifed'`, `cv42 = 15`: `r` with vertical corner hook downwards and top serif.
    + `r = 'corner-hooked-base-serifed'`, `cv42 = 16`: `r` with vertical corner hook downwards and bottom serif.
  - Styles for `s`:
    + `s = 'serifless'`, `cv43 = 1`: Serifless `s`.
    + `s = 'unilateral-serifed'`, `cv43 = 2`: `s` with single serif at top.
    + `s = 'bilateral-serifed'`, `cv43 = 3`: `s` with serifs at both end.
    + `s = 'unilateral-inward-serifed'`, `cv43 = 4`: `s` with single inward serif at top.
    + `s = 'bilateral-inward-serifed'`, `cv43 = 5`: `s` with inward serifs at both end.
  - Styles for `t`:
    + `t = 'standard'`, `cv44 = 1`: Standard `t` shape.
    + `t = 'flat-hook'`, `cv44 = 2`: `t` with flat hook.
    + `t = 'diagonal-tailed'`, `cv44 = 3`: `t` with diagonal tail.
    + `t = 'cross'`, `cv44 = 4`: Futura-like `t` shape.
    + `t = 'hookless-asymmetric'`, `cv44 = 5`: `t` without hook and with ony half the cross bar.
    + `t = 'standard-short-neck'`, `cv44 = 6`: Standard `t` shape with a shorter neck.
    + `t = 'flat-hook-short-neck'`, `cv44 = 7`: `t` with flat hook and a slightly shorter neck.
    + `t = 'diagonal-tailed-short-neck'`, `cv44 = 8`: `t` with diagonal tail and a shorter neck.
    + `t = 'cross-short-neck'`, `cv44 = 9`: Futura-like `t` shape with a shorter neck.
    + `t = 'hookless-asymmetric-short-neck'`, `cv44 = 10`: `t` without hook, with ony half the cross bar and a shorter neck.
    + `t = 'standard-short-neck2'`, `cv44 = 11`: Standard `t` shape with a more shorter neck.
    + `t = 'flat-hook-short-neck2'`, `cv44 = 12`: `t` with flat hook and a more shorter neck.
    + `t = 'diagonal-tailed-short-neck2'`, `cv44 = 13`: `t` with diagonal tail and a more shorter neck.
    + `t = 'cross-short-neck2'`, `cv44 = 14`: Futura-like `t` shape with a more shorter neck.
    + `t = 'hookless-asymmetric-short-neck2'`, `cv44 = 15`: `t` without hook, with ony half the cross bar and a more shorter neck.
  - Styles for `u`:
    + `u = 'toothed'`, `cv45 = 1`: Normal `u` with bottom-right tooth.
    + `u = 'toothless-corner'`, `cv45 = 2`: Toothless (corner bottom-right) `u`.
    + `u = 'toothless-rounded'`, `cv45 = 3`: Toothless (rounded) `u`, like a smaller uppercase `U`.
    + `u = 'tailed'`, `cv45 = 4`: `u` with right bar and a slightly curly tail.
    + `u = 'motion-serifed'`, `cv45 = 5`: Normal `u` with right bar and motion serifs.
    + `u = 'motion-serifed-tailed'`, `cv45 = 6`: `u` with right bar, motion serifs and a slightly curly tail.
    + `u = 'toothless-corner-motion-serifed'`, `cv45 = 7`: Toothless (corner bottom-right) `u` with motion serifs.
    + `u = 'toothless-rounded-motion-serifed'`, `cv45 = 8`: Toothless (rounded) `u` with motion serifs.
  - Styles for `v`:
    + `v = 'straight'`, `cv46 = 1`: Standard, straight `v`.
    + `v = 'curly'`, `cv46 = 2`: Slightly curly `v`, like Iosevka 2.x.
    + `v = 'cursive'`, `cv46 = 3`: Cursive `v`.
    + `v = 'straight-motion-serifed'`, `cv46 = 4`: Standard, straight `v`, with motion serifs.
    + `v = 'curly-motion-serifed'`, `cv46 = 5`: Slightly curly `v`, like Iosevka 2.x, with motion serifs.
    + `v = 'cursive-serifed'`, `cv46 = 6`: Cursive `v` with motion serifs.
  - Styles for `w`:
    + `w = 'straight'`, `cv47 = 1`: Standard, straight `w`.
    + `w = 'curly'`, `cv47 = 2`: Slightly curly `w`, like Iosevka 2.x.
    + `w = 'straight-flat-top'`, `cv47 = 3`: Standard, straight `w`, and the middle is forced to be aligned the top.
    + `w = 'straight-double-v'`, `cv47 = 4`: Straight `w` looks like double V.
    + `w = 'straight-asymmetric'`, `cv47 = 5`: Straight `w` looks asymmetric.
    + `w = 'straight-vertical-sides'`, `cv47 = 6`: Straight `w` with vertical sides.
    + `w = 'cursive'`, `cv47 = 7`: Cursive `w`.
    + `w = 'straight-motion-serifed'`, `cv47 = 8`: Standard, straight `w`, with motion serifs.
    + `w = 'curly-motion-serifed'`, `cv47 = 9`: Slightly curly `w`, like Iosevka 2.x, with motion serifs.
    + `w = 'straight-flat-top-motion-serifed'`, `cv47 = 10`: Standard, straight `w`, and the middle is forced to be aligned the top, with motion serifs.
    + `w = 'straight-double-v-motion-serifed'`, `cv47 = 11`: Straight `w` looks like double V, with motion serifs.
    + `w = 'straight-asymmetric-motion-serifed'`, `cv47 = 12`: Straight `w` looks asymmetric, with motion serifs.
    + `w = 'straight-vertical-sides-motion-serifed'`, `cv47 = 13`: Straight `w` with vertical sides and motion serifs.
    + `w = 'cursive-motion-serifed'`, `cv47 = 14`: Cursive `w` with motion serifs.
  - Styles for `x`:
    + `x = 'straight-serifless'`, `cv48 = 1`: Serifless, straight `x`.
    + `x = 'curly-serifless'`, `cv48 = 2`: Serifless, slightly curly `x`, like Iosevka 2.x.
    + `x = 'straight-motion-serifed'`, `cv48 = 3`: Straight `x` with motion serifs.
    + `x = 'curly-motion-serifed'`, `cv48 = 4`: Slightly curly `x`, like Iosevka 2.x, with motion serifs.
    + `x = 'straight-serifed'`, `cv48 = 5`: Straight `x` with full serifs.
    + `x = 'curly-serifed'`, `cv48 = 6`: Slightly curly `x`, like Iosevka 2.x, with full serifs.
    + `x = 'cursive'`, `cv48 = 7`: Cursive `x`.
  - Styles for `y`:
    + `y = 'straight'`, `cv49 = 1`: Letter `y` that is fully straight.
    + `y = 'straight-turn'`, `cv49 = 2`: Letter `y` with straight upper and a tail turns leftward.
    + `y = 'curly'`, `cv49 = 3`: More curly letter `y`, like Iosevka 2.x.
    + `y = 'curly-turn'`, `cv49 = 4`: More curly letter `y`, like Iosevka 2.x, with a tail turns leftward.
    + `y = 'cursive'`, `cv49 = 5`: Cursive-like `y`.
    + `y = 'cursive-flat-hook'`, `cv49 = 6`: Cursive-like `y` with flat terminal hook.
    + `y = 'straight-motion-serifed'`, `cv49 = 7`: Letter `y` that is fully straight, with motion serifs.
    + `y = 'straight-turn-motion-serifed'`, `cv49 = 8`: Letter `y` with straight upper and a tail turns leftward, and motion serifs.
    + `y = 'curly-motion-serifed'`, `cv49 = 9`: More curly letter `y`, like Iosevka 2.x, with motion serifs.
    + `y = 'curly-turn-motion-serifed'`, `cv49 = 10`: More curly letter `y`, like Iosevka 2.x, with a tail turns leftward and motion serifs.
    + `y = 'cursive-motion-serifed'`, `cv49 = 11`: Cursive-like `y`, with motion serifs.
    + `y = 'cursive-flat-hook-motion-serifed'`, `cv49 = 12`: Cursive-like `y` with flat terminal hook, and motion serifs.
  - Styles for `z`:
    + `z = 'straight-serifless'`, `cv50 = 1`: Straight `z` without serifs.
    + `z = 'straight-serifless-with-crossbar'`, `cv50 = 2`: Straight `z` with a diagonal crossbar, and without serifs.
    + `z = 'straight-serifless-with-horizontal-crossbar'`, `cv50 = 3`: Straight `z` with a horizontal crossbar, and without serifs.
    + `z = 'curly-serifless'`, `cv50 = 4`: Curly `z` without serifs.
    + `z = 'curly-serifless-with-crossbar'`, `cv50 = 5`: Curly `z` with a diagonal crossbar, and without serifs.
    + `z = 'curly-serifless-with-horizontal-crossbar'`, `cv50 = 6`: Curly `z` with a horizontal crossbar, and without serifs.
    + `z = 'straight-serifed'`, `cv50 = 7`: Straight `z` with top and bottom serifs.
    + `z = 'straight-serifed-with-crossbar'`, `cv50 = 8`: Straight `z` with a diagonal crossbar and serifs.
    + `z = 'straight-serifed-with-horizontal-crossbar'`, `cv50 = 9`: Straight `z` with a horizontal crossbar and serifs.
    + `z = 'curly-serifed'`, `cv50 = 10`: Curly `z` woth top and bottom serifs.
    + `z = 'curly-serifed-with-crossbar'`, `cv50 = 11`: Curly `z` with a diagonal crossbar and serifs.
    + `z = 'curly-serifed-with-horizontal-crossbar'`, `cv50 = 12`: Curly `z` with a horizontal crossbar and serifs.
    + `z = 'straight-bottom-serifed'`, `cv50 = 13`: Standard `z` with serif at bottom.
    + `z = 'straight-bottom-serifed-with-crossbar'`, `cv50 = 14`: Standard `z` with a diagonal crossbar and serif at bottom.
    + `z = 'straight-bottom-serifed-with-horizontal-crossbar'`, `cv50 = 15`: Standard `z` with a horizontal crossbar and serif at bottom.
    + `z = 'curly-bottom-serifed-with-crossbar'`, `cv50 = 16`: Curly `z` with serif at bottom.
    + `z = 'curly-bottom-serifed-with-horizontal-crossbar'`, `cv50 = 17`: Curly `z` with a diagonal crossbar and serif at bottom.
    + `z = 'curly-bottom-serifed'`, `cv50 = 18`: Curly `z` with a horizontal crossbar and serif at bottom.
    + `z = 'straight-top-serifed'`, `cv50 = 19`: Standard `z` with serif at top.
    + `z = 'straight-top-serifed-with-crossbar'`, `cv50 = 20`: Standard `z` with a diagonal crossbar and serif at top.
    + `z = 'straight-top-serifed-with-horizontal-crossbar'`, `cv50 = 21`: Standard `z` with a horizontal crossbar and serif at top.
    + `z = 'curly-top-serifed'`, `cv50 = 22`: Curly `z` with serif at top.
    + `z = 'curly-top-serifed-with-crossbar'`, `cv50 = 23`: Curly `z` with a diagonal crossbar and serif at top.
    + `z = 'curly-top-serifed-with-horizontal-crossbar'`, `cv50 = 24`: Curly `z` with a horizontal crossbar and serif at top.
    + `z = 'cursive'`, `cv50 = 25`: Cursive `z`.
    + `z = 'cursive-with-crossbar'`, `cv50 = 26`: Cursive `z` with a diagonal cross bar.
    + `z = 'cursive-with-horizontal-crossbar'`, `cv50 = 27`: Cursive `z` with a horizontal cross bar.
  - Styles for `ſ` (Long-S):
    + `long-s = 'standard'`, `cv51 = 1`: Long-S with standard hook.
    + `long-s = 'flat-hook'`, `cv51 = 2`: Long-S with flat hook.
  - Styles for `ß` (Eszet):
    + `eszet = 'traditional'`, `cv52 = 1`: Traditional, Fraktur-like Eszet (`ß`).
    + `eszet = 'traditional-tailed'`, `cv52 = 2`: Traditional, Fraktur-like Eszet (`ß`) with descending tail.
    + `eszet = 'traditional-flat-hook'`, `cv52 = 3`: Traditional, Fraktur-like Eszet (`ß`) with flat hook.
    + `eszet = 'traditional-flat-hook-tailed'`, `cv52 = 4`: Traditional, Fraktur-like Eszet (`ß`) with flat hook and descending tail.
    + `eszet = 'sulzbacher'`, `cv52 = 5`: More modern, beta-like Eszet (`ß`).
    + `eszet = 'sulzbacher-tailed'`, `cv52 = 6`: More modern, beta-like Eszet (`ß`) with descending tail.
    + `eszet = 'longs-s-lig'`, `cv52 = 7`: Eszet (`ß`) shown as a ligature of long-S (`ſ`) and `s`.
    + `eszet = 'longs-s-lig-tailed'`, `cv52 = 8`: Eszet (`ß`) shown as a ligature of long-S (`ſ`) and `s`, with descending tail.
  - Styles for `Λ`, `Δ` (Greek capital Lambda (`Λ`) and Greek capital Delta (`Δ`)):
    + `turn-v = 'straight'`, `cv53 = 1`: Standard, straight Greek capital Lambda (`Λ`) and Greek capital Delta (`Δ`).
    + `turn-v = 'curly'`, `cv53 = 2`: Slightly curly Greek capital Lambda (`Λ`) and Greek capital Delta (`Δ`), like Iosevka 2.x.
  - Styles for `α` (Greek lower Alpha):
    + `lower-alpha = 'crossing'`, `cv54 = 1`: Greek lower Alpha (`α`) with a cross-like shape at right.
    + `lower-alpha = 'tailed-barred'`, `cv54 = 2`: Greek lower Alpha (`α`) with a straight right bar and tail.
  - Styles for `Γ` (Greek capital Gamma):
    + `capital-gamma = 'standard'`, `cv55 = 1`: Standard capital Gamma (`Γ`).
    + `capital-gamma = 'motion-serifed'`, `cv55 = 2`: Standard capital Gamma (`Γ`) with motion serifs.
  - Styles for `ɛ` (Latin small Epsilon):
    + `latn-epsilon = 'serifless'`, `cv56 = 1`: Serifless `ɛ`.
    + `latn-epsilon = 'serifed'`, `cv56 = 2`: `ɛ` with serif.
    + `latn-epsilon = 'inward-serifed'`, `cv56 = 3`: `ɛ` with inward serif.
  - Styles for `ɜ` (Latin reverse Epsilon and Cyrillic Ze):
    + `latn-reverse-epsilon = 'serifless'`, `cv57 = 1`: Serifless `ɜ`.
    + `latn-reverse-epsilon = 'serifed'`, `cv57 = 2`: `ɜ` with serif.
    + `latn-reverse-epsilon = 'inward-serifed'`, `cv57 = 3`: `ɜ` with inward serif.
  - Styles for `ι` (Greek lower Iota):
    + `lower-iota = 'zshaped'`, `cv58 = 1`: Z-shaped Greek lower Iota (`ι`).
    + `lower-iota = 'hooky-bottom'`, `cv58 = 2`: Greek lower Iota (`ι`) with a sharp-turning horizontal tail.
    + `lower-iota = 'tailed'`, `cv58 = 3`: Greek lower Iota (`ι`) with curly tail.
    + `lower-iota = 'serifed-tailed'`, `cv58 = 4`: Greek lower Iota (`ι`) with top serif and curly tail.
    + `lower-iota = 'flat-tailed'`, `cv58 = 5`: Greek lower Iota (`ι`) with a curly-then-flat tail.
    + `lower-iota = 'serifed-flat-tailed'`, `cv58 = 6`: Greek lower Iota (`ι`) with top serif and a curly-then-flat tail.
  - Styles for `λ` (Greek small Lambda):
    + `lower-lambda = 'straight'`, `cv59 = 1`: More-straight Greek small Lambda (`λ`).
    + `lower-lambda = 'straight-turn'`, `cv59 = 2`: Greek small Lambda (`λ`) with straight upper and a tail turns leftward.
    + `lower-lambda = 'curly'`, `cv59 = 3`: More curly Greek small Lambda (`λ`), like Iosevka 2.x.
    + `lower-lambda = 'curly-turn'`, `cv59 = 4`: More curly Greek small Lambda (`λ`), like Iosevka 2.x, with a tail turns leftward.
  - Styles for `к` (Cyrillic Ka):
    + `cyrl-ka = 'straight'`, `cv60 = 1`: Cyrillic Ka (`К`/`к`)  with standard shape.
    + `cyrl-ka = 'curly'`, `cv60 = 2`: Slightly curly Cyrillic Ka (`К`/`к`) , like Iosevka 2.x.
    + `cyrl-ka = 'symmetric-touching'`, `cv60 = 3`: Cyrillic Ka (`К`/`к`)  with symmetric legs disconnected to the vertical bar.
    + `cyrl-ka = 'symmetric-connected'`, `cv60 = 4`: Cyrillic Ka (`К`/`к`)  with symmetric legs connected to the vertical bar.
    + `cyrl-ka = 'straight-motion-serifed'`, `cv60 = 5`: Cyrillic Ka (`К`/`к`)  with standard shape and motion serifs.
    + `cyrl-ka = 'curly-motion-serifed'`, `cv60 = 6`: Slightly curly Cyrillic Ka (`К`/`к`) , like Iosevka 2.x, with motion serifs.
    + `cyrl-ka = 'symmetric-touching-motion-serifed'`, `cv60 = 7`: Cyrillic Ka (`К`/`к`)  with symmetric legs disconnected to the vertical bar, and motion serifs.
    + `cyrl-ka = 'symmetric-connected-motion-serifed'`, `cv60 = 8`: Cyrillic Ka (`К`/`к`)  with symmetric legs connected to the vertical bar, and motion serifs.
  - Styles for `У` (Cyrillic Capital U):
    + `cyrl-capital-u = 'straight'`, `cv61 = 1`: Cyrillic capital U (`У`) that is fully straight.
    + `cyrl-capital-u = 'straight-turn'`, `cv61 = 2`: Cyrillic capital U (`У`) with straight upper and a tail turns leftward.
    + `cyrl-capital-u = 'curly'`, `cv61 = 3`: More curly Cyrillic capital U (`У`), like Iosevka 2.x.
    + `cyrl-capital-u = 'curly-turn'`, `cv61 = 4`: More curly Cyrillic capital U (`У`), like Iosevka 2.x, with a tail turns leftward.
    + `cyrl-capital-u = 'cursive'`, `cv61 = 5`: Cursive-like Cyrillic capital U (`У`).
    + `cyrl-capital-u = 'cursive-flat-hook'`, `cv61 = 6`: Cursive-like Cyrillic capital U (`У`) with flat terminal hook.
  - Styles for `0`:
    + `zero = 'unslashed'`, `cv62 = 1`: O-like Zero (`0`).
    + `zero = 'slashed'`, `cv62 = 2`: Slashed Zero (`0`).
    + `zero = 'reverse-slashed'`, `cv62 = 3`: Reverse-slashed Zero (`0`).
    + `zero = 'dotted'`, `cv62 = 4`: Dotted Zero (`0`).
    + `zero = 'long-dotted'`, `cv62 = 5`: Long-dotted Zero (`0`) like Hack.
    + `zero = 'unslashed-oval'`, `cv62 = 6`: O-like Zero (`0`) but more round.
    + `zero = 'slashed-oval'`, `cv62 = 7`: Slashed Zero (`0`) but more round.
    + `zero = 'reverse-slashed-oval'`, `cv62 = 8`: Reverse-slashed Zero (`0`) but more round.
    + `zero = 'dotted-oval'`, `cv62 = 9`: Dotted Zero (`0`).
    + `zero = 'long-dotted-oval'`, `cv62 = 10`: Long-dotted Zero (`0`) like Hack.
  - Styles for `1`:
    + `one = 'nobase'`, `cv63 = 1`: `1` without bottom serif.
    + `one = 'base'`, `cv63 = 2`: `1` with bottom serif.
    + `one = 'line'`, `cv63 = 3`: `1` drawn just like a straight line.
    + `one = 'nobase-long-top-serif'`, `cv63 = 4`: `1` without bottom serif and with a long top serif.
    + `one = 'base-long-top-serif'`, `cv63 = 5`: `1` with bottom serif and a long top serif.
    + `one = 'nobase-flat-top-serif'`, `cv63 = 6`: `1` without bottom serif and with a flat top serif.
    + `one = 'base-flat-top-serif'`, `cv63 = 7`: `1` with bottom serif and a flat top serif.
  - Styles for `2`:
    + `two = 'straight-neck'`, `cv64 = 1`: `2` with straight neck.
    + `two = 'curly-neck'`, `cv64 = 2`: `2` with curly neck.
  - Styles for `3`:
    + `three = 'flattop'`, `cv65 = 1`: Flat top `3` (Like Museo Sans / Montserrat).
    + `three = 'twoarcs'`, `cv65 = 2`: Arched top `3`.
  - Styles for `4`:
    + `four = 'closed'`, `cv66 = 1`: `4` with closed contour.
    + `four = 'closed-non-crossing'`, `cv66 = 2`: `4` with closed contour but the horizontal bar does not overflow the vertical bar.
    + `four = 'semi-open'`, `cv66 = 3`: `4` with semi-open contour.
    + `four = 'semi-open-non-crossing'`, `cv66 = 4`: `4` with semi-open contour but the horizontal bar does not overflow the vertical bar.
    + `four = 'open'`, `cv66 = 5`: `4` with open contour.
    + `four = 'open-non-crossing'`, `cv66 = 6`: `4` with open contour but the horizontal bar does not overflow the vertical bar.
  - Styles for `5`:
    + `five = 'vertical-upper-left-bar'`, `cv67 = 1`: `5` with a vertical upper-left bar.
    + `five = 'oblique-upper-left-bar'`, `cv67 = 2`: `5` with an oblique upper-left bar.
  - Styles for `6`:
    + `six = 'closed-contour'`, `cv68 = 1`: `6` with a more closed contour.
    + `six = 'open-contour'`, `cv68 = 2`: `6` with a more open contour.
    + `six = 'straight-bar'`, `cv68 = 3`: `6` with a straight bar.
  - Styles for `7`:
    + `seven = 'straight-serifless'`, `cv69 = 1`: `7` with straight stem and without serif.
    + `seven = 'straight-serifed'`, `cv69 = 2`: `7` with straight stem and initial serif.
    + `seven = 'bend-serifless'`, `cv69 = 3`: `7` with bend stem and without serif.
    + `seven = 'bend-serifed'`, `cv69 = 4`: `7` with bend stem and initial serif.
    + `seven = 'curly-serifless'`, `cv69 = 5`: `7` with curly stem and without serif.
    + `seven = 'curly-serifed'`, `cv69 = 6`: `7` with curly stem and initial serif.
    + `seven = 'straight-crossbar'`, `cv69 = 7`: `7` with straight stem and crossbar.
    + `seven = 'straight-crossbar-serifed'`, `cv69 = 8`: `7` with straight stem, crossbar and initial serif.
    + `seven = 'bend-crossbar'`, `cv69 = 9`: `7` with bend stem and crossbar.
    + `seven = 'bend-crossbar-serifed'`, `cv69 = 10`: `7` with bend stem, crossbar and initial serif.
    + `seven = 'curly-crossbar'`, `cv69 = 11`: `7` with curly stem and crossbar.
    + `seven = 'curly-crossbar-serifed'`, `cv69 = 12`: `7` with curly stem, crossbar and initial serif.
  - Styles for `8`:
    + `eight = 'crossing'`, `cv70 = 1`: `8` with crossing middle part.
    + `eight = 'two-circles'`, `cv70 = 2`: `8` looks like two circles joined together.
    + `eight = 'crossing-asymmetric'`, `cv70 = 3`: `8` looks asymmetric crossing middle part.
  - Styles for `9`:
    + `nine = 'closed-contour'`, `cv71 = 1`: `9` with a more closed contour.
    + `nine = 'open-contour'`, `cv71 = 2`: `9` with a more open contour.
    + `nine = 'straight-bar'`, `cv71 = 3`: `9` with a straight bar.
  - Styles for `~`:
    + `tilde = 'high'`, `cv72 = 1`: Higher tilde `~`.
    + `tilde = 'low'`, `cv72 = 2`: Lower tilde `~`.
  - Styles for `*`:
    + `asterisk = 'penta-high'`, `cv73 = 1`: Higher five-pointed asterisk `*`.
    + `asterisk = 'penta-low'`, `cv73 = 2`: Lower five-pointed asterisk `*`.
    + `asterisk = 'flip-penta-high'`, `cv73 = 3`: Higher five-pointed and turned asterisk `*`.
    + `asterisk = 'flip-penta-low'`, `cv73 = 4`: Lower five-pointed and turned asterisk `*`.
    + `asterisk = 'hex-high'`, `cv73 = 5`: Higher six-pointed asterisk `*`.
    + `asterisk = 'hex-low'`, `cv73 = 6`: Lower six-pointed asterisk `*`.
    + `asterisk = 'turn-hex-high'`, `cv73 = 7`: Higher turned six-pointed asterisk `*`.
    + `asterisk = 'turn-hex-low'`, `cv73 = 8`: Lower turned six-pointed asterisk `*`.
  - Styles for `_`:
    + `underscore = 'above-baseline'`, `cv74 = 1`: Extra-high `_`, placed right below baseline.
    + `underscore = 'high'`, `cv74 = 2`: Higher underscore `_`, placed right below baseline.
    + `underscore = 'low'`, `cv74 = 3`: Lower underscore `_`, placed right above descender line.
  - Styles for `¶`:
    + `paragraph-sign = 'high'`, `cv75 = 1`: Higher paragraph sign `¶`.
    + `paragraph-sign = 'low'`, `cv75 = 2`: Lower paragraph sign `¶`.
  - Styles for `^`:
    + `caret = 'high'`, `cv76 = 1`: Higher circumflex `^`.
    + `caret = 'medium'`, `cv76 = 2`: Lower circumflex `^`.
    + `caret = 'low'`, `cv76 = 3`: Lower circumflex `^`.
  - Styles for `(`, `)`:
    + `paren = 'normal'`, `cv77 = 1`: Parenthesis with normal contour.
    + `paren = 'large-contour'`, `cv77 = 2`: Parenthesis with larger contour, like that in Monaco.
    + `paren = 'flat-arc'`, `cv77 = 3`: Parenthesis with flat arc, like that in JetBrains Mono.
  - Styles for `{`, `}`:
    + `brace = 'straight'`, `cv78 = 1`: More straight braces.
    + `brace = 'curly'`, `cv78 = 2`: More curly braces.
  - Styles for `#`:
    + `number-sign = 'upright'`, `cv79 = 1`: Number sign with vertical bars.
    + `number-sign = 'slanted'`, `cv79 = 2`: Number sign with slanted bars.
    + `number-sign = 'upright-open'`, `cv79 = 3`: Number sign with vertical bars and open inner.
    + `number-sign = 'slanted-open'`, `cv79 = 4`: Number sign with slanted bars and open inner.
  - Styles for `&`:
    + `ampersand = 'closed'`, `cv80 = 1`: Ampersand (`&`) with a closed contour.
    + `ampersand = 'upper-open'`, `cv80 = 2`: Ampersand (`&`) with an open contour at upper half.
    + `ampersand = 'lower-open'`, `cv80 = 3`: Ampersand (`&`) with an open contour at lower half.
    + `ampersand = 'et-toothed'`, `cv80 = 4`: Ampersand (`&`) drawn like a ligature of Ɛ and t with tooth.
    + `ampersand = 'et-toothless-corner'`, `cv80 = 5`: Ampersand (`&`) drawn like a ligature of Ɛ and t without tooth (corner).
    + `ampersand = 'et-toothless-rounded'`, `cv80 = 6`: Ampersand (`&`) drawn like a ligature of Ɛ and t without tooth (rounded).
    + `ampersand = 'flat-top'`, `cv80 = 7`: Ampersand (`&`) drawn with a flat top.
  - Styles for `@`:
    + `at = 'threefold'`, `cv81 = 1`: The long, three-fold At symbol (`@`).
    + `at = 'fourfold'`, `cv81 = 2`: The traditional, four-fold At symbol (`@`).
    + `at = 'short'`, `cv81 = 3`: The shorter, Fira-like At symbol (`@`).
  - Styles for `$`:
    + `dollar = 'open'`, `cv82 = 1`: Dollar symbol with open contour.
    + `dollar = 'through'`, `cv82 = 2`: Dollar symbol with strike-through vertical bar.
    + `dollar = 'interrupted'`, `cv82 = 3`: Dollar symbol with strike-through vertical bar.
    + `dollar = 'open-cap'`, `cv82 = 4`: Dollar symbol with open contour, not exceeding baseline and ascender.
    + `dollar = 'through-cap'`, `cv82 = 5`: Dollar symbol with strike-through vertical bar, not exceeding baseline and ascender.
    + `dollar = 'interrupted-cap'`, `cv82 = 6`: Dollar symbol with strike-through vertical bar, not exceeding baseline and ascender.
  - Styles for `¢`:
    + `cent = 'open'`, `cv83 = 1`: Cent sign (`¢`) with open contour.
    + `cent = 'through'`, `cv83 = 2`: Cent sign (`¢`) with vertical bar all through the `c` part.
    + `cent = 'bar-interrupted'`, `cv83 = 3`: Cent sign (`¢`) with vertical bar breaks at center.
  - Styles for `%`:
    + `percent = 'dots'`, `cv84 = 1`: Percent `%` with rectangular dots.
    + `percent = 'rings-segmented-slash'`, `cv84 = 2`: Percent `%` with rings and segmented slash.
    + `percent = 'rings-continuous-slash'`, `cv84 = 3`: Percent `%` with rings and continuous bar.
    + `percent = 'rings-continuous-slash-also-connected'`, `cv84 = 4`: Percent `%` with rings and continuous bar and the slash in `%` is also connected to the top-left ring.
  - Styles for `|`:
    + `bar = 'natural-slope'`, `cv85 = 1`: Bar punctuations (`|`) has a natural slope under italics and oblique.
    + `bar = 'force-upright'`, `cv85 = 2`: Bar punctuations (`|`) is forced upright under italics and oblique.
  - Styles for `<=`, `>=`:
    + `lig-ltgteq = 'flat'`, `cv86 = 1`: The lower bar of `<=` and `>=` ligation is flat.
    + `lig-ltgteq = 'slanted'`, `cv86 = 2`: The lower bar of `<=` and `>=` ligation is slanted.
  - Styles for `'`:
    + `ascii-single-quote = 'straight'`, `cv87 = 1`: Show ASCII quote (`'`) as short vertical straight bar..
    + `ascii-single-quote = 'raised-comma'`, `cv87 = 2`: Show ASCII quote (`'`) as raised comma..
  - Styles for `` ` ``:
    + `ascii-grave = 'straight'`, `cv88 = 1`: Show ASCII grave (`` ` ``) as short diagonal straight bar..
    + `ascii-grave = 'raised-inverse-comma'`, `cv88 = 2`: Show ASCII grave (`` ` ``) as raised comma..
    + `ascii-grave = 'raised-turn-comma'`, `cv88 = 3`: Show ASCII grave (`` ` ``) as raised turned comma, identical to curly open single quote symbols (U+2018)..
  - Styles for `?`:
    + `question = 'smooth'`, `cv89 = 1`: Smooth question mark (`?`).
    + `question = 'corner'`, `cv89 = 2`: Question mark (`?`) with a corner at middle.
    + `question = 'corner-flat-hooked'`, `cv89 = 3`: Question mark (`?`) with a corner at middle and flat hook.

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

#### Metric Override

Subsection `metric-override` provides ability to override certain metric values, if you *reallly* want to. Adding this section is **strongly discouraged** as it may introduce broken geometry or broken shapes.

| Property | Unit | Default Value | Meaning |
|----------|------|---------|----------|
| `cap` | emu | 735 | Height of `H`. |
| `xheight` | emu | 530 | Height of `x`. |
| `sb` | emu | (*varies, 60 for Regular*) | Width of common side-bearings. |
| `leading` | emu | 1250 | Built-in line height. |
| `symbolMid` | emu | 340 | Height of the center of hyphen (`-`). |
| `parenSize` | emu | 966 | Height of Parentheses. |
| `winMetricAscenderPad` | emu | 0 | Additional pad for Win metrics’ ascender to avoid clipping in legacy Windows applications. |
| `winMetricDescenderPad` | emu | 0 | Additional pad for Win metrics’ descender to avoid clipping in legacy Windows applications. |
| `powerlineScaleX`, `powerlineScaleY` | (*ratio*) | 1 | X and Y scale of Powerline glyphs. |
| `powerlineShiftX`, `powerlineShiftY` | emu | 0 | X and Y shift of Powerline glyphs. |
| `onumZeroHeightRatio` | (*ratio*) | 1.145 | Ratio of height of `0` under `onum` feature, to the height of `x`. |

Sub-subsection `metric-override.multiplies` and `metric-override.adds` could be used to override the value by multiplying a scale to the default value, then add a shift to it further. The following configuration

```toml
[buildPlans.iosevka-custom.metric-override]
leading = 1500

[buildPlans.iosevka-custom.metric-override.multiplies]
sb = 1.0625

[buildPlans.iosevka-custom.metric-override.adds]
sb = 15
```

will:

* Override line height to `1500` em-unit;
* Override the sidebearing value by its value multiplied by `1.0625` then added with `15`.

#### Sample Configuration

A sample configuration could be found at [private-build-plans.sample.toml](private-build-plans.sample.toml).

## For Chinese and Japanese users...

→ [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic).

---

![Family Matrix](images/matrix.png)
