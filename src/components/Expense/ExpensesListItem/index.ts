import { Component } from "../../Component";
import { InterfaceExpense } from "../../../models/Expense";
import { InterfaceComposedSubCategory } from "../../../models/Category";
import { ExpensesListItemAmount } from "./ExpensesListItemAmount";
import { ExpensesListItemCategoryTitle } from "./ExpensesListItemCategoryTitle";
import { ExpensesListItemCategoryShape } from "./ExpensesListItemCategoryShape";
import { ExpensesListItemTime } from "./ExpensesListItemTime";

class ExpensesListItem extends Component {
	constructor(expense: InterfaceExpense, composedSubCategory: InterfaceComposedSubCategory) {
		super(document.createElement("article"));
		this.element.classList.add("expenses-list-item");
		this.element.setAttribute("data-id", expense.id);
		this.element.setAttribute("role", "listitem");

		const amount = ExpensesListItemAmount(expense.amount);
		const categoryTitle = ExpensesListItemCategoryTitle(composedSubCategory.name);
		const categoryShape = ExpensesListItemCategoryShape(composedSubCategory.color, composedSubCategory.type);
		const time = ExpensesListItemTime(expense.dateAdded);

		const elementHeader: HTMLHeadElement = document.createElement("header");
		const elementBody: HTMLElement = document.createElement("div");
		const elementFooter: HTMLElement = document.createElement("footer");

		elementHeader.classList.add("expenses-list-item-header");
		elementBody.classList.add("expenses-list-item-body");
		elementFooter.classList.add("expenses-list-item-footer");

		elementHeader.appendChild(categoryShape);
		elementBody.appendChild(amount);
		elementFooter.append(time, categoryTitle);

		// Wrapping up the element
		this.element.append(elementHeader, elementBody, elementFooter);
	}

	render = (): HTMLElement => {
		return this.element;
	}
}

export { ExpensesListItem };
