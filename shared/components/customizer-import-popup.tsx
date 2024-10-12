import { useState } from "react";

import {
	CustomizerProps,
	defaultCustomizerProps,
	dropInheritedCvs,
	parseCustomization,
} from "../customizer";
import { Ptr } from "../utils/ptr";

export type PopupUxProps = {
	popupVisible: boolean;
};

export type ImportConfigurationPopupProps = {
	pCc: Ptr<CustomizerProps>;
	pUx: Ptr<PopupUxProps>;
	dropInheritedCvs?: boolean;
};

export function ImportConfigurationPopup(props: ImportConfigurationPopupProps) {
	const [cfgText, setCfgText] = useState<string>("");

	if (!props.pUx.val.popupVisible) return null;

	return (
		<>
			<div
				className="customizer popup-background"
				onClick={() => props.pUx.set({ ...props.pUx.val, popupVisible: false })}
			></div>
			<div className="customizer popup">
				<h2>Import Configuration</h2>
				<div className="inner">
					<textarea value={cfgText} onChange={e => setCfgText(e.target.value)} />
				</div>
				<input
					type="button"
					value="Import"
					onClick={() => {
						let cc1 = parseCustomization(cfgText, defaultCustomizerProps);
						if (props.dropInheritedCvs) {
							cc1 = dropInheritedCvs(cc1);
						}
						props.pCc.set(cc1);
						setCfgText("");
						props.pUx.set({ ...props.pUx.val, popupVisible: false });
					}}
				/>
			</div>
		</>
	);
}

export function ImportConfigurationPopupEnableButton(props: Ptr<PopupUxProps>) {
	return (
		<input
			type="button"
			value="Import Configuration"
			onClick={() => props.set({ popupVisible: true })}
		/>
	);
}
