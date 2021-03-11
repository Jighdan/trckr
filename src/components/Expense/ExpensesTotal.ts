import { Component } from "../Component";
import { store } from "../../store/index";

class ExpensesTotal extends Component {
	amountElement: HTMLHeadingElement

	constructor() {
		super(document.createElement("section"), store);
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

export { ExpensesTotal };
