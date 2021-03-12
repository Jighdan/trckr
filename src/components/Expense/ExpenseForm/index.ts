import { Component } from "../../Component";
import { store } from "../../../store/index";
import { ExpenseFormAmount } from "./ExpenseFormAmount";
import { ExpenseFormCategory } from "./ExpenseFormCategory";

class ExpenseForm extends Component {
	hasRendered: boolean
	inputAmount: HTMLInputElement
	submitButton: HTMLButtonElement
	inputCategory: HTMLSelectElement

	constructor() {
		super(document.createElement("form"), store, true);

		// Setting up the form legend
		const legend = document.createElement("legend");
		legend.innerText = "New Expense";

		// Setting up the form inputs
		this.inputAmount = ExpenseFormAmount();
		this.inputCategory = ExpenseFormCategory(store.state.categories);

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
		inputBox.append(prefix, this.inputAmount, this.inputCategory);

		// Wrap the element
		this.element.classList.add("expense-form");
		this.element.append(legend, inputBox, this.submitButton);
	}

	onSubmit(event: Event): void {
		event.preventDefault();

		const amount = this.inputAmount.valueAsNumber;
		const category = JSON.parse(this.inputCategory.value);

		if (amount && amount > 0) {
			// Clear the input value
			this.inputAmount.value = "";

			store.commit("addExpense", { amount, category });
		}
	}

	setEvents(): void {
		this.element.addEventListener("submit", (event: Event) => this.onSubmit(event));
	}

	render = (): HTMLElement => {
		this.setEvents();
		return this.element;
	}
}

export { ExpenseForm };
