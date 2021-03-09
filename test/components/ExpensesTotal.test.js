import ExpensesTotal from "../../src/components/ExpensesTotal";

describe("Expenses Total", () => {
	const instanceOfExpensesTotal = new ExpensesTotal();
	const renderedExpensesTotal = instanceOfExpensesTotal.render();

	test("Returns a HTML element", () => {
		expect(renderedExpensesTotal instanceof HTMLElement).toBe(true);
	});
});
