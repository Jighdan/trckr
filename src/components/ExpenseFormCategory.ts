import { Component } from "./Component";
import { store } from "../store/index";
import { Category } from "../models/index";

class ExpenseFormCategory extends Component {
	constructor() {
		super(document.createElement("select"), store);

		// Setting up the select element attributes
		this.element.setAttribute("aria-label", "Expense Category");
		this.element.setAttribute("name", "expenseCategory");
	}

	generateOptionElement(category: Category): HTMLOptionElement {
		const { id, name } = category;
		const element = document.createElement("option");

		// Setting up the option element attributes
		element.setAttribute("required", "true");
		element.setAttribute("value", id);
		element.innerText = name;

		// Check if the option is the default one
		if (name === "Other") {
			element.setAttribute("selected", "true");
		}

		return element;
	}

	render() {
		this.element.innerHTML = "";

		const options = store
			.getter("getSortedCategories")
			.map((category: Category) => this.generateOptionElement(category));
		this.element.append(...options);

		return this.element;
	}
}

export { ExpenseFormCategory };
