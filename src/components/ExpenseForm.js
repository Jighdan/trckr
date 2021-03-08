import Component from "./Component.js";
import store from "../store/index";

export default class ExpenseForm extends Component {
	constructor() {
		super({ store, element: document.createElement("form") });
		this.hasRendered = false;

		// Setting up the form label
		this.label = document.createElement("label");
		this.label.innerText = "New Expense";

		// Setting up the form input
		this.input = document.createElement("input");
		this.input.setAttribute("type", "number");
		this.input.setAttribute("name", "expenseValue");
		this.input.setAttribute("step", "0.01");

		// Setting up the form submit button
		this.submitButton = document.createElement("button");
		this.submitButton.setAttribute("type", "submit");
		this.submitButton.innerText = "Add Expense";

		// Wrapping the label and input altogether
		const formControl = document.createElement("div");
		formControl.classList.add("expense-form-control");
		formControl.append(this.label, this.input);

		// Wrap the element
		this.element.append(formControl, this.submitButton);
	}

	onSubmit(event) {
		event.preventDefault();

		const { value } = this.input;
		const amount = parseFloat(value);

		if (amount && amount > 0.0) {
			// Clear the input value
			this.input.value = "";

			store.commit("addExpense", { amount: amount.toFixed(2) });
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
