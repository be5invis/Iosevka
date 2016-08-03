# Iosevka ![Version](https://img.shields.io/github/release/be5invis/Iosevka.svg) [![Donate](https://img.shields.io/badge/donate-alipay-orange.svg)](http://7xpe0v.com1.z0.glb.clouddn.com/aeqr9bewtqtvpkpl18.png)

Coders' typeface, built from code. //[→ Inziu Iosevka for Chinese and Japanese.](http://be5invis.github.io/Iosevka/inziu.html)

![](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/preview-all.png)

## Installation

Quit your editor/program. Unzip and open the folder.

* **[Instructions for OS X](http://support.apple.com/kb/HT2509)**
* **[Instructions for Windows](https://www.microsoft.com/en-us/Typography/TrueTypeInstall.aspx)**
* **Linux** : Copy the .ttf files to your fonts directory → Run `sudo fc-cache`. 
  - Arch Linux users can install the font from the AUR [here](https://aur.archlinux.org/packages/ttf-iosevka) using an AUR wrapper or by doing it manually. [All variants](https://aur.archlinux.org/packages/?O=0&SeB=nd&K=ttf-iosevka&SB=n&SO=a&PP=50&do_Search=Go).
  - Void Linux users can install the font with `xbps-install font-iosevka`.

## Weights, Variants and OpenType features

The typeface contains seven weights (thin, extra-light, light, regular, medium, bold and heavy) alongside with both italic and oblique versions, with the same metrics as the regular one. 

![Weights sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/weights.png)

All versions include the same ranges of characters: Latin letters, Greek letters (including Polytonic Greek), some Cyrillic letters, IPA symbols and common punctuations and some symbols. You can check out the full list [here](http://be5invis.github.io/Iosevka/specimen.html).

![Languages Sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/languages.png)

Iosevka supports accessing all letter variants using OpenType features.

![OpenType Sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/opentype.png)

## Ligations (Experimental)

![Ligations Sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/ligations.png)

Iosevka’s default ligation set is assigned to `calt` feature, though not all of them are enabled by default. Iosevka supports Language-Specific Ligations, which is the ligation set enabled only under certain languages. These ligation sets are assigned to custom feature tags, like `XHS_`.

## Building from Source

To build Iosevka you should:

1. Ensure that [`node`](http://nodejs.org) (≥ 6.0), [`FontForge`](http://fontforge.org) (with Python scripting support, ≥ Aug. 2015 release), [`ttfautohint`](http://www.freetype.org/ttfautohint/), [`otfcc`](https://github.com/caryll/otfcc) (≥ 0.2.3) and `make` are runnable in your terminal.
   - Windows users may need to install MinGW and make \*nix utilities accessible (`mkdir.exe`, `cp.exe`, `cat.exe` and `rm.exe`, in particular) from Command Prompt. Utilities provided by [Git for Windows](https://git-for-windows.github.io/) works fine.
2. Install necessary libs by `npm install`. If you’ve installed them, upgrade to the latest.
3. `make`.
   - Use `make DONTHINT=1` to disable hinting.
   - Use `make DONTREF=1` to turn off reference-ify (will increase file size but provide better compatibility).


You will find TTFs in the `dist/` directory.

### Building the Web Font

The `webfonts/` directory is used to build Iosevka for web font uses. To build the web fonts you should:

1. Build Iosevka.
2. Ensure that `sfnt2woff` and `woff2_compress` are installed and runnable.
3. `make webfonts`.

The web fonts will be generated into `dist/webfonts`.

## Build Your Own Style

![Styles Preview](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/variants.png)

Iosevka comes with several visual styles, however they are inactive using the default build. To build these variants you should use style variables in the `make` procedure:

* `STYLE_COMMON` for both uprights and italics,
* `STYLE_UPRIGHT` for upright and oblique, and
* `STYLE_ITALICS` for itaics only.

You can add arbitary styles for these variables, for example, `make STYLE_UPRIGHT='v-l-zshaped v-i-zshaped'` to create a variant with Z-shaped letter `l` and `i` for uprights.

The current avaliable styles are:

* Styles for letter `l`:
  * `v-l-hooky` : Hooky `l`.
  * `v-l-zshaped` : Z-shaped `l`.
  * `v-l-serifed` : Serifed `l` (default for upright and oblique).
  * `v-l-italic` : Italic `l` (default for italic).
* Styles for letter `i`:
  * `v-i-hooky` : Hooky `i`.
  * `v-i-zshaped` : Z-shaped `i`.
  * `v-i-serifed` : Serifed `i` (default for upright and oblique).
  * `v-i-italic` : Italic `i` (default for italic).
* Styles for letter `a`:
  * `v-a-doublestorey` : Double-storey `a` (default for upright and oblique).
  * `v-a-singlestorey` : Single-storey `a` (default for italic).
* Styles for letter `g`:
  * `v-g-doublestorey` : Double-storey `g` (default).
  * `v-g-singlestorey` : Single-storey `g`.
  * `v-g-opendoublestorey` : Open Single-storey `g`.
* Styles for letter `m`:
  * `v-m-longleg` : `m` with long middle leg (default).
  * `v-m-shortleg` : `m` with shorter middle leg.
* Styles for letter `0`:
  * `v-zero-slashed` : Slashed Zero `0` (default).
  * `v-zero-dotted` : Dotted Zero `0`.
  * `v-zero-unslashed` : O-like `0`.
* Styles for ASCII tilde (`~`), asterisk (`*`) amd paragaraph(`¶`):
  * `v-tilde-high` : Higher tilde `~`.
  * `v-tilde-low` : Lower tilde `~` (default).
  * `v-asterisk-high` : Higher asterisk `*` (default).
  * `v-asterisk-low` : Lower asterisk `*`.
  * `v-paragraph-high` : Higher paragraph symbol `¶` (default).
  * `v-paragraph-low` : Lower paragraph symbol `¶`.
* Styles related to ligations
  * `term` : Disable ligations. When this style is present, the font built will not contain ligatures, and its family name will be set to `Iosevka Term`. In case of your OS or editor cannot handle ligatures correctly, you can disable ligations using it.


## Release Notes

* **1.9.2**
  - Added short-legged `m` (assigned to `cv26`).
* **1.9.1**
  - Added /latinayin.
  - Added more symbols.
* **1.9.0**
  - Added open double-storey `g` (assigned to `cv24`).
  - Redesigned single-storey `a`.
  - Reassigned the `ss**` styles. Now they are designed to simulate existing fonts.
* **1.8.6**
  - Added Bulgarian and Macedonian Cyrillic variants
  - Added ligations about colons
* **1.8.5**
  - Added `XHS_` and `XPTL` feature tags for Language-Specific ligations.
  - Added `/bolt`, `/blackflag`, `/circlestar` and `/heavyballotcross` symbols.
* **1.8.4**
  - Added `opbd` feature for punctuation compression.
* **1.8.3**
  - Added Kome symbol (`※`).
  - Reorganized pre-built release packages. The “IosevkaNL” is renamed to “Iosevka Term”.
* **1.8.2**
  - Iosevka now provides a new variant family “IosevkaNL”, with ligation disabled to avoid typesetting issues under some Linux environments.
* **1.8.1**
  - Added more ligations.
  - Fixed the incorrectly-sized symbol `∞` in the CC variants.
* **1.8.0**
  - Added a lower paragraph symbol (`¶`) shape, and two OpenType features (`cv22` and `cv23`) to enable them.
  - Most mathematical operators, like `≤`, will be full-width in the CC variants.
  - Added experimental ligatures support. Currently the ligatures are assigned to feature “`calt`” and contains these figures only: `-> --> <- <-- <-> <!--` . Note that Iosevka does not contain "real" ligature glyphs, these figures are implemented using chained substitution and long dashes.
* **1.7.5**
  - Reduced the weight of Bold, and increased the size of periods of Medium.
* **1.7.4**
  - The lower tilde (`~`) is used by default.
  - Added slanted inequality symbol (U+2A7D and U+2A7E) and corrected the shape of `≤` and `≥`.
* **1.7.3**
  - Optimize the shapes of three-like glyphs, including `3`, `ε` and `з`.
* **1.7.2**
  - Entallen upright letter `f`.
  - Reverted shape of `π` to the 1.3.x.
  - Added `Ѧ` and `Ѫ`.
* **1.7.1**
  - Fixed incorrect outline of braced glyphs under heavy weights.
* **1.7.0**
  - Added more tie marks and combining marks.
  - Fixed the incorrect weights created by `[turned]` and `[composite]`.
* **1.6.3**
  - Fixed the missing vertical stroke of `¬`.
  - Fixed the dot position of `ĳ`.
  - Added several combining marks : `o͐`, `o͚`, etc.
  - Redesigned the tilde `~` for better consistency.
* **1.6.2**
  - Added braced letters and numbers, like `⑴` and `⒜`.
  - Added several Greek letterforms, including `Ϸ` and `ϸ`.
  - Rebuild the script into [sketch]es.
* **1.6.1**
  - Added `ꭤ` U+AB64, `Ɑ` U+2C6D, `Ɒ` U+2C70, `ꬰ` U+AB30, etc.
* **1.6.0**
  - Fixed the broken `Æ` at thin weights.
  - Increased the length of the bottom serif in `T`.
  - Made `Ђ` and `Ћ` wider to balance Cyrillic letters.
* **1.5.5**
  - Adjusted the outlines of `f`, `2` and `&`, as well as full-width symbol `~`.
* **1.5.4**
  - Fixed the distortion of letter `s` under several situations, for example, full-width.
* **1.5.3**
  - Fixed the slanted bottom tip of `y` in Slab oblique.
* **1.5.2**
  - Told OS X not to increase line height for bold weights.
  - Pushed the `i` and `l` undef hooky variants rightward slightly.
* **1.5.1**
  - Added `cv20` and `cv21` for underscore variants (https://github.com/be5invis/Iosevka/pull/44)
  - Reorganized `ss01`, `ss02` and `ss03`. The less-frequent style (`cv04` and `cv08`) is moved to `ss03`, while `ss01` is for hooky shapes.
* **1.5.0**
  - The new "fairizer" now replaces FontForge's outline simplification. It will create smooth and fair outline curves now.
  - Introduced centered asterisk (`*`) and tilde (`~`). They can be enabled by OpenType features `ss10`.
  - `cv**` and `ss**` features introduced in 1.4.0 now supports accented letters.
* **1.4.3**
  - Added the "oblique" variant.
  - Corrected the stroke width in italic variants. It will reduce the file size of italics and improve its outline quality.
* **1.4.2**
  - The shape of lowercase `y` is improved. Its slab version is redesigned.
  - Rebalanced italic `l` and `i`.
  - Enwiden `/t`.
* **1.4.1**
  - Fixed the incorrectly-shaped `/nine` in the thin variant.
  - Fixed the broken serif of `/yhooktop`.
* **1.4.0**
  - Added five new weights: *thin*, *extralight*, *light*, *medium* and *heavy*.
  - Shape optimizations for MANY letters, including `/s`, `/r`, `/a`, `/beta`, `/cyryeri` and their derived characters.
* **1.3.0**
  - Shape optimizations: `/f`, `/r`, `/a`, `/s`, `/epsilon`, `/cyrze` and their derived glyphs.
  - Narrowed slab-serif variants.
  - Added `/overlineTieAbove`, `/underlineTieBelow` and `/turnTieAbove`.
* **1.2.0**
  - Glyphs added: `/cyrGhayn`, `/cyrghayn`, `/cyrChevbar`, `/cyrchevbar`, `/turnoe`, `/voicedlaryngenalspirant`, `/oupperhalf`, `/olowerhalf` and their derived glyphs.
  - Shape optimization: `/eight`, `/propto`, `/J`, `/j`, `/epsilon`, `/cyrze`, `/taillessphi`, `/smcpPsi` and their derived glyphs.
  - Added the missing marks of `/longs`.
  - Introduced a new SVG-based outline exporting mechanism. Now I am finally free from the rounding nightmare.
* **1.1.2**
  - Improved the balancing of `/longs`, `/f` and `/eszet`.
  - The strokes of `/A`, `/V` and `/v` in Iosevka Slab is straightened.
* **1.1.1**
  - Added the missing serifs for `/cyrdzhe`.
  - Balanced `/pi` in bold weights.
  - Moved the descender lines of Cyrillic letters rightward a little in italics.
* **1.1.0**
  - Enwiden the boldfaces. This will improve the consistency between regular and bold weights.
  - The curves in `/xi` are optimized.
* **1.0.2**
  - Fixed the incorrect `/yhooktop`.
  - The digaphs defined in Unicode is now single-width.
  - Reorganized subfamilies: Now the default Iosevka does not contain full-width glyphs any more.

![Family Matrix](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/matrix.png)