## Prebuilt Packages

Iosevka provides a large variety of variants. Prebuilt variants are described below.

- **Spacing** : How wide some specific characters are.
  - _Default_: The default variant with ligatures and semantic full-width glyphs.
  - _Terminal_ (“Term”): Exact monospaced font without ligatures and full-width glyphs. Since some environments cannot interpret Iosevka as monospaced, and have difficulties with ligatures included, you can use Iosevka Term as an alternative.
  - _Terminal-Ligature_ (“TermLig”)：Exact monospaced font with ligatures.
  - _Typesetting_ (“Type”): Similar to _Default_, but more mathematical symbols are wider.
- **Shape** : Key shape parameters:
  - *Slab*: Letters will contain slab serif.
  - *Curly*: Letters like `k`, `x`, `v`, `A`, `R` will have curly leg shapes.
- **Ligatures** : Whether the ligatures is included. The “no-ligature” variants are used for some Linux-based environments cannot handle ligatures correctly.
- **Menu Name** : The family name of the font in your OS after installation. If two variants share the same family name, they cannot be installed together.
