import * as React from "react";

import * as Gr from "../data-import/grades";
import { joinCls } from "../utils/join-classes";

export type Token = { text: string; scopes: string[] };

export type TokenizedCodeProps = {
    fontStyle: Gr.FontStyle;
    code: ReadonlyArray<ReadonlyArray<Token>>;
    highlightCharSet?: ReadonlyMap<string, Gr.FeatureAssignment>;
    literature?: boolean;
};
export function TokenizedCode(props: TokenizedCodeProps) {
    const lines: JSX.Element[] = [];
    for (let index = 0; index < props.code.length; index++) {
        lines.push(
            <CodeLine
                codeLine={props.code[index]}
                highlightCharSet={props.highlightCharSet}
                key={index}
            />
        );
    }
    return (
        <pre
            className={joinCls(
                "sample-code",
                Gr.fontStyleToCls(props.fontStyle),
                props.literature ? "literature" : null
            )}
            style={Gr.fontStyleToOtStyle(props.fontStyle)}
        >
            {lines}
        </pre>
    );
}

type CodeLineProps = {
    codeLine: ReadonlyArray<Token>;
    highlightCharSet?: ReadonlyMap<string, Gr.FeatureAssignment>;
};
function CodeLine(props: CodeLineProps) {
    const runs: JSX.Element[] = [];
    for (let index = 0; index < props.codeLine.length; index++) {
        runs.push(
            <CodeToken
                token={props.codeLine[index]}
                highlightCharSet={props.highlightCharSet}
                key={index}
            />
        );
    }
    if (!runs.length) {
        runs.push(<React.Fragment key={0}> </React.Fragment>);
    }
    return <div>{runs}</div>;
}

type CodeTokenProps = {
    token: Token;
    highlightCharSet?: ReadonlyMap<string, Gr.FeatureAssignment>;
};
function CodeToken(props: CodeTokenProps) {
    return (
        <span className={joinCls("token", ...props.token.scopes)}>
            {props.highlightCharSet && props.highlightCharSet.size ? (
                <HighlightChars
                    text={props.token.text}
                    highlightCharSet={props.highlightCharSet}
                />
            ) : (
                props.token.text
            )}
        </span>
    );
}

type HighlightCharsProps = {
    text: string;
    highlightCharSet: ReadonlyMap<string, Gr.FeatureAssignment>;
};
function HighlightChars(props: HighlightCharsProps) {
    if (!props.highlightCharSet.size) return <>{props.text}</>;
    const re = new RegExp(
        "(" + Array.from(props.highlightCharSet.keys()).map(escapeRegExp).join("|") + ")",
        "g"
    );
    const subRuns: JSX.Element[] = [];
    const subRunStrings = props.text.split(re);
    for (let j = 0; j < subRunStrings.length; j++) {
        if (subRunStrings[j].match(re)) {
            const f = props.highlightCharSet.get(subRunStrings[j]) || {};
            const style = {
                fontFeatureSettings: Array.from(Object.entries(f))
                    .map(([k, v]) => `'${k}' ${v}`)
                    .join(","),
            };
            subRuns.push(
                <span className="highlight" key={j} style={style}>
                    {subRunStrings[j]}
                </span>
            );
        } else {
            subRuns.push(<span key={j}>{subRunStrings[j]}</span>);
        }
    }
    return <>{subRuns}</>;
}

function escapeRegExp(s: string) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
