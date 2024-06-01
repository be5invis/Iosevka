<p align="center"> <img src="images/grand-title.light.svg#gh-light-mode-only" title="Iosevka Grand Title"><img src="images/grand-title.dark.svg#gh-dark-mode-only" title="Iosevka Grand Title"/> </p>

------------

<p align="center"><a href="https://github.com/be5invis/Iosevka/releases#gh-light-mode-only"><img src="images/button-release.light.svg#gh-light-mode-only" title="Release"></a><a href="https://github.com/be5invis/Iosevka/releases#gh-dark-mode-only"><img src="images/button-release.dark.svg#gh-dark-mode-only" title="Release"></a> <a href="https://be5invis.github.io/Iosevka/customizer#gh-light-mode-only"><img src="images/button-customize.light.svg#gh-light-mode-only" title="Customizer"></a><a href="https://be5invis.github.io/Iosevka/customizer#gh-dark-mode-only"><img src="images/button-customize.dark.svg#gh-dark-mode-only" title="Customizer"></a> <a href="https://be5invis.github.io/Iosevka/specimen#gh-light-mode-only"><img src="images/button-specimen.light.svg#gh-light-mode-only" title="Specimen"></a><a href="https://be5invis.github.io/Iosevka/specimen#gh-dark-mode-only"><img src="images/button-specimen.dark.svg#gh-dark-mode-only" title="Specimen"></a></p>

**Iosevka** \[ˌjɔˈseβ.kʰa\] is an *open-source*, *sans-serif* + *slab-serif*, *monospace* + *quasi‑proportional* typeface family, designed for *writing code*, using in *terminals*, and preparing *technical documents*.

## Installation

### Installing from GitHub Releases

1. Download your font package from [releases](https://github.com/be5invis/Iosevka/releases).
  * For Linux users you could use the following command to download all the TTC packages in the latest release:
    ```bash
    curl -s 'https://api.github.com/repos/be5invis/Iosevka/releases/latest' | jq -r ".assets[] | .browser_download_url" | grep PkgTTC-Iosevka | xargs -n 1 curl -L -O --fail --silent --show-error
    ```
2. Quit all your editors / programs.
3. Unarchive the font package and you will see the font files.
4. Take actions depending on your OS:
    * **Windows**: Select the font files and drag into font [settings](ms-settings:fonts) / font control panel page.  
      * On Windows 10 1809 or newer, the default font installation is per-user, and it may cause compatibility issues for some applications, mostly written in Java. To cope with this, right click and select “Install for all users” instead. [Ref.](https://youtrack.jetbrains.com/issue/JRE-1166?p=IDEA-200145)
    * **macOS**: [Follow instructions here](http://support.apple.com/kb/HT2509).
    * **Linux** : Copy the font files to your fonts directory then run `sudo fc-cache`.

### Installing via Package Managers

*Disclaimer: This repository does not maintain any package manager distribution. The packages listed below may not always be up-to-date.*

  * **macOS**
    * Standard distribution in Homebrew:
      ```bash
      brew tap homebrew/cask
      brew install --cask font-iosevka
      ```
    * Search for other variants using `brew search font-iosevka` and install what you want.
    * Customizable install using Homebrew: see [robertgzr/homebrew-tap](https://github.com/robertgzr/homebrew-tap).
  * **Linux**
    * Arch Linux: Install one of the [ttc-iosevka packages](https://archlinux.org/packages/?q=ttc-iosevka).
    * Ubuntu Linux: Install one of the [fonts-iosevka packages](http://sid.ethz.ch/debian/fonts-iosevka/).
    * Void Linux: Install the font with `xbps-install font-iosevka`.
    * Fedora: Install the font(s) from [the COPR here](https://copr.fedorainfracloud.org/coprs/peterwu/iosevka/). Run `dnf search iosevka` to discover available fonts and `dnf install` to install the chosen one(s).
  * **FreeBSD**: The font can be installed with `pkg install iosevka`.
  * **OpenBSD**: Run `pkg_info -Q iosevka` to see which Iosevka packages are available. Use `pkg_add` to install the chosen package(s).

## Features

In the official package, Iosevka provides 6 monospace subfamilies (sans-serif and slab-serif, each in the 3 spacings Default, Term and Fixed) and 2 quasi-proportional subfamilies (Aile (sans-serif) and Etoile (slab-serif)). In all the monospace subfamilies, 9 weights (Thin to Heavy), 2 widths (Normal and Extended), and 3 slopes (Upright, Italic and Oblique) are included. In the quasi-proportional subfamilies, the quantity of widths is reduced to 1.

![Weights sample](images/weights.light.svg#gh-light-mode-only)![Weights sample](images/weights.dark.svg#gh-dark-mode-only)

All versions include the same ranges of characters: Latin letters, Greek letters (including Polytonic), some Cyrillic letters, IPA symbols and common punctuations and some symbols. You can check out the full list [here](http://be5invis.github.io/Iosevka/specimen).

![Languages Sample](images/languages.light.svg#gh-light-mode-only)![Languages Sample](images/languages.dark.svg#gh-dark-mode-only)

<!-- BEGIN Section-Language-List -->
<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->

235 Supported Languages: 

Abkhazian, Afar, Afrikaans, Aghem, Akan, Akoose, Albanian, Anii, Aragonese, Asturian, Asu, Atsam, Azerbaijani, Bafia, Baluchi (bal_latn), Bambara, Basaa, Bashkir, Basque, Belarusian, Bemba, Bena, Betawi, Bosnian, Breton, Bulgarian, Caddo, Catalan, Cebuano, Central Atlas Tamazight, Chechen, Chickasaw, Chiga, Choctaw, Church Slavic, Chuvash, Colognian, Cornish, Corsican, Croatian, Czech, Danish, Duala, Dutch, Embu, English, Erzya, Esperanto, Estonian, Ewe, Ewondo, Faroese, Filipino, Finnish, French, Friulian, Fula, Ga, Galician, Ganda, German, Greek, Guarani, Gusii, Hausa, Hawaiian, Hindi (Latin), Hungarian, Icelandic, Ido, Igbo, Inari Sami, Indonesian, Interlingua, Interlingue, Inuktitut (iu_latn), Irish, Italian, Javanese, Jju, Jola-Fonyi, Kabuverdianu, Kabyle, Kaingang, Kako, Kalaallisut, Kalenjin, Kamba, Kazakh, Kenyang, Kikuyu, Kinyarwanda, Koyra Chiini, Koyraboro Senni, Kpelle, Kurdish, Kuvi, Kwasio, Kyrgyz, Kʼicheʼ, Lakota, Langi, Latin, Latvian, Ligurian, Lingala, Lithuanian, Lojban, Lombard, Low German, Lower Sorbian, Luba-Katanga, Lule Sami, Luo, Luxembourgish, Luyia, Macedonian, Machame, Makhuwa, Makhuwa-Meetto, Makonde, Malagasy, Malay, Maltese, Manx, Mapuche, Masai, Meru, Metaʼ, Mi'kmaw, Mohawk, Moksha, Mongolian, Morisyen, Mundang, Muscogee, Māori, Nama, Navajo, Ngiemboon, Ngomba, Nheengatu, Nigerian Pidgin, North Ndebele, Northern Frisian, Northern Sami, Northern Sotho, Norwegian, Norwegian Bokmål, Norwegian Nynorsk, Nuer, Nyanja, Nyankole, Obolo, Occitan, Oromo, Ossetic, Papiamento, Pijin, Polish, Portuguese, Prussian, Quechua, Riffian, Romanian, Romansh, Rombo, Rundi, Russian, Rwa, Saho, Samburu, Sango, Sangu, Sardinian, Scottish Gaelic, Sena, Serbian, Shambala, Shona, Sicilian, Sidamo, Silesian, Skolt Sami, Slovak, Slovenian, Soga, Somali, South Ndebele, Southern Sami, Southern Sotho, Spanish, Sundanese, Swahili, Swati, Swedish, Swiss German, Tachelhit (shi_latn), Taita, Tajik, Taroko, Tasawaq, Tatar, Teso, Tok Pisin, Toki Pona, Tongan, Tsonga, Tswana, Turkish, Turkmen, Tuvinian, Tyap, Ukrainian, Upper Sorbian, Uzbek, Vai (vai_latn), Venda, Venetian, Vietnamese, Volapük, Vunjo, Walloon, Walser, Warlpiri, Welsh, Western Frisian, Wolof, Xhosa, Yakut, Yangben, Yoruba, Zarma, Zhuang, Zulu

<!-- END Section-Language-List -->

### Stylistic Sets

Monospace Iosevka contains various stylistic sets to change the shape of certain characters. Enabling corresponded OpenType feature to enable.

<table><tr><td><h2><a href="doc/stylistic-sets.md">View list of stylistic sets of Iosevka.</a></h2></td></tr></table>


### Character Variants

Alongside stylistic sets, Monospace Iosevka can also be configured to cherry-pick variants for each character using OpenType. The variants are shown below. To enable, assign the feature tag to the variant index. For example, setting `cv26` to `6` will enable single-storey `a`.

**Caution :**  Certain software may limit the quantity of OpenType features and drop some of them if the feature list is too long. Please validate your feature configuration to ensure that it worked in your software.

<table><tr><td><h2><a href="doc/character-variants.md">View list of character variants of Iosevka.</a></h2></td></tr></table>

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
<td colspan="2"><img src="images/ligset-calt-0.light.svg#gh-light-mode-only"/><img src="images/ligset-calt-0.dark.svg#gh-dark-mode-only"/></td>
</tr>
<tr>
<td><code>calt</code></td>
<td>Default setting in text editors</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-calt-1.light.svg#gh-light-mode-only"/><img src="images/ligset-calt-1.dark.svg#gh-dark-mode-only"/></td>
</tr>
<tr>
<td><code>dlig</code></td>
<td>Discretionary ligatures</td>
</tr>
<tr>
<td colspan="2"><img src="images/ligset-dlig-1.light.svg#gh-light-mode-only"/><img src="images/ligset-dlig-1.dark.svg#gh-dark-mode-only"/></td>
</tr>
</table>

<!-- END Section-OT-Ligation-Tags-1 -->

Iosevka supports Language-Specific Ligations, which is the ligation set enabled only under certain languages. These ligation sets are assigned to custom feature tags. To use them, you need to turn **off** `calt` and enable the corresponded feature. The feature list is:

<table><tr><td><h2><a href="doc/language-specific-ligation-sets.md">View list of language-specific ligations.</a></h2></td></tr></table>

Please note that, due to the complex interactions when forming ligations, cherry-picking ligation groups will require a custom Iosevka build. The instructions could be seen below.

## Building from Source

<table><tr><td><h2><a href="doc/custom-build.md">Read instructions.</a></h2></td></tr></table>

## For Chinese, Japanese and Korean (CJK) users...

→ [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic).

## Mirrors

- TUNA (CN): https://mirrors.tuna.tsinghua.edu.cn/github-release/be5invis/Iosevka
- NJU (CN): https://mirrors.nju.edu.cn/github-release/be5invis/Iosevka
---

![Family Matrix](images/matrix.light.svg#gh-light-mode-only)![Family Matrix](images/matrix.dark.svg#gh-dark-mode-only)
