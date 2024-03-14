import * as Gr from "../data-import/grades";

export type EnumSelectingProps<E extends number> = {
    value: E;
    options: Gr.GradeRepository<E>;
    onChange?: (x: number) => void;
};
export function EnumSelect<E extends number>(props: EnumSelectingProps<E>) {
    return (
        <select
            value={props.value}
            onChange={(x) => (props.onChange ? props.onChange(Number(x.target.value)) : undefined)}
        >
            {Array.from(props.options).map(([x, f]) => (
                <option key={x} value={x}>
                    {f.display}
                </option>
            ))}
        </select>
    );
}
