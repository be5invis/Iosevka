import { joinCls } from "../utils/join-classes";

export type VariantsPanelCheckGroupProps = {
	label: string | React.ReactElement;
	value: boolean;
	disabled?: boolean;
	onChange: (x: boolean) => void;
};
export function CheckGroup(props: VariantsPanelCheckGroupProps) {
	return (
		<label className={joinCls("check-group", "extender", props.disabled ? "disabled" : "")}>
			<input
				type="checkbox"
				disabled={props.disabled}
				checked={props.value}
				onChange={x => props.onChange(x.target.checked)}
			/>
			<span className="check-mark"></span>
			{props.label}
		</label>
	);
}
