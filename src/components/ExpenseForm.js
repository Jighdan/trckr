import Component from "./Component.js";
import store from "../store/index";
import ExpenseFormCategory from "./ExpenseFormCategory";

export default class ExpenseForm extends Component {
	constructor() {
		super({ store, element: document.createElement("form") });
		this.hasRendered = false;

		// Setting up the form legend
		const legend = document.createElement("legend");
		legend.innerText = "New Expense";

		// Setting up the form amount input
		this.inputAmount = document.createElement("input");
		this.inputAmount.setAttribute("type", "number");
		this.inputAmount.setAttribute("aria-label", "Expense Amount");
		this.inputAmount.setAttribute("name", "expenseAmount");
		this.inputAmount.setAttribute("required", "true");
		this.inputAmount.setAttribute("step", "any");

		// Setting up the form submit button
		this.submitButton = document.createElement("button");
		this.submitButton.classList.add("button");
		this.submitButton.setAttribute("type", "submit");
		this.submitButton.innerText = "Add Expense";

		// Setting up a prefix for the input
		const prefix = document.createElement("span");
		prefix.classList.add("prefix");
		prefix.innerText = "$";

		// Setting up the category selector
		this.inputCategory = new ExpenseFormCategory();

		// Wrap the prefix and the input altogether
		const inputBox = document.createElement("div");
		inputBox.classList.add("input-box");
		inputBox.append(prefix, this.inputAmount, this.inputCategory.render());

		// Wrap the element
		this.element.classList.add("expense-form");
		this.element.append(legend, inputBox, this.submitButton);
	}

	onSubmit(event) {
		event.preventDefault();

		const amount = this.inputAmount.valueAsNumber;
		const category = this.inputCategory.value;

		if (amount && amount > 0) {
			// Clear the input value
			this.inputAmount.value = "";

			store.commit("addExpense", { amount, category });
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
