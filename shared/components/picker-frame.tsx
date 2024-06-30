import { useState, createContext, useContext } from "react";

import * as Gr from "../data-import/grades";
import { joinCls } from "../utils/join-classes";

import { SectionToolbar } from "./section";

type PickerFrameContextProps = {
    externFontStyle?: Gr.FontStyle;
    currentFontStyle: Gr.FontStyle;
    receiver: (fs: Gr.FontStyle) => void;
};
const PickerFrameCtx = createContext<PickerFrameContextProps>({
    externFontStyle: {},
    currentFontStyle: {},
    receiver: () => {},
});
export type PickerFrameProps = {
    externFontStyle?: Gr.FontStyle;
    defaultFontStyle?: Gr.FontStyle;
    wholeSection?: boolean;
    disableStyle?: boolean;
    disableWeight?: boolean;
    disableWidth?: boolean;
    disableSlope?: boolean;
    enableSpacing?: boolean;
    enableMarkings?: boolean;
    styleGrades?: Gr.Style[];
    onFontSet?: (fontStyle: Gr.FontStyle) => void;
    onFontStyleChange?: (current: Gr.Style, previous: Gr.Style) => void;
    content: (props: { fontStyle: Gr.FontStyle }) => JSX.Element;
};
function rectifyPickedFs(fs: Gr.FontStyle) {
    const style = fs.style || Gr.Style.Sans;
    if (!Gr.styleHasOblique(style)) fs.slope = Gr.styleReduceSlope(style, fs.slope);
    if (!Gr.styleHasWidth(style)) fs.width = Gr.styleReduceWidth(style, fs.width);
    return fs;
}
export function PickerFrame(props: PickerFrameProps) {
    const [fontStyle, setFontStyle] = useState<Gr.FontStyle>({ ...props.defaultFontStyle });
    const receiver = (fs: Gr.FontStyle) => {
        const rectifiedFs = rectifyPickedFs({ ...fontStyle, ...fs });

        if (props.onFontStyleChange) {
            const currentStyle = rectifiedFs.style || Gr.Style.Sans;
            const previousStyle = fontStyle.style || Gr.Style.Sans;
            if (currentStyle != previousStyle)
                props.onFontStyleChange(currentStyle, previousStyle);
        }

        if (props.onFontSet) {
            props.onFontSet(rectifiedFs);
        }

        setFontStyle(rectifiedFs);
    };

    const styleGrades = props.styleGrades || [Gr.Style.Sans, Gr.Style.Slab];

    return (
        <PickerFrameCtx.Provider
            value={{
                externFontStyle: props.externFontStyle,
                currentFontStyle: fontStyle,
                receiver,
            }}
        >
            <div className="picker-frame">
                <SectionToolbar withToolbar={props.wholeSection}>
                    <Group className="style" disabled={props.disableStyle}>
                        <ButtonLabel>Style</ButtonLabel>
                        {styleGrades.map((grade) => (
                            <Button apply={{ style: grade }} key={grade}>
                                {Gr.Style[grade]}
                            </Button>
                        ))}
                    </Group>
                    <Group className="weight" disabled={props.disableWeight}>
                        <ButtonLabel>Weight</ButtonLabel>
                        <Button apply={{ weight: Gr.Weight.Thin }}>1</Button>
                        <Button apply={{ weight: Gr.Weight.ExtraLight }}>2</Button>
                        <Button apply={{ weight: Gr.Weight.Light }}>3</Button>
                        <Button apply={{ weight: Gr.Weight.Regular }}>4</Button>
                        <Button apply={{ weight: Gr.Weight.Medium }}>5</Button>
                        <Button apply={{ weight: Gr.Weight.SemiBold }}>6</Button>
                        <Button apply={{ weight: Gr.Weight.Bold }}>7</Button>
                        <Button apply={{ weight: Gr.Weight.ExtraBold }}>8</Button>
                        <Button apply={{ weight: Gr.Weight.Heavy }}>9</Button>
                    </Group>
                    <Group className="slope" disabled={props.disableSlope}>
                        <ButtonLabel>Slope</ButtonLabel>
                        <Button
                            unapply={{ slope: Gr.Slope.Upright }}
                            apply={{ slope: Gr.Slope.Italic }}
                        >
                            Italic
                        </Button>
                        <Button
                            unapply={{ slope: Gr.Slope.Upright }}
                            apply={{ slope: Gr.Slope.Oblique }}
                            className={
                                Gr.styleHasOblique(fontStyle.style || Gr.Style.Sans)
                                    ? "enabled"
                                    : "disabled"
                            }
                        >
                            Oblique
                        </Button>
                    </Group>
                    <Group className="width" disabled={props.disableWidth}>
                        <ButtonLabel>Width</ButtonLabel>
                        <Button
                            unapply={{ width: Gr.Width.Normal }}
                            apply={{ width: Gr.Width.Expanded }}
                            className={
                                Gr.styleHasWidth(fontStyle.style || Gr.Style.Sans)
                                    ? "enabled"
                                    : "disabled"
                            }
                        >
                            Extended
                        </Button>
                    </Group>
                    <Group className="spacing" disabled={!props.enableSpacing}>
                        <ButtonLabel>Spacing</ButtonLabel>
                        <Button
                            unapply={{ spacingTag: undefined }}
                            apply={{ spacingTag: "NWID" }}
                            title="Show symbols in terminal width"
                        >
                            Terminal
                        </Button>
                        <Button
                            unapply={{ spacingTag: undefined }}
                            apply={{ spacingTag: "WWID" }}
                            title="Make mosaics double-width"
                        >
                            WideMosaic
                        </Button>
                    </Group>
                    <Group className="markings" disabled={!props.enableMarkings}>
                        <ButtonLabel>Markings</ButtonLabel>
                        <Button
                            apply={{ markingsVisible: true }}
                            unapply={{ markingsVisible: false }}
                            title="Toggle markings visibility"
                        >
                            Markings
                        </Button>
                    </Group>
                </SectionToolbar>
                <props.content fontStyle={{ ...props.externFontStyle, ...fontStyle }} />
            </div>
        </PickerFrameCtx.Provider>
    );
}
type PickerButtonGroupProps = {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
};
function Group(props: PickerButtonGroupProps) {
    if (props.disabled) return null;
    else return <div className={joinCls("button-group", props.className)}>{props.children}</div>;
}

type PickerButtonProps = {
    className?: string;
    apply: Gr.FontStyle;
    unapply?: Gr.FontStyle;
    children?: React.ReactNode;
    title?: string;
};
function Button(props: PickerButtonProps) {
    const ctx = useContext(PickerFrameCtx);
    let fActive = true;
    const currentStyle = { ...Gr.DefaultFontStyle, ...ctx.currentFontStyle };
    for (const prop in props.apply) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((currentStyle as any)[prop] !== (props.apply as any)[prop]) fActive = false;
    }
    return (
        <a
            onClick={() => ctx.receiver(fActive && props.unapply ? props.unapply : props.apply)}
            className={joinCls(
                "picker-button",
                fActive ? "active" : null,
                Gr.fontStyleToCls({ ...Gr.DefaultFontStyle, ...props.apply }),
                props.className,
            )}
            title={props.title}
        >
            {props.children}
        </a>
    );
}
type ButtonLabelProps = {
    children?: React.ReactNode;
};
function ButtonLabel(props: ButtonLabelProps) {
    return <span className="picker-button-label">{props.children}</span>;
}
