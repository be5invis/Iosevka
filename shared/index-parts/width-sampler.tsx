import { ItemPickerFrame } from "../components/itemized-picker";
import { Section } from "../components/section";
import * as Gr from "../data-import/grades";
import { joinCls } from "../utils/join-classes";

const DataPageSample = `
# UCD DATA Section
00B0 ; DEGREE SIGN                                ; So ; 0 ; ET ;                           ;  ;   ;     ; N ;                                   ;  ;      ;      ;     
00B1 ; PLUS-MINUS SIGN                            ; Sm ; 0 ; ET ;                           ;  ;   ;     ; N ; PLUS-OR-MINUS SIGN                ;  ;      ;      ;     
00B2 ; SUPERSCRIPT TWO                            ; No ; 0 ; EN ; <super> 0032              ;  ; 2 ; 2   ; N ; SUPERSCRIPT DIGIT TWO             ;  ;      ;      ;     
00B3 ; SUPERSCRIPT THREE                          ; No ; 0 ; EN ; <super> 0033              ;  ; 3 ; 3   ; N ; SUPERSCRIPT DIGIT THREE           ;  ;      ;      ;     
00B4 ; ACUTE ACCENT                               ; Sk ; 0 ; ON ; <compat> 0020 0301        ;  ;   ;     ; N ; SPACING ACUTE                     ;  ;      ;      ;     
00B5 ; MICRO SIGN                                 ; Ll ; 0 ; L  ; <compat> 03BC             ;  ;   ;     ; N ;                                   ;  ; 039C ;      ; 039C
00B6 ; PILCROW SIGN                               ; Po ; 0 ; ON ;                           ;  ;   ;     ; N ; PARAGRAPH SIGN                    ;  ;      ;      ;     
00B7 ; MIDDLE DOT                                 ; Po ; 0 ; ON ;                           ;  ;   ;     ; N ;                                   ;  ;      ;      ;     
00B8 ; CEDILLA                                    ; Sk ; 0 ; ON ; <compat> 0020 0327        ;  ;   ;     ; N ; SPACING CEDILLA                   ;  ;      ;      ;     
00B9 ; SUPERSCRIPT ONE                            ; No ; 0 ; EN ; <super> 0031              ;  ; 1 ; 1   ; N ; SUPERSCRIPT DIGIT ONE             ;  ;      ;      ;     
00BA ; MASCULINE ORDINAL INDICATOR                ; Lo ; 0 ; L  ; <super> 006F              ;  ;   ;     ; N ;                                   ;  ;      ;      ;     
00BB ; RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK ; Pf ; 0 ; ON ;                           ;  ;   ;     ; Y ; RIGHT POINTING GUILLEMET          ;  ;      ;      ;     
00BC ; VULGAR FRACTION ONE QUARTER                ; No ; 0 ; ON ; <fraction> 0031 2044 0034 ;  ;   ; 1/4 ; N ; FRACTION ONE QUARTER              ;  ;      ;      ;     
00BD ; VULGAR FRACTION ONE HALF                   ; No ; 0 ; ON ; <fraction> 0031 2044 0032 ;  ;   ; 1/2 ; N ; FRACTION ONE HALF                 ;  ;      ;      ;     
00BE ; VULGAR FRACTION THREE QUARTERS             ; No ; 0 ; ON ; <fraction> 0033 2044 0034 ;  ;   ; 3/4 ; N ; FRACTION THREE QUARTERS           ;  ;      ;      ;     
00BF ; INVERTED QUESTION MARK                     ; Po ; 0 ; ON ;                           ;  ;   ;     ; N ;                                   ;  ;      ;      ;     
00C0 ; LATIN CAPITAL LETTER A WITH GRAVE          ; Lu ; 0 ; L  ; 0041 0300                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A GRAVE      ;  ;      ; 00E0 ;     
00C1 ; LATIN CAPITAL LETTER A WITH ACUTE          ; Lu ; 0 ; L  ; 0041 0301                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A ACUTE      ;  ;      ; 00E1 ;     
00C2 ; LATIN CAPITAL LETTER A WITH CIRCUMFLEX     ; Lu ; 0 ; L  ; 0041 0302                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A CIRCUMFLEX ;  ;      ; 00E2 ;     
00C3 ; LATIN CAPITAL LETTER A WITH TILDE          ; Lu ; 0 ; L  ; 0041 0303                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A TILDE      ;  ;      ; 00E3 ;     
00C4 ; LATIN CAPITAL LETTER A WITH DIAERESIS      ; Lu ; 0 ; L  ; 0041 0308                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A DIAERESIS  ;  ;      ; 00E4 ;     
00C5 ; LATIN CAPITAL LETTER A WITH RING ABOVE     ; Lu ; 0 ; L  ; 0041 030A                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A RING       ;  ;      ; 00E5 ;     
00C6 ; LATIN CAPITAL LETTER AE                    ; Lu ; 0 ; L  ;                           ;  ;   ;     ; N ; LATIN CAPITAL LETTER A E          ;  ;      ; 00E6 ;     
00C7 ; LATIN CAPITAL LETTER C WITH CEDILLA        ; Lu ; 0 ; L  ; 0043 0327                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER C CEDILLA    ;  ;      ; 00E7 ;     
00C8 ; LATIN CAPITAL LETTER E WITH GRAVE          ; Lu ; 0 ; L  ; 0045 0300                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER E GRAVE      ;  ;      ; 00E8 ;     
00C9 ; LATIN CAPITAL LETTER E WITH ACUTE          ; Lu ; 0 ; L  ; 0045 0301                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER E ACUTE      ;  ;      ; 00E9 ;     
`.trim();

const primaryStyles = [
    { ...Gr.DefaultFontStyle, label: "Iosevka" },
    { ...Gr.DefaultFontStyle, width: Gr.Width.Expanded, label: "Iosevka Extended" },
];
const secondaryStyles = [
    { ...Gr.DefaultFontStyle, style: Gr.Style.FiraCode, label: "Fira Code" },
    { ...Gr.DefaultFontStyle, style: Gr.Style.IbmPlex, label: "IBM Plex" },
];

export function WidthSampler() {
    return (
        <Section>
            <Desc />
            <div className="width-sampler">
                <ItemPickerFrame
                    content={WidthSamplerInner}
                    primary={primaryStyles}
                    secondary={secondaryStyles}
                />
            </div>
        </Section>
    );
}

function Desc() {
    return (
        <div className="section-introduction">
            <h2 className="header">Spatial Efficient</h2>
            <div className="content">
                <p>
                    The Iosevka’s monospace family is provided in a <em>slender outfit</em> by
                    default: glyphs are exactly <em>1/2em wide</em>. Compared to the competitors,
                    you could fit more columns within the same screen width.
                </p>
                <p>
                    Iosevka provides two widths, <em>Normal</em> and <em>Extended</em>. If you
                    prefer more breeze between the character, choose Extended and enjoy.
                </p>
            </div>
        </div>
    );
}

function WidthSamplerInner(props: { fontStyle: Gr.FontStyle }) {
    return (
        <pre className={joinCls("sample-text", Gr.fontStyleToCls(props.fontStyle))}>
            {DataPageSample}
        </pre>
    );
}
