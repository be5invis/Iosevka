import React from "react";

import { joinCls } from "../utils/join-classes";
import { Ptr } from "../utils/ptr";

type SwitchPanelUsageProps = { showUsage: boolean };
const SwitchPanelUsageCtx = React.createContext<Ptr<SwitchPanelUsageProps>>({
	val: { showUsage: false },
	set: () => {},
});

export type ToolsPanelsTProps = {
	usageAvailable: boolean;
	customizerPageHashT?: () => undefined | string;
	usagePanel: () => React.ReactChild;
	mainPanel: () => React.ReactChild;
};

export function ToolsPanelsT(props: ToolsPanelsTProps) {
	const [usage, setUsage] = React.useState<SwitchPanelUsageProps>({ showUsage: false });
	const ctx: Ptr<SwitchPanelUsageProps> = { val: usage, set: setUsage };

	const mainPanels =
		props.usageAvailable && ctx.val.showUsage ? props.usagePanel() : props.mainPanel();
	return (
		<SwitchPanelUsageCtx.Provider value={ctx}>
			<div className="tools-panels-t">
				{mainPanels}
				<ToolsPanelStrip {...props} />
			</div>
		</SwitchPanelUsageCtx.Provider>
	);
}

function ToolsPanelStrip(props: ToolsPanelsTProps) {
	const ctx = React.useContext(SwitchPanelUsageCtx);
	let newWindowLink = "customizer";
	if (props.customizerPageHashT) {
		const hash = props.customizerPageHashT();
		if (hash) newWindowLink += "?" + hash;
	}
	return (
		<div className="panel tools">
			<button
				className={joinCls(
					"tool-button",
					!props.usageAvailable
						? "disabled"
						: ctx.val.showUsage
							? "checked"
							: "unchecked",
				)}
				onClick={() => {
					if (props.usageAvailable) {
						ctx.set({ ...ctx.val, showUsage: !ctx.val.showUsage });
					}
				}}
			>
				{props.usageAvailable && ctx.val.showUsage ? "Hide" : "Show"}
				<br />
				Usage
			</button>
			<button
				className={joinCls("tool-button", "external", "unchecked")}
				onClick={() => window.open(newWindowLink)}
			>
				Bake
				<br />
				Custom Build
			</button>
		</div>
	);
}
