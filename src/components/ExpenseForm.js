import Component from "./Component.js";
import store from "../store/index";

export default class ExpenseForm extends Component {
	constructor() {
		super({ store, element: document.createElement("form") });
		this.hasRendered = false;

		// Setting up the form legend
		const legend = document.createElement("legend");
		legend.innerText = "New Expense";

		// Setting up the form input
		this.input = document.createElement("input");
		this.input.setAttribute("type", "number");
		this.input.setAttribute("aria-label", "Expense Amount");
		this.input.setAttribute("name", "expenseValue");
		this.input.setAttribute("required", "true");
		this.input.setAttribute("step", "any");

		// Setting up the form submit button
		this.submitButton = document.createElement("button");
		this.submitButton.classList.add("button");
		this.submitButton.setAttribute("type", "submit");
		this.submitButton.innerText = "Add Expense";

		// Setting up a prefix for the input
		const prefix = document.createElement("span");
		prefix.classList.add("prefix");
		prefix.innerText = "$";

		// Wrap the prefix and the input altogether
		const inputBox = document.createElement("div");
		inputBox.classList.add("input-box");
		inputBox.append(prefix, this.input);

		// Wrap the element
		this.element.classList.add("expense-form");
		this.element.append(legend, inputBox, this.submitButton);
	}

	onSubmit(event) {
		event.preventDefault();

		const { valueAsNumber } = this.input;

		if (valueAsNumber && valueAsNumber > 0) {
			// Clear the input value
			this.input.value = "";

			store.commit("addExpense", { amount: valueAsNumber });
		}
	}

	setEvents() {
		this.element.addEventListener("submit", (event) => this.onSubmit(event));
	}

	render() {
		if (!this.hasRendered) {
			this.setEvents();
		}

		this.hasRendered = true;
		return this.element;
	}
}
