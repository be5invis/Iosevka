import { joinCls } from "../utils/join-classes";

export type SectionProps = {
	id?: string;
	className?: string;
	withToolbar?: boolean;
	children?: React.ReactNode;
};
export function Section(props: SectionProps) {
	return (
		<section
			id={props.id}
			className={joinCls(props.withToolbar ? "with-toolbar" : null, props.className)}
		>
			<div className="section-inner">{props.children}</div>
		</section>
	);
}
export function SectionToolbar(props: SectionProps) {
	return (
		<div
			className={joinCls(
				"toolbar",
				props.withToolbar ? "section-toolbar" : "separate-toolbar",
			)}
		>
			<div className="section-inner">{props.children}</div>
		</div>
	);
}
