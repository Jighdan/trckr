const path = require("path");

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "script.js",
		path: path.resolve(__dirname, "static"),
	},
	devtool: "inline-source-map",
	mode: process.env.NODE_ENV === "production" ? "production" : "development",

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				use: "source-map-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
