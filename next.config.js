/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    output: "export",
    optimizeFonts: false,
    pageExtensions: ["tsx"],
    ...(!debug ? { assetPrefix: "https://typeof.net/Iosevka/" } : {}),
};
