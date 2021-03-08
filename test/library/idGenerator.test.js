import generateId from "../../src/library/idGenerator";

describe("Generate Id", () => {
	const idLength = 47;
	const sample_1 = generateId();
	const sample_2 = generateId();
	const sample_3 = generateId();

	test("Returns a string", () => {
		expect(typeof sample_1).toBe("string");
		expect(typeof sample_2).toBe("string");
		expect(typeof sample_3).toBe("string");
	});

	test("Ids are different", () => {
		expect(sample_1 !== sample_2).toBe(true);
		expect(sample_2 !== sample_3).toBe(true);
		expect(sample_3 !== sample_1).toBe(true);
	});
});
