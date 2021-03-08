import ExpenseForm from "../../src/components/ExpenseForm";

describe("Expense Form", () => {
	const instanceOfExpenseForm = new ExpenseForm();
	const renderedExpenseForm = instanceOfExpenseForm.render();

	test("Returns a form element", () => {
		expect(renderedExpenseForm instanceof HTMLElement).toBe(true);
		expect(renderedExpenseForm instanceof HTMLFormElement).toBe(true);
	});
});
