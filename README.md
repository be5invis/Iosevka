# Iosevka

Coders' typeface, built from code.

## Preview
### Iosevka
![preview-sans](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/preview-sans.png)
### Iosevka Slab
![preview-slab](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/preview-slab.png)

## Installation

Quit your editor/program. Unzip and open the folder.

 * **Mac + Linux (with font-viewer)** : Select the .ttf files and double click → Follow the on-screen guide.
 * **Windows** : Right click the .ttf files → Install.
 * **Linux (manually)** : Copy the .ttf files to your fonts-directory → Run `sudo fc-cache`.

### Detailed Instructions
 * [How to](http://www.howtogeek.com/192980/how-to-install-remove-and-manage-fonts-on-windows-mac-and-linux/) Install, Remove, and Manage Fonts on Windows, Mac, and Linux.
 * [Ubuntu Wiki](https://wiki.ubuntu.com/Fonts#Manually)

## Building

To build Iosevka you should:

1. Ensure that `node`, `FontForge` (≥ Aug. 2015 release), `ttfautohint`, `ttx` and `make` are runnable in your terminal.
2. Install necessary libs by `npm install`
3. `make`.

You will find ttfs in the `build/` directory.

## Build your own style

![Styles Preview](https://cloud.githubusercontent.com/assets/240091/10895370/cc80f088-81ee-11e5-919b-a6daefdbc3f0.png)

Iosevka comes with several visual styles, however they are inactive using the default build. To build these variants you should use style variables in the `make` procedure:

* `STYLE_COMMON` for both uprights and italics,
* `STYLE_UPRIGHT` for uprights only, and
* `STYLE_ITALICS` for itaics only.

You can add arbitary styles for these variables, for example, `make STYLE_UPRIGHT='v-l-zshaped v-i-zshaped'` to create a variant with Z-shaped letter `l` and `i` for uprights.

The current avaliable styles are:

* Styles for letter `l`:
	* `v-l-hooky` : Hooky `l`
	* `v-l-zshaped` : Z-shaped `l`
	* `v-l-serifed` : Serifed `l` (default for upright subfamilies)
	* `v-l-italic` : Italic `l` (default for italic subfamilies)
* Styles for letter `i`:
	* `v-i-hooky` : Hooky `i`
	* `v-i-zshaped` : Z-shaped `i`
	* `v-i-serifed` : Serifed `i` (default for upright subfamilies)
	* `v-l-italic` : Italic `i` (default for italic subfamilies)

## Release Notes
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