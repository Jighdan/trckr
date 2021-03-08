import ExpensesList from "../../src/components/ExpensesList";

describe("ExpensesList", () => {
	const instanceOfExpensesList = new ExpensesList();
	const renderedExpensesList = instanceOfExpensesList.render();

	test("Returns a main element", () => {
		expect(renderedExpensesList instanceof HTMLElement).toBe(true);
		expect(renderedExpensesList.tagName).toBe("MAIN");
	});
});
