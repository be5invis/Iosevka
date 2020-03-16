## Prebuilt Packages

Iosevka provides a large variety of variants. Prebuilt variants are described below.

- **Spacing** : How wide some specific characters are.
  - _Default_: The default variant with ligatures. Various symbols, like arrows and geometric, are wide (2-column).
  - _Terminal_ (“Term”)：A narrower variant focusing terminal uses. Arrows and geometric symbols will be narrow to follow typical terminal usages.
  - _Fixed_: Exact monospace font without ligatures and wide glyphs. Since some environments cannot interpret Iosevka or Iosevka Term as monospace, and have difficulties with ligatures included, you can use Iosevka Fixed as an alternative.
- **Shape** : Key shape parameters:
  - *Slab*: Letters will contain slab serif.
  - *Curly*: Letters like `k`, `x`, `v`, `A`, `R` will have curly leg shapes.
- **Ligatures** : Whether the ligatures is included. The “no-ligature” variants are used for some Linux-based environments cannot handle ligatures correctly.
- **Menu Name** : The family name of the font in your OS after installation. If two variants share the same family name, they cannot be installed together.
