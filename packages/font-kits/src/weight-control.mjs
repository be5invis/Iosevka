export function CreateWeightControl(para, bindings) {
	const { stroke } = para;
	const { Width, SB, HVContrast } = bindings;

	const BaseFillRate = Math.min(0.95, (2 * stroke * HVContrast) / (Width - SB * 2));
	const WeightControlFactor = Math.atanh(BaseFillRate) / BaseFillRate;

	function StrokeWeightControlSigmoid(x) {
		return Math.tanh(x * WeightControlFactor);
	}

	/**
	 * AdviceStrokeInSpace calculates the appropriate stroke width for a glyph based on the available
	 * space, contrast, crowdedness, and a multiplier. It uses a sigmoid function to adjust the fill
	 * rate and ensures that the stroke width fits within the available space while maintaining visual
	 * consistency.
	 * @param {number} availSpace Available space for the stroke, which is the width of the area that
	 * the stroke can occupy, WITHOUT sidebearings.
	 * @param {number} crowdedness A measure of how crowded the glyph is, which can be calculated
	 * based on the number of strokes, their thickness, and the overall design of the glyph. A higher
	 * crowdedness value indicates a more complex and dense glyph, while a lower value indicates a
	 * simpler and more open design.
	 * @param {number} contrast The contrast of the stroke, which is a measure of how much the
	 * stroke's thickness varies across its length. Higher contrast means more variation, while lower
	 * contrast means a more uniform stroke.
	 * @param {number} mul A multiplier that can be used to adjust the stroke width further based on
	 * specific design requirements or preferences. This allows for additional fine-tuning of the
	 * stroke width beyond what is calculated from the available space, contrast, and crowdedness.
	 * @returns {number} The adjusted stroke width based on the available space, contrast,
	 * crowdedness, and a multiplier. The function calculates a non-adjusted fill rate based on the
	 * input parameters, applies a sigmoid function to adjust it, and then scales the original stroke
	 * width accordingly to ensure it fits within the available space while maintaining visual
	 * consistency.
	 */
	function AdviceStrokeInSpace(availSpace, crowdedness, contrast = HVContrast, mul = 1) {
		const nonAdjustedFillRate = (crowdedness * contrast * stroke) / availSpace;
		const adjustedFillRate = StrokeWeightControlSigmoid(nonAdjustedFillRate);
		const strokeWidthScalar = Math.min(1, (mul * adjustedFillRate) / nonAdjustedFillRate);
		return stroke * strokeWidthScalar;
	}

	// User-friendly APIs

	/**
	 * AdviceStroke calculates the appropriate stroke width for a glyph based on the crowdedness, an
	 * optional adjustment for width (adws), and an optional multiplier (mul).
	 * @param {number} crowdedness
	 * @param {number} adws
	 * @param {number} mul
	 * @returns {number}
	 */
	function AdviceStroke(crowdedness, adws, mul) {
		const spaceH = Width * (adws ?? 1) - SB * 2;
		return AdviceStrokeInSpace(spaceH, crowdedness, HVContrast, mul ?? 1);
	}

	/**
	 * 2-dimensional version of AdviceStroke, which calculates the appropriate stroke width based on
	 * both horizontal and vertical crowdedness (crwX and crwY), a reference height (refH), and an
	 * optional adjustment for width (adws).
	 * @param {number} crwX
	 * @param {number} crwY
	 * @param {number} refH
	 * @param {number} adws
	 * @returns {number}
	 */

	function AdviceStroke2(crwX, crwY, refH, adws) {
		const spaceH = Width * (adws ?? 1) - SB * 2;
		const spaceV = refH;
		return Math.min(
			AdviceStrokeInSpace(spaceH, crwX, HVContrast, 1),
			AdviceStrokeInSpace(spaceV, crwY, 1, 1),
		);
	}

	return { AdviceStrokeInSpace, AdviceStroke, AdviceStroke2 };
}
