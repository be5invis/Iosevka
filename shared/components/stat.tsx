import React, { useState } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

import { joinCls } from "../utils/join-classes";

export type DynamicStatProps = { className?: string; quantity: number; description: string };
export function DynamicStat(props: DynamicStatProps) {
    const [ref, inView] = useInView();
    const [fStarted, setFStarted] = useState(false);

    const countUpRef = React.useRef<HTMLDivElement>(null);
    const countUp = useCountUp({ ref: countUpRef, start: 0, end: 0, duration: 2 });
    if (inView && !fStarted) {
        setFStarted(true);
        countUp.update(props.quantity);
    }

    return (
        <div className={joinCls("stat", "dynamic", props.className)} ref={ref}>
            <div
                className={joinCls("quantity")}
                style={{ fontFeatureSettings: "'WWID' on" }}
                ref={countUpRef}
            >
                <span ref={countUpRef} />
            </div>
            <div className={joinCls("desc")}>{props.description}</div>
        </div>
    );
}

export type StaticStatProps = { className?: string; quantity: string; description: string };
export function StaticStat(props: StaticStatProps) {
    return (
        <div className={joinCls("stat", "static", props.className)}>
            <div className={joinCls("quantity")} style={{ fontFeatureSettings: "'WWID' on" }}>
                {props.quantity}
            </div>
            <div className={joinCls("desc")}>{props.description}</div>
        </div>
    );
}
