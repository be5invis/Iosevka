"use strict";

module.exports = function (main) {
	setTimeout(
		() =>
			main().catch(e => {
				console.error(e);
				process.exit(1);
			}),
		0
	);
};
