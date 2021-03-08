import ExpenseFormCategory from "../../src/components/ExpenseFormCategory";

describe("Expense Form Category", () => {
	const instanceOfExpenseFormCategory = new ExpenseFormCategory();
	const renderedExpenseFormCategory = instanceOfExpenseFormCategory.render();

	test("Returns a select element", () => {
		expect(renderedExpenseFormCategory instanceof HTMLElement).toBe(true);
		expect(renderedExpenseFormCategory instanceof HTMLSelectElement).toBe(true);
	});
});
