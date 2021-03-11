import { Component } from "../Component";
import { store } from "../../store/index";
import { InterfaceExpense } from "../../models/Expense";
import { InterfaceComposedSubCategory } from "../../models/Category";
import { ExpensesListItem } from "./ExpensesListItem/index";

class ExpensesListSection extends Component {
	constructor(date: string, expenses: Array<InterfaceExpense>) {
		super(document.createElement("section"), null, true);

		// Setting up section attributes
		this.element.classList.add("expenses-list-section");
		this.element.setAttribute("role", "list");

		// Setting up the section title
		const title = document.createElement("h2");
		title.classList.add("expenses-list-section-date");
		title.innerText = date;

		// Setting up the section expenses
		const expensesContainer = document.createElement("div");
		expensesContainer.classList.add("expenses-list-section-container");
		for (let expense of expenses) {
			const category: InterfaceComposedSubCategory = store.getter("getComposedSubCategoryByExpenseCategory", { expenseCategory: expense.category });
			const expenseElement = new ExpensesListItem(
				expense,
				category,
			);
			expensesContainer.appendChild(expenseElement.render());
		}

		// Wrapping up the section
		this.element.append(title, expensesContainer);
	}

	render() {
		return this.element;
	}
}

export { ExpensesListSection };
