import getRandomColor from "../../src/library/colorGenerator";

describe("Color Generator", () => {
	const sampleColor = getRandomColor();

	test("Returns a string", () => {
		expect(typeof sampleColor).toBe("string");
		expect(sampleColor.length).toBe(7);
	});

	test("Returns a hex color code", () => {
		const hexRegexPattern = /^#[\w|\d]{6}/;

		expect(sampleColor.match(hexRegexPattern).length).toBe(1);
		expect("fake hex".match(hexRegexPattern)).toBe(null);
		expect("35262H".match(hexRegexPattern)).toBe(null);
	});
});
