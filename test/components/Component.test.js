import Component from "../../src/components/Component";

describe("Component", () => {
	const instanceOfComponent = new Component();

	test("Has a render function", () => {
		expect(typeof instanceOfComponent.render !== "function").toBe(false);
		expect(typeof instanceOfComponent.render).toBe("function");
	});

	test("Has an element property if passed", () => {
		expect(typeof instanceOfComponent.element).toBe("undefined");
		expect(typeof new Component({ element: "test_element" }).element).toBe(
			"string"
		);
	});
});
