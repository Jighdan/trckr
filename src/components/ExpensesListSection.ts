import { Component } from "./Component";
import { store } from "../store/index";
import { Expense } from "../models/index";
import { ExpensesListSectionItem } from "./ExpensesListSectionItem";

class ExpensesListSection extends Component {
	constructor(date: string, expenses: Array<Expense>) {
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
			const category = store.getter("getCategoryById", { categoryId: expense.categoryId});

			const expenseElement = new ExpensesListSectionItem(
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
