import Component from "./Component.js";
import store from "../store/index";

export default class ExpensesTotal extends Component {
	constructor() {
		super({ store, element: document.createElement("section") });
		this.element.classList.add("expenses-total");

		// Setting up the amount element
		this.amountElement = document.createElement("h2");

		// Setting up descriptive text element
		const descriptionElement = document.createElement("p");
		descriptionElement.innerText = "Total";

		// Wrapping up the element
		this.element.append(this.amountElement, descriptionElement);
	}

	render() {
		const total = store.getter("getExpensesTotal");
		this.amountElement.innerText = total;

		return this.element;
	}
}
