import ExpensesTotal from "../../src/components/ExpensesTotal";

describe("Expenses Total", () => {
	const instanceOfExpensesTotal = new ExpensesTotal();
	const renderedExpensesTotal = instanceOfExpensesTotal.render();

	test("Returns a H2 element", () => {
		expect(renderedExpensesTotal instanceof HTMLElement).toBe(true);
		expect(renderedExpensesTotal instanceof HTMLHeadingElement).toBe(true);
	});
});
