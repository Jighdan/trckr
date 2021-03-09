const path = require("path");

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "script.js",
		path: path.resolve(__dirname, "build"),
	},
	devtool: "source-map",
	mode: process.env.NODE_ENV === "production" ? "production" : "development",

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
			},
			{
				test: /\.js$/,
				loader: "source-map-loader",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
