## Prebuilt Packages

Iosevka provides a large variety of variants. Prebuilt variants are listed below. For all Monospace variants' packages, it will contain three _spacing variants_. You can either download the package containing all the spacing variants (recommended), or cherry-pick the variant with specific spacing.
  - _Default_: The default variant with ligatures. Various symbols, like arrows and geometric, are wide (2-column).
  - _Terminal_ (“Term”)：A narrower variant focusing terminal uses. Arrows and geometric symbols will be narrow to follow typical terminal usages.
  - _Fixed_: Exact monospace font without ligatures and wide glyphs. Since some environments cannot interpret Iosevka or Iosevka Term as monospace, and have difficulties with ligatures included, you can use Iosevka Fixed as an alternative.

## Packaging Formats

Iosevka provides various packaging formats, here is the list of them:

| Option         | Contents                                            | Description                                                  |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Super TTC | 1 `.ttc` file                                       | Bundles all fonts in the scope together into a single file. It is the recommended way to install fonts for Desktop usage, if your operating system is updated to date. Package files with `-sgr-` infix in the filename only contains fonts for one single group (variant and spacing). |
| TTC            | 9 `.ttc` files                                      | Each TTC file bundles fonts with the same weight together.  Package files with `-sgr-` infix in the filename only contains fonts for one single group (variant and spacing).   |
| TTF            | 54 `.ttf` files                                     | Each TTF file contains one font for a specific weight, width, slope and spacing variant. This option is ideal for embedding Iosevka into applications, or for desktop usage if TTC options have compatibility issues.<br/>TTF packages also provide *unhinted* version which removes [hints](https://en.wikipedia.org/wiki/Font_hinting), which reduced file size, but will be less clear on certain platforms. |
| WebFont        | 1 `.css` file + 54 `.woff2` files + 54 `.ttf` files | Contains contents required to use Iosevka on websites.       |

