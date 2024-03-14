import { useState, createContext, useContext } from "react";

import * as Gr from "../data-import/grades";
import { joinCls } from "../utils/join-classes";

import { SectionToolbar } from "./section";

type ItemPickerFrameContextProps = {
    groupIndex: number;
    itemIndex: number;
    setIndex: (gr: number, it: number) => void;
};
const ItemPickerFrameCtx = createContext<ItemPickerFrameContextProps>({
    groupIndex: 0,
    itemIndex: 0,
    setIndex: () => {},
});

export type ItemizedFontStyle = { label: string } & Gr.FontStyle;
export type ItemPickerFrameProps = {
    primary: Array<ItemizedFontStyle>;
    secondary: Array<ItemizedFontStyle>;
    content: (props: { fontStyle: Gr.FontStyle }) => JSX.Element;
};
export function ItemPickerFrame(props: ItemPickerFrameProps) {
    const [groupIndex, setGroupIndex] = useState<number>(0);
    const [itemIndex, setItemIndex] = useState<number>(0);
    const collectedStyles = [props.primary, props.secondary];
    const ctxVal: ItemPickerFrameContextProps = {
        groupIndex,
        itemIndex,
        setIndex: (g, i) => {
            setGroupIndex(g), setItemIndex(i);
        },
    };
    return (
        <ItemPickerFrameCtx.Provider value={ctxVal}>
            <div className="picker-frame">
                <SectionToolbar>
                    <Group groupIndex={0} styles={props.primary} />
                    <div className="button-group-gap" />
                    <Group groupIndex={1} styles={props.secondary} />
                </SectionToolbar>
                <props.content fontStyle={collectedStyles[groupIndex][itemIndex]} />
            </div>
        </ItemPickerFrameCtx.Provider>
    );
}

type GroupProps = {
    groupIndex: number;
    styles: Array<ItemizedFontStyle>;
};
function Group(props: GroupProps) {
    return (
        <div className="button-group">
            {props.styles.map((style, index) => (
                <Button groupIndex={props.groupIndex} itemIndex={index} key={index} apply={style}>
                    {style.label}
                </Button>
            ))}
        </div>
    );
}

type ButtonProps = {
    apply: Gr.FontStyle;
    groupIndex: number;
    itemIndex: number;
    children?: React.ReactNode;
};
function Button(props: ButtonProps) {
    const ctx = useContext(ItemPickerFrameCtx);
    const fActive = ctx.itemIndex === props.itemIndex && ctx.groupIndex === props.groupIndex;
    return (
        <a
            onClick={() => ctx.setIndex(props.groupIndex, props.itemIndex)}
            className={joinCls(
                "picker-button",
                fActive ? "active" : null,
                Gr.fontStyleToCls({ ...Gr.DefaultFontStyle, ...props.apply })
            )}
        >
            {props.children}
        </a>
    );
}
