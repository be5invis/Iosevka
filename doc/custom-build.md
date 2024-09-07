# Building Iosevka from Source

### Getting the files

To make the font, first you need to have the files that contain the repository’s source code. Here are two ways:

 * Download [the archive of Iosevka’s source code](https://github.com/be5invis/Iosevka/archive/refs/heads/main.zip), then extract its contents into somewhere on your computer.
 * [Cloning](https://git-scm.com/docs/git-clone) this repository using [Git](https://git-scm.com/): 
    ```
    git clone --depth 1 https://github.com/be5invis/Iosevka.git 
    ```

### Building

To build Iosevka you should:

1. Install [`nodejs`](http://nodejs.org) (≥ 18.0.0) and [`ttfautohint`](http://www.freetype.org/ttfautohint/). Make sure that they are accessible from [`PATH` environment variable](https://en.wikipedia.org/wiki/PATH_(variable)).
2. Open a CLI shell in a terminal, [`cd`](https://en.wikipedia.org/wiki/Cd_(command)) into the directory containing Iosevka source code.
3. Run `npm install`. This command will install **all** the NPM dependencies.
4. Run `npm run build -- contents::Iosevka`. This command will build your fonts.

You will find TTFs, as well as WOFF(2) web fonts and one Webfont CSS in the `dist/` directory.

To using Docker build, read [docker/README.md](../docker/README.md).

## Customized Build

To create a custom build, you need:

1. Create `private-build-plans.toml` file if absent, place alongside the `build-plans.toml` in the repository.

2. Add a build plan into `private-build-plans.toml`. The configurable properties are described in the following sections.
   
3. Run `npm run build -- contents::<your plan name>` and the built fonts would be available in `dist/`. Aside from `contents::<plan>`, other options are:

   1. `contents::<plan>` : Everything (TTF + webfont, hinted + unhinted);
   2. `ttf::<plan>` : TTF only;
   3. `ttf-unhinted::<plan>` : Unhinted TTF only;
   4. `webfont::<plan>` : Web fonts only (CSS + WOFF2);
   4. `webfont-unhinted::<plan>` : Unhinted web fonts only (CSS + WOFF2);
   5. `woff2::<plan>` : WOFF2 only.
   5. `woff2-unhinted::<plan>` : Unhinted WOFF2 only.

⚠️ **Important**: By default, the build system will schedule a number of concurrently running jobs equal to the number of threads available on the CPU, which *will* push CPU usage and also likely RAM usage, if you do not have very much to work with, to the ceiling (each job consumes more than 1 GB of RAM at its peak). If this is an issue for you, pass an additional argument `--jCmd=<number of concurrent jobs>`.

### Configuring Custom Build

Configuration of build plans are organized under `[buildPlans.<plan name>]` sections in the `private-build-plans.toml`. You can use [the Customizer](https://be5invis.github.io/Iosevka/customizer) to create the build plan, and/or manually edit them, following the instructions below. It is recommended to use PascalCase in the plan names.

Inside the plan, top-level properties include:

* `family`: String, defines the family name of your custom variant.
* `spacing`: Optional, String, denotes the spacing of the custom variant. Valid values include:
  - `normal`: The normal monospace font.
  - `quasi-proportional`: The font will become quasi-proportional.
  - `quasi-proportional-extension-only`: The font will become quasi-proportional, but will not shrink narrow letters (like `i`). Only wide letters (like `M`) will get expanded.
  - `term`: Make the symbols' width suitable for terminal emulators. Arrows and geometric symbols will become narrower.
  - `fontconfig-mono`: Apply `term` spacing changes and further apply changes to be compatible with FontConfig's Mono spacing, which recognizes a font as monospace if and only if its every non-combining characters having the same width. The changes include:
    - Completely remove wide glyphs. All non-combining glyphs will be exactly the same width.
      - As a consequence, the following characters will be **removed**:
        - `U+27F5` LONG LEFTWARDS ARROW
        - `U+27F6` LONG RIGHTWARDS ARROW
        - `U+27F7` LONG LEFT RIGHT ARROW
        - `U+27F8` LONG LEFTWARDS DOUBLE ARROW
        - `U+27F9` LONG RIGHTWARDS DOUBLE ARROW
        - `U+27FA` LONG LEFT RIGHT DOUBLE ARROW
        - `U+27FB` LONG LEFTWARDS ARROW FROM BAR
        - `U+27FC` LONG RIGHTWARDS ARROW FROM BAR
        - `U+27FD` LONG LEFTWARDS DOUBLE ARROW FROM BAR
        - `U+27FE` LONG RIGHTWARDS DOUBLE ARROW FROM BAR
        - `U+27FF` LONG RIGHTWARDS SQUIGGLE ARROW
        - `U+2B33` LONG LEFTWARDS SQUIGGLE ARROW
    - Remove `NWID` and `WWID` features typographic features
  - `fixed`: Apply `fontconfig-mono` changes and further remove ligations.
* `serifs`: Optional, String, configures style of serifs.
  - When set to `slab`, the font will be converted into slab-serif.
  - Otherwise the font will be sans-serif.
* `noCvSs`: Optional, Boolean, disables `cv##` and `ss##` OpenType features.
* `noLigation`: Optional, Boolean, disables ligations.
* `exportGlyphNames`: Optional, Boolean, whether to export glyph names into the fonts. Setting this to `true` will increase file footprint, however this is necessary for ligature support in [Kitty](https://sw.kovidgoyal.net/kitty/).
* `webfontFormats`: Optional, Array of String. Controls the formats needed to be exported into the webfont CSS. Valid options are `'TTF'` and `'WOFF2'`, or including both.
* `buildTextureFeature`: Optional, Boolean, whether to build the `TXTR` feature for cross-letter texture adjustments. Defaults to false.

Build plan could have 9 optional subsections:
* `ligations`
* `variants`
* `weights`
* `widths`
* `slopes`
* `compatibilityLigatures`
* `excludeChars`
* `metricOverride`
* `namingOverride`

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
  - `julia`: Default ligation set would be assigned to Julia.
  - `raku`: Default ligation set would be assigned to Raku.
  - `ml`: Default ligation set would be assigned to ML.
  - `fsharp`: Default ligation set would be assigned to F#.
  - `fstar`: Default ligation set would be assigned to F*.
  - `haskell`: Default ligation set would be assigned to Haskell.
  - `idris`: Default ligation set would be assigned to Idris.
  - `elm`: Default ligation set would be assigned to Elm.
  - `purescript`: Default ligation set would be assigned to PureScript.
  - `swift`: Default ligation set would be assigned to Swift.
  - `dafny`: Default ligation set would be assigned to Dafny.
  - `coq`: Default ligation set would be assigned to Coq.
  - `matlab`: Default ligation set would be assigned to Matlab.
  - `verilog`: Default ligation set would be assigned to Verilog.
  - `wolfram`: Default ligation set would be assigned to Wolfram Language (Mathematica).
  - `erlang`: Default ligation set would be assigned to Erlang Language.

<!-- END Section-Predefined-Ligation-Sets -->

<!-- BEGIN Section-Cherry-Picking-Ligation-Sets -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

* `disables` and `enables`: Optional, String Array, Cherry-picking ligation groups to be disabled or enabled. Valid values include:

  - `center-ops`: Vertically align some of the operators (like `*`) to the center position it is before or after a "center" operator (like `+`).
  - `center-op-trigger-plus-minus-l`: Plus (`+`) and Minus (`-`) will trigger other operator characters at left to be centered.
  - `center-op-trigger-plus-minus-r`: Plus (`+`) and Minus (`-`) will trigger other operator characters at right to be centered.
  - `center-op-trigger-equal-l`: Equal (`=`) will trigger other operator characters at left to be centered.
  - `center-op-trigger-equal-r`: Equal (`=`) will trigger other operator characters at right to be centered.
  - `center-op-trigger-bar-l`: Bars (`|`) will trigger other operator characters at left to be centered.
  - `center-op-trigger-bar-r`: Bars (`|`) will trigger other operator characters at right to be centered.
  - `center-op-trigger-angle-inside`: Less (`<`) and Greater (`>`) will trigger other operator characters at inside to be centered.
  - `center-op-trigger-angle-outside`: Less (`<`) and Greater (`>`) will trigger other operator characters at outside to be centered.
  - `center-op-influence-dot`: Treat dot (`.`) as operator and perform chained centering.
  - `center-op-influence-colon`: Treat colon (`:`) as operator and perform chained centering.
  - `arrow-l`: Enable ligation set that forms left-pointing arrows.
  - `arrow-r`: Enable ligation set that forms right-pointing arrows.
  - `arrow-lr`: Enable ligation set that forms dual-pointing arrows.
  - `counter-arrow-l`: Enable ligation that produces left-pointing counter-arrows.
  - `counter-arrow-r`: Enable ligation that produces right-pointing counter-arrows.
  - `trig`: Enable ligation for `<|`, `|>` , `<||`, and other bar-and-angle-bracket symbols.
  - `eqeqeq`: Enable special ligation for `===` with triple lines.
  - `eqeq`: Enable ligation for `==` and `===`.
  - `lteq`: Enable ligation for `<=` as less-than-or-equal sign.
  - `eqlt`: Enable ligation for `=<` as less-than-or-equal sign.
  - `gteq`: Enable ligation for `>=` as greater-than-or-equal sign.
  - `lteq-separate`: Display `<=` as separate shape.
  - `eqlt-separate`: Display `=<` as separate shape.
  - `gteq-separate`: Display `>=` as separate shape.
  - `exeqeqeq`: Enable special ligation for `!===` with triple lines.
  - `exeqeq`: Enable special ligation for `!==` with triple lines.
  - `eqexeq`: Enable special ligation for `=!=` with triple lines.
  - `eqexeq-dl`: Enable special ligation for `=!=` with double lines.
  - `exeq`: Enable ligation for `!=` and `!==`.
  - `tildeeq`: Enable ligation for `~=` as inequality.
  - `eqslasheq`: Enable special triple-line ligation for `=/=` as inequality.
  - `slasheq`: Enable ligation for `/=` and `=/=` as inequality.
  - `ltgt-ne`: Enable ligation for `<>` as inequality.
  - `ltgt-diamond`: Enable ligation for `<>` as diamond.
  - `ltgt-diamond-tag`: Enable ligation for `<>` as diamond-shaped empty HTML/XML tag.
  - `ltgt-slash-tag`: Enable ligation for `</`, `/>` and `</>`.
  - `brst`: Center asterisk in `(*` and `*)`.
  - `slash-asterisk`: Shift asterisk in `/*` and `*/`.
  - `kern-dotty`: Move connecting dotty punctuations closer, like for `::`, `:::` and `...`.
  - `kern-bars`: Move consecutive bars closer, like for `||`, `|||` and `//`.
  - `logic`: Enable ligation for `/\` and `\/`.
  - `llgg`: Enable ligation for `<<`, `>>` and other angle-bracket chaining.
  - `llggeq`: Enable ligation for `<<=`, `>>=` as shift operator.
  - `html-comment`: Enable ligation for `<!--` and `<!---`.
  - `colon-greater-as-colon-arrow`: Transform `:>` into `:` and a narrow arrow.
  - `brace-bar`: Enable ligation for `{|` and `|}`.
  - `brack-bar`: Enable ligation for `[|` and `|]`.
  - `tilde-tilde`: Make 2 or more contiguous ASCII tildes (like `~~`, `~~~` and `~~~~`) connected as a wave line.
  - `tilde-tilde-tilde`: Make 3 or more contiguous ASCII tildes (like `~~~` and `~~~~`) connected as a wave line.
  - `minus-minus`: Make 2 or more contiguous hyphen-minuses (like `--`, `---` and `----`) connected as a straight solid line.
  - `minus-minus-minus`: Make 3 or more contiguous hyphen-minuses (like `---` and `----`) connected as a straight solid line.
  - `plus-plus`: Make 2 or more contiguous plus signs (like `++`, `+++` and `++++`) connected..
  - `plus-plus-plus`: Make 3 or more contiguous plus signs (like `+++` and `++++`) connected..
  - `underscore-underscore`: Make 2 or more contiguous underscores (like `__`, `___` and `____`) connected.
  - `underscore-underscore-underscore`: Make 3 or more contiguous underscores (like `___` and `____`) connected.
  - `hash-hash`: Make 2 or more contiguous hash signs (number signs) (like `##`, `###` and `####`) connected.
  - `hash-hash-hash`: Make 3 or more contiguous hash signs (number signs) (like `##` and `###`) connected.

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
  - `ss18`: Set character variant to “Input Mono Style”.
  - `ss20`: Set character variant to “Curly Style”.
  - Other build plans’ configuration, using `inherits = "buildPlans.<Plan name>"`.

<!-- END Section-Stylistic-Sets -->

<!-- BEGIN Section-Cherry-Picking-Styles -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

* `design`, `upright`, `italic`, and `oblique`: Optional, Dictionary, defines styles for individual characters. The choices are organized in key-value pairs, assigning a variant to a character group. Alternatively, you could assign numbers to `cv##` tags, like what you did when using OpenType in CSS. Assignments under `design` will be applied to all the slopes, and `upright`, `italic`, and `oblique` will apply to corresponded slopes. 

  In addition, style selector for default digit form also uses these dictionaries.
  
  The valid combinations include:

  - Default digit form
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="348"><img src="../images/cv-digit-form-lining.light.svg#gh-light-mode-only" width=320/><img src="../images/cv-digit-form-lining.dark.svg#gh-dark-mode-only" width=320/></td><td><code>digit-form = 'lining'</code></td></tr>
    <tr><td>Lining (default)</td></tr>
    <tr><td rowspan="2" width="348"><img src="../images/cv-digit-form-old-style.light.svg#gh-light-mode-only" width=320/><img src="../images/cv-digit-form-old-style.dark.svg#gh-dark-mode-only" width=320/></td><td><code>digit-form = 'old-style'</code></td></tr>
    <tr><td>Old-style</td></tr>
    </table></details>
  - APL form
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="284"><img src="../images/cv-apl-form-none.light.svg#gh-light-mode-only" width=256/><img src="../images/cv-apl-form-none.dark.svg#gh-dark-mode-only" width=256/></td><td><code>apl-form = 'none'</code></td></tr>
    <tr><td>Disable APL-specific forms (default)</td></tr>
    <tr><td rowspan="2" width="284"><img src="../images/cv-apl-form-enable.light.svg#gh-light-mode-only" width=256/><img src="../images/cv-apl-form-enable.dark.svg#gh-dark-mode-only" width=256/></td><td><code>apl-form = 'enable'</code></td></tr>
    <tr><td>Enable harmonized alternate forms APL operators</td></tr>
    </table></details>
  - Styles for `1`
    <details><summary>9 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-line.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-line.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'line'</code>, <code>cv01 = 1</code></td></tr>
    <tr><td><code>1</code> drawn just like a straight line</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-no-base.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-no-base.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'no-base'</code>, <code>cv01 = 2</code></td></tr>
    <tr><td><code>1</code> without bottom serif (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-base.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-base.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'base'</code>, <code>cv01 = 3</code></td></tr>
    <tr><td><code>1</code> with bottom serif (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-no-base-long-top-serif.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-no-base-long-top-serif.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'no-base-long-top-serif'</code>, <code>cv01 = 4</code></td></tr>
    <tr><td><code>1</code> without bottom serif and with a long top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-base-long-top-serif.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-base-long-top-serif.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'base-long-top-serif'</code>, <code>cv01 = 5</code></td></tr>
    <tr><td><code>1</code> with bottom serif and a long top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-no-base-flat-top-serif.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-no-base-flat-top-serif.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'no-base-flat-top-serif'</code>, <code>cv01 = 6</code></td></tr>
    <tr><td><code>1</code> without bottom serif and with a flat top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-base-flat-top-serif.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-base-flat-top-serif.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'base-flat-top-serif'</code>, <code>cv01 = 7</code></td></tr>
    <tr><td><code>1</code> with bottom serif and a flat top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-no-base-top-cut.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-no-base-top-cut.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'no-base-top-cut'</code>, <code>cv01 = 8</code></td></tr>
    <tr><td><code>1</code> without bottom serif and with a diagonal cut at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-one-base-top-cut.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-one-base-top-cut.dark.svg#gh-dark-mode-only" width=32/></td><td><code>one = 'base-top-cut'</code>, <code>cv01 = 9</code></td></tr>
    <tr><td><code>1</code> with bottom serif and a diagonal cut at top</td></tr>
    </table></details>
  - Styles for `2`
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-two-straight-neck-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-two-straight-neck-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>two = 'straight-neck-serifless'</code>, <code>cv02 = 1</code></td></tr>
    <tr><td><code>2</code> with straight neck; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-two-straight-neck-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-two-straight-neck-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>two = 'straight-neck-serifed'</code>, <code>cv02 = 2</code></td></tr>
    <tr><td><code>2</code> with straight neck, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-two-curly-neck-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-two-curly-neck-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>two = 'curly-neck-serifless'</code>, <code>cv02 = 3</code></td></tr>
    <tr><td><code>2</code> with curly neck; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-two-curly-neck-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-two-curly-neck-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>two = 'curly-neck-serifed'</code>, <code>cv02 = 4</code></td></tr>
    <tr><td><code>2</code> with curly neck, and serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `3`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-three-flat-top-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-three-flat-top-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>three = 'flat-top-serifless'</code>, <code>cv03 = 1</code></td></tr>
    <tr><td><code>3</code> with flat top (Like Museo Sans / Montserrat); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-three-flat-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-three-flat-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>three = 'flat-top-serifed'</code>, <code>cv03 = 2</code></td></tr>
    <tr><td><code>3</code> with flat top (Like Museo Sans / Montserrat), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-three-two-arcs.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-three-two-arcs.dark.svg#gh-dark-mode-only" width=32/></td><td><code>three = 'two-arcs'</code>, <code>cv03 = 3</code></td></tr>
    <tr><td><code>3</code> with arched top (default)</td></tr>
    </table></details>
  - Styles for `4`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-closed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-closed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'closed-serifless'</code>, <code>cv04 = 1</code></td></tr>
    <tr><td><code>4</code> with closed contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-closed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-closed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'closed-serifed'</code>, <code>cv04 = 2</code></td></tr>
    <tr><td><code>4</code> with closed contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-closed-non-crossing-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-closed-non-crossing-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'closed-non-crossing-serifless'</code>, <code>cv04 = 3</code></td></tr>
    <tr><td><code>4</code> with closed contour, and horizontal bar that does not overflow the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-closed-non-crossing-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-closed-non-crossing-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'closed-non-crossing-serifed'</code>, <code>cv04 = 4</code></td></tr>
    <tr><td><code>4</code> with closed contour, horizontal bar that does not overflow the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-semi-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-semi-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'semi-open-serifless'</code>, <code>cv04 = 5</code></td></tr>
    <tr><td><code>4</code> with semi-open contour; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-semi-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-semi-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'semi-open-serifed'</code>, <code>cv04 = 6</code></td></tr>
    <tr><td><code>4</code> with semi-open contour, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-semi-open-non-crossing-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-semi-open-non-crossing-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'semi-open-non-crossing-serifless'</code>, <code>cv04 = 7</code></td></tr>
    <tr><td><code>4</code> with semi-open contour, and horizontal bar that does not overflow the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-semi-open-non-crossing-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-semi-open-non-crossing-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'semi-open-non-crossing-serifed'</code>, <code>cv04 = 8</code></td></tr>
    <tr><td><code>4</code> with semi-open contour, horizontal bar that does not overflow the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'open-serifless'</code>, <code>cv04 = 9</code></td></tr>
    <tr><td><code>4</code> with open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'open-serifed'</code>, <code>cv04 = 10</code></td></tr>
    <tr><td><code>4</code> with open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-open-non-crossing-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-open-non-crossing-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'open-non-crossing-serifless'</code>, <code>cv04 = 11</code></td></tr>
    <tr><td><code>4</code> with open contour, and horizontal bar that does not overflow the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-four-open-non-crossing-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-four-open-non-crossing-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>four = 'open-non-crossing-serifed'</code>, <code>cv04 = 12</code></td></tr>
    <tr><td><code>4</code> with open contour, horizontal bar that does not overflow the vertical bar, and serifs</td></tr>
    </table></details>
  - Styles for `5`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-upright-arched-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-upright-arched-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'upright-arched-serifless'</code>, <code>cv05 = 1</code></td></tr>
    <tr><td><code>5</code> with upright upper-left bar, and arched middle part; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-upright-arched-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-upright-arched-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'upright-arched-serifed'</code>, <code>cv05 = 2</code></td></tr>
    <tr><td><code>5</code> with upright upper-left bar, arched middle part, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-upright-flat-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-upright-flat-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'upright-flat-serifless'</code>, <code>cv05 = 3</code></td></tr>
    <tr><td><code>5</code> with upright upper-left bar, and flat middle part; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-upright-flat-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-upright-flat-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'upright-flat-serifed'</code>, <code>cv05 = 4</code></td></tr>
    <tr><td><code>5</code> with upright upper-left bar, flat middle part, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-oblique-arched-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-oblique-arched-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'oblique-arched-serifless'</code>, <code>cv05 = 5</code></td></tr>
    <tr><td><code>5</code> with arched middle part; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-oblique-arched-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-oblique-arched-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'oblique-arched-serifed'</code>, <code>cv05 = 6</code></td></tr>
    <tr><td><code>5</code> with arched middle part, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-oblique-flat-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-oblique-flat-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'oblique-flat-serifless'</code>, <code>cv05 = 7</code></td></tr>
    <tr><td><code>5</code> with flat middle part; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-five-oblique-flat-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-five-oblique-flat-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>five = 'oblique-flat-serifed'</code>, <code>cv05 = 8</code></td></tr>
    <tr><td><code>5</code> with flat middle part, and serifs</td></tr>
    </table></details>
  - Styles for `6`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-six-closed-contour.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-six-closed-contour.dark.svg#gh-dark-mode-only" width=32/></td><td><code>six = 'closed-contour'</code>, <code>cv06 = 1</code></td></tr>
    <tr><td><code>6</code> with a more closed contour</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-six-open-contour.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-six-open-contour.dark.svg#gh-dark-mode-only" width=32/></td><td><code>six = 'open-contour'</code>, <code>cv06 = 2</code></td></tr>
    <tr><td><code>6</code> with a more open contour</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-six-straight-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-six-straight-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>six = 'straight-bar'</code>, <code>cv06 = 3</code></td></tr>
    <tr><td><code>6</code> with a straight bar (default)</td></tr>
    </table></details>
  - Styles for `7`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'straight-serifless'</code>, <code>cv07 = 1</code></td></tr>
    <tr><td><code>7</code> with straight stem; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-straight-serifless-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-straight-serifless-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'straight-serifless-crossbar'</code>, <code>cv07 = 2</code></td></tr>
    <tr><td><code>7</code> with straight stem, and crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'straight-serifed'</code>, <code>cv07 = 3</code></td></tr>
    <tr><td><code>7</code> with straight stem, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-straight-serifed-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-straight-serifed-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'straight-serifed-crossbar'</code>, <code>cv07 = 4</code></td></tr>
    <tr><td><code>7</code> with straight stem, serifs, and crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-bend-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-bend-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'bend-serifless'</code>, <code>cv07 = 5</code></td></tr>
    <tr><td><code>7</code> with bend stem; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-bend-serifless-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-bend-serifless-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'bend-serifless-crossbar'</code>, <code>cv07 = 6</code></td></tr>
    <tr><td><code>7</code> with bend stem, and crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-bend-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-bend-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'bend-serifed'</code>, <code>cv07 = 7</code></td></tr>
    <tr><td><code>7</code> with bend stem, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-bend-serifed-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-bend-serifed-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'bend-serifed-crossbar'</code>, <code>cv07 = 8</code></td></tr>
    <tr><td><code>7</code> with bend stem, serifs, and crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'curly-serifless'</code>, <code>cv07 = 9</code></td></tr>
    <tr><td><code>7</code> with curly stem; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-curly-serifless-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-curly-serifless-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'curly-serifless-crossbar'</code>, <code>cv07 = 10</code></td></tr>
    <tr><td><code>7</code> with curly stem, and crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'curly-serifed'</code>, <code>cv07 = 11</code></td></tr>
    <tr><td><code>7</code> with curly stem, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-seven-curly-serifed-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-seven-curly-serifed-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>seven = 'curly-serifed-crossbar'</code>, <code>cv07 = 12</code></td></tr>
    <tr><td><code>7</code> with curly stem, serifs, and crossbar</td></tr>
    </table></details>
  - Styles for `8`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eight-crossing.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eight-crossing.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eight = 'crossing'</code>, <code>cv08 = 1</code></td></tr>
    <tr><td><code>8</code> with crossing middle part (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eight-two-circles.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eight-two-circles.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eight = 'two-circles'</code>, <code>cv08 = 2</code></td></tr>
    <tr><td><code>8</code> looks like two circles joined together</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eight-crossing-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eight-crossing-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eight = 'crossing-asymmetric'</code>, <code>cv08 = 3</code></td></tr>
    <tr><td><code>8</code> looks asymmetric crossing middle part</td></tr>
    </table></details>
  - Styles for `9`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-nine-closed-contour.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-nine-closed-contour.dark.svg#gh-dark-mode-only" width=32/></td><td><code>nine = 'closed-contour'</code>, <code>cv09 = 1</code></td></tr>
    <tr><td><code>9</code> with a more closed contour</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-nine-open-contour.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-nine-open-contour.dark.svg#gh-dark-mode-only" width=32/></td><td><code>nine = 'open-contour'</code>, <code>cv09 = 2</code></td></tr>
    <tr><td><code>9</code> with a more open contour</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-nine-straight-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-nine-straight-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>nine = 'straight-bar'</code>, <code>cv09 = 3</code></td></tr>
    <tr><td><code>9</code> with a straight bar (default)</td></tr>
    </table></details>
  - Styles for `0`
    <details><summary>54 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-unslashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-unslashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'unslashed'</code>, <code>cv10 = 1</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape; without slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'slashed'</code>, <code>cv10 = 2</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and slash (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-reverse-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-reverse-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'reverse-slashed'</code>, <code>cv10 = 3</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and revese slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-tall-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-tall-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'tall-slashed'</code>, <code>cv10 = 4</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and tall slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-tall-reverse-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-tall-reverse-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'tall-reverse-slashed'</code>, <code>cv10 = 5</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and tall reverse slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'dotted'</code>, <code>cv10 = 6</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and center dot</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-long-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-long-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'long-dotted'</code>, <code>cv10 = 7</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and long center dot</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-slashed-split.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-slashed-split.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'slashed-split'</code>, <code>cv10 = 8</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and slash separated from the outline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-reverse-slashed-split.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-reverse-slashed-split.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'reverse-slashed-split'</code>, <code>cv10 = 9</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and reverse slash separated from the outline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-broken-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-broken-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'broken-slash'</code>, <code>cv10 = 10</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and slash broken in the middle (like in Fixedsys)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-broken-reverse-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-broken-reverse-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'broken-reverse-slash'</code>, <code>cv10 = 11</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and reverse slash broken in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-broken-vertical-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-broken-vertical-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'broken-vertical-bar'</code>, <code>cv10 = 12</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and vertical bar broken in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'slashed-cutout'</code>, <code>cv10 = 13</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and a slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-reverse-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-reverse-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'reverse-slashed-cutout'</code>, <code>cv10 = 14</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and a reverse-slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-tall-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-tall-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'tall-slashed-cutout'</code>, <code>cv10 = 15</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and a taller slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-tall-reverse-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-tall-reverse-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'tall-reverse-slashed-cutout'</code>, <code>cv10 = 16</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and a taller reverse-slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-vertical-bar-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-vertical-bar-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'vertical-bar-cutout'</code>, <code>cv10 = 17</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and a vertical bar cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-top-right-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-top-right-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'top-right-cutout'</code>, <code>cv10 = 18</code></td></tr>
    <tr><td>Zero (<code>0</code>) with standard body shape, and the top-right bit cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-unslashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-unslashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-unslashed'</code>, <code>cv10 = 19</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape; without slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-slashed'</code>, <code>cv10 = 20</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-reverse-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-reverse-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-reverse-slashed'</code>, <code>cv10 = 21</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and revese slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-tall-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-tall-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-tall-slashed'</code>, <code>cv10 = 22</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and tall slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-tall-reverse-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-tall-reverse-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-tall-reverse-slashed'</code>, <code>cv10 = 23</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and tall reverse slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-dotted'</code>, <code>cv10 = 24</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and center dot</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-long-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-long-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-long-dotted'</code>, <code>cv10 = 25</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and long center dot</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-slashed-split.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-slashed-split.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-slashed-split'</code>, <code>cv10 = 26</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and slash separated from the outline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-reverse-slashed-split.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-reverse-slashed-split.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-reverse-slashed-split'</code>, <code>cv10 = 27</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and reverse slash separated from the outline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-broken-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-broken-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-broken-slash'</code>, <code>cv10 = 28</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and slash broken in the middle (like in Fixedsys)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-broken-reverse-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-broken-reverse-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-broken-reverse-slash'</code>, <code>cv10 = 29</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and reverse slash broken in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-broken-vertical-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-broken-vertical-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-broken-vertical-bar'</code>, <code>cv10 = 30</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and vertical bar broken in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-slashed-cutout'</code>, <code>cv10 = 31</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and a slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-reverse-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-reverse-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-reverse-slashed-cutout'</code>, <code>cv10 = 32</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and a reverse-slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-tall-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-tall-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-tall-slashed-cutout'</code>, <code>cv10 = 33</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and a taller slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-tall-reverse-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-tall-reverse-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-tall-reverse-slashed-cutout'</code>, <code>cv10 = 34</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and a taller reverse-slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-vertical-bar-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-vertical-bar-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-vertical-bar-cutout'</code>, <code>cv10 = 35</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and a vertical bar cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-oval-top-right-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-oval-top-right-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'oval-top-right-cutout'</code>, <code>cv10 = 36</code></td></tr>
    <tr><td>Zero (<code>0</code>) with oval body shape, and the top-right bit cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-unslashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-unslashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-unslashed'</code>, <code>cv10 = 37</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape; without slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-slashed'</code>, <code>cv10 = 38</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-reverse-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-reverse-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-reverse-slashed'</code>, <code>cv10 = 39</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and revese slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-tall-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-tall-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-tall-slashed'</code>, <code>cv10 = 40</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and tall slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-tall-reverse-slashed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-tall-reverse-slashed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-tall-reverse-slashed'</code>, <code>cv10 = 41</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and tall reverse slash</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-dotted'</code>, <code>cv10 = 42</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and center dot</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-long-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-long-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-long-dotted'</code>, <code>cv10 = 43</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and long center dot</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-slashed-split.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-slashed-split.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-slashed-split'</code>, <code>cv10 = 44</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and slash separated from the outline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-reverse-slashed-split.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-reverse-slashed-split.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-reverse-slashed-split'</code>, <code>cv10 = 45</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and reverse slash separated from the outline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-broken-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-broken-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-broken-slash'</code>, <code>cv10 = 46</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and slash broken in the middle (like in Fixedsys)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-broken-reverse-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-broken-reverse-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-broken-reverse-slash'</code>, <code>cv10 = 47</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and reverse slash broken in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-broken-vertical-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-broken-vertical-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-broken-vertical-bar'</code>, <code>cv10 = 48</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and vertical bar broken in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-slashed-cutout'</code>, <code>cv10 = 49</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and a slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-reverse-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-reverse-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-reverse-slashed-cutout'</code>, <code>cv10 = 50</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and a reverse-slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-tall-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-tall-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-tall-slashed-cutout'</code>, <code>cv10 = 51</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and a taller slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-tall-reverse-slashed-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-tall-reverse-slashed-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-tall-reverse-slashed-cutout'</code>, <code>cv10 = 52</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and a taller reverse-slash cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-vertical-bar-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-vertical-bar-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-vertical-bar-cutout'</code>, <code>cv10 = 53</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and a vertical bar cutout</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-zero-diamond-top-right-cutout.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-zero-diamond-top-right-cutout.dark.svg#gh-dark-mode-only" width=32/></td><td><code>zero = 'diamond-top-right-cutout'</code>, <code>cv10 = 54</code></td></tr>
    <tr><td>Zero (<code>0</code>) with diamond body shape, and the top-right bit cutout</td></tr>
    </table></details>
  - Styles for `A`
    <details><summary>10 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'straight-serifless'</code>, <code>cv11 = 1</code></td></tr>
    <tr><td><code>A</code> with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-straight-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-straight-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'straight-top-serifed'</code>, <code>cv11 = 2</code></td></tr>
    <tr><td><code>A</code> with straight shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-straight-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-straight-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'straight-base-serifed'</code>, <code>cv11 = 3</code></td></tr>
    <tr><td><code>A</code> with straight shape, and serifs at base (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-straight-tri-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-straight-tri-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'straight-tri-serifed'</code>, <code>cv11 = 4</code></td></tr>
    <tr><td><code>A</code> with straight shape, and serifs at both top and base</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'curly-serifless'</code>, <code>cv11 = 5</code></td></tr>
    <tr><td><code>A</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-curly-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-curly-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'curly-top-serifed'</code>, <code>cv11 = 6</code></td></tr>
    <tr><td><code>A</code> with curly shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-curly-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-curly-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'curly-base-serifed'</code>, <code>cv11 = 7</code></td></tr>
    <tr><td><code>A</code> with curly shape, and serifs at base</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-curly-tri-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-curly-tri-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'curly-tri-serifed'</code>, <code>cv11 = 8</code></td></tr>
    <tr><td><code>A</code> with curly shape, and serifs at both top and base</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-round-top-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-round-top-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'round-top-serifless'</code>, <code>cv11 = 9</code></td></tr>
    <tr><td><code>A</code> with round top; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-a-round-top-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-a-round-top-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-a = 'round-top-base-serifed'</code>, <code>cv11 = 10</code></td></tr>
    <tr><td><code>A</code> with round top, and serifs at base</td></tr>
    </table></details>
  - Styles for `B`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-standard-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-standard-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'standard-serifless'</code>, <code>cv12 = 1</code></td></tr>
    <tr><td><code>B</code> with mostly symmetric shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-standard-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-standard-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'standard-unilateral-serifed'</code>, <code>cv12 = 2</code></td></tr>
    <tr><td><code>B</code> with mostly symmetric shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-standard-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-standard-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'standard-bilateral-serifed'</code>, <code>cv12 = 3</code></td></tr>
    <tr><td><code>B</code> with mostly symmetric shape, and serifs at both top and bottom (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-standard-interrupted-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-standard-interrupted-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'standard-interrupted-serifless'</code>, <code>cv12 = 4</code></td></tr>
    <tr><td><code>B</code> with mostly symmetric shape, and interrupted middle bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-standard-interrupted-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-standard-interrupted-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'standard-interrupted-unilateral-serifed'</code>, <code>cv12 = 5</code></td></tr>
    <tr><td><code>B</code> with mostly symmetric shape, interrupted middle bar, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-standard-interrupted-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-standard-interrupted-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'standard-interrupted-bilateral-serifed'</code>, <code>cv12 = 6</code></td></tr>
    <tr><td><code>B</code> with mostly symmetric shape, interrupted middle bar, and serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-more-asymmetric-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-more-asymmetric-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'more-asymmetric-serifless'</code>, <code>cv12 = 7</code></td></tr>
    <tr><td><code>B</code> with more asymmetric shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-more-asymmetric-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-more-asymmetric-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'more-asymmetric-unilateral-serifed'</code>, <code>cv12 = 8</code></td></tr>
    <tr><td><code>B</code> with more asymmetric shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-more-asymmetric-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-more-asymmetric-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'more-asymmetric-bilateral-serifed'</code>, <code>cv12 = 9</code></td></tr>
    <tr><td><code>B</code> with more asymmetric shape, and serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-more-asymmetric-interrupted-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-more-asymmetric-interrupted-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'more-asymmetric-interrupted-serifless'</code>, <code>cv12 = 10</code></td></tr>
    <tr><td><code>B</code> with more asymmetric shape, and interrupted middle bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-more-asymmetric-interrupted-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-more-asymmetric-interrupted-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'more-asymmetric-interrupted-unilateral-serifed'</code>, <code>cv12 = 11</code></td></tr>
    <tr><td><code>B</code> with more asymmetric shape, interrupted middle bar, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-b-more-asymmetric-interrupted-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-b-more-asymmetric-interrupted-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-b = 'more-asymmetric-interrupted-bilateral-serifed'</code>, <code>cv12 = 12</code></td></tr>
    <tr><td><code>B</code> with more asymmetric shape, interrupted middle bar, and serifs at both top and bottom</td></tr>
    </table></details>
  - Styles for `C`
    <details><summary>5 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-c-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-c-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-c = 'serifless'</code>, <code>cv13 = 1</code></td></tr>
    <tr><td>Serifless <code>C</code> (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-c-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-c-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-c = 'unilateral-serifed'</code>, <code>cv13 = 2</code></td></tr>
    <tr><td><code>C</code> with serif at top (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-c-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-c-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-c = 'bilateral-serifed'</code>, <code>cv13 = 3</code></td></tr>
    <tr><td><code>C</code> with serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-c-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-c-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-c = 'unilateral-inward-serifed'</code>, <code>cv13 = 4</code></td></tr>
    <tr><td><code>C</code> with inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-c-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-c-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-c = 'bilateral-inward-serifed'</code>, <code>cv13 = 5</code></td></tr>
    <tr><td><code>C</code> with inward serif at both top and bottom</td></tr>
    </table></details>
  - Styles for `D`
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-d-standard-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-d-standard-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-d = 'standard-serifless'</code>, <code>cv14 = 1</code></td></tr>
    <tr><td><code>D</code> with standard shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-d-standard-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-d-standard-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-d = 'standard-unilateral-serifed'</code>, <code>cv14 = 2</code></td></tr>
    <tr><td><code>D</code> with standard shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-d-standard-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-d-standard-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-d = 'standard-bilateral-serifed'</code>, <code>cv14 = 3</code></td></tr>
    <tr><td><code>D</code> with standard shape, and serifs at both top and bottom (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-d-more-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-d-more-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-d = 'more-rounded-serifless'</code>, <code>cv14 = 4</code></td></tr>
    <tr><td><code>D</code> with more rounded shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-d-more-rounded-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-d-more-rounded-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-d = 'more-rounded-unilateral-serifed'</code>, <code>cv14 = 5</code></td></tr>
    <tr><td><code>D</code> with more rounded shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-d-more-rounded-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-d-more-rounded-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-d = 'more-rounded-bilateral-serifed'</code>, <code>cv14 = 6</code></td></tr>
    <tr><td><code>D</code> with more rounded shape, and serifs at both top and bottom</td></tr>
    </table></details>
  - Styles for `E`
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-e-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-e-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-e = 'serifless'</code>, <code>cv15 = 1</code></td></tr>
    <tr><td>E without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-e-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-e-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-e = 'top-left-serifed'</code>, <code>cv15 = 2</code></td></tr>
    <tr><td>E with serif only at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-e-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-e-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-e = 'serifed'</code>, <code>cv15 = 3</code></td></tr>
    <tr><td>E with serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-e-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-e-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-e = 'serifed-capped'</code>, <code>cv15 = 4</code></td></tr>
    <tr><td>E with serifs and capped middle bar</td></tr>
    </table></details>
  - Styles for `F`
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-f-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-f-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-f = 'serifless'</code>, <code>cv16 = 1</code></td></tr>
    <tr><td>F without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-f-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-f-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-f = 'top-left-serifed'</code>, <code>cv16 = 2</code></td></tr>
    <tr><td>F with serif only at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-f-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-f-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-f = 'serifed'</code>, <code>cv16 = 3</code></td></tr>
    <tr><td>F with serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-f-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-f-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-f = 'serifed-capped'</code>, <code>cv16 = 4</code></td></tr>
    <tr><td>F with serifs and capped middle bar</td></tr>
    </table></details>
  - Styles for `G`
    <details><summary>27 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-serifless-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-serifless-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-serifless-hookless'</code>, <code>cv17 = 1</code></td></tr>
    <tr><td><code>G</code> with toothed body; without top serif, and hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-serifless-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-serifless-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-serifless-hooked'</code>, <code>cv17 = 2</code></td></tr>
    <tr><td><code>G</code> with toothed body, and inward hook terminal; without top serif (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-serifless-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-serifless-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-serifless-capped'</code>, <code>cv17 = 3</code></td></tr>
    <tr><td><code>G</code> with toothed body, and capped terminal; without top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-serifed-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-serifed-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-serifed-hookless'</code>, <code>cv17 = 4</code></td></tr>
    <tr><td><code>G</code> with toothed body, and top serif; without hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-serifed-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-serifed-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-serifed-hooked'</code>, <code>cv17 = 5</code></td></tr>
    <tr><td><code>G</code> with toothed body, top serif, and inward hook terminal (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-serifed-capped'</code>, <code>cv17 = 6</code></td></tr>
    <tr><td><code>G</code> with toothed body, top serif, and capped terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-inward-serifed-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-inward-serifed-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-inward-serifed-hookless'</code>, <code>cv17 = 7</code></td></tr>
    <tr><td><code>G</code> with toothed body, and inward top serif; without hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-inward-serifed-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-inward-serifed-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-inward-serifed-hooked'</code>, <code>cv17 = 8</code></td></tr>
    <tr><td><code>G</code> with toothed body, inward top serif, and inward hook terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothed-inward-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothed-inward-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothed-inward-serifed-capped'</code>, <code>cv17 = 9</code></td></tr>
    <tr><td><code>G</code> with toothed body, inward top serif, and capped terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-serifless-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-serifless-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-serifless-hookless'</code>, <code>cv17 = 10</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body; without top serif, and hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-serifless-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-serifless-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-serifless-hooked'</code>, <code>cv17 = 11</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, and inward hook terminal; without top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-serifless-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-serifless-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-serifless-capped'</code>, <code>cv17 = 12</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, and capped terminal; without top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-serifed-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-serifed-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-serifed-hookless'</code>, <code>cv17 = 13</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, and top serif; without hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-serifed-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-serifed-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-serifed-hooked'</code>, <code>cv17 = 14</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, top serif, and inward hook terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-serifed-capped'</code>, <code>cv17 = 15</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, top serif, and capped terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-inward-serifed-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-inward-serifed-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-inward-serifed-hookless'</code>, <code>cv17 = 16</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, and inward top serif; without hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-inward-serifed-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-inward-serifed-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-inward-serifed-hooked'</code>, <code>cv17 = 17</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, inward top serif, and inward hook terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-corner-inward-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-corner-inward-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-corner-inward-serifed-capped'</code>, <code>cv17 = 18</code></td></tr>
    <tr><td><code>G</code> with tootheless (corner) body, inward top serif, and capped terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-serifless-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-serifless-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-serifless-hookless'</code>, <code>cv17 = 19</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body; without top serif, and hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-serifless-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-serifless-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-serifless-hooked'</code>, <code>cv17 = 20</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, and inward hook terminal; without top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-serifless-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-serifless-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-serifless-capped'</code>, <code>cv17 = 21</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, and capped terminal; without top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-serifed-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-serifed-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-serifed-hookless'</code>, <code>cv17 = 22</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, and top serif; without hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-serifed-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-serifed-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-serifed-hooked'</code>, <code>cv17 = 23</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, top serif, and inward hook terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-serifed-capped'</code>, <code>cv17 = 24</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, top serif, and capped terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-inward-serifed-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-inward-serifed-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-inward-serifed-hookless'</code>, <code>cv17 = 25</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, and inward top serif; without hooks</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-inward-serifed-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-inward-serifed-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-inward-serifed-hooked'</code>, <code>cv17 = 26</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, inward top serif, and inward hook terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-g-toothless-rounded-inward-serifed-capped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-g-toothless-rounded-inward-serifed-capped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-g = 'toothless-rounded-inward-serifed-capped'</code>, <code>cv17 = 27</code></td></tr>
    <tr><td><code>G</code> with tootheless (rounded) body, inward top serif, and capped terminal</td></tr>
    </table></details>
  - Styles for `H`
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-h-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-h-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-h = 'serifless'</code>, <code>cv18 = 1</code></td></tr>
    <tr><td>H without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-h-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-h-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-h = 'top-left-serifed'</code>, <code>cv18 = 2</code></td></tr>
    <tr><td>H with serif only at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-h-top-left-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-h-top-left-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-h = 'top-left-bottom-right-serifed'</code>, <code>cv18 = 3</code></td></tr>
    <tr><td>H with serif only at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-h-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-h-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-h = 'serifed'</code>, <code>cv18 = 4</code></td></tr>
    <tr><td>H with serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `I`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-i-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-i-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-i = 'serifless'</code>, <code>cv19 = 1</code></td></tr>
    <tr><td>I without serifs, like a straight bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-i-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-i-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-i = 'serifed'</code>, <code>cv19 = 2</code></td></tr>
    <tr><td>I with standard (long) serifs (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-i-short-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-i-short-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-i = 'short-serifed'</code>, <code>cv19 = 3</code></td></tr>
    <tr><td>I with short serifs</td></tr>
    </table></details>
  - Styles for `J`
    <details><summary>14 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'serifless'</code>, <code>cv20 = 1</code></td></tr>
    <tr><td><code>J</code> without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'serifed'</code>, <code>cv20 = 2</code></td></tr>
    <tr><td><code>J</code> with serifs (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-serifed-both-sides.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-serifed-both-sides.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'serifed-both-sides'</code>, <code>cv20 = 3</code></td></tr>
    <tr><td><code>J</code> with serifs at both sides (asymmetric)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-serifed-symmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-serifed-symmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'serifed-symmetric'</code>, <code>cv20 = 4</code></td></tr>
    <tr><td><code>J</code> with serifs at both sides (symmetric)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'flat-hook-serifless'</code>, <code>cv20 = 5</code></td></tr>
    <tr><td><code>J</code> with flat hook; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'flat-hook-serifed'</code>, <code>cv20 = 6</code></td></tr>
    <tr><td><code>J</code> with flat hook, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-flat-hook-serifed-both-sides.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-flat-hook-serifed-both-sides.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'flat-hook-serifed-both-sides'</code>, <code>cv20 = 7</code></td></tr>
    <tr><td><code>J</code> with flat hook, and serifs at both sides (asymmetric)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-flat-hook-serifed-symmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-flat-hook-serifed-symmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'flat-hook-serifed-symmetric'</code>, <code>cv20 = 8</code></td></tr>
    <tr><td><code>J</code> with flat hook, and serifs at both sides (symmetric)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-descending-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-descending-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'descending-serifless'</code>, <code>cv20 = 9</code></td></tr>
    <tr><td><code>J</code> with descending height; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-descending-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-descending-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'descending-serifed'</code>, <code>cv20 = 10</code></td></tr>
    <tr><td><code>J</code> with descending height, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-descending-serifed-both-sides.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-descending-serifed-both-sides.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'descending-serifed-both-sides'</code>, <code>cv20 = 11</code></td></tr>
    <tr><td><code>J</code> with descending height, and serifs at both sides (asymmetric)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-descending-serifed-symmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-descending-serifed-symmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'descending-serifed-symmetric'</code>, <code>cv20 = 12</code></td></tr>
    <tr><td><code>J</code> with descending height, and serifs at both sides (symmetric)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-descending-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-descending-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'descending-flat-hook-serifless'</code>, <code>cv20 = 13</code></td></tr>
    <tr><td><code>J</code> with descending height, and flat hook; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-j-descending-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-j-descending-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-j = 'descending-flat-hook-serifed'</code>, <code>cv20 = 14</code></td></tr>
    <tr><td><code>J</code> with descending height, flat hook, and serifs</td></tr>
    </table></details>
  - Styles for `K`
    <details><summary>20 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'straight-serifless'</code>, <code>cv21 = 1</code></td></tr>
    <tr><td><code>K</code> with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'straight-top-left-serifed'</code>, <code>cv21 = 2</code></td></tr>
    <tr><td><code>K</code> with straight shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-straight-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-straight-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'straight-bottom-right-serifed'</code>, <code>cv21 = 3</code></td></tr>
    <tr><td><code>K</code> with straight shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-straight-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-straight-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'straight-top-left-and-bottom-right-serifed'</code>, <code>cv21 = 4</code></td></tr>
    <tr><td><code>K</code> with straight shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'straight-serifed'</code>, <code>cv21 = 5</code></td></tr>
    <tr><td><code>K</code> with straight shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'curly-serifless'</code>, <code>cv21 = 6</code></td></tr>
    <tr><td><code>K</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-curly-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-curly-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'curly-top-left-serifed'</code>, <code>cv21 = 7</code></td></tr>
    <tr><td><code>K</code> with curly shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-curly-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-curly-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'curly-bottom-right-serifed'</code>, <code>cv21 = 8</code></td></tr>
    <tr><td><code>K</code> with curly shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-curly-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-curly-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'curly-top-left-and-bottom-right-serifed'</code>, <code>cv21 = 9</code></td></tr>
    <tr><td><code>K</code> with curly shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'curly-serifed'</code>, <code>cv21 = 10</code></td></tr>
    <tr><td><code>K</code> with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-touching-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-touching-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-touching-serifless'</code>, <code>cv21 = 11</code></td></tr>
    <tr><td><code>K</code> with symmetric legs touching the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-touching-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-touching-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-touching-top-left-serifed'</code>, <code>cv21 = 12</code></td></tr>
    <tr><td><code>K</code> with symmetric legs touching the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-touching-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-touching-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-touching-bottom-right-serifed'</code>, <code>cv21 = 13</code></td></tr>
    <tr><td><code>K</code> with symmetric legs touching the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-touching-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-touching-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-touching-top-left-and-bottom-right-serifed'</code>, <code>cv21 = 14</code></td></tr>
    <tr><td><code>K</code> with symmetric legs touching the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-touching-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-touching-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-touching-serifed'</code>, <code>cv21 = 15</code></td></tr>
    <tr><td><code>K</code> with symmetric legs touching the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-connected-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-connected-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-connected-serifless'</code>, <code>cv21 = 16</code></td></tr>
    <tr><td><code>K</code> with symmetric legs connected to the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-connected-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-connected-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-connected-top-left-serifed'</code>, <code>cv21 = 17</code></td></tr>
    <tr><td><code>K</code> with symmetric legs connected to the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-connected-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-connected-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-connected-bottom-right-serifed'</code>, <code>cv21 = 18</code></td></tr>
    <tr><td><code>K</code> with symmetric legs connected to the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-connected-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-connected-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-connected-top-left-and-bottom-right-serifed'</code>, <code>cv21 = 19</code></td></tr>
    <tr><td><code>K</code> with symmetric legs connected to the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-k-symmetric-connected-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-k-symmetric-connected-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-k = 'symmetric-connected-serifed'</code>, <code>cv21 = 20</code></td></tr>
    <tr><td><code>K</code> with symmetric legs connected to the vertical bar, and serifs</td></tr>
    </table></details>
  - Styles for `L`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-l-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-l-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-l = 'serifless'</code>, <code>cv22 = 1</code></td></tr>
    <tr><td>Serifless <code>L</code> (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-l-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-l-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-l = 'motion-serifed'</code>, <code>cv22 = 2</code></td></tr>
    <tr><td>Standard <code>L</code> with motion serif at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-l-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-l-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-l = 'serifed'</code>, <code>cv22 = 3</code></td></tr>
    <tr><td><code>L</code> with serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `M`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-hanging-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-hanging-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'hanging-serifless'</code>, <code>cv23 = 1</code></td></tr>
    <tr><td><code>M</code> with middle being hanging off baseline; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-hanging-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-hanging-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'hanging-motion-serifed'</code>, <code>cv23 = 2</code></td></tr>
    <tr><td><code>M</code> with middle being hanging off baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-hanging-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-hanging-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'hanging-serifed'</code>, <code>cv23 = 3</code></td></tr>
    <tr><td><code>M</code> with middle being hanging off baseline, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-flat-bottom-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-flat-bottom-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'flat-bottom-serifless'</code>, <code>cv23 = 4</code></td></tr>
    <tr><td><code>M</code> with middle aligned to baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-flat-bottom-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-flat-bottom-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'flat-bottom-motion-serifed'</code>, <code>cv23 = 5</code></td></tr>
    <tr><td><code>M</code> with middle aligned to baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-flat-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-flat-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'flat-bottom-serifed'</code>, <code>cv23 = 6</code></td></tr>
    <tr><td><code>M</code> with middle aligned to baseline, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-slanted-sides-hanging-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-slanted-sides-hanging-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'slanted-sides-hanging-serifless'</code>, <code>cv23 = 7</code></td></tr>
    <tr><td><code>M</code> with slanted sides, and middle being hanging off baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-slanted-sides-hanging-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-slanted-sides-hanging-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'slanted-sides-hanging-motion-serifed'</code>, <code>cv23 = 8</code></td></tr>
    <tr><td><code>M</code> with slanted sides, middle being hanging off baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-slanted-sides-hanging-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-slanted-sides-hanging-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'slanted-sides-hanging-serifed'</code>, <code>cv23 = 9</code></td></tr>
    <tr><td><code>M</code> with slanted sides, middle being hanging off baseline, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-slanted-sides-flat-bottom-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-slanted-sides-flat-bottom-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'slanted-sides-flat-bottom-serifless'</code>, <code>cv23 = 10</code></td></tr>
    <tr><td><code>M</code> with slanted sides, and middle aligned to baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-slanted-sides-flat-bottom-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-slanted-sides-flat-bottom-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'slanted-sides-flat-bottom-motion-serifed'</code>, <code>cv23 = 11</code></td></tr>
    <tr><td><code>M</code> with slanted sides, middle aligned to baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-m-slanted-sides-flat-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-m-slanted-sides-flat-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-m = 'slanted-sides-flat-bottom-serifed'</code>, <code>cv23 = 12</code></td></tr>
    <tr><td><code>M</code> with slanted sides, middle aligned to baseline, and serifs</td></tr>
    </table></details>
  - Styles for `N`
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-n-standard-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-n-standard-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-n = 'standard-serifless'</code>, <code>cv24 = 1</code></td></tr>
    <tr><td><code>N</code> with standard shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-n-standard-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-n-standard-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-n = 'standard-motion-serifed'</code>, <code>cv24 = 2</code></td></tr>
    <tr><td><code>N</code> with standard shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-n-standard-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-n-standard-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-n = 'standard-serifed'</code>, <code>cv24 = 3</code></td></tr>
    <tr><td><code>N</code> with standard shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-n-asymmetric-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-n-asymmetric-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-n = 'asymmetric-serifless'</code>, <code>cv24 = 4</code></td></tr>
    <tr><td><code>N</code> with asymmetric shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-n-asymmetric-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-n-asymmetric-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-n = 'asymmetric-motion-serifed'</code>, <code>cv24 = 5</code></td></tr>
    <tr><td><code>N</code> with asymmetric shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-n-asymmetric-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-n-asymmetric-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-n = 'asymmetric-serifed'</code>, <code>cv24 = 6</code></td></tr>
    <tr><td><code>N</code> with asymmetric shape, and serifs</td></tr>
    </table></details>
  - Styles for `P`
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-p-closed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-p-closed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-p = 'closed-serifless'</code>, <code>cv25 = 1</code></td></tr>
    <tr><td><code>P</code> with closed shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-p-closed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-p-closed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-p = 'closed-motion-serifed'</code>, <code>cv25 = 2</code></td></tr>
    <tr><td><code>P</code> with closed shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-p-closed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-p-closed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-p = 'closed-serifed'</code>, <code>cv25 = 3</code></td></tr>
    <tr><td><code>P</code> with closed shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-p-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-p-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-p = 'open-serifless'</code>, <code>cv25 = 4</code></td></tr>
    <tr><td><code>P</code> with open shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-p-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-p-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-p = 'open-motion-serifed'</code>, <code>cv25 = 5</code></td></tr>
    <tr><td><code>P</code> with open shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-p-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-p-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-p = 'open-serifed'</code>, <code>cv25 = 6</code></td></tr>
    <tr><td><code>P</code> with open shape, and serifs</td></tr>
    </table></details>
  - Styles for `Q`
    <details><summary>10 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-curly-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-curly-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'curly-tailed'</code>, <code>cv26 = 1</code></td></tr>
    <tr><td><code>Q</code> with a curly tail (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-crossing-curly-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-crossing-curly-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'crossing-curly-tailed'</code>, <code>cv26 = 2</code></td></tr>
    <tr><td><code>Q</code> with a curly tail crossing the ring</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'straight'</code>, <code>cv26 = 3</code></td></tr>
    <tr><td><code>Q</code> with a straight tail like in the old versions</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-crossing.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-crossing.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'crossing'</code>, <code>cv26 = 4</code></td></tr>
    <tr><td><code>Q</code> with a tail crossing the ring</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-crossing-baseline.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-crossing-baseline.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'crossing-baseline'</code>, <code>cv26 = 5</code></td></tr>
    <tr><td><code>Q</code> with a tail above baseline crossing the ring</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-vertical-crossing.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-vertical-crossing.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'vertical-crossing'</code>, <code>cv26 = 6</code></td></tr>
    <tr><td><code>Q</code> with a vertical tail crossing the ring</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-horizontal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-horizontal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'horizontal-tailed'</code>, <code>cv26 = 7</code></td></tr>
    <tr><td><code>Q</code> with a horizontal tail, like Univers</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-detached-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-detached-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'detached-tailed'</code>, <code>cv26 = 8</code></td></tr>
    <tr><td><code>Q</code> with a oblique tail detached</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-detached-bend-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-detached-bend-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'detached-bend-tailed'</code>, <code>cv26 = 9</code></td></tr>
    <tr><td><code>Q</code> with a bend tail detached</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-q-open-swash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-q-open-swash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-q = 'open-swash'</code>, <code>cv26 = 10</code></td></tr>
    <tr><td><code>Q</code> with open contour and swash-y shape</td></tr>
    </table></details>
  - Styles for `R`
    <details><summary>30 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-serifless'</code>, <code>cv27 = 1</code></td></tr>
    <tr><td><code>R</code> with straight leg; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-top-left-serifed'</code>, <code>cv27 = 2</code></td></tr>
    <tr><td><code>R</code> with straight leg, and serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-bottom-right-serifed'</code>, <code>cv27 = 3</code></td></tr>
    <tr><td><code>R</code> with straight leg, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-top-left-and-bottom-right-serifed'</code>, <code>cv27 = 4</code></td></tr>
    <tr><td><code>R</code> with straight leg, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-serifed'</code>, <code>cv27 = 5</code></td></tr>
    <tr><td><code>R</code> with straight leg, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-open-serifless'</code>, <code>cv27 = 6</code></td></tr>
    <tr><td><code>R</code> with straight leg, and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-open-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-open-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-open-top-left-serifed'</code>, <code>cv27 = 7</code></td></tr>
    <tr><td><code>R</code> with straight leg, open contour, and serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-open-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-open-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-open-bottom-right-serifed'</code>, <code>cv27 = 8</code></td></tr>
    <tr><td><code>R</code> with straight leg, open contour, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-open-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-open-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-open-top-left-and-bottom-right-serifed'</code>, <code>cv27 = 9</code></td></tr>
    <tr><td><code>R</code> with straight leg, open contour, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-straight-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-straight-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'straight-open-serifed'</code>, <code>cv27 = 10</code></td></tr>
    <tr><td><code>R</code> with straight leg, open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-serifless'</code>, <code>cv27 = 11</code></td></tr>
    <tr><td><code>R</code> with curly leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-top-left-serifed'</code>, <code>cv27 = 12</code></td></tr>
    <tr><td><code>R</code> with curly leg, and serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-bottom-right-serifed'</code>, <code>cv27 = 13</code></td></tr>
    <tr><td><code>R</code> with curly leg, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-top-left-and-bottom-right-serifed'</code>, <code>cv27 = 14</code></td></tr>
    <tr><td><code>R</code> with curly leg, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-serifed'</code>, <code>cv27 = 15</code></td></tr>
    <tr><td><code>R</code> with curly leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-open-serifless'</code>, <code>cv27 = 16</code></td></tr>
    <tr><td><code>R</code> with curly leg, and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-open-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-open-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-open-top-left-serifed'</code>, <code>cv27 = 17</code></td></tr>
    <tr><td><code>R</code> with curly leg, open contour, and serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-open-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-open-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-open-bottom-right-serifed'</code>, <code>cv27 = 18</code></td></tr>
    <tr><td><code>R</code> with curly leg, open contour, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-open-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-open-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-open-top-left-and-bottom-right-serifed'</code>, <code>cv27 = 19</code></td></tr>
    <tr><td><code>R</code> with curly leg, open contour, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-curly-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-curly-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'curly-open-serifed'</code>, <code>cv27 = 20</code></td></tr>
    <tr><td><code>R</code> with curly leg, open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-serifless'</code>, <code>cv27 = 21</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-top-left-serifed'</code>, <code>cv27 = 22</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), and serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-bottom-right-serifed'</code>, <code>cv27 = 23</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-top-left-and-bottom-right-serifed'</code>, <code>cv27 = 24</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-serifed'</code>, <code>cv27 = 25</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-open-serifless'</code>, <code>cv27 = 26</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-open-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-open-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-open-top-left-serifed'</code>, <code>cv27 = 27</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), open contour, and serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-open-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-open-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-open-bottom-right-serifed'</code>, <code>cv27 = 28</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), open contour, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-open-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-open-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-open-top-left-and-bottom-right-serifed'</code>, <code>cv27 = 29</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), open contour, and serifs at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-r-standing-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-r-standing-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-r = 'standing-open-serifed'</code>, <code>cv27 = 30</code></td></tr>
    <tr><td><code>R</code> with standing leg (like Helvetica), open contour, and serifs</td></tr>
    </table></details>
  - Styles for `S`
    <details><summary>5 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-s-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-s-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-s = 'serifless'</code>, <code>cv28 = 1</code></td></tr>
    <tr><td>Serifless <code>S</code> (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-s-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-s-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-s = 'unilateral-serifed'</code>, <code>cv28 = 2</code></td></tr>
    <tr><td><code>S</code> with single serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-s-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-s-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-s = 'bilateral-serifed'</code>, <code>cv28 = 3</code></td></tr>
    <tr><td><code>S</code> with serifs at both end (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-s-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-s-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-s = 'unilateral-inward-serifed'</code>, <code>cv28 = 4</code></td></tr>
    <tr><td><code>S</code> with single inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-s-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-s-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-s = 'bilateral-inward-serifed'</code>, <code>cv28 = 5</code></td></tr>
    <tr><td><code>S</code> with inward serifs at both end</td></tr>
    </table></details>
  - Styles for `T`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-t-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-t-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-t = 'serifless'</code>, <code>cv29 = 1</code></td></tr>
    <tr><td>Serifless T (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-t-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-t-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-t = 'motion-serifed'</code>, <code>cv29 = 2</code></td></tr>
    <tr><td>Motion-Serifed T</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-t-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-t-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-t = 'serifed'</code>, <code>cv29 = 3</code></td></tr>
    <tr><td>Serifed T (default for Slab)</td></tr>
    </table></details>
  - Styles for `U`
    <details><summary>15 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothed-serifless'</code>, <code>cv30 = 1</code></td></tr>
    <tr><td><code>U</code> with toothed shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothed-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothed-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothed-bottom-right-serifed'</code>, <code>cv30 = 2</code></td></tr>
    <tr><td><code>U</code> with toothed shape, and serif at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothed-motion-serifed'</code>, <code>cv30 = 3</code></td></tr>
    <tr><td><code>U</code> with toothed shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothed-serifed'</code>, <code>cv30 = 4</code></td></tr>
    <tr><td><code>U</code> with toothed shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'tailed-serifless'</code>, <code>cv30 = 5</code></td></tr>
    <tr><td><code>U</code> with tailed shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'tailed-motion-serifed'</code>, <code>cv30 = 6</code></td></tr>
    <tr><td><code>U</code> with tailed shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'tailed-serifed'</code>, <code>cv30 = 7</code></td></tr>
    <tr><td><code>U</code> with tailed shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-corner-serifless'</code>, <code>cv30 = 8</code></td></tr>
    <tr><td><code>U</code> with toothless (corner bottom-right) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-corner-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-corner-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-corner-unilateral-motion-serifed'</code>, <code>cv30 = 9</code></td></tr>
    <tr><td><code>U</code> with toothless (corner bottom-right) shape, and motion serifs at left side</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-corner-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-corner-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-corner-bilateral-motion-serifed'</code>, <code>cv30 = 10</code></td></tr>
    <tr><td><code>U</code> with toothless (corner bottom-right) shape, and motion serifs at both sides</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-corner-serifed'</code>, <code>cv30 = 11</code></td></tr>
    <tr><td><code>U</code> with toothless (corner bottom-right) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-rounded-serifless'</code>, <code>cv30 = 12</code></td></tr>
    <tr><td><code>U</code> with toothless (rounded) shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-rounded-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-rounded-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-rounded-unilateral-motion-serifed'</code>, <code>cv30 = 13</code></td></tr>
    <tr><td><code>U</code> with toothless (rounded) shape, and motion serifs at left side</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-rounded-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-rounded-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-rounded-bilateral-motion-serifed'</code>, <code>cv30 = 14</code></td></tr>
    <tr><td><code>U</code> with toothless (rounded) shape, and motion serifs at both sides</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-u-toothless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-u-toothless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-u = 'toothless-rounded-serifed'</code>, <code>cv30 = 15</code></td></tr>
    <tr><td><code>U</code> with toothless (rounded) shape, and serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `V`
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-v-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-v-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-v = 'straight-serifless'</code>, <code>cv31 = 1</code></td></tr>
    <tr><td><code>V</code> with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-v-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-v-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-v = 'straight-motion-serifed'</code>, <code>cv31 = 2</code></td></tr>
    <tr><td><code>V</code> with straight shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-v-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-v-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-v = 'straight-serifed'</code>, <code>cv31 = 3</code></td></tr>
    <tr><td><code>V</code> with straight shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-v-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-v-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-v = 'curly-serifless'</code>, <code>cv31 = 4</code></td></tr>
    <tr><td><code>V</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-v-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-v-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-v = 'curly-motion-serifed'</code>, <code>cv31 = 5</code></td></tr>
    <tr><td><code>V</code> with curly shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-v-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-v-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-v = 'curly-serifed'</code>, <code>cv31 = 6</code></td></tr>
    <tr><td><code>V</code> with curly shape, and serifs</td></tr>
    </table></details>
  - Styles for `W`
    <details><summary>21 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-serifless'</code>, <code>cv32 = 1</code></td></tr>
    <tr><td><code>W</code> with standard, straight body; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-motion-serifed'</code>, <code>cv32 = 2</code></td></tr>
    <tr><td><code>W</code> with standard, straight body, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-serifed'</code>, <code>cv32 = 3</code></td></tr>
    <tr><td><code>W</code> with standard, straight body, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'curly-serifless'</code>, <code>cv32 = 4</code></td></tr>
    <tr><td><code>W</code> with curly body; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'curly-motion-serifed'</code>, <code>cv32 = 5</code></td></tr>
    <tr><td><code>W</code> with curly body, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'curly-serifed'</code>, <code>cv32 = 6</code></td></tr>
    <tr><td><code>W</code> with curly body, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-flat-top-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-flat-top-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-flat-top-serifless'</code>, <code>cv32 = 7</code></td></tr>
    <tr><td><code>W</code> with straight body shape that the middle is forced to be aligned the top; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-flat-top-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-flat-top-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-flat-top-motion-serifed'</code>, <code>cv32 = 8</code></td></tr>
    <tr><td><code>W</code> with straight body shape that the middle is forced to be aligned the top, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-flat-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-flat-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-flat-top-serifed'</code>, <code>cv32 = 9</code></td></tr>
    <tr><td><code>W</code> with straight body shape that the middle is forced to be aligned the top, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-double-v-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-double-v-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-double-v-serifless'</code>, <code>cv32 = 10</code></td></tr>
    <tr><td><code>W</code> with body shape like double V; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-double-v-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-double-v-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-double-v-motion-serifed'</code>, <code>cv32 = 11</code></td></tr>
    <tr><td><code>W</code> with body shape like double V, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-double-v-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-double-v-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-double-v-serifed'</code>, <code>cv32 = 12</code></td></tr>
    <tr><td><code>W</code> with body shape like double V, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-asymmetric-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-asymmetric-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-asymmetric-serifless'</code>, <code>cv32 = 13</code></td></tr>
    <tr><td><code>W</code> with asymmetric shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-asymmetric-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-asymmetric-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-asymmetric-motion-serifed'</code>, <code>cv32 = 14</code></td></tr>
    <tr><td><code>W</code> with asymmetric shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-asymmetric-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-asymmetric-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-asymmetric-serifed'</code>, <code>cv32 = 15</code></td></tr>
    <tr><td><code>W</code> with asymmetric shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-vertical-sides-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-vertical-sides-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-vertical-sides-serifless'</code>, <code>cv32 = 16</code></td></tr>
    <tr><td><code>W</code> with straight body shape with vertical sides; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-vertical-sides-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-vertical-sides-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-vertical-sides-motion-serifed'</code>, <code>cv32 = 17</code></td></tr>
    <tr><td><code>W</code> with straight body shape with vertical sides, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-straight-vertical-sides-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-straight-vertical-sides-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'straight-vertical-sides-serifed'</code>, <code>cv32 = 18</code></td></tr>
    <tr><td><code>W</code> with straight body shape with vertical sides, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-rounded-vertical-sides-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-rounded-vertical-sides-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'rounded-vertical-sides-serifless'</code>, <code>cv32 = 19</code></td></tr>
    <tr><td><code>W</code> with rounded body shape with vertical sides; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-rounded-vertical-sides-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-rounded-vertical-sides-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'rounded-vertical-sides-motion-serifed'</code>, <code>cv32 = 20</code></td></tr>
    <tr><td><code>W</code> with rounded body shape with vertical sides, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-w-rounded-vertical-sides-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-w-rounded-vertical-sides-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-w = 'rounded-vertical-sides-serifed'</code>, <code>cv32 = 21</code></td></tr>
    <tr><td><code>W</code> with rounded body shape with vertical sides, and serifs</td></tr>
    </table></details>
  - Styles for `X`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'straight-serifless'</code>, <code>cv33 = 1</code></td></tr>
    <tr><td><code>X</code> with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-straight-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-straight-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'straight-unilateral-motion-serifed'</code>, <code>cv33 = 2</code></td></tr>
    <tr><td><code>X</code> with straight shape, and motion serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-straight-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-straight-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'straight-bilateral-motion-serifed'</code>, <code>cv33 = 3</code></td></tr>
    <tr><td><code>X</code> with straight shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'straight-serifed'</code>, <code>cv33 = 4</code></td></tr>
    <tr><td><code>X</code> with straight shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'curly-serifless'</code>, <code>cv33 = 5</code></td></tr>
    <tr><td><code>X</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-curly-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-curly-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'curly-unilateral-motion-serifed'</code>, <code>cv33 = 6</code></td></tr>
    <tr><td><code>X</code> with curly shape, and motion serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-curly-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-curly-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'curly-bilateral-motion-serifed'</code>, <code>cv33 = 7</code></td></tr>
    <tr><td><code>X</code> with curly shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-x-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-x-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-x = 'curly-serifed'</code>, <code>cv33 = 8</code></td></tr>
    <tr><td><code>X</code> with curly shape, and serifs</td></tr>
    </table></details>
  - Styles for `Y`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'straight-serifless'</code>, <code>cv34 = 1</code></td></tr>
    <tr><td><code>Y</code> with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-straight-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-straight-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'straight-base-serifed'</code>, <code>cv34 = 2</code></td></tr>
    <tr><td><code>Y</code> with straight shape, and serifs at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'straight-motion-serifed'</code>, <code>cv34 = 3</code></td></tr>
    <tr><td><code>Y</code> with straight shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'straight-serifed'</code>, <code>cv34 = 4</code></td></tr>
    <tr><td><code>Y</code> with straight shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'curly-serifless'</code>, <code>cv34 = 5</code></td></tr>
    <tr><td><code>Y</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-curly-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-curly-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'curly-base-serifed'</code>, <code>cv34 = 6</code></td></tr>
    <tr><td><code>Y</code> with curly shape, and serifs at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'curly-motion-serifed'</code>, <code>cv34 = 7</code></td></tr>
    <tr><td><code>Y</code> with curly shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-y-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-y-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-y = 'curly-serifed'</code>, <code>cv34 = 8</code></td></tr>
    <tr><td><code>Y</code> with curly shape, and serifs</td></tr>
    </table></details>
  - Styles for `Z`
    <details><summary>27 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-serifless'</code>, <code>cv35 = 1</code></td></tr>
    <tr><td><code>Z</code> with straight body shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-serifless-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-serifless-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-serifless-with-crossbar'</code>, <code>cv35 = 2</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, and a diagonal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-serifless-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-serifless-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-serifless-with-horizontal-crossbar'</code>, <code>cv35 = 3</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, and a horizontal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-top-serifed'</code>, <code>cv35 = 4</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-top-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-top-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-top-serifed-with-crossbar'</code>, <code>cv35 = 5</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, serifs at top, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-top-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-top-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-top-serifed-with-horizontal-crossbar'</code>, <code>cv35 = 6</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, serifs at top, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-bottom-serifed'</code>, <code>cv35 = 7</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, and serifs at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-bottom-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-bottom-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-bottom-serifed-with-crossbar'</code>, <code>cv35 = 8</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, serifs at bottom, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-bottom-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-bottom-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-bottom-serifed-with-horizontal-crossbar'</code>, <code>cv35 = 9</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, serifs at bottom, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-serifed'</code>, <code>cv35 = 10</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-serifed-with-crossbar'</code>, <code>cv35 = 11</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, serifs, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-straight-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-straight-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'straight-serifed-with-horizontal-crossbar'</code>, <code>cv35 = 12</code></td></tr>
    <tr><td><code>Z</code> with straight body shape, serifs, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-serifless'</code>, <code>cv35 = 13</code></td></tr>
    <tr><td><code>Z</code> with curly body shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-serifless-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-serifless-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-serifless-with-crossbar'</code>, <code>cv35 = 14</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, and a diagonal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-serifless-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-serifless-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-serifless-with-horizontal-crossbar'</code>, <code>cv35 = 15</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, and a horizontal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-top-serifed'</code>, <code>cv35 = 16</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-top-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-top-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-top-serifed-with-crossbar'</code>, <code>cv35 = 17</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, serifs at top, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-top-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-top-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-top-serifed-with-horizontal-crossbar'</code>, <code>cv35 = 18</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, serifs at top, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-bottom-serifed'</code>, <code>cv35 = 19</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, and serifs at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-bottom-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-bottom-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-bottom-serifed-with-crossbar'</code>, <code>cv35 = 20</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, serifs at bottom, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-bottom-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-bottom-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-bottom-serifed-with-horizontal-crossbar'</code>, <code>cv35 = 21</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, serifs at bottom, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-serifed'</code>, <code>cv35 = 22</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-serifed-with-crossbar'</code>, <code>cv35 = 23</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, serifs, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-curly-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-curly-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'curly-serifed-with-horizontal-crossbar'</code>, <code>cv35 = 24</code></td></tr>
    <tr><td><code>Z</code> with curly body shape, serifs, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'cursive'</code>, <code>cv35 = 25</code></td></tr>
    <tr><td><code>Z</code> with cursive body shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-cursive-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-cursive-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'cursive-with-crossbar'</code>, <code>cv35 = 26</code></td></tr>
    <tr><td><code>Z</code> with cursive body shape, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-z-cursive-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-z-cursive-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-z = 'cursive-with-horizontal-crossbar'</code>, <code>cv35 = 27</code></td></tr>
    <tr><td><code>Z</code> with cursive body shape, and a horizontal crossbar</td></tr>
    </table></details>
  - Styles for `a`
    <details><summary>21 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-serifless'</code>, <code>cv36 = 1</code></td></tr>
    <tr><td><code>a</code> with double-storey body, and serifless hook; without serif at terminal (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-serifed'</code>, <code>cv36 = 2</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifless hook, and serif at terminal (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-tailed'</code>, <code>cv36 = 3</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifless hook, and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-toothless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-toothless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-toothless-corner'</code>, <code>cv36 = 4</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifless hook, and toothless (cornered bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-toothless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-toothless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-toothless-rounded'</code>, <code>cv36 = 5</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifless hook, and toothless (rounded bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-hook-inward-serifed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-hook-inward-serifed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-hook-inward-serifed-serifless'</code>, <code>cv36 = 6</code></td></tr>
    <tr><td><code>a</code> with double-storey body, and serifed hook; without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-hook-inward-serifed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-hook-inward-serifed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-hook-inward-serifed-serifed'</code>, <code>cv36 = 7</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifed hook, and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-hook-inward-serifed-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-hook-inward-serifed-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-hook-inward-serifed-tailed'</code>, <code>cv36 = 8</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifed hook, and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-hook-inward-serifed-toothless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-hook-inward-serifed-toothless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-hook-inward-serifed-toothless-corner'</code>, <code>cv36 = 9</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifed hook, and toothless (cornered bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-double-storey-hook-inward-serifed-toothless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-double-storey-hook-inward-serifed-toothless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'double-storey-hook-inward-serifed-toothless-rounded'</code>, <code>cv36 = 10</code></td></tr>
    <tr><td><code>a</code> with double-storey body, serifed hook, and toothless (rounded bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-serifless'</code>, <code>cv36 = 11</code></td></tr>
    <tr><td><code>a</code> with single-storey body; without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-serifed'</code>, <code>cv36 = 12</code></td></tr>
    <tr><td><code>a</code> with single-storey body, and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-double-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-double-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-double-serifed'</code>, <code>cv36 = 13</code></td></tr>
    <tr><td><code>a</code> with single-storey body, and serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-tailed'</code>, <code>cv36 = 14</code></td></tr>
    <tr><td><code>a</code> with single-storey body, and curly tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-tailed-serifed'</code>, <code>cv36 = 15</code></td></tr>
    <tr><td><code>a</code> with single-storey body, and curly tail; with serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-earless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-earless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-earless-corner-serifless'</code>, <code>cv36 = 16</code></td></tr>
    <tr><td><code>a</code> with single-storey body, and earless (cornered top-right); without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-earless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-earless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-earless-corner-serifed'</code>, <code>cv36 = 17</code></td></tr>
    <tr><td><code>a</code> with single-storey body, earless (cornered top-right), and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-earless-corner-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-earless-corner-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-earless-corner-tailed'</code>, <code>cv36 = 18</code></td></tr>
    <tr><td><code>a</code> with single-storey body, earless (cornered top-right), and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-earless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-earless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-earless-rounded-serifless'</code>, <code>cv36 = 19</code></td></tr>
    <tr><td><code>a</code> with single-storey body, and earless (rounded top-right); without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-earless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-earless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-earless-rounded-serifed'</code>, <code>cv36 = 20</code></td></tr>
    <tr><td><code>a</code> with single-storey body, earless (rounded top-right), and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-a-single-storey-earless-rounded-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-a-single-storey-earless-rounded-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>a = 'single-storey-earless-rounded-tailed'</code>, <code>cv36 = 21</code></td></tr>
    <tr><td><code>a</code> with single-storey body, earless (rounded top-right), and curly tail</td></tr>
    </table></details>
  - Styles for `b`
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothed-serifless'</code>, <code>cv37 = 1</code></td></tr>
    <tr><td><code>b</code> with toothed shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothed-motion-serifed'</code>, <code>cv37 = 2</code></td></tr>
    <tr><td><code>b</code> with toothed shape, and motion serifs (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothed-serifed'</code>, <code>cv37 = 3</code></td></tr>
    <tr><td><code>b</code> with toothed shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothless-corner-serifless'</code>, <code>cv37 = 4</code></td></tr>
    <tr><td><code>b</code> with toothless (cornered) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothless-corner-serifed'</code>, <code>cv37 = 5</code></td></tr>
    <tr><td><code>b</code> with toothless (cornered) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothless-rounded-serifless'</code>, <code>cv37 = 6</code></td></tr>
    <tr><td><code>b</code> with toothless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-b-toothless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-b-toothless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>b = 'toothless-rounded-serifed'</code>, <code>cv37 = 7</code></td></tr>
    <tr><td><code>b</code> with toothless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `c`
    <details><summary>5 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-c-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-c-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>c = 'serifless'</code>, <code>cv38 = 1</code></td></tr>
    <tr><td>Serifless <code>c</code> (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-c-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-c-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>c = 'unilateral-serifed'</code>, <code>cv38 = 2</code></td></tr>
    <tr><td><code>c</code> with serif at top (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-c-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-c-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>c = 'bilateral-serifed'</code>, <code>cv38 = 3</code></td></tr>
    <tr><td><code>c</code> with serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-c-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-c-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>c = 'unilateral-inward-serifed'</code>, <code>cv38 = 4</code></td></tr>
    <tr><td><code>c</code> with inward serif at top (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-c-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-c-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>c = 'bilateral-inward-serifed'</code>, <code>cv38 = 5</code></td></tr>
    <tr><td><code>c</code> with inward serif at both top and bottom</td></tr>
    </table></details>
  - Styles for `d`
    <details><summary>10 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothed-serifless'</code>, <code>cv39 = 1</code></td></tr>
    <tr><td><code>d</code> with toothed shape; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothed-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothed-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothed-top-serifed'</code>, <code>cv39 = 2</code></td></tr>
    <tr><td><code>d</code> with toothed shape, and serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothed-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothed-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothed-bottom-serifed'</code>, <code>cv39 = 3</code></td></tr>
    <tr><td><code>d</code> with toothed shape, and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothed-serifed'</code>, <code>cv39 = 4</code></td></tr>
    <tr><td><code>d</code> with toothed shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'tailed-serifless'</code>, <code>cv39 = 5</code></td></tr>
    <tr><td><code>d</code> with tailed shape; without serifs (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'tailed-serifed'</code>, <code>cv39 = 6</code></td></tr>
    <tr><td><code>d</code> with tailed shape, and serifs (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothless-corner-serifless'</code>, <code>cv39 = 7</code></td></tr>
    <tr><td><code>d</code> with toothless (cornered) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothless-corner-serifed'</code>, <code>cv39 = 8</code></td></tr>
    <tr><td><code>d</code> with toothless (cornered) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothless-rounded-serifless'</code>, <code>cv39 = 9</code></td></tr>
    <tr><td><code>d</code> with toothless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-d-toothless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-d-toothless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>d = 'toothless-rounded-serifed'</code>, <code>cv39 = 10</code></td></tr>
    <tr><td><code>d</code> with toothless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `e`
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-e-flat-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-e-flat-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>e = 'flat-crossbar'</code>, <code>cv40 = 1</code></td></tr>
    <tr><td><code>e</code> with flat crossbar (default for Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-e-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-e-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>e = 'rounded'</code>, <code>cv40 = 2</code></td></tr>
    <tr><td><code>e</code> with more rounded shape (default for Italic)</td></tr>
    </table></details>
  - Styles for `f`
    <details><summary>20 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'serifless'</code>, <code>cv41 = 1</code></td></tr>
    <tr><td><code>f</code> without bottom serif, hook or extension (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-serifless-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-serifless-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'serifless-crossbar-at-x-height'</code>, <code>cv41 = 2</code></td></tr>
    <tr><td><code>f</code> without bottom serif, hook or extension; with crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'serifed'</code>, <code>cv41 = 3</code></td></tr>
    <tr><td><code>f</code> with bottom serif (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-serifed-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-serifed-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'serifed-crossbar-at-x-height'</code>, <code>cv41 = 4</code></td></tr>
    <tr><td><code>f</code> with bottom serif, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-extended.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-extended.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'extended'</code>, <code>cv41 = 5</code></td></tr>
    <tr><td><code>f</code> with descending extension</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-extended-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-extended-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'extended-crossbar-at-x-height'</code>, <code>cv41 = 6</code></td></tr>
    <tr><td><code>f</code> with descending extension, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'tailed'</code>, <code>cv41 = 7</code></td></tr>
    <tr><td><code>f</code> with descending bottom hook</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-tailed-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-tailed-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'tailed-crossbar-at-x-height'</code>, <code>cv41 = 8</code></td></tr>
    <tr><td><code>f</code> with descending bottom hook, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'diagonal-tailed'</code>, <code>cv41 = 9</code></td></tr>
    <tr><td><code>f</code> with diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-diagonal-tailed-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-diagonal-tailed-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'diagonal-tailed-crossbar-at-x-height'</code>, <code>cv41 = 10</code></td></tr>
    <tr><td><code>f</code> with diagonal tail, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-serifless'</code>, <code>cv41 = 11</code></td></tr>
    <tr><td><code>f</code> with flat top hook; without bottom serif, hook or extension</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-serifless-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-serifless-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-serifless-crossbar-at-x-height'</code>, <code>cv41 = 12</code></td></tr>
    <tr><td><code>f</code> with flat top hook, and crossbar at X-height; without bottom serif, hook or extension</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-serifed'</code>, <code>cv41 = 13</code></td></tr>
    <tr><td><code>f</code> with flat top hook, and bottom serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-serifed-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-serifed-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-serifed-crossbar-at-x-height'</code>, <code>cv41 = 14</code></td></tr>
    <tr><td><code>f</code> with flat top hook, bottom serif, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-extended.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-extended.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-extended'</code>, <code>cv41 = 15</code></td></tr>
    <tr><td><code>f</code> with flat top hook, and descending extension</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-extended-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-extended-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-extended-crossbar-at-x-height'</code>, <code>cv41 = 16</code></td></tr>
    <tr><td><code>f</code> with flat top hook, descending extension, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-tailed'</code>, <code>cv41 = 17</code></td></tr>
    <tr><td><code>f</code> with flat top hook, and descending bottom hook (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-tailed-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-tailed-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-tailed-crossbar-at-x-height'</code>, <code>cv41 = 18</code></td></tr>
    <tr><td><code>f</code> with flat top hook, descending bottom hook, and crossbar at X-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-diagonal-tailed'</code>, <code>cv41 = 19</code></td></tr>
    <tr><td><code>f</code> with flat top hook, and diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-f-flat-hook-diagonal-tailed-crossbar-at-x-height.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-f-flat-hook-diagonal-tailed-crossbar-at-x-height.dark.svg#gh-dark-mode-only" width=32/></td><td><code>f = 'flat-hook-diagonal-tailed-crossbar-at-x-height'</code>, <code>cv41 = 20</code></td></tr>
    <tr><td><code>f</code> with flat top hook, diagonal tail, and crossbar at X-height</td></tr>
    </table></details>
  - Styles for `g`
    <details><summary>10 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-double-storey.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-double-storey.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'double-storey'</code>, <code>cv42 = 1</code></td></tr>
    <tr><td><code>g</code> with double-storey shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-double-storey-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-double-storey-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'double-storey-open'</code>, <code>cv42 = 2</code></td></tr>
    <tr><td><code>g</code> with double-storey shape, and open contour</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-serifless'</code>, <code>cv42 = 3</code></td></tr>
    <tr><td><code>g</code> with single-storey shape (default for Sans Upright, Sans Italic, Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-serifed'</code>, <code>cv42 = 4</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, and top-right serif (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-earless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-earless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-earless-corner'</code>, <code>cv42 = 5</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, and earless (cornered top-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-earless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-earless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-earless-rounded'</code>, <code>cv42 = 6</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, and earless (rounded top-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-flat-hook-serifless'</code>, <code>cv42 = 7</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, and flat bottom hook</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-flat-hook-serifed'</code>, <code>cv42 = 8</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, flat bottom hook, and top-right serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-flat-hook-earless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-flat-hook-earless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-flat-hook-earless-corner'</code>, <code>cv42 = 9</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, flat bottom hook, and earless (cornered top-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-g-single-storey-flat-hook-earless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-g-single-storey-flat-hook-earless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>g = 'single-storey-flat-hook-earless-rounded'</code>, <code>cv42 = 10</code></td></tr>
    <tr><td><code>g</code> with single-storey shape, flat bottom hook, and earless (rounded top-right)</td></tr>
    </table></details>
  - Styles for `h`
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'straight-serifless'</code>, <code>cv43 = 1</code></td></tr>
    <tr><td><code>h</code> with straight terminal; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'straight-top-left-serifed'</code>, <code>cv43 = 2</code></td></tr>
    <tr><td><code>h</code> with straight terminal, and serif at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'straight-motion-serifed'</code>, <code>cv43 = 3</code></td></tr>
    <tr><td><code>h</code> with straight terminal, and serifs at top left and bottom right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'straight-serifed'</code>, <code>cv43 = 4</code></td></tr>
    <tr><td><code>h</code> with straight terminal, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'tailed-serifless'</code>, <code>cv43 = 5</code></td></tr>
    <tr><td><code>h</code> with curly tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'tailed-motion-serifed'</code>, <code>cv43 = 6</code></td></tr>
    <tr><td><code>h</code> with curly tailed terminal, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-h-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-h-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>h = 'tailed-serifed'</code>, <code>cv43 = 7</code></td></tr>
    <tr><td><code>h</code> with curly tailed terminal, and serifs</td></tr>
    </table></details>
  - Styles for `i`
    <details><summary>14 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'serifless'</code>, <code>cv44 = 1</code></td></tr>
    <tr><td><code>i</code> like a straight line</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-hooky.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-hooky.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'hooky'</code>, <code>cv44 = 2</code></td></tr>
    <tr><td>Hooky <code>i</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-hooky-bottom.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-hooky-bottom.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'hooky-bottom'</code>, <code>cv44 = 3</code></td></tr>
    <tr><td><code>i</code> with a sharp-turning horizontal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-zshaped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-zshaped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'zshaped'</code>, <code>cv44 = 4</code></td></tr>
    <tr><td>Z-shaped <code>i</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'serifed'</code>, <code>cv44 = 5</code></td></tr>
    <tr><td>Serifed <code>i</code> (default for Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-serifed-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-serifed-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'serifed-asymmetric'</code>, <code>cv44 = 6</code></td></tr>
    <tr><td><code>i</code> with shorter top serif and full bottom serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'tailed'</code>, <code>cv44 = 7</code></td></tr>
    <tr><td><code>i</code> with curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'tailed-serifed'</code>, <code>cv44 = 8</code></td></tr>
    <tr><td><code>i</code> with top serif and curly tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'flat-tailed'</code>, <code>cv44 = 9</code></td></tr>
    <tr><td><code>i</code> with curly-then-flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-serifed-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-serifed-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'serifed-flat-tailed'</code>, <code>cv44 = 10</code></td></tr>
    <tr><td><code>i</code> with top serif and curly-then-flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'diagonal-tailed'</code>, <code>cv44 = 11</code></td></tr>
    <tr><td><code>i</code> with diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-serifed-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-serifed-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'serifed-diagonal-tailed'</code>, <code>cv44 = 12</code></td></tr>
    <tr><td><code>i</code> with top serif and diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'semi-tailed'</code>, <code>cv44 = 13</code></td></tr>
    <tr><td><code>i</code> with slightly curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-i-serifed-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-i-serifed-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>i = 'serifed-semi-tailed'</code>, <code>cv44 = 14</code></td></tr>
    <tr><td><code>i</code> with top serif and slightly curly tail</td></tr>
    </table></details>
  - Styles for `j`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'serifless'</code>, <code>cv45 = 1</code></td></tr>
    <tr><td><code>j</code> without serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'serifed'</code>, <code>cv45 = 2</code></td></tr>
    <tr><td><code>j</code> with top serif (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-straight-line.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-straight-line.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'straight-line'</code>, <code>cv45 = 3</code></td></tr>
    <tr><td><code>j</code> like a straight line</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-hooky.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-hooky.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'hooky'</code>, <code>cv45 = 4</code></td></tr>
    <tr><td><code>j</code> like a straight line with top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'flat-hook-serifless'</code>, <code>cv45 = 5</code></td></tr>
    <tr><td><code>j</code> with flat terminal hook</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'flat-hook-serifed'</code>, <code>cv45 = 6</code></td></tr>
    <tr><td><code>j</code> with flat terminal hook and top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-diagonal-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-diagonal-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'diagonal-tailed-serifless'</code>, <code>cv45 = 7</code></td></tr>
    <tr><td><code>j</code> with diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-j-diagonal-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-j-diagonal-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>j = 'diagonal-tailed-serifed'</code>, <code>cv45 = 8</code></td></tr>
    <tr><td><code>j</code> with top serif and diagonal tail</td></tr>
    </table></details>
  - Styles for `k`
    <details><summary>27 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'straight-serifless'</code>, <code>cv46 = 1</code></td></tr>
    <tr><td><code>k</code> with standard shape; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'straight-top-left-serifed'</code>, <code>cv46 = 2</code></td></tr>
    <tr><td><code>k</code> with standard shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-straight-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-straight-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'straight-bottom-right-serifed'</code>, <code>cv46 = 3</code></td></tr>
    <tr><td><code>k</code> with standard shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-straight-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-straight-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'straight-top-left-and-bottom-right-serifed'</code>, <code>cv46 = 4</code></td></tr>
    <tr><td><code>k</code> with standard shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'straight-serifed'</code>, <code>cv46 = 5</code></td></tr>
    <tr><td><code>k</code> with standard shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'curly-serifless'</code>, <code>cv46 = 6</code></td></tr>
    <tr><td><code>k</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-curly-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-curly-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'curly-top-left-serifed'</code>, <code>cv46 = 7</code></td></tr>
    <tr><td><code>k</code> with curly shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-curly-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-curly-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'curly-bottom-right-serifed'</code>, <code>cv46 = 8</code></td></tr>
    <tr><td><code>k</code> with curly shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-curly-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-curly-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'curly-top-left-and-bottom-right-serifed'</code>, <code>cv46 = 9</code></td></tr>
    <tr><td><code>k</code> with curly shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'curly-serifed'</code>, <code>cv46 = 10</code></td></tr>
    <tr><td><code>k</code> with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-touching-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-touching-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-touching-serifless'</code>, <code>cv46 = 11</code></td></tr>
    <tr><td><code>k</code> with symmetric legs touching the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-touching-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-touching-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-touching-top-left-serifed'</code>, <code>cv46 = 12</code></td></tr>
    <tr><td><code>k</code> with symmetric legs touching the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-touching-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-touching-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-touching-bottom-right-serifed'</code>, <code>cv46 = 13</code></td></tr>
    <tr><td><code>k</code> with symmetric legs touching the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-touching-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-touching-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-touching-top-left-and-bottom-right-serifed'</code>, <code>cv46 = 14</code></td></tr>
    <tr><td><code>k</code> with symmetric legs touching the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-touching-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-touching-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-touching-serifed'</code>, <code>cv46 = 15</code></td></tr>
    <tr><td><code>k</code> with symmetric legs touching the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-connected-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-connected-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-connected-serifless'</code>, <code>cv46 = 16</code></td></tr>
    <tr><td><code>k</code> with symmetric legs connected to the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-connected-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-connected-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-connected-top-left-serifed'</code>, <code>cv46 = 17</code></td></tr>
    <tr><td><code>k</code> with symmetric legs connected to the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-connected-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-connected-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-connected-bottom-right-serifed'</code>, <code>cv46 = 18</code></td></tr>
    <tr><td><code>k</code> with symmetric legs connected to the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-connected-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-connected-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-connected-top-left-and-bottom-right-serifed'</code>, <code>cv46 = 19</code></td></tr>
    <tr><td><code>k</code> with symmetric legs connected to the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-symmetric-connected-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-symmetric-connected-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'symmetric-connected-serifed'</code>, <code>cv46 = 20</code></td></tr>
    <tr><td><code>k</code> with symmetric legs connected to the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'cursive-serifless'</code>, <code>cv46 = 21</code></td></tr>
    <tr><td><code>k</code> with cursive loop; without serifs (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-cursive-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-cursive-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'cursive-top-left-serifed'</code>, <code>cv46 = 22</code></td></tr>
    <tr><td><code>k</code> with cursive loop, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-cursive-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-cursive-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'cursive-bottom-right-serifed'</code>, <code>cv46 = 23</code></td></tr>
    <tr><td><code>k</code> with cursive loop, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-cursive-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-cursive-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'cursive-top-left-and-bottom-right-serifed'</code>, <code>cv46 = 24</code></td></tr>
    <tr><td><code>k</code> with cursive loop, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-cursive-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-cursive-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'cursive-serifed'</code>, <code>cv46 = 25</code></td></tr>
    <tr><td><code>k</code> with cursive loop, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-diagonal-tailed-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-diagonal-tailed-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'diagonal-tailed-cursive-serifless'</code>, <code>cv46 = 26</code></td></tr>
    <tr><td><code>k</code> with cursive loop plus diagonal tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-k-diagonal-tailed-cursive-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-k-diagonal-tailed-cursive-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>k = 'diagonal-tailed-cursive-top-left-serifed'</code>, <code>cv46 = 27</code></td></tr>
    <tr><td><code>k</code> with cursive loop plus diagonal tail, and serifs at top left (default for Slab Italic)</td></tr>
    </table></details>
  - Styles for `l`
    <details><summary>14 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'serifless'</code>, <code>cv47 = 1</code></td></tr>
    <tr><td><code>l</code> like a straight line</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-hooky.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-hooky.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'hooky'</code>, <code>cv47 = 2</code></td></tr>
    <tr><td>Hooky <code>l</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-hooky-bottom.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-hooky-bottom.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'hooky-bottom'</code>, <code>cv47 = 3</code></td></tr>
    <tr><td><code>l</code> with a straight sharp-turning horizontal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-zshaped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-zshaped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'zshaped'</code>, <code>cv47 = 4</code></td></tr>
    <tr><td>Z-shaped <code>l</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'serifed'</code>, <code>cv47 = 5</code></td></tr>
    <tr><td>Serifed <code>l</code> (default for Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-serifed-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-serifed-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'serifed-asymmetric'</code>, <code>cv47 = 6</code></td></tr>
    <tr><td><code>l</code> with shorter top serif and full bottom serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'tailed'</code>, <code>cv47 = 7</code></td></tr>
    <tr><td><code>l</code> with curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'tailed-serifed'</code>, <code>cv47 = 8</code></td></tr>
    <tr><td><code>l</code> with top serif and curly tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'flat-tailed'</code>, <code>cv47 = 9</code></td></tr>
    <tr><td><code>l</code> with curly-then-flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-serifed-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-serifed-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'serifed-flat-tailed'</code>, <code>cv47 = 10</code></td></tr>
    <tr><td><code>l</code> with top serif and curly-then-flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'diagonal-tailed'</code>, <code>cv47 = 11</code></td></tr>
    <tr><td><code>l</code> with diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-serifed-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-serifed-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'serifed-diagonal-tailed'</code>, <code>cv47 = 12</code></td></tr>
    <tr><td><code>l</code> with top serif and diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'semi-tailed'</code>, <code>cv47 = 13</code></td></tr>
    <tr><td><code>l</code> with slightl curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-l-serifed-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-l-serifed-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>l = 'serifed-semi-tailed'</code>, <code>cv47 = 14</code></td></tr>
    <tr><td><code>l</code> with top serif and slightl curly tail</td></tr>
    </table></details>
  - Styles for `m`
    <details><summary>44 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'serifless'</code>, <code>cv48 = 1</code></td></tr>
    <tr><td><code>m</code> with eared body shape, and normal middle leg; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'top-left-serifed'</code>, <code>cv48 = 2</code></td></tr>
    <tr><td><code>m</code> with eared body shape, normal middle leg, and serif at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'top-left-and-bottom-right-serifed'</code>, <code>cv48 = 3</code></td></tr>
    <tr><td><code>m</code> with eared body shape, normal middle leg, and serifs at top left and bottom right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'serifed'</code>, <code>cv48 = 4</code></td></tr>
    <tr><td><code>m</code> with eared body shape, normal middle leg, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'tailed-serifless'</code>, <code>cv48 = 5</code></td></tr>
    <tr><td><code>m</code> with eared body shape, normal middle leg, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-tailed-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-tailed-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'tailed-top-left-serifed'</code>, <code>cv48 = 6</code></td></tr>
    <tr><td><code>m</code> with eared body shape, normal middle leg, tail, and serif at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'tailed-serifed'</code>, <code>cv48 = 7</code></td></tr>
    <tr><td><code>m</code> with eared body shape, normal middle leg, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-serifless'</code>, <code>cv48 = 8</code></td></tr>
    <tr><td><code>m</code> with eared body shape, and shorter middle leg (like Ubuntu Mono); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-top-left-serifed'</code>, <code>cv48 = 9</code></td></tr>
    <tr><td><code>m</code> with eared body shape, shorter middle leg (like Ubuntu Mono), and serif at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-top-left-and-bottom-right-serifed'</code>, <code>cv48 = 10</code></td></tr>
    <tr><td><code>m</code> with eared body shape, shorter middle leg (like Ubuntu Mono), and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-serifed'</code>, <code>cv48 = 11</code></td></tr>
    <tr><td><code>m</code> with eared body shape, shorter middle leg (like Ubuntu Mono), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-tailed-serifless'</code>, <code>cv48 = 12</code></td></tr>
    <tr><td><code>m</code> with eared body shape, shorter middle leg (like Ubuntu Mono), and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-tailed-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-tailed-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-tailed-top-left-serifed'</code>, <code>cv48 = 13</code></td></tr>
    <tr><td><code>m</code> with eared body shape, shorter middle leg (like Ubuntu Mono), tail, and serif at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-short-leg-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-short-leg-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'short-leg-tailed-serifed'</code>, <code>cv48 = 14</code></td></tr>
    <tr><td><code>m</code> with eared body shape, shorter middle leg (like Ubuntu Mono), tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-serifless'</code>, <code>cv48 = 15</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, and normal middle leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-bottom-right-serifed'</code>, <code>cv48 = 16</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, normal middle leg, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-serifed'</code>, <code>cv48 = 17</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, normal middle leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-tailed-serifless'</code>, <code>cv48 = 18</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, normal middle leg, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-tailed-serifed'</code>, <code>cv48 = 19</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, normal middle leg, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-short-leg-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-short-leg-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-short-leg-serifless'</code>, <code>cv48 = 20</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, and shorter middle leg (like Ubuntu Mono); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-short-leg-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-short-leg-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-short-leg-bottom-right-serifed'</code>, <code>cv48 = 21</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-short-leg-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-short-leg-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-short-leg-serifed'</code>, <code>cv48 = 22</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-short-leg-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-short-leg-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-short-leg-tailed-serifless'</code>, <code>cv48 = 23</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-corner-double-arch-short-leg-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-corner-double-arch-short-leg-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-corner-double-arch-short-leg-tailed-serifed'</code>, <code>cv48 = 24</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-serifless'</code>, <code>cv48 = 25</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, and normal middle leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-bottom-right-serifed'</code>, <code>cv48 = 26</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, normal middle leg, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-serifed'</code>, <code>cv48 = 27</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, normal middle leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-tailed-serifless'</code>, <code>cv48 = 28</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, normal middle leg, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-tailed-serifed'</code>, <code>cv48 = 29</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, normal middle leg, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-short-leg-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-short-leg-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-short-leg-serifless'</code>, <code>cv48 = 30</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, and shorter middle leg (like Ubuntu Mono); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-short-leg-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-short-leg-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-short-leg-bottom-right-serifed'</code>, <code>cv48 = 31</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-short-leg-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-short-leg-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-short-leg-serifed'</code>, <code>cv48 = 32</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-short-leg-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-short-leg-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-short-leg-tailed-serifless'</code>, <code>cv48 = 33</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-rounded-double-arch-short-leg-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-rounded-double-arch-short-leg-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-rounded-double-arch-short-leg-tailed-serifed'</code>, <code>cv48 = 34</code></td></tr>
    <tr><td><code>m</code> with earless (rounded top-left) double-arch body shape, shorter middle leg (like Ubuntu Mono), tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-serifless'</code>, <code>cv48 = 35</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, and normal middle leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-bottom-right-serifed'</code>, <code>cv48 = 36</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, normal middle leg, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-serifed'</code>, <code>cv48 = 37</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, normal middle leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-tailed-serifless'</code>, <code>cv48 = 38</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, normal middle leg, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-tailed-serifed'</code>, <code>cv48 = 39</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, normal middle leg, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-short-leg-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-short-leg-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-short-leg-serifless'</code>, <code>cv48 = 40</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, and shorter middle leg (like Ubuntu Mono); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-short-leg-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-short-leg-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-short-leg-bottom-right-serifed'</code>, <code>cv48 = 41</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, shorter middle leg (like Ubuntu Mono), and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-short-leg-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-short-leg-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-short-leg-serifed'</code>, <code>cv48 = 42</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, shorter middle leg (like Ubuntu Mono), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-short-leg-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-short-leg-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-short-leg-tailed-serifless'</code>, <code>cv48 = 43</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, shorter middle leg (like Ubuntu Mono), and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-m-earless-single-arch-short-leg-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-m-earless-single-arch-short-leg-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>m = 'earless-single-arch-short-leg-tailed-serifed'</code>, <code>cv48 = 44</code></td></tr>
    <tr><td><code>m</code> with earless (corner top-left) body shape, shorter middle leg (like Ubuntu Mono), tail, and serifs</td></tr>
    </table></details>
  - Styles for `n`
    <details><summary>17 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'straight-serifless'</code>, <code>cv49 = 1</code></td></tr>
    <tr><td><code>n</code> with straight terminal; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'straight-top-left-serifed'</code>, <code>cv49 = 2</code></td></tr>
    <tr><td><code>n</code> with straight terminal, and serif at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'straight-motion-serifed'</code>, <code>cv49 = 3</code></td></tr>
    <tr><td><code>n</code> with straight terminal, and serif at top left and bottom right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'straight-serifed'</code>, <code>cv49 = 4</code></td></tr>
    <tr><td><code>n</code> with straight terminal, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'tailed-serifless'</code>, <code>cv49 = 5</code></td></tr>
    <tr><td><code>n</code> with tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'tailed-motion-serifed'</code>, <code>cv49 = 6</code></td></tr>
    <tr><td><code>n</code> with tailed terminal, and serif at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'tailed-serifed'</code>, <code>cv49 = 7</code></td></tr>
    <tr><td><code>n</code> with tailed terminal, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-corner-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-corner-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-corner-straight-serifless'</code>, <code>cv49 = 8</code></td></tr>
    <tr><td><code>n</code> with earless (corner top-left) body shape, and straight terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-corner-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-corner-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-corner-straight-motion-serifed'</code>, <code>cv49 = 9</code></td></tr>
    <tr><td><code>n</code> with earless (corner top-left) body shape, straight terminal, and serif at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-corner-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-corner-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-corner-straight-serifed'</code>, <code>cv49 = 10</code></td></tr>
    <tr><td><code>n</code> with earless (corner top-left) body shape, straight terminal, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-corner-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-corner-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-corner-tailed-serifless'</code>, <code>cv49 = 11</code></td></tr>
    <tr><td><code>n</code> with earless (corner top-left) body shape, and tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-corner-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-corner-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-corner-tailed-serifed'</code>, <code>cv49 = 12</code></td></tr>
    <tr><td><code>n</code> with earless (corner top-left) body shape, tailed terminal, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-rounded-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-rounded-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-rounded-straight-serifless'</code>, <code>cv49 = 13</code></td></tr>
    <tr><td><code>n</code> with earless (rounded top-left) body shape, and straight terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-rounded-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-rounded-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-rounded-straight-motion-serifed'</code>, <code>cv49 = 14</code></td></tr>
    <tr><td><code>n</code> with earless (rounded top-left) body shape, straight terminal, and serif at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-rounded-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-rounded-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-rounded-straight-serifed'</code>, <code>cv49 = 15</code></td></tr>
    <tr><td><code>n</code> with earless (rounded top-left) body shape, straight terminal, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-rounded-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-rounded-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-rounded-tailed-serifless'</code>, <code>cv49 = 16</code></td></tr>
    <tr><td><code>n</code> with earless (rounded top-left) body shape, and tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-n-earless-rounded-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-n-earless-rounded-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>n = 'earless-rounded-tailed-serifed'</code>, <code>cv49 = 17</code></td></tr>
    <tr><td><code>n</code> with earless (rounded top-left) body shape, tailed terminal, and serifs</td></tr>
    </table></details>
  - Styles for `p`
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-eared-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-eared-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'eared-serifless'</code>, <code>cv50 = 1</code></td></tr>
    <tr><td><code>p</code> with eared shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-eared-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-eared-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'eared-motion-serifed'</code>, <code>cv50 = 2</code></td></tr>
    <tr><td><code>p</code> with eared shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-eared-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-eared-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'eared-serifed'</code>, <code>cv50 = 3</code></td></tr>
    <tr><td><code>p</code> with eared shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-earless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-earless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'earless-corner-serifless'</code>, <code>cv50 = 4</code></td></tr>
    <tr><td><code>p</code> with earless (cornered) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-earless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-earless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'earless-corner-serifed'</code>, <code>cv50 = 5</code></td></tr>
    <tr><td><code>p</code> with earless (cornered) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-earless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-earless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'earless-rounded-serifless'</code>, <code>cv50 = 6</code></td></tr>
    <tr><td><code>p</code> with earless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-p-earless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-p-earless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>p = 'earless-rounded-serifed'</code>, <code>cv50 = 7</code></td></tr>
    <tr><td><code>p</code> with earless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `q`
    <details><summary>16 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'straight-serifless'</code>, <code>cv51 = 1</code></td></tr>
    <tr><td><code>q</code> with straight terminal; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-straight-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-straight-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'straight-bottom-serifed'</code>, <code>cv51 = 2</code></td></tr>
    <tr><td><code>q</code> with straight terminal, and serif at bottom (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'straight-motion-serifed'</code>, <code>cv51 = 3</code></td></tr>
    <tr><td><code>q</code> with straight terminal, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'straight-serifed'</code>, <code>cv51 = 4</code></td></tr>
    <tr><td><code>q</code> with straight terminal, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'tailed-serifless'</code>, <code>cv51 = 5</code></td></tr>
    <tr><td><code>q</code> with tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'tailed-motion-serifed'</code>, <code>cv51 = 6</code></td></tr>
    <tr><td><code>q</code> with tailed terminal, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-diagonal-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-diagonal-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'diagonal-tailed-serifless'</code>, <code>cv51 = 7</code></td></tr>
    <tr><td><code>q</code> with diagonally tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-diagonal-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-diagonal-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'diagonal-tailed-motion-serifed'</code>, <code>cv51 = 8</code></td></tr>
    <tr><td><code>q</code> with diagonally tailed terminal, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-corner-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-corner-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-corner-straight-serifless'</code>, <code>cv51 = 9</code></td></tr>
    <tr><td><code>q</code> with earless (cornered) shape, and straight terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-corner-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-corner-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-corner-straight-serifed'</code>, <code>cv51 = 10</code></td></tr>
    <tr><td><code>q</code> with earless (cornered) shape, straight terminal, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-corner-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-corner-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-corner-tailed-serifless'</code>, <code>cv51 = 11</code></td></tr>
    <tr><td><code>q</code> with earless (cornered) shape, and tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-corner-diagonal-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-corner-diagonal-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-corner-diagonal-tailed-serifless'</code>, <code>cv51 = 12</code></td></tr>
    <tr><td><code>q</code> with earless (cornered) shape, and diagonally tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-rounded-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-rounded-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-rounded-straight-serifless'</code>, <code>cv51 = 13</code></td></tr>
    <tr><td><code>q</code> with earless (rounded) shape, and straight terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-rounded-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-rounded-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-rounded-straight-serifed'</code>, <code>cv51 = 14</code></td></tr>
    <tr><td><code>q</code> with earless (rounded) shape, straight terminal, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-rounded-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-rounded-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-rounded-tailed-serifless'</code>, <code>cv51 = 15</code></td></tr>
    <tr><td><code>q</code> with earless (rounded) shape, and tailed terminal; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-q-earless-rounded-diagonal-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-q-earless-rounded-diagonal-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>q = 'earless-rounded-diagonal-tailed-serifless'</code>, <code>cv51 = 16</code></td></tr>
    <tr><td><code>q</code> with earless (rounded) shape, and diagonally tailed terminal; without serifs</td></tr>
    </table></details>
  - Styles for `r`
    <details><summary>20 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'serifless'</code>, <code>cv52 = 1</code></td></tr>
    <tr><td><code>r</code> with normal body shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'top-serifed'</code>, <code>cv52 = 2</code></td></tr>
    <tr><td><code>r</code> with normal body shape, and serif at top (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'base-serifed'</code>, <code>cv52 = 3</code></td></tr>
    <tr><td><code>r</code> with normal body shape, and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'serifed'</code>, <code>cv52 = 4</code></td></tr>
    <tr><td><code>r</code> with normal body shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-earless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-earless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'earless-corner-serifless'</code>, <code>cv52 = 5</code></td></tr>
    <tr><td><code>r</code> with earless (corner top-left) body shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-earless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-earless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'earless-corner-serifed'</code>, <code>cv52 = 6</code></td></tr>
    <tr><td><code>r</code> with earless (corner top-left) body shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-earless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-earless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'earless-rounded-serifless'</code>, <code>cv52 = 7</code></td></tr>
    <tr><td><code>r</code> with earless (rounded top-left) body shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-earless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-earless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'earless-rounded-serifed'</code>, <code>cv52 = 8</code></td></tr>
    <tr><td><code>r</code> with earless (rounded top-left) body shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-hookless-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-hookless-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'hookless-serifless'</code>, <code>cv52 = 9</code></td></tr>
    <tr><td><code>r</code> with hookless body shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-hookless-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-hookless-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'hookless-top-serifed'</code>, <code>cv52 = 10</code></td></tr>
    <tr><td><code>r</code> with hookless body shape, and serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-hookless-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-hookless-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'hookless-base-serifed'</code>, <code>cv52 = 11</code></td></tr>
    <tr><td><code>r</code> with hookless body shape, and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-hookless-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-hookless-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'hookless-serifed'</code>, <code>cv52 = 12</code></td></tr>
    <tr><td><code>r</code> with hookless body shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-corner-hooked-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-corner-hooked-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'corner-hooked-serifless'</code>, <code>cv52 = 13</code></td></tr>
    <tr><td><code>r</code> with corner-hooked body shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-corner-hooked-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-corner-hooked-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'corner-hooked-top-serifed'</code>, <code>cv52 = 14</code></td></tr>
    <tr><td><code>r</code> with corner-hooked body shape, and serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-corner-hooked-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-corner-hooked-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'corner-hooked-base-serifed'</code>, <code>cv52 = 15</code></td></tr>
    <tr><td><code>r</code> with corner-hooked body shape, and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-corner-hooked-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-corner-hooked-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'corner-hooked-serifed'</code>, <code>cv52 = 16</code></td></tr>
    <tr><td><code>r</code> with corner-hooked body shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-compact-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-compact-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'compact-serifless'</code>, <code>cv52 = 17</code></td></tr>
    <tr><td><code>r</code> with compact body shape (identical to 'hookless' for monospace fonts); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-compact-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-compact-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'compact-top-serifed'</code>, <code>cv52 = 18</code></td></tr>
    <tr><td><code>r</code> with compact body shape (identical to 'hookless' for monospace fonts), and serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-compact-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-compact-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'compact-base-serifed'</code>, <code>cv52 = 19</code></td></tr>
    <tr><td><code>r</code> with compact body shape (identical to 'hookless' for monospace fonts), and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-r-compact-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-r-compact-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>r = 'compact-serifed'</code>, <code>cv52 = 20</code></td></tr>
    <tr><td><code>r</code> with compact body shape (identical to 'hookless' for monospace fonts), and serifs</td></tr>
    </table></details>
  - Styles for `s`
    <details><summary>5 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-s-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-s-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>s = 'serifless'</code>, <code>cv53 = 1</code></td></tr>
    <tr><td>Serifless <code>s</code> (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-s-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-s-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>s = 'unilateral-serifed'</code>, <code>cv53 = 2</code></td></tr>
    <tr><td><code>s</code> with single serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-s-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-s-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>s = 'bilateral-serifed'</code>, <code>cv53 = 3</code></td></tr>
    <tr><td><code>s</code> with serifs at both end (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-s-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-s-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>s = 'unilateral-inward-serifed'</code>, <code>cv53 = 4</code></td></tr>
    <tr><td><code>s</code> with single inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-s-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-s-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>s = 'bilateral-inward-serifed'</code>, <code>cv53 = 5</code></td></tr>
    <tr><td><code>s</code> with inward serifs at both end (default for Slab Italic)</td></tr>
    </table></details>
  - Styles for `t`
    <details><summary>24 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-bent-hook.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-bent-hook.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'bent-hook'</code>, <code>cv54 = 1</code></td></tr>
    <tr><td><code>t</code> with bent hook, and crossbar at both sides of the vertical stem (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-bent-hook-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-bent-hook-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'bent-hook-short-neck'</code>, <code>cv54 = 2</code></td></tr>
    <tr><td><code>t</code> with bent hook, crossbar at both sides of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-bent-hook-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-bent-hook-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'bent-hook-short-neck2'</code>, <code>cv54 = 3</code></td></tr>
    <tr><td><code>t</code> with bent hook, crossbar at both sides of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-bent-hook-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-bent-hook-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'bent-hook-asymmetric'</code>, <code>cv54 = 4</code></td></tr>
    <tr><td><code>t</code> with bent hook, and crossbar at only right side of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-bent-hook-asymmetric-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-bent-hook-asymmetric-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'bent-hook-asymmetric-short-neck'</code>, <code>cv54 = 5</code></td></tr>
    <tr><td><code>t</code> with bent hook, crossbar at only right side of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-bent-hook-asymmetric-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-bent-hook-asymmetric-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'bent-hook-asymmetric-short-neck2'</code>, <code>cv54 = 6</code></td></tr>
    <tr><td><code>t</code> with bent hook, crossbar at only right side of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-flat-hook.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-flat-hook.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'flat-hook'</code>, <code>cv54 = 7</code></td></tr>
    <tr><td><code>t</code> with flat hook, and crossbar at both sides of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-flat-hook-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-flat-hook-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'flat-hook-short-neck'</code>, <code>cv54 = 8</code></td></tr>
    <tr><td><code>t</code> with flat hook, crossbar at both sides of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-flat-hook-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-flat-hook-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'flat-hook-short-neck2'</code>, <code>cv54 = 9</code></td></tr>
    <tr><td><code>t</code> with flat hook, crossbar at both sides of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-flat-hook-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-flat-hook-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'flat-hook-asymmetric'</code>, <code>cv54 = 10</code></td></tr>
    <tr><td><code>t</code> with flat hook, and crossbar at only right side of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-flat-hook-asymmetric-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-flat-hook-asymmetric-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'flat-hook-asymmetric-short-neck'</code>, <code>cv54 = 11</code></td></tr>
    <tr><td><code>t</code> with flat hook, crossbar at only right side of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-flat-hook-asymmetric-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-flat-hook-asymmetric-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'flat-hook-asymmetric-short-neck2'</code>, <code>cv54 = 12</code></td></tr>
    <tr><td><code>t</code> with flat hook, crossbar at only right side of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'diagonal-tailed'</code>, <code>cv54 = 13</code></td></tr>
    <tr><td><code>t</code> with diagonal tail, and crossbar at both sides of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-diagonal-tailed-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-diagonal-tailed-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'diagonal-tailed-short-neck'</code>, <code>cv54 = 14</code></td></tr>
    <tr><td><code>t</code> with diagonal tail, crossbar at both sides of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-diagonal-tailed-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-diagonal-tailed-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'diagonal-tailed-short-neck2'</code>, <code>cv54 = 15</code></td></tr>
    <tr><td><code>t</code> with diagonal tail, crossbar at both sides of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-diagonal-tailed-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-diagonal-tailed-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'diagonal-tailed-asymmetric'</code>, <code>cv54 = 16</code></td></tr>
    <tr><td><code>t</code> with diagonal tail, and crossbar at only right side of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-diagonal-tailed-asymmetric-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-diagonal-tailed-asymmetric-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'diagonal-tailed-asymmetric-short-neck'</code>, <code>cv54 = 17</code></td></tr>
    <tr><td><code>t</code> with diagonal tail, crossbar at only right side of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-diagonal-tailed-asymmetric-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-diagonal-tailed-asymmetric-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'diagonal-tailed-asymmetric-short-neck2'</code>, <code>cv54 = 18</code></td></tr>
    <tr><td><code>t</code> with diagonal tail, crossbar at only right side of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-hookless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-hookless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'hookless'</code>, <code>cv54 = 19</code></td></tr>
    <tr><td><code>t</code> without hook or tail; with crossbar at both sides of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-hookless-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-hookless-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'hookless-short-neck'</code>, <code>cv54 = 20</code></td></tr>
    <tr><td><code>t</code> without hook or tail; with crossbar at both sides of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-hookless-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-hookless-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'hookless-short-neck2'</code>, <code>cv54 = 21</code></td></tr>
    <tr><td><code>t</code> without hook or tail; with crossbar at both sides of the vertical stem, and a more shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-hookless-asymmetric.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-hookless-asymmetric.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'hookless-asymmetric'</code>, <code>cv54 = 22</code></td></tr>
    <tr><td><code>t</code> without hook or tail; with crossbar at only right side of the vertical stem</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-hookless-asymmetric-short-neck.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-hookless-asymmetric-short-neck.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'hookless-asymmetric-short-neck'</code>, <code>cv54 = 23</code></td></tr>
    <tr><td><code>t</code> without hook or tail; with crossbar at only right side of the vertical stem, and a shorter neck</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-t-hookless-asymmetric-short-neck2.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-t-hookless-asymmetric-short-neck2.dark.svg#gh-dark-mode-only" width=32/></td><td><code>t = 'hookless-asymmetric-short-neck2'</code>, <code>cv54 = 24</code></td></tr>
    <tr><td><code>t</code> without hook or tail; with crossbar at only right side of the vertical stem, and a more shorter neck</td></tr>
    </table></details>
  - Styles for `u`
    <details><summary>13 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothed-serifless'</code>, <code>cv55 = 1</code></td></tr>
    <tr><td><code>u</code> with toothed shape; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothed-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothed-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothed-bottom-right-serifed'</code>, <code>cv55 = 2</code></td></tr>
    <tr><td><code>u</code> with toothed shape, and serif at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothed-motion-serifed'</code>, <code>cv55 = 3</code></td></tr>
    <tr><td><code>u</code> with toothed shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothed-serifed'</code>, <code>cv55 = 4</code></td></tr>
    <tr><td><code>u</code> with toothed shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'tailed-serifless'</code>, <code>cv55 = 5</code></td></tr>
    <tr><td><code>u</code> with tailed shape; without serifs (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'tailed-motion-serifed'</code>, <code>cv55 = 6</code></td></tr>
    <tr><td><code>u</code> with tailed shape, and motion serifs at top-left and bottom-right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'tailed-serifed'</code>, <code>cv55 = 7</code></td></tr>
    <tr><td><code>u</code> with tailed shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothless-corner-serifless'</code>, <code>cv55 = 8</code></td></tr>
    <tr><td><code>u</code> with toothless (corner bottom-right) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothless-corner-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothless-corner-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothless-corner-motion-serifed'</code>, <code>cv55 = 9</code></td></tr>
    <tr><td><code>u</code> with toothless (corner bottom-right) shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothless-corner-serifed'</code>, <code>cv55 = 10</code></td></tr>
    <tr><td><code>u</code> with toothless (corner bottom-right) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothless-rounded-serifless'</code>, <code>cv55 = 11</code></td></tr>
    <tr><td><code>u</code> with toothless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothless-rounded-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothless-rounded-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothless-rounded-motion-serifed'</code>, <code>cv55 = 12</code></td></tr>
    <tr><td><code>u</code> with toothless (rounded) shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-u-toothless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-u-toothless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>u = 'toothless-rounded-serifed'</code>, <code>cv55 = 13</code></td></tr>
    <tr><td><code>u</code> with toothless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `v`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'straight-serifless'</code>, <code>cv56 = 1</code></td></tr>
    <tr><td><code>v</code> with straight body; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'straight-motion-serifed'</code>, <code>cv56 = 2</code></td></tr>
    <tr><td><code>v</code> with straight body, and motion serifs (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'straight-serifed'</code>, <code>cv56 = 3</code></td></tr>
    <tr><td><code>v</code> with straight body, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'curly-serifless'</code>, <code>cv56 = 4</code></td></tr>
    <tr><td><code>v</code> with curly body; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'curly-motion-serifed'</code>, <code>cv56 = 5</code></td></tr>
    <tr><td><code>v</code> with curly body, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'curly-serifed'</code>, <code>cv56 = 6</code></td></tr>
    <tr><td><code>v</code> with curly body, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'cursive-serifless'</code>, <code>cv56 = 7</code></td></tr>
    <tr><td><code>v</code> with cursive body; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-v-cursive-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-v-cursive-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>v = 'cursive-serifed'</code>, <code>cv56 = 8</code></td></tr>
    <tr><td><code>v</code> with cursive body, and serifs</td></tr>
    </table></details>
  - Styles for `w`
    <details><summary>23 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-serifless'</code>, <code>cv57 = 1</code></td></tr>
    <tr><td><code>w</code> with standard, straight body; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-motion-serifed'</code>, <code>cv57 = 2</code></td></tr>
    <tr><td><code>w</code> with standard, straight body, and motion serifs (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-serifed'</code>, <code>cv57 = 3</code></td></tr>
    <tr><td><code>w</code> with standard, straight body, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'curly-serifless'</code>, <code>cv57 = 4</code></td></tr>
    <tr><td><code>w</code> with curly body; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'curly-motion-serifed'</code>, <code>cv57 = 5</code></td></tr>
    <tr><td><code>w</code> with curly body, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'curly-serifed'</code>, <code>cv57 = 6</code></td></tr>
    <tr><td><code>w</code> with curly body, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-vertical-sides-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-vertical-sides-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-vertical-sides-serifless'</code>, <code>cv57 = 7</code></td></tr>
    <tr><td><code>w</code> with straight body shape with vertical sides; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-vertical-sides-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-vertical-sides-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-vertical-sides-motion-serifed'</code>, <code>cv57 = 8</code></td></tr>
    <tr><td><code>w</code> with straight body shape with vertical sides, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-vertical-sides-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-vertical-sides-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-vertical-sides-serifed'</code>, <code>cv57 = 9</code></td></tr>
    <tr><td><code>w</code> with straight body shape with vertical sides, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-flat-top-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-flat-top-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-flat-top-serifless'</code>, <code>cv57 = 10</code></td></tr>
    <tr><td><code>w</code> with straight body shape that the middle is forced to be aligned the top; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-flat-top-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-flat-top-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-flat-top-motion-serifed'</code>, <code>cv57 = 11</code></td></tr>
    <tr><td><code>w</code> with straight body shape that the middle is forced to be aligned the top, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-flat-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-flat-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-flat-top-serifed'</code>, <code>cv57 = 12</code></td></tr>
    <tr><td><code>w</code> with straight body shape that the middle is forced to be aligned the top, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-double-v-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-double-v-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-double-v-serifless'</code>, <code>cv57 = 13</code></td></tr>
    <tr><td><code>w</code> with body shape like double V; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-double-v-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-double-v-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-double-v-motion-serifed'</code>, <code>cv57 = 14</code></td></tr>
    <tr><td><code>w</code> with body shape like double V, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-double-v-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-double-v-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-double-v-serifed'</code>, <code>cv57 = 15</code></td></tr>
    <tr><td><code>w</code> with body shape like double V, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-asymmetric-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-asymmetric-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-asymmetric-serifless'</code>, <code>cv57 = 16</code></td></tr>
    <tr><td><code>w</code> with asymmetric shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-asymmetric-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-asymmetric-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-asymmetric-motion-serifed'</code>, <code>cv57 = 17</code></td></tr>
    <tr><td><code>w</code> with asymmetric shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-straight-asymmetric-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-straight-asymmetric-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'straight-asymmetric-serifed'</code>, <code>cv57 = 18</code></td></tr>
    <tr><td><code>w</code> with asymmetric shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'cursive-serifless'</code>, <code>cv57 = 19</code></td></tr>
    <tr><td><code>w</code> with cursive shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-cursive-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-cursive-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'cursive-serifed'</code>, <code>cv57 = 20</code></td></tr>
    <tr><td><code>w</code> with cursive shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-rounded-vertical-sides-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-rounded-vertical-sides-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'rounded-vertical-sides-serifless'</code>, <code>cv57 = 21</code></td></tr>
    <tr><td><code>w</code> with rounded body shape with vertical sides; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-rounded-vertical-sides-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-rounded-vertical-sides-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'rounded-vertical-sides-motion-serifed'</code>, <code>cv57 = 22</code></td></tr>
    <tr><td><code>w</code> with rounded body shape with vertical sides, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-w-rounded-vertical-sides-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-w-rounded-vertical-sides-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>w = 'rounded-vertical-sides-serifed'</code>, <code>cv57 = 23</code></td></tr>
    <tr><td><code>w</code> with rounded body shape with vertical sides, and serifs</td></tr>
    </table></details>
  - Styles for `x`
    <details><summary>14 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'straight-serifless'</code>, <code>cv58 = 1</code></td></tr>
    <tr><td><code>x</code> with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-straight-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-straight-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'straight-unilateral-motion-serifed'</code>, <code>cv58 = 2</code></td></tr>
    <tr><td><code>x</code> with straight shape, and motion serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-straight-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-straight-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'straight-bilateral-motion-serifed'</code>, <code>cv58 = 3</code></td></tr>
    <tr><td><code>x</code> with straight shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'straight-serifed'</code>, <code>cv58 = 4</code></td></tr>
    <tr><td><code>x</code> with straight shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'curly-serifless'</code>, <code>cv58 = 5</code></td></tr>
    <tr><td><code>x</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-curly-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-curly-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'curly-unilateral-motion-serifed'</code>, <code>cv58 = 6</code></td></tr>
    <tr><td><code>x</code> with curly shape, and motion serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-curly-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-curly-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'curly-bilateral-motion-serifed'</code>, <code>cv58 = 7</code></td></tr>
    <tr><td><code>x</code> with curly shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'curly-serifed'</code>, <code>cv58 = 8</code></td></tr>
    <tr><td><code>x</code> with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-semi-chancery-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-semi-chancery-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'semi-chancery-straight-serifless'</code>, <code>cv58 = 9</code></td></tr>
    <tr><td><code>x</code> with Semi-chancery shape with straight counter-leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-semi-chancery-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-semi-chancery-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'semi-chancery-straight-serifed'</code>, <code>cv58 = 10</code></td></tr>
    <tr><td><code>x</code> with Semi-chancery shape with straight counter-leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-semi-chancery-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-semi-chancery-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'semi-chancery-curly-serifless'</code>, <code>cv58 = 11</code></td></tr>
    <tr><td><code>x</code> with Semi-chancery shape with curly counter-leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-semi-chancery-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-semi-chancery-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'semi-chancery-curly-serifed'</code>, <code>cv58 = 12</code></td></tr>
    <tr><td><code>x</code> with Semi-chancery shape with curly counter-leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-chancery.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-chancery.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'chancery'</code>, <code>cv58 = 13</code></td></tr>
    <tr><td><code>x</code> with Chancery shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-x-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-x-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>x = 'cursive'</code>, <code>cv58 = 14</code></td></tr>
    <tr><td><code>x</code> with cursive shape (default for Slab Italic)</td></tr>
    </table></details>
  - Styles for `y`
    <details><summary>18 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'straight-serifless'</code>, <code>cv59 = 1</code></td></tr>
    <tr><td><code>y</code> with straight shape; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'straight-motion-serifed'</code>, <code>cv59 = 2</code></td></tr>
    <tr><td><code>y</code> with straight shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'straight-serifed'</code>, <code>cv59 = 3</code></td></tr>
    <tr><td><code>y</code> with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-straight-turn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-straight-turn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'straight-turn-serifless'</code>, <code>cv59 = 4</code></td></tr>
    <tr><td><code>y</code> with straight shape, and a tail turns leftward; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-straight-turn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-straight-turn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'straight-turn-motion-serifed'</code>, <code>cv59 = 5</code></td></tr>
    <tr><td><code>y</code> with straight shape, a tail turns leftward, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-straight-turn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-straight-turn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'straight-turn-serifed'</code>, <code>cv59 = 6</code></td></tr>
    <tr><td><code>y</code> with straight shape, a tail turns leftward, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'curly-serifless'</code>, <code>cv59 = 7</code></td></tr>
    <tr><td><code>y</code> with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'curly-motion-serifed'</code>, <code>cv59 = 8</code></td></tr>
    <tr><td><code>y</code> with curly shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'curly-serifed'</code>, <code>cv59 = 9</code></td></tr>
    <tr><td><code>y</code> with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-curly-turn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-curly-turn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'curly-turn-serifless'</code>, <code>cv59 = 10</code></td></tr>
    <tr><td><code>y</code> with curly shape, and a tail turns leftward; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-curly-turn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-curly-turn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'curly-turn-motion-serifed'</code>, <code>cv59 = 11</code></td></tr>
    <tr><td><code>y</code> with curly shape, a tail turns leftward, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-curly-turn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-curly-turn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'curly-turn-serifed'</code>, <code>cv59 = 12</code></td></tr>
    <tr><td><code>y</code> with curly shape, a tail turns leftward, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'cursive-serifless'</code>, <code>cv59 = 13</code></td></tr>
    <tr><td><code>y</code> with cursive shape; without serifs (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-cursive-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-cursive-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'cursive-motion-serifed'</code>, <code>cv59 = 14</code></td></tr>
    <tr><td><code>y</code> with cursive shape, and motion serifs (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-cursive-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-cursive-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'cursive-serifed'</code>, <code>cv59 = 15</code></td></tr>
    <tr><td><code>y</code> with cursive shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-cursive-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-cursive-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'cursive-flat-hook-serifless'</code>, <code>cv59 = 16</code></td></tr>
    <tr><td><code>y</code> with cursive shape, and a flat terminal hook; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-cursive-flat-hook-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-cursive-flat-hook-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'cursive-flat-hook-motion-serifed'</code>, <code>cv59 = 17</code></td></tr>
    <tr><td><code>y</code> with cursive shape, a flat terminal hook, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-y-cursive-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-y-cursive-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>y = 'cursive-flat-hook-serifed'</code>, <code>cv59 = 18</code></td></tr>
    <tr><td><code>y</code> with cursive shape, a flat terminal hook, and serifs</td></tr>
    </table></details>
  - Styles for `z`
    <details><summary>27 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-serifless'</code>, <code>cv60 = 1</code></td></tr>
    <tr><td><code>z</code> with straight body shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-serifless-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-serifless-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-serifless-with-crossbar'</code>, <code>cv60 = 2</code></td></tr>
    <tr><td><code>z</code> with straight body shape, and a diagonal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-serifless-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-serifless-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-serifless-with-horizontal-crossbar'</code>, <code>cv60 = 3</code></td></tr>
    <tr><td><code>z</code> with straight body shape, and a horizontal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-top-serifed'</code>, <code>cv60 = 4</code></td></tr>
    <tr><td><code>z</code> with straight body shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-top-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-top-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-top-serifed-with-crossbar'</code>, <code>cv60 = 5</code></td></tr>
    <tr><td><code>z</code> with straight body shape, serifs at top, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-top-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-top-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-top-serifed-with-horizontal-crossbar'</code>, <code>cv60 = 6</code></td></tr>
    <tr><td><code>z</code> with straight body shape, serifs at top, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-bottom-serifed'</code>, <code>cv60 = 7</code></td></tr>
    <tr><td><code>z</code> with straight body shape, and serifs at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-bottom-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-bottom-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-bottom-serifed-with-crossbar'</code>, <code>cv60 = 8</code></td></tr>
    <tr><td><code>z</code> with straight body shape, serifs at bottom, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-bottom-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-bottom-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-bottom-serifed-with-horizontal-crossbar'</code>, <code>cv60 = 9</code></td></tr>
    <tr><td><code>z</code> with straight body shape, serifs at bottom, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-serifed'</code>, <code>cv60 = 10</code></td></tr>
    <tr><td><code>z</code> with straight body shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-serifed-with-crossbar'</code>, <code>cv60 = 11</code></td></tr>
    <tr><td><code>z</code> with straight body shape, serifs, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-straight-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-straight-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'straight-serifed-with-horizontal-crossbar'</code>, <code>cv60 = 12</code></td></tr>
    <tr><td><code>z</code> with straight body shape, serifs, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-serifless'</code>, <code>cv60 = 13</code></td></tr>
    <tr><td><code>z</code> with curly body shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-serifless-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-serifless-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-serifless-with-crossbar'</code>, <code>cv60 = 14</code></td></tr>
    <tr><td><code>z</code> with curly body shape, and a diagonal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-serifless-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-serifless-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-serifless-with-horizontal-crossbar'</code>, <code>cv60 = 15</code></td></tr>
    <tr><td><code>z</code> with curly body shape, and a horizontal crossbar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-top-serifed'</code>, <code>cv60 = 16</code></td></tr>
    <tr><td><code>z</code> with curly body shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-top-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-top-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-top-serifed-with-crossbar'</code>, <code>cv60 = 17</code></td></tr>
    <tr><td><code>z</code> with curly body shape, serifs at top, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-top-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-top-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-top-serifed-with-horizontal-crossbar'</code>, <code>cv60 = 18</code></td></tr>
    <tr><td><code>z</code> with curly body shape, serifs at top, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-bottom-serifed'</code>, <code>cv60 = 19</code></td></tr>
    <tr><td><code>z</code> with curly body shape, and serifs at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-bottom-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-bottom-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-bottom-serifed-with-crossbar'</code>, <code>cv60 = 20</code></td></tr>
    <tr><td><code>z</code> with curly body shape, serifs at bottom, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-bottom-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-bottom-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-bottom-serifed-with-horizontal-crossbar'</code>, <code>cv60 = 21</code></td></tr>
    <tr><td><code>z</code> with curly body shape, serifs at bottom, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-serifed'</code>, <code>cv60 = 22</code></td></tr>
    <tr><td><code>z</code> with curly body shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-serifed-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-serifed-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-serifed-with-crossbar'</code>, <code>cv60 = 23</code></td></tr>
    <tr><td><code>z</code> with curly body shape, serifs, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-curly-serifed-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-curly-serifed-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'curly-serifed-with-horizontal-crossbar'</code>, <code>cv60 = 24</code></td></tr>
    <tr><td><code>z</code> with curly body shape, serifs, and a horizontal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'cursive'</code>, <code>cv60 = 25</code></td></tr>
    <tr><td><code>z</code> with cursive body shape (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-cursive-with-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-cursive-with-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'cursive-with-crossbar'</code>, <code>cv60 = 26</code></td></tr>
    <tr><td><code>z</code> with cursive body shape, and a diagonal crossbar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-z-cursive-with-horizontal-crossbar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-z-cursive-with-horizontal-crossbar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>z = 'cursive-with-horizontal-crossbar'</code>, <code>cv60 = 27</code></td></tr>
    <tr><td><code>z</code> with cursive body shape, and a horizontal crossbar</td></tr>
    </table></details>
  - Styles for `ẞ` (Capital Eszet)
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'rounded-serifless'</code>, <code>cv61 = 1</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with rounded top; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'rounded-serifed'</code>, <code>cv61 = 2</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with rounded top, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-flat-top-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-flat-top-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'flat-top-serifless'</code>, <code>cv61 = 3</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with flat top; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-flat-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-flat-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'flat-top-serifed'</code>, <code>cv61 = 4</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with flat top, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'corner-serifless'</code>, <code>cv61 = 5</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with top-left corner; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-corner-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-corner-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'corner-bottom-serifed'</code>, <code>cv61 = 6</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with top-left corner, and bottom serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-corner-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-corner-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'corner-motion-serifed'</code>, <code>cv61 = 7</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with top-left corner, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-eszet-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-eszet-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-eszet = 'corner-serifed'</code>, <code>cv61 = 8</code></td></tr>
    <tr><td>Capital Eszet (<code>ẞ</code>) with top-left corner, and serifs</td></tr>
    </table></details>
  - Styles for `ſ` (Long-S)
    <details><summary>30 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-serifless'</code>, <code>cv62 = 1</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-middle-serifed'</code>, <code>cv62 = 2</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-middle-serifed-xh'</code>, <code>cv62 = 3</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-bottom-serifed'</code>, <code>cv62 = 4</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and bottom serif (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-double-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-double-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-double-serifed'</code>, <code>cv62 = 5</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and bottom and middle serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-double-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-double-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-double-serifed-xh'</code>, <code>cv62 = 6</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and bottom and middle serifs at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-descending.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-descending.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-descending'</code>, <code>cv62 = 7</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and terminal descends baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-descending-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-descending-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-descending-middle-serifed'</code>, <code>cv62 = 8</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, terminal descends baseline, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-descending-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-descending-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-descending-middle-serifed-xh'</code>, <code>cv62 = 9</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, terminal descends baseline, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-tailed'</code>, <code>cv62 = 10</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and terminal has a tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-tailed-middle-serifed'</code>, <code>cv62 = 11</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, terminal has a tail, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-tailed-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-tailed-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-tailed-middle-serifed-xh'</code>, <code>cv62 = 12</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, terminal has a tail, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-diagonal-tailed'</code>, <code>cv62 = 13</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, and terminal has a diagonal tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-diagonal-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-diagonal-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-diagonal-tailed-middle-serifed'</code>, <code>cv62 = 14</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, terminal has a diagonal tail, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-bent-hook-diagonal-tailed-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-bent-hook-diagonal-tailed-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'bent-hook-diagonal-tailed-middle-serifed-xh'</code>, <code>cv62 = 15</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with bending top hook, terminal has a diagonal tail, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-serifless'</code>, <code>cv62 = 16</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-middle-serifed'</code>, <code>cv62 = 17</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-middle-serifed-xh'</code>, <code>cv62 = 18</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-bottom-serifed'</code>, <code>cv62 = 19</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and bottom serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-double-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-double-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-double-serifed'</code>, <code>cv62 = 20</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and bottom and middle serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-double-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-double-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-double-serifed-xh'</code>, <code>cv62 = 21</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and bottom and middle serifs at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-descending.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-descending.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-descending'</code>, <code>cv62 = 22</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and terminal descends baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-descending-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-descending-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-descending-middle-serifed'</code>, <code>cv62 = 23</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, terminal descends baseline, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-descending-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-descending-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-descending-middle-serifed-xh'</code>, <code>cv62 = 24</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, terminal descends baseline, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-tailed'</code>, <code>cv62 = 25</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and terminal has a tail; without serifs (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-tailed-middle-serifed'</code>, <code>cv62 = 26</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, terminal has a tail, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-tailed-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-tailed-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-tailed-middle-serifed-xh'</code>, <code>cv62 = 27</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, terminal has a tail, and middle serif at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-diagonal-tailed'</code>, <code>cv62 = 28</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, and terminal has a diagonal tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-diagonal-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-diagonal-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-diagonal-tailed-middle-serifed'</code>, <code>cv62 = 29</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, terminal has a diagonal tail, and middle serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-long-s-flat-hook-diagonal-tailed-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-long-s-flat-hook-diagonal-tailed-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>long-s = 'flat-hook-diagonal-tailed-middle-serifed-xh'</code>, <code>cv62 = 30</code></td></tr>
    <tr><td>Long S (<code>ſ</code>) with flat top hook, terminal has a diagonal tail, and middle serif at x-height</td></tr>
    </table></details>
  - Styles for `ß` (Eszet)
    <details><summary>40 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-serifless'</code>, <code>cv63 = 1</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-middle-serifed'</code>, <code>cv63 = 2</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-bottom-serifed'</code>, <code>cv63 = 3</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-dual-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-dual-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-dual-serifed'</code>, <code>cv63 = 4</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, and serif at middle and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-descending-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-descending-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-descending-serifless'</code>, <code>cv63 = 5</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, and terminal descends baseline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-descending-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-descending-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-descending-middle-serifed'</code>, <code>cv63 = 6</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, terminal descends baseline, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-tailed-serifless'</code>, <code>cv63 = 7</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, and terminal containing tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-tailed-middle-serifed'</code>, <code>cv63 = 8</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional, Fraktur-like shape, terminal containing tail, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-serifless'</code>, <code>cv63 = 9</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-middle-serifed'</code>, <code>cv63 = 10</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-bottom-serifed'</code>, <code>cv63 = 11</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-dual-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-dual-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-dual-serifed'</code>, <code>cv63 = 12</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), and serif at middle and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-descending-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-descending-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-descending-serifless'</code>, <code>cv63 = 13</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), and terminal descends baseline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-descending-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-descending-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-descending-middle-serifed'</code>, <code>cv63 = 14</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), terminal descends baseline, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-tailed-serifless'</code>, <code>cv63 = 15</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), and terminal containing tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-traditional-flat-hook-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-traditional-flat-hook-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'traditional-flat-hook-tailed-middle-serifed'</code>, <code>cv63 = 16</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with traditional Fraktur-like shape (containing a flat top hook), terminal containing tail, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-serifless'</code>, <code>cv63 = 17</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-middle-serifed'</code>, <code>cv63 = 18</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-middle-serifed-xh'</code>, <code>cv63 = 19</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and serif at middle at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-bottom-serifed'</code>, <code>cv63 = 20</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and serif at bottom (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-dual-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-dual-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-dual-serifed'</code>, <code>cv63 = 21</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and serif at middle and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-dual-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-dual-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-dual-serifed-xh'</code>, <code>cv63 = 22</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and serif at middle (x-height) and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-descending-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-descending-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-descending-serifless'</code>, <code>cv63 = 23</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and terminal descends baseline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-descending-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-descending-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-descending-middle-serifed'</code>, <code>cv63 = 24</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, terminal descends baseline, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-descending-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-descending-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-descending-middle-serifed-xh'</code>, <code>cv63 = 25</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, terminal descends baseline, and serif at middle at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-tailed-serifless'</code>, <code>cv63 = 26</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, and terminal containing tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-tailed-middle-serifed'</code>, <code>cv63 = 27</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, terminal containing tail, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-sulzbacher-tailed-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-sulzbacher-tailed-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'sulzbacher-tailed-middle-serifed-xh'</code>, <code>cv63 = 28</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with more modern, beta-like shape, terminal containing tail, and serif at middle at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-serifless'</code>, <code>cv63 = 29</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-middle-serifed'</code>, <code>cv63 = 30</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-middle-serifed-xh'</code>, <code>cv63 = 31</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and serif at middle at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-bottom-serifed'</code>, <code>cv63 = 32</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-dual-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-dual-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-dual-serifed'</code>, <code>cv63 = 33</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and serif at middle and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-dual-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-dual-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-dual-serifed-xh'</code>, <code>cv63 = 34</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and serif at middle (x-height) and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-descending-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-descending-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-descending-serifless'</code>, <code>cv63 = 35</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and terminal descends baseline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-descending-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-descending-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-descending-middle-serifed'</code>, <code>cv63 = 36</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, terminal descends baseline, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-descending-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-descending-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-descending-middle-serifed-xh'</code>, <code>cv63 = 37</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, terminal descends baseline, and serif at middle at x-height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-tailed-serifless'</code>, <code>cv63 = 38</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, and terminal containing tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-tailed-middle-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-tailed-middle-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-tailed-middle-serifed'</code>, <code>cv63 = 39</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, terminal containing tail, and serif at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-eszet-longs-s-lig-tailed-middle-serifed-xh.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-eszet-longs-s-lig-tailed-middle-serifed-xh.dark.svg#gh-dark-mode-only" width=32/></td><td><code>eszet = 'longs-s-lig-tailed-middle-serifed-xh'</code>, <code>cv63 = 40</code></td></tr>
    <tr><td>Eszet (<code>ß</code>) with ligature of long-S (<code>ſ</code>) and <code>s</code>, terminal containing tail, and serif at middle at x-height</td></tr>
    </table></details>
  - Styles for `ð` (Lowercase Eth (`ð`))
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-eth-straight-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-eth-straight-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-eth = 'straight-bar'</code>, <code>cv64 = 1</code></td></tr>
    <tr><td>Lowercase Eth (<code>ð</code>) with a straight bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-eth-curly-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-eth-curly-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-eth = 'curly-bar'</code>, <code>cv64 = 2</code></td></tr>
    <tr><td>Lowercase Eth (<code>ð</code>) with a curly bar (default)</td></tr>
    </table></details>
  - Styles for `Þ` (Capital Thorn (`Þ`))
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-thorn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-thorn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-thorn = 'serifless'</code>, <code>cv65 = 1</code></td></tr>
    <tr><td>Capital Thorn (<code>Þ</code>) without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-thorn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-thorn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-thorn = 'motion-serifed'</code>, <code>cv65 = 2</code></td></tr>
    <tr><td>Capital Thorn (<code>Þ</code>) with motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-thorn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-thorn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-thorn = 'serifed'</code>, <code>cv65 = 3</code></td></tr>
    <tr><td>Capital Thorn (<code>Þ</code>) with serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `þ` (Lowercase Thorn (`þ`))
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-thorn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-thorn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-thorn = 'serifless'</code>, <code>cv66 = 1</code></td></tr>
    <tr><td>Lowercase Thorn (<code>þ</code>) without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-thorn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-thorn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-thorn = 'motion-serifed'</code>, <code>cv66 = 2</code></td></tr>
    <tr><td>Lowercase Thorn (<code>þ</code>) with motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-thorn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-thorn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-thorn = 'serifed'</code>, <code>cv66 = 3</code></td></tr>
    <tr><td>Lowercase Thorn (<code>þ</code>) with serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `α` (Greek lower Alpha)
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-crossing.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-crossing.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'crossing'</code>, <code>cv67 = 1</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with cross-like shape at right (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred'</code>, <code>cv67 = 2</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-serifed'</code>, <code>cv67 = 3</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-double-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-double-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-double-serifed'</code>, <code>cv67 = 4</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, and serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-tailed'</code>, <code>cv67 = 5</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-tailed-serifed'</code>, <code>cv67 = 6</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, and curly tail; with serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-earless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-earless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-earless-corner'</code>, <code>cv67 = 7</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, and earless (cornered top-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-earless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-earless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-earless-corner-serifed'</code>, <code>cv67 = 8</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, earless (cornered top-right), and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-earless-corner-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-earless-corner-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-earless-corner-tailed'</code>, <code>cv67 = 9</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, earless (cornered top-right), and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-earless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-earless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-earless-rounded'</code>, <code>cv67 = 10</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, and earless (rounded top-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-earless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-earless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-earless-rounded-serifed'</code>, <code>cv67 = 11</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, earless (rounded top-right), and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-alpha-barred-earless-rounded-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-alpha-barred-earless-rounded-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-alpha = 'barred-earless-rounded-tailed'</code>, <code>cv67 = 12</code></td></tr>
    <tr><td>Greek lower Alpha (<code>α</code>) with straight right bar, earless (rounded top-right), and curly tail</td></tr>
    </table></details>
  - Styles for `β` (Greek lower Beta)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-beta-standard.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-beta-standard.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-beta = 'standard'</code>, <code>VXAC = 1</code></td></tr>
    <tr><td>Greek lower Beta (<code>β</code>) with standard shape (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-beta-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-beta-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-beta = 'cursive'</code>, <code>VXAC = 2</code></td></tr>
    <tr><td>Greek lower Beta (<code>β</code>) with cursive shape</td></tr>
    </table></details>
  - Styles for `Γ` (Greek capital Gamma)
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-gamma-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-gamma-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-gamma = 'serifless'</code>, <code>cv68 = 1</code></td></tr>
    <tr><td>Greek capital Gamma (<code>Γ</code>) without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-gamma-top-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-gamma-top-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-gamma = 'top-right-serifed'</code>, <code>cv68 = 2</code></td></tr>
    <tr><td>Greek capital Gamma (<code>Γ</code>) with serifs at top right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-gamma-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-gamma-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-gamma = 'bottom-serifed'</code>, <code>cv68 = 3</code></td></tr>
    <tr><td>Greek capital Gamma (<code>Γ</code>) with bottom serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-gamma-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-gamma-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-gamma = 'serifed'</code>, <code>cv68 = 4</code></td></tr>
    <tr><td>Greek capital Gamma (<code>Γ</code>) with motion serifs at top and bottom (default for Slab)</td></tr>
    </table></details>
  - Styles for `γ` (Greek lower Gamma)
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-gamma-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-gamma-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-gamma = 'straight'</code>, <code>VXAD = 1</code></td></tr>
    <tr><td>Greek lower Gamma (<code>γ</code>) with straight shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-gamma-curly.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-gamma-curly.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-gamma = 'curly'</code>, <code>VXAD = 2</code></td></tr>
    <tr><td>Greek lower Gamma (<code>γ</code>) with curly shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-gamma-casual.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-gamma-casual.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-gamma = 'casual'</code>, <code>VXAD = 3</code></td></tr>
    <tr><td>Greek lower Gamma (<code>γ</code>) with casual shape (default)</td></tr>
    </table></details>
  - Styles for `Δ` (Greek capital Delta (`Δ`))
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-delta-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-delta-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-delta = 'straight'</code>, <code>cv69 = 1</code></td></tr>
    <tr><td>Standard, straight Greek capital Delta (<code>Δ</code>) (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-delta-curly.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-delta-curly.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-delta = 'curly'</code>, <code>cv69 = 2</code></td></tr>
    <tr><td>Slightly curly Greek capital Delta (<code>Δ</code>), like Iosevka 2.x</td></tr>
    </table></details>
  - Styles for `δ` (Greek lower Delta)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-delta-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-delta-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-delta = 'rounded'</code>, <code>cv70 = 1</code></td></tr>
    <tr><td>Greek lower Delta (<code>δ</code>) with rounded top (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-delta-flat-top.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-delta-flat-top.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-delta = 'flat-top'</code>, <code>cv70 = 2</code></td></tr>
    <tr><td>Greek lower Delta (<code>δ</code>) with flat top</td></tr>
    </table></details>
  - Styles for `ι` (Greek lower Iota)
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-tailless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-tailless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'tailless'</code>, <code>cv71 = 1</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) like a straight line</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-tailless-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-tailless-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'tailless-serifed'</code>, <code>cv71 = 2</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) like a straight line with top serif</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-hooky-bottom.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-hooky-bottom.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'hooky-bottom'</code>, <code>cv71 = 3</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with a sharp-turning horizontal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-zshaped.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-zshaped.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'zshaped'</code>, <code>cv71 = 4</code></td></tr>
    <tr><td>Z-shaped Greek lower Iota (<code>ι</code>)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'tailed'</code>, <code>cv71 = 5</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'tailed-serifed'</code>, <code>cv71 = 6</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with top serif and curly tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'flat-tailed'</code>, <code>cv71 = 7</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with a curly-then-flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-serifed-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-serifed-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'serifed-flat-tailed'</code>, <code>cv71 = 8</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with top serif and a curly-then-flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'diagonal-tailed'</code>, <code>cv71 = 9</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with a diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-serifed-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-serifed-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'serifed-diagonal-tailed'</code>, <code>cv71 = 10</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with top serif and a diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'semi-tailed'</code>, <code>cv71 = 11</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with a slightly curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-iota-serifed-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-iota-serifed-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-iota = 'serifed-semi-tailed'</code>, <code>cv71 = 12</code></td></tr>
    <tr><td>Greek lower Iota (<code>ι</code>) with top serif and a slightly curly tail (default for Upright)</td></tr>
    </table></details>
  - Styles for `Λ` (Greek capital Lambda (`Λ`))
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'straight-serifless'</code>, <code>cv72 = 1</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-straight-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-straight-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'straight-top-serifed'</code>, <code>cv72 = 2</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with straight shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-straight-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-straight-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'straight-base-serifed'</code>, <code>cv72 = 3</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with straight shape, and serifs at base (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-straight-tri-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-straight-tri-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'straight-tri-serifed'</code>, <code>cv72 = 4</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with straight shape, and serifs at both top and base</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'curly-serifless'</code>, <code>cv72 = 5</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-curly-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-curly-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'curly-top-serifed'</code>, <code>cv72 = 6</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with curly shape, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-curly-base-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-curly-base-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'curly-base-serifed'</code>, <code>cv72 = 7</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with curly shape, and serifs at base</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-capital-lambda-curly-tri-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-capital-lambda-curly-tri-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>capital-lambda = 'curly-tri-serifed'</code>, <code>cv72 = 8</code></td></tr>
    <tr><td>Greek capital Lambda (<code>Λ</code>) with curly shape, and serifs at both top and base</td></tr>
    </table></details>
  - Styles for `λ` (Greek lower Lambda)
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-lambda-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-lambda-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-lambda = 'straight'</code>, <code>cv73 = 1</code></td></tr>
    <tr><td>More-straight Greek lower Lambda (<code>λ</code>) (default for Sans Upright, Sans Italic, Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-lambda-straight-turn.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-lambda-straight-turn.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-lambda = 'straight-turn'</code>, <code>cv73 = 2</code></td></tr>
    <tr><td>Greek lower Lambda (<code>λ</code>) with straight upper and a tail turns leftward (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-lambda-tailed-turn.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-lambda-tailed-turn.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-lambda = 'tailed-turn'</code>, <code>cv73 = 3</code></td></tr>
    <tr><td>More curly Greek lower Lambda (<code>λ</code>), with a tail turns leftward at top and a tail turns right at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-lambda-curly.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-lambda-curly.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-lambda = 'curly'</code>, <code>cv73 = 4</code></td></tr>
    <tr><td>More curly Greek lower Lambda (<code>λ</code>), like Iosevka 2.x</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-lambda-curly-turn.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-lambda-curly-turn.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-lambda = 'curly-turn'</code>, <code>cv73 = 5</code></td></tr>
    <tr><td>More curly Greek lower Lambda (<code>λ</code>), like Iosevka 2.x, with a tail turns leftward</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-lambda-curly-tailed-turn.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-lambda-curly-tailed-turn.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-lambda = 'curly-tailed-turn'</code>, <code>cv73 = 6</code></td></tr>
    <tr><td>More curly Greek lower Lambda (<code>λ</code>), with a tail turns leftward at top, a tail turns right at bottom-right, and curly bottom-left leg</td></tr>
    </table></details>
  - Styles for `μ` (Greek lower Mu)
    <details><summary>13 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothed-serifless'</code>, <code>cv74 = 1</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothed shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothed-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothed-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothed-bottom-right-serifed'</code>, <code>cv74 = 2</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothed shape, and serif at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothed-motion-serifed'</code>, <code>cv74 = 3</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothed shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothed-serifed'</code>, <code>cv74 = 4</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothed shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'tailed-serifless'</code>, <code>cv74 = 5</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with tailed shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'tailed-motion-serifed'</code>, <code>cv74 = 6</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with tailed shape, and motion serifs at top-left and bottom-right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'tailed-serifed'</code>, <code>cv74 = 7</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with tailed shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothless-corner-serifless'</code>, <code>cv74 = 8</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothless (corner bottom-right) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothless-corner-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothless-corner-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothless-corner-motion-serifed'</code>, <code>cv74 = 9</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothless (corner bottom-right) shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothless-corner-serifed'</code>, <code>cv74 = 10</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothless (corner bottom-right) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothless-rounded-serifless'</code>, <code>cv74 = 11</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothless-rounded-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothless-rounded-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothless-rounded-motion-serifed'</code>, <code>cv74 = 12</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothless (rounded) shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-mu-toothless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-mu-toothless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-mu = 'toothless-rounded-serifed'</code>, <code>cv74 = 13</code></td></tr>
    <tr><td>Greek lower Mu (<code>μ</code>) with toothless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `ν` (Greek lower Nu)
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-nu-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-nu-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-nu = 'straight'</code>, <code>VXAE = 1</code></td></tr>
    <tr><td>Greek lower Nu (<code>ν</code>) with straight shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-nu-curly.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-nu-curly.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-nu = 'curly'</code>, <code>VXAE = 2</code></td></tr>
    <tr><td>Greek lower Nu (<code>ν</code>) with curly shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-nu-casual.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-nu-casual.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-nu = 'casual'</code>, <code>VXAE = 3</code></td></tr>
    <tr><td>Greek lower Nu (<code>ν</code>) with casual shape (default)</td></tr>
    </table></details>
  - Styles for `ξ` (Greek lower Xi)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-xi-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-xi-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-xi = 'rounded'</code>, <code>cv75 = 1</code></td></tr>
    <tr><td>Greek lower Xi (<code>ξ</code>) with rounded top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-xi-flat-top.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-xi-flat-top.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-xi = 'flat-top'</code>, <code>cv75 = 2</code></td></tr>
    <tr><td>Greek lower Xi (<code>ξ</code>) with flat top (default)</td></tr>
    </table></details>
  - Styles for `π` (Greek lower Pi)
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-pi-tailless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-pi-tailless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-pi = 'tailless'</code>, <code>cv76 = 1</code></td></tr>
    <tr><td>Greek lower Pi (<code>π</code>) with a tailless shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-pi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-pi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-pi = 'tailed'</code>, <code>cv76 = 2</code></td></tr>
    <tr><td>Greek lower Pi (<code>π</code>) with a tailed shape (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-pi-small-capital.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-pi-small-capital.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-pi = 'small-capital'</code>, <code>cv76 = 3</code></td></tr>
    <tr><td>Greek lower Pi (<code>π</code>) with a small-capital shape</td></tr>
    </table></details>
  - Styles for `τ` (Greek lower Tau)
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-tau-tailless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-tau-tailless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-tau = 'tailless'</code>, <code>cv77 = 1</code></td></tr>
    <tr><td>Greek lower Tau (<code>τ</code>) with a tailless shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-tau-short-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-tau-short-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-tau = 'short-tailed'</code>, <code>cv77 = 2</code></td></tr>
    <tr><td>Greek lower Tau (<code>τ</code>) with a very short tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-tau-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-tau-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-tau = 'tailed'</code>, <code>cv77 = 3</code></td></tr>
    <tr><td>Greek lower Tau (<code>τ</code>) with curly tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-tau-flat-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-tau-flat-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-tau = 'flat-tailed'</code>, <code>cv77 = 4</code></td></tr>
    <tr><td>Greek lower Tau (<code>τ</code>) with a flat tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-tau-diagonal-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-tau-diagonal-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-tau = 'diagonal-tailed'</code>, <code>cv77 = 5</code></td></tr>
    <tr><td>Greek lower Tau (<code>τ</code>) with a diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-tau-semi-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-tau-semi-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-tau = 'semi-tailed'</code>, <code>cv77 = 6</code></td></tr>
    <tr><td>Greek lower Tau (<code>τ</code>) with a slightly curly tail (default for Upright)</td></tr>
    </table></details>
  - Styles for `υ` (Greek lower Upsilon)
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-upsilon-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-upsilon-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-upsilon = 'straight-serifless'</code>, <code>VXAF = 1</code></td></tr>
    <tr><td>Greek lower Upsilon (<code>υ</code>) with straight shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-upsilon-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-upsilon-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-upsilon = 'straight-serifed'</code>, <code>VXAF = 2</code></td></tr>
    <tr><td>Greek lower Upsilon (<code>υ</code>) with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-upsilon-casual-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-upsilon-casual-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-upsilon = 'casual-serifless'</code>, <code>VXAF = 3</code></td></tr>
    <tr><td>Greek lower Upsilon (<code>υ</code>) with casual shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-upsilon-casual-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-upsilon-casual-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-upsilon = 'casual-serifed'</code>, <code>VXAF = 4</code></td></tr>
    <tr><td>Greek lower Upsilon (<code>υ</code>) with casual shape, and serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `φ` (Greek lower Phi)
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-phi-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-phi-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-phi = 'straight'</code>, <code>VXAG = 1</code></td></tr>
    <tr><td>Greek lower Phi (<code>φ</code>) with straight shape</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-phi-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-phi-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-phi = 'cursive'</code>, <code>VXAG = 2</code></td></tr>
    <tr><td>Greek lower Phi (<code>φ</code>) with cursive shape (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-phi-neo-hellenic.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-phi-neo-hellenic.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-phi = 'neo-hellenic'</code>, <code>VXAG = 3</code></td></tr>
    <tr><td>Greek lower Phi (<code>φ</code>) with neo-hellenic shape</td></tr>
    </table></details>
  - Styles for `χ` (Greek lower Chi)
    <details><summary>13 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'straight-serifless'</code>, <code>cv78 = 1</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-straight-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-straight-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'straight-unilateral-motion-serifed'</code>, <code>cv78 = 2</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with straight shape, and motion serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-straight-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-straight-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'straight-bilateral-motion-serifed'</code>, <code>cv78 = 3</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with straight shape, and motion serifs at top-left and bottom-right (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'straight-serifed'</code>, <code>cv78 = 4</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'curly-serifless'</code>, <code>cv78 = 5</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-curly-unilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-curly-unilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'curly-unilateral-motion-serifed'</code>, <code>cv78 = 6</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with curly shape, and motion serifs at top-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-curly-bilateral-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-curly-bilateral-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'curly-bilateral-motion-serifed'</code>, <code>cv78 = 7</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with curly shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'curly-serifed'</code>, <code>cv78 = 8</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-semi-chancery-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-semi-chancery-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'semi-chancery-straight-serifless'</code>, <code>cv78 = 9</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with Semi-chancery shape with straight counter-leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-semi-chancery-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-semi-chancery-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'semi-chancery-straight-serifed'</code>, <code>cv78 = 10</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with Semi-chancery shape with straight counter-leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-semi-chancery-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-semi-chancery-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'semi-chancery-curly-serifless'</code>, <code>cv78 = 11</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with Semi-chancery shape with curly counter-leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-semi-chancery-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-semi-chancery-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'semi-chancery-curly-serifed'</code>, <code>cv78 = 12</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with Semi-chancery shape with curly counter-leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-chi-chancery.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-chi-chancery.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-chi = 'chancery'</code>, <code>cv78 = 13</code></td></tr>
    <tr><td>Greek lower Chi (<code>χ</code>) with Chancery shape</td></tr>
    </table></details>
  - Styles for `ψ` (Greek lower Psi)
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-psi-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-psi-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-psi = 'serifless'</code>, <code>VXAH = 1</code></td></tr>
    <tr><td>Greek lower Psi (<code>ψ</code>) without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-psi-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-psi-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-psi = 'serifed'</code>, <code>VXAH = 2</code></td></tr>
    <tr><td>Greek lower Psi (<code>ψ</code>) with serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-psi-flat-top-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-psi-flat-top-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-psi = 'flat-top-serifless'</code>, <code>VXAH = 3</code></td></tr>
    <tr><td>Greek lower Psi (<code>ψ</code>) with flat top; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lower-psi-flat-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lower-psi-flat-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lower-psi = 'flat-top-serifed'</code>, <code>VXAH = 4</code></td></tr>
    <tr><td>Greek lower Psi (<code>ψ</code>) with flat top, and serifs</td></tr>
    </table></details>
  - Styles for `а` (Cyrillic Lower A)
    <details><summary>21 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-serifless'</code>, <code>cv79 = 1</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, and serifless hook; without serif at terminal (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-serifed'</code>, <code>cv79 = 2</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifless hook, and serif at terminal (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-tailed'</code>, <code>cv79 = 3</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifless hook, and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-toothless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-toothless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-toothless-corner'</code>, <code>cv79 = 4</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifless hook, and toothless (cornered bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-toothless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-toothless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-toothless-rounded'</code>, <code>cv79 = 5</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifless hook, and toothless (rounded bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-hook-inward-serifed-serifless'</code>, <code>cv79 = 6</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, and serifed hook; without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-hook-inward-serifed-serifed'</code>, <code>cv79 = 7</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifed hook, and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-hook-inward-serifed-tailed'</code>, <code>cv79 = 8</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifed hook, and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-toothless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-toothless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-hook-inward-serifed-toothless-corner'</code>, <code>cv79 = 9</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifed hook, and toothless (cornered bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-toothless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-double-storey-hook-inward-serifed-toothless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'double-storey-hook-inward-serifed-toothless-rounded'</code>, <code>cv79 = 10</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with double-storey body, serifed hook, and toothless (rounded bottom-right)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-serifless'</code>, <code>cv79 = 11</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body; without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-serifed'</code>, <code>cv79 = 12</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-double-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-double-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-double-serifed'</code>, <code>cv79 = 13</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, and serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-tailed'</code>, <code>cv79 = 14</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, and curly tail (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-tailed-serifed'</code>, <code>cv79 = 15</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, and curly tail; with serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-earless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-earless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-earless-corner-serifless'</code>, <code>cv79 = 16</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, and earless (cornered top-right); without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-earless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-earless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-earless-corner-serifed'</code>, <code>cv79 = 17</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, earless (cornered top-right), and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-earless-corner-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-earless-corner-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-earless-corner-tailed'</code>, <code>cv79 = 18</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, earless (cornered top-right), and curly tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-earless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-earless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-earless-rounded-serifless'</code>, <code>cv79 = 19</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, and earless (rounded top-right); without serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-earless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-earless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-earless-rounded-serifed'</code>, <code>cv79 = 20</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, earless (rounded top-right), and serif at terminal</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-a-single-storey-earless-rounded-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-a-single-storey-earless-rounded-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-a = 'single-storey-earless-rounded-tailed'</code>, <code>cv79 = 21</code></td></tr>
    <tr><td>Cyrillic Lower A (<code>а</code>) with single-storey body, earless (rounded top-right), and curly tail</td></tr>
    </table></details>
  - Styles for `в` (Cyrillic Lower Ve)
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-standard-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-standard-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'standard-serifless'</code>, <code>cv80 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with standard body; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-standard-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-standard-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'standard-unilateral-serifed'</code>, <code>cv80 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with standard body, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-standard-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-standard-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'standard-bilateral-serifed'</code>, <code>cv80 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with standard body, and serifs at both top and bottom (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-standard-interrupted-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-standard-interrupted-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'standard-interrupted-serifless'</code>, <code>cv80 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with standard body, and interrupted middle bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-standard-interrupted-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-standard-interrupted-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'standard-interrupted-unilateral-serifed'</code>, <code>cv80 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with standard body, interrupted middle bar, and serifs at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-standard-interrupted-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-standard-interrupted-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'standard-interrupted-bilateral-serifed'</code>, <code>cv80 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with standard body, interrupted middle bar, and serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'cursive'</code>, <code>cv80 = 7</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with cursive body (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ve-cursive-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ve-cursive-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ve = 'cursive-tall'</code>, <code>cv80 = 8</code></td></tr>
    <tr><td>Cyrillic Lower Ve (<code>в</code>) with cursive body, and tall height</td></tr>
    </table></details>
  - Styles for `Ж` (Cyrillic Capital Zhe)
    <details><summary>5 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-zhe-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-zhe-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-zhe = 'straight'</code>, <code>cv81 = 1</code></td></tr>
    <tr><td>Cyrillic Capital Zhe (<code>Ж</code>) with straight legs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-zhe-curly.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-zhe-curly.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-zhe = 'curly'</code>, <code>cv81 = 2</code></td></tr>
    <tr><td>Cyrillic Capital Zhe (<code>Ж</code>) with curly legs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-zhe-symmetric-touching.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-zhe-symmetric-touching.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-zhe = 'symmetric-touching'</code>, <code>cv81 = 3</code></td></tr>
    <tr><td>Cyrillic Capital Zhe (<code>Ж</code>) with symmetric legs touching the vertical bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-zhe-symmetric-connected.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-zhe-symmetric-connected.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-zhe = 'symmetric-connected'</code>, <code>cv81 = 4</code></td></tr>
    <tr><td>Cyrillic Capital Zhe (<code>Ж</code>) with symmetric legs connected to the vertical bar (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-zhe-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-zhe-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-zhe = 'cursive'</code>, <code>cv81 = 5</code></td></tr>
    <tr><td>Cyrillic Capital Zhe (<code>Ж</code>) with cursive legs</td></tr>
    </table></details>
  - Styles for `ж` (Cyrillic Lower Zhe)
    <details><summary>5 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-zhe-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-zhe-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-zhe = 'straight'</code>, <code>cv82 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Zhe (<code>ж</code>) with straight legs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-zhe-curly.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-zhe-curly.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-zhe = 'curly'</code>, <code>cv82 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Zhe (<code>ж</code>) with curly legs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-zhe-symmetric-touching.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-zhe-symmetric-touching.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-zhe = 'symmetric-touching'</code>, <code>cv82 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Zhe (<code>ж</code>) with symmetric legs touching the vertical bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-zhe-symmetric-connected.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-zhe-symmetric-connected.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-zhe = 'symmetric-connected'</code>, <code>cv82 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Zhe (<code>ж</code>) with symmetric legs connected to the vertical bar (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-zhe-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-zhe-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-zhe = 'cursive'</code>, <code>cv82 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Zhe (<code>ж</code>) with cursive legs</td></tr>
    </table></details>
  - Styles for `З` (Cyrillic Capital Ze)
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'serifless'</code>, <code>cv83 = 1</code></td></tr>
    <tr><td>Serifless Cyrillic Capital Ze (<code>З</code>) (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'unilateral-serifed'</code>, <code>cv83 = 2</code></td></tr>
    <tr><td>Cyrillic Capital Ze (<code>З</code>) with serif at top (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-unilateral-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-unilateral-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'unilateral-bottom-serifed'</code>, <code>cv83 = 3</code></td></tr>
    <tr><td>Cyrillic Capital Ze (<code>З</code>) with serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'bilateral-serifed'</code>, <code>cv83 = 4</code></td></tr>
    <tr><td>Cyrillic Capital Ze (<code>З</code>) with serif at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'unilateral-inward-serifed'</code>, <code>cv83 = 5</code></td></tr>
    <tr><td>Cyrillic Capital Ze (<code>З</code>) with inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-unilateral-bottom-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-unilateral-bottom-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'unilateral-bottom-inward-serifed'</code>, <code>cv83 = 6</code></td></tr>
    <tr><td>Cyrillic Capital Ze (<code>З</code>) with inward serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ze-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ze-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ze = 'bilateral-inward-serifed'</code>, <code>cv83 = 7</code></td></tr>
    <tr><td>Cyrillic Capital Ze (<code>З</code>) with inward serif at both top and bottom</td></tr>
    </table></details>
  - Styles for `з` (Cyrillic Lower Ze)
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'serifless'</code>, <code>cv84 = 1</code></td></tr>
    <tr><td>Serifless Cyrillic Lower Ze (<code>з</code>) (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'unilateral-serifed'</code>, <code>cv84 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Ze (<code>з</code>) with serif at top (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-unilateral-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-unilateral-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'unilateral-bottom-serifed'</code>, <code>cv84 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Ze (<code>з</code>) with serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'bilateral-serifed'</code>, <code>cv84 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Ze (<code>з</code>) with serif at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'unilateral-inward-serifed'</code>, <code>cv84 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Ze (<code>з</code>) with inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-unilateral-bottom-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-unilateral-bottom-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'unilateral-bottom-inward-serifed'</code>, <code>cv84 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Ze (<code>з</code>) with inward serif at bottom (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ze-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ze-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ze = 'bilateral-inward-serifed'</code>, <code>cv84 = 7</code></td></tr>
    <tr><td>Cyrillic Lower Ze (<code>з</code>) with inward serif at both top and bottom</td></tr>
    </table></details>
  - Styles for `К` (Cyrillic Capital Ka)
    <details><summary>20 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'straight-serifless'</code>, <code>cv85 = 1</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with straight shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'straight-top-left-serifed'</code>, <code>cv85 = 2</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with straight shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-straight-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-straight-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'straight-bottom-right-serifed'</code>, <code>cv85 = 3</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with straight shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-straight-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-straight-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'straight-top-left-and-bottom-right-serifed'</code>, <code>cv85 = 4</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with straight shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'straight-serifed'</code>, <code>cv85 = 5</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'curly-serifless'</code>, <code>cv85 = 6</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-curly-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-curly-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'curly-top-left-serifed'</code>, <code>cv85 = 7</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with curly shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-curly-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-curly-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'curly-bottom-right-serifed'</code>, <code>cv85 = 8</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with curly shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-curly-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-curly-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'curly-top-left-and-bottom-right-serifed'</code>, <code>cv85 = 9</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with curly shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'curly-serifed'</code>, <code>cv85 = 10</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-touching-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-touching-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-touching-serifless'</code>, <code>cv85 = 11</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs touching the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-touching-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-touching-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-touching-top-left-serifed'</code>, <code>cv85 = 12</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs touching the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-touching-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-touching-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-touching-bottom-right-serifed'</code>, <code>cv85 = 13</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs touching the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-touching-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-touching-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-touching-top-left-and-bottom-right-serifed'</code>, <code>cv85 = 14</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs touching the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-touching-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-touching-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-touching-serifed'</code>, <code>cv85 = 15</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs touching the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-connected-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-connected-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-connected-serifless'</code>, <code>cv85 = 16</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs connected to the vertical bar; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-connected-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-connected-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-connected-top-left-serifed'</code>, <code>cv85 = 17</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs connected to the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-connected-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-connected-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-connected-bottom-right-serifed'</code>, <code>cv85 = 18</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs connected to the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-connected-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-connected-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-connected-top-left-and-bottom-right-serifed'</code>, <code>cv85 = 19</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs connected to the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ka-symmetric-connected-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ka-symmetric-connected-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ka = 'symmetric-connected-serifed'</code>, <code>cv85 = 20</code></td></tr>
    <tr><td>Cyrillic Capital Ka (<code>К</code>) with symmetric legs connected to the vertical bar, and serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `к` (Cyrillic Lower Ka)
    <details><summary>20 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'straight-serifless'</code>, <code>cv86 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with straight shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-straight-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-straight-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'straight-top-left-serifed'</code>, <code>cv86 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with straight shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-straight-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-straight-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'straight-bottom-right-serifed'</code>, <code>cv86 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with straight shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-straight-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-straight-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'straight-top-left-and-bottom-right-serifed'</code>, <code>cv86 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with straight shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'straight-serifed'</code>, <code>cv86 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'curly-serifless'</code>, <code>cv86 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-curly-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-curly-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'curly-top-left-serifed'</code>, <code>cv86 = 7</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with curly shape, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-curly-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-curly-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'curly-bottom-right-serifed'</code>, <code>cv86 = 8</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with curly shape, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-curly-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-curly-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'curly-top-left-and-bottom-right-serifed'</code>, <code>cv86 = 9</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with curly shape, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'curly-serifed'</code>, <code>cv86 = 10</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-touching-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-touching-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-touching-serifless'</code>, <code>cv86 = 11</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs touching the vertical bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-touching-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-touching-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-touching-top-left-serifed'</code>, <code>cv86 = 12</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs touching the vertical bar, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-touching-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-touching-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-touching-bottom-right-serifed'</code>, <code>cv86 = 13</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs touching the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-touching-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-touching-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-touching-top-left-and-bottom-right-serifed'</code>, <code>cv86 = 14</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs touching the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-touching-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-touching-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-touching-serifed'</code>, <code>cv86 = 15</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs touching the vertical bar, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-connected-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-connected-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-connected-serifless'</code>, <code>cv86 = 16</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs connected to the vertical bar; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-connected-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-connected-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-connected-top-left-serifed'</code>, <code>cv86 = 17</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs connected to the vertical bar, and serifs at top left (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-connected-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-connected-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-connected-bottom-right-serifed'</code>, <code>cv86 = 18</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs connected to the vertical bar, and serifs at bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-connected-top-left-and-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-connected-top-left-and-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-connected-top-left-and-bottom-right-serifed'</code>, <code>cv86 = 19</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs connected to the vertical bar, and serifs at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ka-symmetric-connected-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ka-symmetric-connected-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ka = 'symmetric-connected-serifed'</code>, <code>cv86 = 20</code></td></tr>
    <tr><td>Cyrillic Lower Ka (<code>к</code>) with symmetric legs connected to the vertical bar, and serifs (default for Slab Upright)</td></tr>
    </table></details>
  - Styles for `л` (Cyrillic Lower El)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-el-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-el-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-el = 'straight'</code>, <code>cv87 = 1</code></td></tr>
    <tr><td>Cyrillic Lower El (<code>л</code>) with standard shape (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-el-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-el-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-el = 'tailed'</code>, <code>cv87 = 2</code></td></tr>
    <tr><td>Cyrillic Lower El (<code>л</code>) with tail shape</td></tr>
    </table></details>
  - Styles for `м` (Cyrillic Lower Em)
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-hanging-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-hanging-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'hanging-serifless'</code>, <code>cv88 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with middle being hanging off baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-hanging-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-hanging-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'hanging-motion-serifed'</code>, <code>cv88 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with middle being hanging off baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-hanging-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-hanging-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'hanging-serifed'</code>, <code>cv88 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with middle being hanging off baseline, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-flat-bottom-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-flat-bottom-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'flat-bottom-serifless'</code>, <code>cv88 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with middle aligned to baseline; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-flat-bottom-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-flat-bottom-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'flat-bottom-motion-serifed'</code>, <code>cv88 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with middle aligned to baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-flat-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-flat-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'flat-bottom-serifed'</code>, <code>cv88 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with middle aligned to baseline, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-slanted-sides-hanging-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-slanted-sides-hanging-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'slanted-sides-hanging-serifless'</code>, <code>cv88 = 7</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with slanted sides, and middle being hanging off baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-slanted-sides-hanging-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-slanted-sides-hanging-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'slanted-sides-hanging-motion-serifed'</code>, <code>cv88 = 8</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with slanted sides, middle being hanging off baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-slanted-sides-hanging-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-slanted-sides-hanging-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'slanted-sides-hanging-serifed'</code>, <code>cv88 = 9</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with slanted sides, middle being hanging off baseline, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-slanted-sides-flat-bottom-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-slanted-sides-flat-bottom-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'slanted-sides-flat-bottom-serifless'</code>, <code>cv88 = 10</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with slanted sides, and middle aligned to baseline; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-slanted-sides-flat-bottom-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-slanted-sides-flat-bottom-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'slanted-sides-flat-bottom-motion-serifed'</code>, <code>cv88 = 11</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with slanted sides, middle aligned to baseline, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-em-slanted-sides-flat-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-em-slanted-sides-flat-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-em = 'slanted-sides-flat-bottom-serifed'</code>, <code>cv88 = 12</code></td></tr>
    <tr><td>Cyrillic Lower Em (<code>м</code>) with slanted sides, middle aligned to baseline, and serifs</td></tr>
    </table></details>
  - Styles for `Н` (Cyrillic Capital En)
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-en-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-en-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-en = 'serifless'</code>, <code>VXAA = 1</code></td></tr>
    <tr><td>Cyrillic Capital En (<code>Н</code>) without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-en-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-en-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-en = 'top-left-serifed'</code>, <code>VXAA = 2</code></td></tr>
    <tr><td>Cyrillic Capital En (<code>Н</code>) with serif only at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-en-top-left-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-en-top-left-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-en = 'top-left-bottom-right-serifed'</code>, <code>VXAA = 3</code></td></tr>
    <tr><td>Cyrillic Capital En (<code>Н</code>) with serif only at top left and bottom right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-en-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-en-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-en = 'serifed'</code>, <code>VXAA = 4</code></td></tr>
    <tr><td>Cyrillic Capital En (<code>Н</code>) with serifs (default for Slab)</td></tr>
    </table></details>
  - Styles for `н` (Cyrillic Lower En)
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'serifless'</code>, <code>cv89 = 1</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'top-left-serifed'</code>, <code>cv89 = 2</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) with serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-top-left-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-top-left-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'top-left-bottom-right-serifed'</code>, <code>cv89 = 3</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) with serifs at top left and bottom right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'serifed'</code>, <code>cv89 = 4</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) with serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'tailed-serifless'</code>, <code>cv89 = 5</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) with tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-tailed-top-left-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-tailed-top-left-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'tailed-top-left-serifed'</code>, <code>cv89 = 6</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) with tail, and serifs at top left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-en-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-en-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-en = 'tailed-serifed'</code>, <code>cv89 = 7</code></td></tr>
    <tr><td>Cyrillic Lower En (<code>н</code>) with tail, and serifs</td></tr>
    </table></details>
  - Styles for `Р` (Cyrillic Capital Er)
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-er-closed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-er-closed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-er = 'closed-serifless'</code>, <code>VXAB = 1</code></td></tr>
    <tr><td>Cyrillic Capital Er (<code>Р</code>) with closed shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-er-closed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-er-closed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-er = 'closed-motion-serifed'</code>, <code>VXAB = 2</code></td></tr>
    <tr><td>Cyrillic Capital Er (<code>Р</code>) with closed shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-er-closed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-er-closed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-er = 'closed-serifed'</code>, <code>VXAB = 3</code></td></tr>
    <tr><td>Cyrillic Capital Er (<code>Р</code>) with closed shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-er-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-er-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-er = 'open-serifless'</code>, <code>VXAB = 4</code></td></tr>
    <tr><td>Cyrillic Capital Er (<code>Р</code>) with open shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-er-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-er-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-er = 'open-motion-serifed'</code>, <code>VXAB = 5</code></td></tr>
    <tr><td>Cyrillic Capital Er (<code>Р</code>) with open shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-er-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-er-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-er = 'open-serifed'</code>, <code>VXAB = 6</code></td></tr>
    <tr><td>Cyrillic Capital Er (<code>Р</code>) with open shape, and serifs</td></tr>
    </table></details>
  - Styles for `р` (Cyrillic Lower Er)
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-eared-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-eared-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'eared-serifless'</code>, <code>cv90 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with eared shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-eared-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-eared-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'eared-motion-serifed'</code>, <code>cv90 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with eared shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-eared-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-eared-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'eared-serifed'</code>, <code>cv90 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with eared shape, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-earless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-earless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'earless-corner-serifless'</code>, <code>cv90 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with earless (cornered) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-earless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-earless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'earless-corner-serifed'</code>, <code>cv90 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with earless (cornered) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-earless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-earless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'earless-rounded-serifless'</code>, <code>cv90 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with earless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-er-earless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-er-earless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-er = 'earless-rounded-serifed'</code>, <code>cv90 = 7</code></td></tr>
    <tr><td>Cyrillic Lower Er (<code>р</code>) with earless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `У` (Cyrillic Capital U)
    <details><summary>18 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'straight-serifless'</code>, <code>cv91 = 1</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with straight shape; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'straight-motion-serifed'</code>, <code>cv91 = 2</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with straight shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'straight-serifed'</code>, <code>cv91 = 3</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-straight-turn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-straight-turn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'straight-turn-serifless'</code>, <code>cv91 = 4</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with straight shape, and a tail turns leftward; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-straight-turn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-straight-turn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'straight-turn-motion-serifed'</code>, <code>cv91 = 5</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with straight shape, a tail turns leftward, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-straight-turn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-straight-turn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'straight-turn-serifed'</code>, <code>cv91 = 6</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with straight shape, a tail turns leftward, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'curly-serifless'</code>, <code>cv91 = 7</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'curly-motion-serifed'</code>, <code>cv91 = 8</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with curly shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'curly-serifed'</code>, <code>cv91 = 9</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-curly-turn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-curly-turn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'curly-turn-serifless'</code>, <code>cv91 = 10</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with curly shape, and a tail turns leftward; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-curly-turn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-curly-turn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'curly-turn-motion-serifed'</code>, <code>cv91 = 11</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with curly shape, a tail turns leftward, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-curly-turn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-curly-turn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'curly-turn-serifed'</code>, <code>cv91 = 12</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with curly shape, a tail turns leftward, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'cursive-serifless'</code>, <code>cv91 = 13</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with cursive shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-cursive-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-cursive-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'cursive-motion-serifed'</code>, <code>cv91 = 14</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with cursive shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-cursive-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-cursive-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'cursive-serifed'</code>, <code>cv91 = 15</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with cursive shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-cursive-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-cursive-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'cursive-flat-hook-serifless'</code>, <code>cv91 = 16</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with cursive shape, and a flat terminal hook; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-cursive-flat-hook-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-cursive-flat-hook-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'cursive-flat-hook-motion-serifed'</code>, <code>cv91 = 17</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with cursive shape, a flat terminal hook, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-u-cursive-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-u-cursive-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-u = 'cursive-flat-hook-serifed'</code>, <code>cv91 = 18</code></td></tr>
    <tr><td>Cyrillic Capital U (<code>У</code>) with cursive shape, a flat terminal hook, and serifs</td></tr>
    </table></details>
  - Styles for `у` (Cyrillic Lower U)
    <details><summary>18 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'straight-serifless'</code>, <code>cv92 = 1</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with straight shape; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'straight-motion-serifed'</code>, <code>cv92 = 2</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with straight shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'straight-serifed'</code>, <code>cv92 = 3</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with straight shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-straight-turn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-straight-turn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'straight-turn-serifless'</code>, <code>cv92 = 4</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with straight shape, and a tail turns leftward; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-straight-turn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-straight-turn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'straight-turn-motion-serifed'</code>, <code>cv92 = 5</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with straight shape, a tail turns leftward, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-straight-turn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-straight-turn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'straight-turn-serifed'</code>, <code>cv92 = 6</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with straight shape, a tail turns leftward, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'curly-serifless'</code>, <code>cv92 = 7</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with curly shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'curly-motion-serifed'</code>, <code>cv92 = 8</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with curly shape, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'curly-serifed'</code>, <code>cv92 = 9</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with curly shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-curly-turn-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-curly-turn-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'curly-turn-serifless'</code>, <code>cv92 = 10</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with curly shape, and a tail turns leftward; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-curly-turn-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-curly-turn-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'curly-turn-motion-serifed'</code>, <code>cv92 = 11</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with curly shape, a tail turns leftward, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-curly-turn-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-curly-turn-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'curly-turn-serifed'</code>, <code>cv92 = 12</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with curly shape, a tail turns leftward, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-cursive-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-cursive-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'cursive-serifless'</code>, <code>cv92 = 13</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with cursive shape; without serifs (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-cursive-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-cursive-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'cursive-motion-serifed'</code>, <code>cv92 = 14</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with cursive shape, and motion serifs (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-cursive-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-cursive-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'cursive-serifed'</code>, <code>cv92 = 15</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with cursive shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-cursive-flat-hook-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-cursive-flat-hook-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'cursive-flat-hook-serifless'</code>, <code>cv92 = 16</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with cursive shape, and a flat terminal hook; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-cursive-flat-hook-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-cursive-flat-hook-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'cursive-flat-hook-motion-serifed'</code>, <code>cv92 = 17</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with cursive shape, a flat terminal hook, and motion serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-u-cursive-flat-hook-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-u-cursive-flat-hook-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-u = 'cursive-flat-hook-serifed'</code>, <code>cv92 = 18</code></td></tr>
    <tr><td>Cyrillic Lower U (<code>у</code>) with cursive shape, a flat terminal hook, and serifs</td></tr>
    </table></details>
  - Styles for `ф` (Cyrillic Lower Ef)
    <details><summary>10 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'serifless'</code>, <code>cv93 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with straight bar; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'top-serifed'</code>, <code>cv93 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with straight bar, and serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'serifed'</code>, <code>cv93 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with straight bar, and serifs at top and bottom (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'cursive'</code>, <code>cv93 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with cursive bar (default for Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-split-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-split-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'split-serifless'</code>, <code>cv93 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with split bowl, and straight bar; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-split-top-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-split-top-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'split-top-serifed'</code>, <code>cv93 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with split bowl, straight bar, and serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-split-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-split-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'split-serifed'</code>, <code>cv93 = 7</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with split bowl, straight bar, and serifs at top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-split-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-split-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'split-cursive'</code>, <code>cv93 = 8</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with split bowl, and cursive bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-diagonal-tailed-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-diagonal-tailed-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'diagonal-tailed-cursive'</code>, <code>cv93 = 9</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with cursive bar, and diagonal tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ef-split-diagonal-tailed-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ef-split-diagonal-tailed-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ef = 'split-diagonal-tailed-cursive'</code>, <code>cv93 = 10</code></td></tr>
    <tr><td>Cyrillic Lower Ef (<code>ф</code>) with split bowl, and cursive bar, and diagonal tail</td></tr>
    </table></details>
  - Styles for `ч` (Cyrillic Lower Che)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-che-standard.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-che-standard.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-che = 'standard'</code>, <code>cv94 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Che (<code>ч</code>) with standard shape (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-che-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-che-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-che = 'tailed'</code>, <code>cv94 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Che (<code>ч</code>) with tail</td></tr>
    </table></details>
  - Styles for `ь`, `ъ` (Cyrillic Lower Yeri and related letters)
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-cyrl-yeri-corner.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-cyrl-yeri-corner.dark.svg#gh-dark-mode-only" width=64/></td><td><code>cyrl-yeri = 'corner'</code>, <code>cv95 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Yeri (<code>ь</code>) with corner at bottom left (default for Upright)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-cyrl-yeri-round.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-cyrl-yeri-round.dark.svg#gh-dark-mode-only" width=64/></td><td><code>cyrl-yeri = 'round'</code>, <code>cv95 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Yeri (<code>ь</code>) with rounded shape (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-cyrl-yeri-cursive.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-cyrl-yeri-cursive.dark.svg#gh-dark-mode-only" width=64/></td><td><code>cyrl-yeri = 'cursive'</code>, <code>cv95 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Yeri (<code>ь</code>) with cursive shape (default for Slab Italic)</td></tr>
    </table></details>
  - Styles for `ы` (Cyrillic Lower Yery)
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-yery-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-yery-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-yery = 'corner'</code>, <code>cv96 = 1</code></td></tr>
    <tr><td>Cyrillic Lower Yery (<code>ы</code>) with corner at bottom left (default for Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-yery-corner-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-yery-corner-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-yery = 'corner-tailed'</code>, <code>cv96 = 2</code></td></tr>
    <tr><td>Cyrillic Lower Yery (<code>ы</code>) with corner at bottom left and tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-yery-round.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-yery-round.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-yery = 'round'</code>, <code>cv96 = 3</code></td></tr>
    <tr><td>Cyrillic Lower Yery (<code>ы</code>) with rounded shape (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-yery-round-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-yery-round-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-yery = 'round-tailed'</code>, <code>cv96 = 4</code></td></tr>
    <tr><td>Cyrillic Lower Yery (<code>ы</code>) with rounded shape and tail</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-yery-cursive.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-yery-cursive.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-yery = 'cursive'</code>, <code>cv96 = 5</code></td></tr>
    <tr><td>Cyrillic Lower Yery (<code>ы</code>) with cursive shape (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-yery-cursive-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-yery-cursive-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-yery = 'cursive-tailed'</code>, <code>cv96 = 6</code></td></tr>
    <tr><td>Cyrillic Lower Yery (<code>ы</code>) with cursive shape and tail</td></tr>
    </table></details>
  - Styles for `Э` (Cyrillic Capital E (`Э`))
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'serifless'</code>, <code>cv97 = 1</code></td></tr>
    <tr><td>Serifless Cyrillic Capital E (<code>Э</code>) (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'unilateral-serifed'</code>, <code>cv97 = 2</code></td></tr>
    <tr><td>Cyrillic Capital E (<code>Э</code>) with serif at top (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-unilateral-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-unilateral-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'unilateral-bottom-serifed'</code>, <code>cv97 = 3</code></td></tr>
    <tr><td>Cyrillic Capital E (<code>Э</code>) with serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'bilateral-serifed'</code>, <code>cv97 = 4</code></td></tr>
    <tr><td>Cyrillic Capital E (<code>Э</code>) with serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'unilateral-inward-serifed'</code>, <code>cv97 = 5</code></td></tr>
    <tr><td>Cyrillic Capital E (<code>Э</code>) with inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-unilateral-bottom-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-unilateral-bottom-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'unilateral-bottom-inward-serifed'</code>, <code>cv97 = 6</code></td></tr>
    <tr><td>Cyrillic Capital E (<code>Э</code>) with inward serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-e-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-e-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-e = 'bilateral-inward-serifed'</code>, <code>cv97 = 7</code></td></tr>
    <tr><td>Cyrillic Capital E (<code>Э</code>) with inward serif at both top and bottom</td></tr>
    </table></details>
  - Styles for `э` (Cyrillic Lower E (`э`))
    <details><summary>7 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'serifless'</code>, <code>cv98 = 1</code></td></tr>
    <tr><td>Serifless Cyrillic Lower E (<code>э</code>) (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-unilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-unilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'unilateral-serifed'</code>, <code>cv98 = 2</code></td></tr>
    <tr><td>Cyrillic Lower E (<code>э</code>) with serif at top (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-unilateral-bottom-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-unilateral-bottom-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'unilateral-bottom-serifed'</code>, <code>cv98 = 3</code></td></tr>
    <tr><td>Cyrillic Lower E (<code>э</code>) with serif at bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-bilateral-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-bilateral-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'bilateral-serifed'</code>, <code>cv98 = 4</code></td></tr>
    <tr><td>Cyrillic Lower E (<code>э</code>) with serifs at both top and bottom</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-unilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-unilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'unilateral-inward-serifed'</code>, <code>cv98 = 5</code></td></tr>
    <tr><td>Cyrillic Lower E (<code>э</code>) with inward serif at top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-unilateral-bottom-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-unilateral-bottom-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'unilateral-bottom-inward-serifed'</code>, <code>cv98 = 6</code></td></tr>
    <tr><td>Cyrillic Lower E (<code>э</code>) with inward serif at bottom (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-e-bilateral-inward-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-e-bilateral-inward-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-e = 'bilateral-inward-serifed'</code>, <code>cv98 = 7</code></td></tr>
    <tr><td>Cyrillic Lower E (<code>э</code>) with inward serif at both top and bottom</td></tr>
    </table></details>
  - Styles for `Я` (Cyrillic Capital Ya)
    <details><summary>18 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'straight-serifless'</code>, <code>cv99 = 1</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with straight leg; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'straight-motion-serifed'</code>, <code>cv99 = 2</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with straight leg, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'straight-serifed'</code>, <code>cv99 = 3</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with straight leg, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-straight-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-straight-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'straight-open-serifless'</code>, <code>cv99 = 4</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with straight leg, and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-straight-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-straight-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'straight-open-motion-serifed'</code>, <code>cv99 = 5</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with straight leg, open contour, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-straight-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-straight-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'straight-open-serifed'</code>, <code>cv99 = 6</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with straight leg, open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'curly-serifless'</code>, <code>cv99 = 7</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with curly leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'curly-motion-serifed'</code>, <code>cv99 = 8</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with curly leg, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'curly-serifed'</code>, <code>cv99 = 9</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with curly leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-curly-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-curly-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'curly-open-serifless'</code>, <code>cv99 = 10</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with curly leg, and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-curly-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-curly-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'curly-open-motion-serifed'</code>, <code>cv99 = 11</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with curly leg, open contour, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-curly-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-curly-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'curly-open-serifed'</code>, <code>cv99 = 12</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with curly leg, open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-standing-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-standing-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'standing-serifless'</code>, <code>cv99 = 13</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with standing leg (like Helvetica); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-standing-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-standing-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'standing-motion-serifed'</code>, <code>cv99 = 14</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with standing leg (like Helvetica), and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-standing-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-standing-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'standing-serifed'</code>, <code>cv99 = 15</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with standing leg (like Helvetica), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-standing-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-standing-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'standing-open-serifless'</code>, <code>cv99 = 16</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with standing leg (like Helvetica), and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-standing-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-standing-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'standing-open-motion-serifed'</code>, <code>cv99 = 17</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with standing leg (like Helvetica), open contour, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-capital-ya-standing-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-capital-ya-standing-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-capital-ya = 'standing-open-serifed'</code>, <code>cv99 = 18</code></td></tr>
    <tr><td>Cyrillic Capital Ya (<code>Я</code>) with standing leg (like Helvetica), open contour, and serifs</td></tr>
    </table></details>
  - Styles for `я` (Cyrillic Lower Ya)
    <details><summary>36 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-serifless'</code>, <code>VAAA = 1</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg; without serifs (default for Sans)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-motion-serifed'</code>, <code>VAAA = 2</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-serifed'</code>, <code>VAAA = 3</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, and serifs (default for Slab)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-tailed-serifless'</code>, <code>VAAA = 4</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-tailed-motion-serifed'</code>, <code>VAAA = 5</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, tail, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-tailed-serifed'</code>, <code>VAAA = 6</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-open-serifless'</code>, <code>VAAA = 7</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-open-motion-serifed'</code>, <code>VAAA = 8</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, open contour, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-open-serifed'</code>, <code>VAAA = 9</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-open-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-open-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-open-tailed-serifless'</code>, <code>VAAA = 10</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, open contour, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-open-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-open-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-open-tailed-motion-serifed'</code>, <code>VAAA = 11</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, open contour, tail, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-straight-open-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-straight-open-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'straight-open-tailed-serifed'</code>, <code>VAAA = 12</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with straight leg, open contour, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-serifless'</code>, <code>VAAA = 13</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-motion-serifed'</code>, <code>VAAA = 14</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-serifed'</code>, <code>VAAA = 15</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-tailed-serifless'</code>, <code>VAAA = 16</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-tailed-motion-serifed'</code>, <code>VAAA = 17</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, tail, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-tailed-serifed'</code>, <code>VAAA = 18</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-open-serifless'</code>, <code>VAAA = 19</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-open-motion-serifed'</code>, <code>VAAA = 20</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, open contour, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-open-serifed'</code>, <code>VAAA = 21</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-open-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-open-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-open-tailed-serifless'</code>, <code>VAAA = 22</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, open contour, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-open-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-open-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-open-tailed-motion-serifed'</code>, <code>VAAA = 23</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, open contour, tail, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-curly-open-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-curly-open-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'curly-open-tailed-serifed'</code>, <code>VAAA = 24</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with curly leg, open contour, tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-serifless'</code>, <code>VAAA = 25</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica); without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-motion-serifed'</code>, <code>VAAA = 26</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-serifed'</code>, <code>VAAA = 27</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-tailed-serifless'</code>, <code>VAAA = 28</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-tailed-motion-serifed'</code>, <code>VAAA = 29</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), tail, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-tailed-serifed'</code>, <code>VAAA = 30</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), tail, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-open-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-open-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-open-serifless'</code>, <code>VAAA = 31</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), and open contour; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-open-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-open-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-open-motion-serifed'</code>, <code>VAAA = 32</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), open contour, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-open-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-open-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-open-serifed'</code>, <code>VAAA = 33</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), open contour, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-open-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-open-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-open-tailed-serifless'</code>, <code>VAAA = 34</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), open contour, and tail; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-open-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-open-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-open-tailed-motion-serifed'</code>, <code>VAAA = 35</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), open contour, tail, and motion serifs at bottom-left</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cyrl-ya-standing-open-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cyrl-ya-standing-open-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cyrl-ya = 'standing-open-tailed-serifed'</code>, <code>VAAA = 36</code></td></tr>
    <tr><td>Cyrillic Lower Ya (<code>я</code>) with standing leg (like Helvetica), open contour, tail, and serifs</td></tr>
    </table></details>
  - Styles for `ij` (Dots in letters “i” and “j” in particular)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-tittle-round.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-tittle-round.dark.svg#gh-dark-mode-only" width=64/></td><td><code>tittle = 'round'</code>, <code>VDAA = 1</code></td></tr>
    <tr><td>Dots in <code>i</code>/<code>j</code> are round (default)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-tittle-square.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-tittle-square.dark.svg#gh-dark-mode-only" width=64/></td><td><code>tittle = 'square'</code>, <code>VDAA = 2</code></td></tr>
    <tr><td>Dots in <code>i</code>/<code>j</code> are square</td></tr>
    </table></details>
  - Styles for `öẋ` (Dot and Comma shape in diacritics)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="124"><img src="../images/cv-diacritic-dot-round.light.svg#gh-light-mode-only" width=96/><img src="../images/cv-diacritic-dot-round.dark.svg#gh-dark-mode-only" width=96/></td><td><code>diacritic-dot = 'round'</code>, <code>VDAB = 1</code></td></tr>
    <tr><td>Dots and Commas in diacritics are round (default)</td></tr>
    <tr><td rowspan="2" width="124"><img src="../images/cv-diacritic-dot-square.light.svg#gh-light-mode-only" width=96/><img src="../images/cv-diacritic-dot-square.dark.svg#gh-dark-mode-only" width=96/></td><td><code>diacritic-dot = 'square'</code>, <code>VDAB = 2</code></td></tr>
    <tr><td>Dots and Commas in diacritics are square</td></tr>
    </table></details>
  - Styles for `.,`, `:;` (Dot and Comma shape in punctuations and symbols)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="220"><img src="../images/cv-punctuation-dot-round.light.svg#gh-light-mode-only" width=192/><img src="../images/cv-punctuation-dot-round.dark.svg#gh-dark-mode-only" width=192/></td><td><code>punctuation-dot = 'round'</code>, <code>VDAC = 1</code></td></tr>
    <tr><td>Small punctuations (like <code>.</code>, <code>,</code>) use round dots (default)</td></tr>
    <tr><td rowspan="2" width="220"><img src="../images/cv-punctuation-dot-square.light.svg#gh-light-mode-only" width=192/><img src="../images/cv-punctuation-dot-square.dark.svg#gh-dark-mode-only" width=192/></td><td><code>punctuation-dot = 'square'</code>, <code>VDAC = 2</code></td></tr>
    <tr><td>Small punctuations (like <code>.</code>, <code>,</code>) use square dots</td></tr>
    </table></details>
  - Styles for `⣝⣑` (Dot shape in braille)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-braille-dot-round.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-braille-dot-round.dark.svg#gh-dark-mode-only" width=64/></td><td><code>braille-dot = 'round'</code>, <code>VDAD = 1</code></td></tr>
    <tr><td>Braille uses round dots (default)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-braille-dot-square.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-braille-dot-square.dark.svg#gh-dark-mode-only" width=64/></td><td><code>braille-dot = 'square'</code>, <code>VDAD = 2</code></td></tr>
    <tr><td>Braille uses square dots</td></tr>
    </table></details>
  - Styles for `~`
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-tilde-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-tilde-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>tilde = 'high'</code>, <code>VSAA = 1</code></td></tr>
    <tr><td>Higher tilde <code>~</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-tilde-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-tilde-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>tilde = 'low'</code>, <code>VSAA = 2</code></td></tr>
    <tr><td>Lower tilde <code>~</code> (default)</td></tr>
    </table></details>
  - Styles for `*`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-penta-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-penta-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'penta-high'</code>, <code>VSAB = 1</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with five-pointed shape, and high position (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-penta-mid.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-penta-mid.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'penta-mid'</code>, <code>VSAB = 2</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with five-pointed shape, and medium position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-penta-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-penta-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'penta-low'</code>, <code>VSAB = 3</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with five-pointed shape, and low position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-turn-penta-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-turn-penta-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'turn-penta-high'</code>, <code>VSAB = 4</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with turned five-pointed shape, and high position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-turn-penta-mid.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-turn-penta-mid.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'turn-penta-mid'</code>, <code>VSAB = 5</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with turned five-pointed shape, and medium position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-turn-penta-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-turn-penta-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'turn-penta-low'</code>, <code>VSAB = 6</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with turned five-pointed shape, and low position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-hex-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-hex-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'hex-high'</code>, <code>VSAB = 7</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with six-pointed shape, and high position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-hex-mid.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-hex-mid.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'hex-mid'</code>, <code>VSAB = 8</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with six-pointed shape, and medium position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-hex-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-hex-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'hex-low'</code>, <code>VSAB = 9</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with six-pointed shape, and low position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-turn-hex-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-turn-hex-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'turn-hex-high'</code>, <code>VSAB = 10</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with turned six-pointed shape, and high position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-turn-hex-mid.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-turn-hex-mid.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'turn-hex-mid'</code>, <code>VSAB = 11</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with turned six-pointed shape, and medium position</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-asterisk-turn-hex-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-asterisk-turn-hex-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>asterisk = 'turn-hex-low'</code>, <code>VSAB = 12</code></td></tr>
    <tr><td>Asterisk (<code>*</code>) with turned six-pointed shape, and low position</td></tr>
    </table></details>
  - Styles for `_`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-underscore-above-baseline.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-underscore-above-baseline.dark.svg#gh-dark-mode-only" width=32/></td><td><code>underscore = 'above-baseline'</code>, <code>VSAC = 1</code></td></tr>
    <tr><td>Extra-high <code>_</code>, placed right above baseline</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-underscore-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-underscore-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>underscore = 'high'</code>, <code>VSAC = 2</code></td></tr>
    <tr><td>Higher underscore <code>_</code>, placed right below baseline (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-underscore-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-underscore-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>underscore = 'low'</code>, <code>VSAC = 3</code></td></tr>
    <tr><td>Lower underscore <code>_</code>, placed right above descender line</td></tr>
    </table></details>
  - Styles for `^`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-caret-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-caret-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>caret = 'high'</code>, <code>VSAD = 1</code></td></tr>
    <tr><td>Higher circumflex <code>^</code></td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-caret-medium.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-caret-medium.dark.svg#gh-dark-mode-only" width=32/></td><td><code>caret = 'medium'</code>, <code>VSAD = 2</code></td></tr>
    <tr><td>Lower circumflex <code>^</code> (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-caret-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-caret-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>caret = 'low'</code>, <code>VSAD = 3</code></td></tr>
    <tr><td>Lower circumflex <code>^</code></td></tr>
    </table></details>
  - Styles for `` ` ``
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ascii-grave-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ascii-grave-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ascii-grave = 'straight'</code>, <code>VSAE = 1</code></td></tr>
    <tr><td>Show ASCII grave (<code>`</code>) as short diagonal straight bar. (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ascii-grave-raised-inverse-comma.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ascii-grave-raised-inverse-comma.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ascii-grave = 'raised-inverse-comma'</code>, <code>VSAE = 2</code></td></tr>
    <tr><td>Show ASCII grave (<code>`</code>) as raised comma.</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ascii-grave-raised-turn-comma.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ascii-grave-raised-turn-comma.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ascii-grave = 'raised-turn-comma'</code>, <code>VSAE = 3</code></td></tr>
    <tr><td>Show ASCII grave (<code>`</code>) as raised turned comma, identical to curly open single quote symbols (U+2018).</td></tr>
    </table></details>
  - Styles for `'`
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ascii-single-quote-straight.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ascii-single-quote-straight.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ascii-single-quote = 'straight'</code>, <code>VSAF = 1</code></td></tr>
    <tr><td>Show ASCII quote (<code>"</code>) as short vertical straight bar. (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ascii-single-quote-raised-comma.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ascii-single-quote-raised-comma.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ascii-single-quote = 'raised-comma'</code>, <code>VSAF = 2</code></td></tr>
    <tr><td>Show ASCII quote (<code>"</code>) as raised comma.</td></tr>
    </table></details>
  - Styles for `(`, `)`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-paren-normal.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-paren-normal.dark.svg#gh-dark-mode-only" width=64/></td><td><code>paren = 'normal'</code>, <code>VSAG = 1</code></td></tr>
    <tr><td>Parenthesis with normal contour (default)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-paren-large-contour.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-paren-large-contour.dark.svg#gh-dark-mode-only" width=64/></td><td><code>paren = 'large-contour'</code>, <code>VSAG = 2</code></td></tr>
    <tr><td>Parenthesis with larger contour, like that in Monaco</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-paren-flat-arc.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-paren-flat-arc.dark.svg#gh-dark-mode-only" width=64/></td><td><code>paren = 'flat-arc'</code>, <code>VSAG = 3</code></td></tr>
    <tr><td>Parenthesis with flat arc, like that in JetBrains Mono</td></tr>
    </table></details>
  - Styles for `{`, `}`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-brace-straight.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-brace-straight.dark.svg#gh-dark-mode-only" width=64/></td><td><code>brace = 'straight'</code>, <code>VSAH = 1</code></td></tr>
    <tr><td>More straight braces</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-brace-curly.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-brace-curly.dark.svg#gh-dark-mode-only" width=64/></td><td><code>brace = 'curly'</code>, <code>VSAH = 2</code></td></tr>
    <tr><td>More curly braces (default)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-brace-curly-flat-boundary.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-brace-curly-flat-boundary.dark.svg#gh-dark-mode-only" width=64/></td><td><code>brace = 'curly-flat-boundary'</code>, <code>VSAH = 3</code></td></tr>
    <tr><td>Curly braces with flat boundary shape</td></tr>
    </table></details>
  - Styles for `«`, `»` (Guillemets)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-guillemet-straight.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-guillemet-straight.dark.svg#gh-dark-mode-only" width=64/></td><td><code>guillemet = 'straight'</code>, <code>VSAI = 1</code></td></tr>
    <tr><td>Straight Guillemets (<code>« »</code>)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-guillemet-curly.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-guillemet-curly.dark.svg#gh-dark-mode-only" width=64/></td><td><code>guillemet = 'curly'</code>, <code>VSAI = 2</code></td></tr>
    <tr><td>Curly Guillemets (<code>« »</code>) (default)</td></tr>
    </table></details>
  - Styles for `#`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-upright.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-upright.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'upright'</code>, <code>VSAJ = 1</code></td></tr>
    <tr><td>Number sign with vertical bars (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-slanted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-slanted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'slanted'</code>, <code>VSAJ = 2</code></td></tr>
    <tr><td>Number sign with slanted bars</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-upright-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-upright-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'upright-open'</code>, <code>VSAJ = 3</code></td></tr>
    <tr><td>Number sign with vertical bars and open inner</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-slanted-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-slanted-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'slanted-open'</code>, <code>VSAJ = 4</code></td></tr>
    <tr><td>Number sign with slanted bars and open inner</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-upright-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-upright-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'upright-tall'</code>, <code>VSAJ = 5</code></td></tr>
    <tr><td>Number sign with vertical bars and taller than digits</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-slanted-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-slanted-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'slanted-tall'</code>, <code>VSAJ = 6</code></td></tr>
    <tr><td>Number sign with slanted bars and taller than digits</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-upright-open-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-upright-open-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'upright-open-tall'</code>, <code>VSAJ = 7</code></td></tr>
    <tr><td>Number sign with vertical bars, open inner, and taller than digits</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-number-sign-slanted-open-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-number-sign-slanted-open-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>number-sign = 'slanted-open-tall'</code>, <code>VSAJ = 8</code></td></tr>
    <tr><td>Number sign with slanted bars, open inner, and taller than digits</td></tr>
    </table></details>
  - Styles for `&`
    <details><summary>8 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-closed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-closed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'closed'</code>, <code>VSAK = 1</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) with a closed contour (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-upper-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-upper-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'upper-open'</code>, <code>VSAK = 2</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) with an open contour at upper half</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-lower-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-lower-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'lower-open'</code>, <code>VSAK = 3</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) with an open contour at lower half</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-flat-top.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-flat-top.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'flat-top'</code>, <code>VSAK = 4</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) drawn with a flat top</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-et-toothed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-et-toothed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'et-toothed'</code>, <code>VSAK = 5</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) drawn like a ligature of Ɛ and t with tooth</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-et-toothless-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-et-toothless-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'et-toothless-corner'</code>, <code>VSAK = 6</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) drawn like a ligature of Ɛ and t without tooth (corner)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-et-toothless-rounded.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-et-toothless-rounded.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'et-toothless-rounded'</code>, <code>VSAK = 7</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) drawn like a ligature of Ɛ and t without tooth (rounded)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-ampersand-et-tailed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-ampersand-et-tailed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>ampersand = 'et-tailed'</code>, <code>VSAK = 8</code></td></tr>
    <tr><td>Ampersand (<code>&amp;</code>) drawn like a ligature of Ɛ and t with tail</td></tr>
    </table></details>
  - Styles for `@`
    <details><summary>9 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-threefold.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-threefold.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'threefold'</code>, <code>VSAL = 1</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with three-fold body (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-threefold-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-threefold-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'threefold-tall'</code>, <code>VSAL = 2</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with three-fold body, and tall height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-threefold-solid-inner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-threefold-solid-inner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'threefold-solid-inner'</code>, <code>VSAL = 3</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with three-fold body, and solid inner</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-threefold-solid-inner-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-threefold-solid-inner-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'threefold-solid-inner-tall'</code>, <code>VSAL = 4</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with three-fold body, solid inner, and tall height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-fourfold.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-fourfold.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'fourfold'</code>, <code>VSAL = 5</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with four-fold body</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-fourfold-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-fourfold-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'fourfold-tall'</code>, <code>VSAL = 6</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with four-fold body, and tall height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-fourfold-solid-inner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-fourfold-solid-inner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'fourfold-solid-inner'</code>, <code>VSAL = 7</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with four-fold body, and solid inner</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-fourfold-solid-inner-tall.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-fourfold-solid-inner-tall.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'fourfold-solid-inner-tall'</code>, <code>VSAL = 8</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with four-fold body, solid inner, and tall height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-at-compact.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-at-compact.dark.svg#gh-dark-mode-only" width=32/></td><td><code>at = 'compact'</code>, <code>VSAL = 9</code></td></tr>
    <tr><td>At symbol (<code>@</code>) with compact body</td></tr>
    </table></details>
  - Styles for `$`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'open'</code>, <code>VSAM = 1</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with vertical bar, open contour, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-through.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-through.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'through'</code>, <code>VSAM = 2</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with vertical bar, strike-through vertical bar, and normal height (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-interrupted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-interrupted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'interrupted'</code>, <code>VSAM = 3</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with vertical bar, interrupted strike-through vertical bar, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-open-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-open-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'open-cap'</code>, <code>VSAM = 4</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with vertical bar, open contour, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-through-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-through-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'through-cap'</code>, <code>VSAM = 5</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with vertical bar, strike-through vertical bar, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-interrupted-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-interrupted-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'interrupted-cap'</code>, <code>VSAM = 6</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with vertical bar, interrupted strike-through vertical bar, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-slanted-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-slanted-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'slanted-open'</code>, <code>VSAM = 7</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with slanted bar, open contour, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-slanted-through.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-slanted-through.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'slanted-through'</code>, <code>VSAM = 8</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with slanted bar, strike-through vertical bar, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-slanted-interrupted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-slanted-interrupted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'slanted-interrupted'</code>, <code>VSAM = 9</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with slanted bar, interrupted strike-through vertical bar, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-slanted-open-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-slanted-open-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'slanted-open-cap'</code>, <code>VSAM = 10</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with slanted bar, open contour, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-slanted-through-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-slanted-through-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'slanted-through-cap'</code>, <code>VSAM = 11</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with slanted bar, strike-through vertical bar, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-dollar-slanted-interrupted-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-dollar-slanted-interrupted-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>dollar = 'slanted-interrupted-cap'</code>, <code>VSAM = 12</code></td></tr>
    <tr><td>Dollar symbol (<code>$</code>) with slanted bar, interrupted strike-through vertical bar, and cap height</td></tr>
    </table></details>
  - Styles for `¢`
    <details><summary>12 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'open'</code>, <code>VSAN = 1</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with vertical bar, open contour, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-through.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-through.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'through'</code>, <code>VSAN = 2</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with vertical bar, vertical bar all through the <code>c</code> part, and normal height (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-bar-interrupted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-bar-interrupted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'bar-interrupted'</code>, <code>VSAN = 3</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with vertical bar, vertical bar breaks at center, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-open-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-open-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'open-cap'</code>, <code>VSAN = 4</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with vertical bar, open contour, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-through-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-through-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'through-cap'</code>, <code>VSAN = 5</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with vertical bar, vertical bar all through the <code>c</code> part, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-bar-interrupted-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-bar-interrupted-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'bar-interrupted-cap'</code>, <code>VSAN = 6</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with vertical bar, vertical bar breaks at center, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-slanted-open.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-slanted-open.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'slanted-open'</code>, <code>VSAN = 7</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with slanted bar, open contour, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-slanted-through.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-slanted-through.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'slanted-through'</code>, <code>VSAN = 8</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with slanted bar, vertical bar all through the <code>c</code> part, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-slanted-bar-interrupted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-slanted-bar-interrupted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'slanted-bar-interrupted'</code>, <code>VSAN = 9</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with slanted bar, vertical bar breaks at center, and normal height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-slanted-open-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-slanted-open-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'slanted-open-cap'</code>, <code>VSAN = 10</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with slanted bar, open contour, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-slanted-through-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-slanted-through-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'slanted-through-cap'</code>, <code>VSAN = 11</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with slanted bar, vertical bar all through the <code>c</code> part, and cap height</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-cent-slanted-bar-interrupted-cap.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-cent-slanted-bar-interrupted-cap.dark.svg#gh-dark-mode-only" width=32/></td><td><code>cent = 'slanted-bar-interrupted-cap'</code>, <code>VSAN = 12</code></td></tr>
    <tr><td>Cent sign (<code>¢</code>) with slanted bar, vertical bar breaks at center, and cap height</td></tr>
    </table></details>
  - Styles for `%`
    <details><summary>4 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-percent-dots.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-percent-dots.dark.svg#gh-dark-mode-only" width=32/></td><td><code>percent = 'dots'</code>, <code>VSAO = 1</code></td></tr>
    <tr><td>Percent <code>%</code> with rectangular dots</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-percent-rings-segmented-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-percent-rings-segmented-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>percent = 'rings-segmented-slash'</code>, <code>VSAO = 2</code></td></tr>
    <tr><td>Percent <code>%</code> with rings and segmented slash (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-percent-rings-continuous-slash.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-percent-rings-continuous-slash.dark.svg#gh-dark-mode-only" width=32/></td><td><code>percent = 'rings-continuous-slash'</code>, <code>VSAO = 3</code></td></tr>
    <tr><td>Percent <code>%</code> with rings and continuous bar</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-percent-rings-continuous-slash-also-connected.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-percent-rings-continuous-slash-also-connected.dark.svg#gh-dark-mode-only" width=32/></td><td><code>percent = 'rings-continuous-slash-also-connected'</code>, <code>VSAO = 4</code></td></tr>
    <tr><td>Percent <code>%</code> with rings and continuous bar and the slash in <code>%</code> is also connected to the top-left ring</td></tr>
    </table></details>
  - Styles for `|`, `¦`
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="156"><img src="../images/cv-bar-natural-slope.light.svg#gh-light-mode-only" width=128/><img src="../images/cv-bar-natural-slope.dark.svg#gh-dark-mode-only" width=128/></td><td><code>bar = 'natural-slope'</code>, <code>VSAP = 1</code></td></tr>
    <tr><td>Bar punctuations (<code>|</code>) has a natural slope under italics and oblique (default)</td></tr>
    <tr><td rowspan="2" width="156"><img src="../images/cv-bar-force-upright.light.svg#gh-light-mode-only" width=128/><img src="../images/cv-bar-force-upright.dark.svg#gh-dark-mode-only" width=128/></td><td><code>bar = 'force-upright'</code>, <code>VSAP = 2</code></td></tr>
    <tr><td>Bar punctuations (<code>|</code>) is forced upright under italics and oblique</td></tr>
    </table></details>
  - Styles for `?`
    <details><summary>3 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-question-smooth.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-question-smooth.dark.svg#gh-dark-mode-only" width=32/></td><td><code>question = 'smooth'</code>, <code>VSAQ = 1</code></td></tr>
    <tr><td>Smooth question mark (<code>?</code>) (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-question-corner.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-question-corner.dark.svg#gh-dark-mode-only" width=32/></td><td><code>question = 'corner'</code>, <code>VSAQ = 2</code></td></tr>
    <tr><td>Question mark (<code>?</code>) with a corner at middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-question-corner-flat-hooked.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-question-corner-flat-hooked.dark.svg#gh-dark-mode-only" width=32/></td><td><code>question = 'corner-flat-hooked'</code>, <code>VSAQ = 3</code></td></tr>
    <tr><td>Question mark (<code>?</code>) with a corner at middle and flat hook</td></tr>
    </table></details>
  - Styles for `¶`
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-pilcrow-high.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-pilcrow-high.dark.svg#gh-dark-mode-only" width=32/></td><td><code>pilcrow = 'high'</code>, <code>VSAR = 1</code></td></tr>
    <tr><td>Higher pilcrow sign <code>¶</code> (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-pilcrow-low.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-pilcrow-low.dark.svg#gh-dark-mode-only" width=32/></td><td><code>pilcrow = 'low'</code>, <code>VSAR = 2</code></td></tr>
    <tr><td>Lower pilcrow sign <code>¶</code></td></tr>
    </table></details>
  - Styles for `∂` (Partial derivative symbol)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-partial-derivative-straight-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-partial-derivative-straight-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>partial-derivative = 'straight-bar'</code>, <code>VSAS = 1</code></td></tr>
    <tr><td>The upper bar of the partial derivative symbol is straight</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-partial-derivative-curly-bar.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-partial-derivative-curly-bar.dark.svg#gh-dark-mode-only" width=32/></td><td><code>partial-derivative = 'curly-bar'</code>, <code>VSAS = 2</code></td></tr>
    <tr><td>The upper bar of the partial derivative symbol is curly (default)</td></tr>
    </table></details>
  - Styles for `µ` (Micro sign)
    <details><summary>13 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothed-serifless'</code>, <code>VSAT = 1</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothed shape; without serifs (default for Sans Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothed-bottom-right-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothed-bottom-right-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothed-bottom-right-serifed'</code>, <code>VSAT = 2</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothed shape, and serif at bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothed-motion-serifed'</code>, <code>VSAT = 3</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothed shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothed-serifed'</code>, <code>VSAT = 4</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothed shape, and serifs (default for Slab Upright)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-tailed-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-tailed-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'tailed-serifless'</code>, <code>VSAT = 5</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with tailed shape; without serifs (default for Sans Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-tailed-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-tailed-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'tailed-motion-serifed'</code>, <code>VSAT = 6</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with tailed shape, and motion serifs at top-left and bottom-right (default for Slab Italic)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-tailed-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-tailed-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'tailed-serifed'</code>, <code>VSAT = 7</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with tailed shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothless-corner-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothless-corner-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothless-corner-serifless'</code>, <code>VSAT = 8</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothless (corner bottom-right) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothless-corner-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothless-corner-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothless-corner-motion-serifed'</code>, <code>VSAT = 9</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothless (corner bottom-right) shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothless-corner-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothless-corner-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothless-corner-serifed'</code>, <code>VSAT = 10</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothless (corner bottom-right) shape, and serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothless-rounded-serifless.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothless-rounded-serifless.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothless-rounded-serifless'</code>, <code>VSAT = 11</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothless (rounded) shape; without serifs</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothless-rounded-motion-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothless-rounded-motion-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothless-rounded-motion-serifed'</code>, <code>VSAT = 12</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothless (rounded) shape, and motion serifs at top-left and bottom-right</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-micro-sign-toothless-rounded-serifed.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-micro-sign-toothless-rounded-serifed.dark.svg#gh-dark-mode-only" width=32/></td><td><code>micro-sign = 'toothless-rounded-serifed'</code>, <code>VSAT = 13</code></td></tr>
    <tr><td>Micro Sign (<code>µ</code>) with toothless (rounded) shape, and serifs</td></tr>
    </table></details>
  - Styles for `<=`, `>=` (Less-equal and Greater-equal ligations)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="92"><img src="../images/cv-lig-ltgteq-flat.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-lig-ltgteq-flat.dark.svg#gh-dark-mode-only" width=64/></td><td><code>lig-ltgteq = 'flat'</code>, <code>VLAA = 1</code></td></tr>
    <tr><td>The lower bar of <code>&lt;=</code> and <code>&gt;=</code> ligation is flat (default)</td></tr>
    <tr><td rowspan="2" width="92"><img src="../images/cv-lig-ltgteq-slanted.light.svg#gh-light-mode-only" width=64/><img src="../images/cv-lig-ltgteq-slanted.dark.svg#gh-dark-mode-only" width=64/></td><td><code>lig-ltgteq = 'slanted'</code>, <code>VLAA = 2</code></td></tr>
    <tr><td>The lower bar of <code>&lt;=</code> and <code>&gt;=</code> ligation is slanted</td></tr>
    </table></details>
  - Styles for `!=` (Not-equal ligations)
    <details><summary>6 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-neq-vertical.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-neq-vertical.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-neq = 'vertical'</code>, <code>VLAB = 1</code></td></tr>
    <tr><td>The bar in inequality (<code>!=</code>, etc.) ligation is vertical</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-neq-slightly-slanted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-neq-slightly-slanted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-neq = 'slightly-slanted'</code>, <code>VLAB = 2</code></td></tr>
    <tr><td>The bar in inequality (<code>!=</code>, etc.) ligation is slightly slanted (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-neq-more-slanted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-neq-more-slanted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-neq = 'more-slanted'</code>, <code>VLAB = 3</code></td></tr>
    <tr><td>The bar in inequality (<code>!=</code>, etc.) ligation is more slanted</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-neq-vertical-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-neq-vertical-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-neq = 'vertical-dotted'</code>, <code>VLAB = 4</code></td></tr>
    <tr><td>The bar in inequality (<code>!=</code>, etc.) ligation is vertical, and with a dot at bottom for ligations built from exclamation sign (<code>!</code>)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-neq-slightly-slanted-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-neq-slightly-slanted-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-neq = 'slightly-slanted-dotted'</code>, <code>VLAB = 5</code></td></tr>
    <tr><td>The bar in inequality (<code>!=</code>, etc.) ligation is slightly slanted, and with a dot at bottom for ligations built from exclamation sign (<code>!</code>)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-neq-more-slanted-dotted.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-neq-more-slanted-dotted.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-neq = 'more-slanted-dotted'</code>, <code>VLAB = 6</code></td></tr>
    <tr><td>The bar in inequality (<code>!=</code>, etc.) ligation is more slanted, and with a dot at bottom for ligations built from exclamation sign (<code>!</code>)</td></tr>
    </table></details>
  - Styles for `==` (Equality ligations)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-equal-chain-with-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-equal-chain-with-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-equal-chain = 'with-notch'</code>, <code>VLAC = 1</code></td></tr>
    <tr><td>The bars in equality (<code>==</code>, etc.) ligation have notches in the middle (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-equal-chain-without-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-equal-chain-without-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-equal-chain = 'without-notch'</code>, <code>VLAC = 2</code></td></tr>
    <tr><td>The bars in equality (<code>==</code>, etc.) ligation do not have notches in the middle</td></tr>
    </table></details>
  - Styles for `--` (Hyphen-minus ligations)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-hyphen-chain-with-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-hyphen-chain-with-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-hyphen-chain = 'with-notch'</code>, <code>VLAD = 1</code></td></tr>
    <tr><td>The bars in connected hyphen-minus (<code>--</code>, etc.) ligation have notches in the middle (default)</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-hyphen-chain-without-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-hyphen-chain-without-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-hyphen-chain = 'without-notch'</code>, <code>VLAD = 2</code></td></tr>
    <tr><td>The bars in connected hyphen-minus (<code>--</code>, etc.) ligation do not have notches in the middle</td></tr>
    </table></details>
  - Styles for `++` (Plus ligations)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-plus-chain-with-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-plus-chain-with-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-plus-chain = 'with-notch'</code>, <code>VLAE = 1</code></td></tr>
    <tr><td>The bars in connected plus (<code>++</code>, etc.) ligation have notches in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-plus-chain-without-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-plus-chain-without-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-plus-chain = 'without-notch'</code>, <code>VLAE = 2</code></td></tr>
    <tr><td>The bars in connected plus (<code>++</code>, etc.) ligation do not have notches in the middle (default)</td></tr>
    </table></details>
  - Styles for `=>` (Double arrow ligation)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-double-arrow-bar-with-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-double-arrow-bar-with-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-double-arrow-bar = 'with-notch'</code>, <code>VLAF = 1</code></td></tr>
    <tr><td>The bars in double arrow (<code>=&gt;</code>, etc.) ligation have notches in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-double-arrow-bar-without-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-double-arrow-bar-without-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-double-arrow-bar = 'without-notch'</code>, <code>VLAF = 2</code></td></tr>
    <tr><td>The bars in double arrow (<code>=&gt;</code>, etc.) ligation do not have notches in the middle (default)</td></tr>
    </table></details>
  - Styles for `->` (Single arrow ligation)
    <details><summary>2 variants</summary>
    <table>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-single-arrow-bar-with-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-single-arrow-bar-with-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-single-arrow-bar = 'with-notch'</code>, <code>VLAG = 1</code></td></tr>
    <tr><td>The bars in single arrow (<code>=&gt;</code>, etc.) ligation have notches in the middle</td></tr>
    <tr><td rowspan="2" width="60"><img src="../images/cv-lig-single-arrow-bar-without-notch.light.svg#gh-light-mode-only" width=32/><img src="../images/cv-lig-single-arrow-bar-without-notch.dark.svg#gh-dark-mode-only" width=32/></td><td><code>lig-single-arrow-bar = 'without-notch'</code>, <code>VLAG = 2</code></td></tr>
    <tr><td>The bars in single arrow (<code>=&gt;</code>, etc.) ligation do not have notches in the middle (default)</td></tr>
    </table></details>

<!-- END Section-Cherry-Picking-Styles -->

#### Configuring Weights, Widths and Slopes

Subsection `weights` is used to change the weight grades that the custom family needs. It is a dictionary from the filename suffix (in PascalCase) to either...

 * A string formatted in `default.<weight>` format, meaning reusing a default weight grade;
 * Or, a sub-object with properties:
   * `shape`: Number, configures the weight grade of the glyphs' shapes.
   * `menu`: Integer, configures the weight grade used when naming fonts.
   * `css`: Integer, configures the weight grade used in web font CSS.

Subsection `widths` is used to change the width grades that the custom family needs. It is a dictionary from the filename suffix (in PascalCase) to either...

 * A string formatted in `default.<width>` format, meaning reusing a default width grade;
 * Or, a sub-object with properties:
   * `shape`: Number, configures the width of the glyphs' shapes, measured in 1/1000 em.
   * `menu`: Integer, configures the width grade used when naming fonts. The valid values are from `1` to `9`, inclusive.
   * `css`: String, configures the [font-stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch) value used in web font CSS.

Subsection `slopes` is used to change the slope angles and grades that the custom family needs. It is a dictionary from the filename suffix (in PascalCase) to either...

 * A string formatted in `default.<slope>` format, meaning reusing a default slope grade;
 * Or, a sub-object with properties:
   * `angle`: Number, configures the slope angle in degrees. The valid vales are from `0` to `15`, inclusive.
   * `shape`: String from `upright`, `italic` or `oblique`. Configures the slope used for variant selection. 
   * `menu`: String from `upright`, `italic` or `oblique`. Configures the slope grade used when naming fonts.
   * `css`: String from `normal`, `italic` or `oblique`. Configures the [CSS font-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style) value.

In addition to list all the weights/widths/slopes directly, the user could also configure the weights/widths/slopes list using “inherits” to inherit the list from another build plan:

```toml
[buildPlans.IosevkaCustom2]
family = "Iosevka Custom 2"

weights.inherits = "buildPlans.IosevkaCustom1" # Inherit weights list from "IosevkaCustom1"
widths.inherits = "buildPlans.IosevkaCustom1"  # Inherit widths list from "IosevkaCustom1"
slopes.inherits = "default"  # Inherit slopes list from default
```

#### Compatibility Ligatures

Certain software, notably Emacs, relies on pre-encoded ligatures instead of OpenType to provide ligations. Iosevka could be configured with additional subsection `compatibilityLigatures`, being an array of records with following fields:

* `unicode`: The PUA code point being assigned to.
* `featureTag`: The feature tag to compute ligations.
* `sequence`: The source character sequence.

A sample of compatibility ligature config is:

```toml
[[buildPlans.IosevkaCustom.compatibilityLigatures]]
unicode = 57600 # 0xE100
featureTag = 'calt'
sequence = '<*>'
```

#### Excluding Characters

Use the `excludeChars` configuration to exclude character ranges from the font.

```toml
[buildPlans.iosevkaCustom.excludeChars]
ranges = [[10003, 10008]]
```

#### Metric Override

Subsection `metricOverride` provides ability to override certain metric values, if you *reallly* want to. Adding this section is **strongly discouraged** as it may introduce broken geometry or broken shapes.

| Property | Unit | Default Value | Meaning |
|----------|------|---------|----------|
| `cap` | emu | 735 | Height of `H`. |
| `ascender` | emu | 735 | Height of `b`. |
| `xHeight` | emu | 520 | Height of `x`. |
| `sb` | emu | (*varies, 60 for Regular*) | Width of common side-bearings. |
| `accentWidth` | emu | 200 | Width of accent marks. |
| `accentClearance` | emu | 72 | Vertical clearance of accent marks to the base. |
| `accentHeight` | emu | 176 | Height of accent marks. |
| `accentStackOffset` | emu | 220 | Offset height of accent mark stack. |
| `dotSize` | emu | (*varies, 125 for regular*) | Size of dots in diacritic marks. |
| `periodSize` | emu | (*varies, 140 for regular*) | Size of dots in period. |
| `leading` | emu | 1250 | Built-in line height. |
| `symbolMid` | emu | 340 | Height of the center of hyphen (`-`). |
| `parenSize` | emu | 966 | Height of Parentheses. |
| `winMetricAscenderPad` | emu | 0 | Additional pad for Win metrics’ ascender to avoid clipping in legacy Windows applications. |
| `winMetricDescenderPad` | emu | 0 | Additional pad for Win metrics’ descender to avoid clipping in legacy Windows applications. |
| `powerlineScaleX`, `powerlineScaleY` | (*ratio*) | 1 | X and Y scale of Powerline glyphs. |
| `powerlineShiftX`, `powerlineShiftY` | emu | 0 | X and Y shift of Powerline glyphs. |
| `onumZeroHeightRatio` | (*ratio*) | 1.145 | Ratio of height of `0` under `onum` feature, to the height of `x`. |
| `essRatio` | (*ratio*) | (*varies, 1.12 for Regular*) | Ratio of the thickness of the neck of `S`/`s`/`?`, to the normal stroke width. `essRatioUpper`, `essRatioLower` and `rssRatioQuestion` will override this value for corresponded glyph categories when set. |
| `essRatioUpper` | (*ratio*) | (*varies, 1.12 for Regular*) | Ratio of the thickness of the neck of `S`, to the normal stroke width. |
| `essRatioLower` | (*ratio*) | (*varies, 1.12 for Regular*) | Ratio of the thickness of the neck of `s`, to the normal stroke width. |
| `essRatioQuestion` | (*ratio*) | (*varies, 1.12 for Regular*) | Ratio of the thickness of the neck of `?`, to the normal stroke width. |
| `archDepth` | emu | (*varies, 195 for Regular*) | Depth of the curve segment of arches / O rings in capital letters. |
| `smallArchDepth` | emu | (*varies, 200 for Regular*) | Depth of the curve segment of arches / O rings in small letters. |

The values of each item could be either a number, or a string representing an expression so that it could be different for different instance fonts, or depending on default values. The syntax of valid expressions are:

```
Expression -> Term (('+' | '-') Term)*
Term       -> Factor (('*' | '/') Factor)*
Factor     -> ('+' | '-')* Primitive
Primitive  -> Literal
            | Call
            | Binding
            | Group
            | List
Literal    -> ['0'..'9']+ ('.' ['0'..'9']+)?
Identifier -> ['A'..'Z', 'a'..'z', '_']+
Call       -> Identifier '(' Expression (',' Expression)* ')'
List       -> Identifier '[' Expression (',' Expression)* ']'
Binding    -> Identifier
```

Valid identifiers include:
 * `weight`: being the weight grade;
 * `width`: being the characters' unit width, measured in em-units;
 * `slopeAngle`: being the slope angle in degrees;
 * Default value of all overridable metrics, prefixed with `default_`, i.e., default `cap` value will be accessable thorugh `default_cap`.

Valid functions include:
 * `blend`(_x_, \[_x1_, _y1_\], \[_x2_, _y2_\], ...): Perform a smooth interpolation through data pairs \[_x1_, _y1_\], \[_x2_, _y2_\], ..., against parameter _x_.

For example, the following configuration:

```toml
[buildPlans.IosevkaCustom.metricOverride]
leading = 1500
sb = 'default_sb * 1.0625 + 15'
dotSize = 'blend(weight, [100, 50], [400, 125], [900, 180])'
```

will:

 * Override line height to `1500` em-unit;
 * Override the sidebearing value by its value multiplied by `1.0625` then added with `15`.
 * Override the dot size by a interpolation against weight: at thin (`100`) being `50`, at regular (`400`) being `125`, and at heavy (`900`) being `180`.

#### Naming Override

The properties in the `namingOverride` section could be uase to override menu names of the produced font. The following properties will be applied to the font directly:

 - `copyright`: Name ID 0, copyright notice.
 - `manufacturer`: Name ID 8, manufacturer name.
 - `designer`: Name ID 9, designer name.
 - `description`: Name ID 10, description of the typeface.
 - `urlVendor`: Name ID 11, URL of font vendor.
 - `urlDesigner`: Name ID 12, URL of typeface designer.
 - `license` (or alternatively `licence`): Name ID 13, license description.
 - `licenseURL` (or alternatively `licenceURL`): Name ID 14, license Info URL.

In addition, you can also use the `version` property to override font version. The version number should follow [SemVer](https://semver.org/), like being `1.0.0`.

#### Sample Configuration

A sample configuration could be found at [private-build-plans.sample.toml](https://github.com/be5invis/Iosevka/blob/master/private-build-plans.sample.toml).

### TTC Building

It is possible to create a customized TTC build by using the following method:

 1. Add a collect plan into `private-build-plans.toml`, with a `from` field containing all the TTF groups it needs:
   ```toml
   [collectPlans.IosevkaCustom]
   from = ["IosevkaCustom1", "IosevkaCustom2"]
   ```
 2. Run build with the following command:
  - `npm run build -- ttc::IosevkaCustom`: Create TTCs from collection `IosevkaCustom`; The file will be saved into `dist/.ttc`.
  - `npm run build -- super-ttc::IosevkaCustom`: Create a single-file TTC from collection `IosevkaCustom`; The file will be saved into `dist/.super-ttc`.

### Baking other OpenType features

There are tools tha could be used to bake other OpenType that are not configurable with TOML files (like baking localized forms). The tools include:

 * https://mutsuntsai.github.io/fontfreeze/
 * https://github.com/twardoch/fonttools-opentype-feature-freezer

These tools could be used in post-processing fonts. Please refer their documents for instructions.
