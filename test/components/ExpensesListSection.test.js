import ExpensesListSection from "../../src/components/ExpensesListSection";
import sampleState from "../sampleState";

describe("Expenses List Section", () => {
	const sampleExpensesByDate = {
		date: sampleState.expenses[0].dateAdded.toDateString(),
		expenses: sampleState.expenses,
	};
	const instanceOfExpensesListSection = new ExpensesListSection(
		sampleExpensesByDate
	);
	const renderedExpensesListSection = instanceOfExpensesListSection.render();

	test("Returns a section element", () => {
		expect(renderedExpensesListSection instanceof HTMLElement).toBe(true);
	});
});
