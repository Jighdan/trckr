import ExpensesListSectionItem from "../../src/components/ExpensesListSectionItem";
import sampleState from "../sampleState";

describe("ExpensesListSectionItem", () => {
	const sampleExpense = sampleState.expenses[1];
	const instanceOfExpensesListSectionItem = new ExpensesListSectionItem(
		sampleExpense
	);
	const renderedExpensesListSectionItem = instanceOfExpensesListSectionItem.render();

	test("Returns an article element", () => {
		expect(renderedExpensesListSectionItem instanceof HTMLElement).toBe(true);
	});

	test("Sets the expense id as part of the element attributes", () => {
		expect(renderedExpensesListSectionItem.dataset.hasOwnProperty("id")).toBe(
			true
		);
		expect(renderedExpensesListSectionItem.dataset.id).toEqual(
			sampleExpense.id
		);
	});

	test("Has a heading with the expense amount", () => {
		const expensesListSectionItemChildren =
			renderedExpensesListSectionItem.children;
		const arrayOfExpensesListSectionItemChildren = new Array(
			...expensesListSectionItemChildren
		);
		const amountElement = arrayOfExpensesListSectionItemChildren.find(
			(children) => children instanceof HTMLHeadingElement
		);

		expect(
			arrayOfExpensesListSectionItemChildren.some(
				(children) => children instanceof HTMLHeadingElement
			)
		).toBe(true);
		expect(amountElement).not.toBe("undefined");
		expect(amountElement.innerText).toBe(`$${sampleExpense.amount.toFixed(2)}`);
	});
});
