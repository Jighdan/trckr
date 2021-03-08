const path = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	module: {
		rules: [],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "script.js",
	},
};
