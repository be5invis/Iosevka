import { Fragment } from "react";

import { PickerFrame } from "../components/picker-frame";
import { Section } from "../components/section";
import { TokenizedCode } from "../components/tokenized-code";
import { WordNumber } from "../components/word-number";
import * as Gr from "../data-import/grades";
import * as tokenizedSampleCode from "../tokenized-sample-code";

export function ProportionalSampler() {
    const styleGrades = [Gr.Style.Aile, Gr.Style.Etoile];

    return (
        <Section>
            <Desc styleGrades={styleGrades} />
            <div className="proportional-sampler-body">
                <PickerFrame
                    styleGrades={styleGrades}
                    disableWidth={true}
                    content={SamplerInner}
                    defaultFontStyle={{
                        style: Gr.Style.Etoile,
                        weight: Gr.Weight.Light,
                    }}
                />
            </div>
        </Section>
    );
}

function Desc(props: { styleGrades: Gr.Style[] }) {
    return (
        <div className="section-introduction">
            <h2 className="header">For Every Writing</h2>
            <div className="content">
                <p>
                    The <WordNumber n={props.styleGrades.length} /> quasi-proportional families:{" "}
                    <FamilyNameList styleGrades={props.styleGrades} />, are made for{" "}
                    <em>documents</em> and <em>writing</em>. They provide more variety on character
                    widths, including a slightly wider letter <code>w</code>
                    &nbsp;and&nbsp;<code>m</code>, and narrower <code>i</code>
                    &nbsp;and&nbsp;<code>l</code>.
                </p>
            </div>
        </div>
    );
}

function FamilyNameList(props: { styleGrades: Gr.Style[] }) {
    return (
        <>
            {props.styleGrades.map((grade, index) => (
                <Fragment key={index}>
                    {index === 0 ? "" : index === props.styleGrades.length - 1 ? ", and " : ", "}
                    <em key={grade}>Iosevka&nbsp;{Gr.Style[grade]}</em>
                </Fragment>
            ))}
        </>
    );
}

function SamplerInner(props: { fontStyle: Gr.FontStyle }) {
    return (
        <TokenizedCode code={tokenizedSampleCode.Novel} fontStyle={props.fontStyle} literature />
    );
}
