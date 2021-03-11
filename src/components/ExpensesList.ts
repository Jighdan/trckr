import { Component } from "./Component";
import { store } from "../store/index";
import { ExpensesListSection } from "./ExpensesListSection";

class ExpensesList extends Component {
	constructor() {
		super(document.createElement("main"), store);
		this.element.classList.add("expenses-list");
	}

	render() {
		if (store.state.expenses.length) {
			// Clear the element content
			this.element.innerHTML = "";

			const expensesByDate = store.getter("getExpensesByDate");

			Object.keys(expensesByDate).forEach((date) => {
				const expenseSectionElement = new ExpensesListSection(
					date,
					expensesByDate[date],
				);
				this.element.appendChild(expenseSectionElement.render());
			});
		}

		return this.element;
	}
}

export { ExpensesList };
