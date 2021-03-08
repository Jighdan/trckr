import ExpensesListItem from "../../src/components/ExpensesListItem";
import stateSample from "../stateSample";

describe("ExpensesListItem", () => {
	const sampleExpense = stateSample.expenses[1];
	const instanceOfExpensesListItem = new ExpensesListItem(sampleExpense);
	const renderedExpensesListItem = instanceOfExpensesListItem.render();

	test("Returns an article element", () => {
		expect(renderedExpensesListItem instanceof HTMLElement).toBe(true);
	});

	test("Sets the expense id as part of the element attributes", () => {
		expect(renderedExpensesListItem.dataset.hasOwnProperty("id")).toBe(true);
		expect(renderedExpensesListItem.dataset.id).toEqual(sampleExpense.id);
	});

	test("Has a H2 element with the expense amount", () => {
		const expensesListItemChildren = renderedExpensesListItem.children;
		const arrayOfExpensesListItemChildren = new Array(
			...expensesListItemChildren
		);
		const amountElement = arrayOfExpensesListItemChildren.find(
			(children) => children instanceof HTMLHeadingElement
		);

		expect(
			arrayOfExpensesListItemChildren.some(
				(children) => children instanceof HTMLHeadingElement
			)
		).toBe(true);
		expect(amountElement).not.toBe("undefined");
		expect(amountElement.innerText).toBe(`$${sampleExpense.amount.toFixed(2)}`);
	});
});
