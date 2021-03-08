import Component from "./Component.js";
import store from "../store/index";
import ExpensesListSection from "./ExpensesListSection";

export default class ExpensesList extends Component {
	constructor() {
		super({ store, element: document.createElement("main") });
	}

	render() {
		if (store.state.expenses.length) {
			// Clear the element content
			this.element.innerHTML = "";

			const expensesByDate = store.getter("composedExpensesByDate");

			Object.keys(expensesByDate).forEach((date) => {
				const expenseSectionElement = new ExpensesListSection({
					date,
					expenses: expensesByDate[date],
				});
				this.element.appendChild(expenseSectionElement.render());
			});
		}

		return this.element;
	}
}
