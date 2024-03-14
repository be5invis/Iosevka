import { Section } from "../components/section";
import * as Gr from "../data-import/grades";
import { joinCls } from "../utils/join-classes";

export function TerminalSampler() {
    const CodeFontStyle = { ...Gr.DefaultFontStyle, weight: Gr.Weight.ExtraLight };
    const TermFontStyle = { ...CodeFontStyle, spacingTag: "NWID" };
    const FixedFontStyle = {
        ...CodeFontStyle,
        spacingTag: "NWID",
        ligationTag: "calt",
        ligationOn: false,
    };
    return (
        <Section className="terminal-sampler">
            <Desc />
            <SampleItem title="Iosevka" fontStyle={CodeFontStyle} />
            <SampleItem title="Iosevka Term" fontStyle={TermFontStyle} />
            <SampleItem title="Iosevka Fixed" fontStyle={FixedFontStyle} />
        </Section>
    );
}

function Desc() {
    return (
        <div className="section-introduction">
            <h2 className="header">Code and Terminal</h2>
            <div className="content">
                <p>
                    Terminal emulators have a stricter compatibility requirements for fonts.
                    Therefore, Iosevka and Iosevka Slab all contain two specialized families,{" "}
                    <em>Term</em> and <em>Fixed</em>, targeting terminal users.
                </p>
                <p>
                    In these families, the symbols will be <em>narrower</em> to follow terminals’
                    ideology of column count. In the Fixed families, the ligation will be disabled
                    to ensure better compatibility in certain environments.
                </p>
            </div>
        </div>
    );
}

function SampleItem(props: { fontStyle: Gr.FontStyle; title: string }) {
    return (
        <div className="sample-item">
            <h3>{props.title}</h3>
            <SampleBody fontStyle={props.fontStyle} />
        </div>
    );
}

function SampleBody(props: { fontStyle: Gr.FontStyle }) {
    return (
        <div
            className={joinCls("sample-body", Gr.fontStyleToCls(props.fontStyle))}
            style={Gr.fontStyleToOtStyle(props.fontStyle)}
        >
            <em>∑</em> {"{"} <i>n</i> ∈ <em>▲</em> {"}"} <em>🅇</em>(<i>n</i>) <em>○{"->"}</em>{" "}
            <em>Ⓨ</em>[<i>n</i>] <em>▢△◈</em>
        </div>
    );
}
