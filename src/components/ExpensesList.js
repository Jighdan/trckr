import Component from "./Component.js";
import store from "../store/index";
import ExpensesListItem from "./ExpensesListItem";

export default class ExpensesList extends Component {
	constructor() {
		super({ store, element: document.createElement("main") });
	}

	render() {
		if (store.state.expenses.length) {
			// Clear the element content
			this.element.innerHTML = "";

			store.state.expenses.map((expense) => {
				const expenseElement = new ExpensesListItem(expense);
				this.element.appendChild(expenseElement.render());
			});
		}

		return this.element;
	}
}
