## Modifications since last major version

### 29.0.0-beta.1

* \[**BREAKING**\] Add separate serifed variants for digits `2` through `5`. As a result, current variants are partially renamed and reordered (#1965). Change of variant names:
  - `two`.`straight-neck` → `two`.`straight-neck-serifless`
  - `two`.`curly-neck` → `two`.`curly-neck-serifless`
  - `three`.`flat-top` → `three`.`flat-top-serifless`
  - `four`.`closed` → `four`.`closed-serifless`
  - `four`.`closed-non-crossing` → `four`.`closed-non-crossing-serifless`
  - `four`.`semi-open` → `four`.`semi-open-serifless`
  - `four`.`semi-open-non-crossing` → `four`.`semi-open-non-crossing-serifless`
  - `four`.`open` → `four`.`open-serifless`
  - `four`.`open-non-crossing` → `four`.`open-non-crossing-serifless`
  - `five`.`upright-arched` → `five`.`upright-arched-serifless`
  - `five`.`upright-flat` → `five`.`upright-flat-serifless`
  - `five`.`oblique-arched` → `five`.`oblique-arched-serifless`
  - `five`.`oblique-flat` → `five`.`oblique-flat-serifless`
* \[**BREAKING**\] Reorder of glyph variants:
   - Influenced characters: `I`, `U`, `Z`, `i`, `l`, `u`, `z`, Greek Lower Mu (`μ`), Micro Sign (`µ`).
* \[**BREAKING**\] Quasi-proportional will now use a six-unit system instead of four. Metrics of various letters (`f`, `t`, `r`, `m`, `w`, etc.) are adjusted.
* Add characters:
  - UPWARDS WHITE ARROW FROM BAR (`U+21EA`) ... RIGHTWARDS WHITE ARROW FROM WALL (`U+21F0`).
  - RETURN SYMBOL (`U+23CE`).
  - UPWARDS WHITE ARROW FROM BAR WITH HORIZONTAL BAR (`U+2BB8`).
  - LOWER HORIZONTAL RULER SEGMENT (`U+1CC05`)  (Proposed for Unicode 16; L2/21-235).
  - RIGHT VERTICAL RULER SEGMENT (`U+1CC06`)  (Proposed for Unicode 16; L2/21-235).
  - LOWER RIGHT RULER SEGMENT (`U+1CC07`)  (Proposed for Unicode 16; L2/21-235).
  - BOX DRAWINGS LIGHT HORIZONTAL AND UPPER RIGHT (`U+1CC1B`) ... BOX DRAWINGS LIGHT BOTTOM AND LOWER LEFT (`U+1CC1E`)  (Proposed for Unicode 16; L2/21-235).
  - SEPARATED BLOCK QUADRANT-1 (`U+1CC21`) ... SEPARATED BLOCK QUADRANT-1234 (`U+1CC2F`)  (Proposed for Unicode 16; L2/21-235).
  - BLACK NEUTRAL FACE (`U+1CC6F`)  (Proposed for Unicode 16; L2/21-235).
  - VERTICAL LINE WITH FOUR TICK MARKS (`U+1CC90`)  (Proposed for Unicode 16; L2/21-235).
  - HORIZONTAL LINE WITH FOUR TICK MARKS (`U+1CC91`)  (Proposed for Unicode 16; L2/21-235).
  - BOX DRAWINGS DOUBLE DIAGONAL LOWER LEFT TO MIDDLE CENTRE TO LOWER RIGHT (`U+1CE09`)  (Proposed for Unicode 16; L2/21-235).
  - BOX DRAWINGS DOUBLE DIAGONAL UPPER LEFT TO MIDDLE CENTRE TO UPPER RIGHT (`U+1CE0A`)  (Proposed for Unicode 16; L2/21-235).
  - SEPARATED BLOCK SEXTANT-1 (`U+1CE51`) ... SEPARATED BLOCK SEXTANT-123456 (`U+1CE8F`)  (Proposed for Unicode 16; L2/21-235).
  - UPPER LEFT ONE SIXTEENTH BLOCK (`U+1CE90`) ... LOWER HALF RIGHT ONE QUARTER BLOCK (`U+1CEAF`)  (Proposed for Unicode 16; L2/21-235).
  - FOLDER (`U+1F5C0`) (#2181).
  - DOWNWARDS BLACK ARROW TO BAR (`U+1F8B3`) ... SOUTH WEST ARROW FROM BAR (`U+1F8BB`)  (Proposed for Unicode 16; L2/21-235).
  - LEFT TWO THIRDS BLOCK (`U+1FBCE`)  (Proposed for Unicode 16; L2/21-235).
  - LEFT ONE THIRD BLOCK (`U+1FBCF`)  (Proposed for Unicode 16; L2/21-235).
  - BOX DRAWINGS LIGHT DIAGONAL MIDDLE RIGHT TO LOWER LEFT (`U+1FBD0`) ... BOX DRAWINGS LIGHT DIAGONAL UPPER LEFT TO MIDDLE RIGHT TO LOWER LEFT (`U+1FBDF`)  (Proposed for Unicode 16; L2/21-235).
  - UPPER CENTRE ONE QUARTER BLOCK (`U+1FBE4`) ... MIDDLE RIGHT ONE QUARTER BLOCK (`U+1FBE7`)  (Proposed for Unicode 16; L2/21-235).
* Fix a disjoint stroke of Outlined Curly `Z` under some weights (#2195).
* Unify diagonal box drawings' angles (#2197).
* Fix Large Type Piece `U+1CE3B` (#2206).
* Added a `MOSC` feature that turns certain geometric shapes into mosaics (#2212).
* Fix `frac` feature for better recognizing fraction patterns (#2214).

