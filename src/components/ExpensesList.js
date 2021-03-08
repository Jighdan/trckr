import Component from "./Component.js";
import store from "../store/index";

export default class ExpensesList extends Component {
	constructor() {
		super({ store, element: document.createElement("main") });
	}

	render() {
		if (store.state.expenses.length) {
			// Clear the element content
			this.element.innerHTML = "";

			store.state.expenses.map(({ id, amount }) => {
				const expenseElement = document.createElement("p");
				expenseElement.setAttribute("data-id", id);
				expenseElement.innerText = amount;

				this.element.appendChild(expenseElement);
			});
		}

		return this.element;
	}
}
