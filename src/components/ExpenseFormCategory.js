import Component from "./Component.js";
import store from "../store/index";

export default class ExpenseFormCategory extends Component {
	constructor() {
		super({ store, element: document.createElement("select") });

		// Setting up the select element attributes
		this.element.setAttribute("aria-label", "Expense Category");
		this.element.setAttribute("name", "expenseCategory");
	}

	generateOptionElement(category) {
		const { id, name, color } = category;
		const element = document.createElement("option");

		// Setting up the option element attributes
		element.setAttribute("required", "true");
		element.setAttribute("value", id);
		element.setAttribute("data-id", id);
		element.innerText = name;

		return element;
	}

	render() {
		this.element.innerHTML = "";

		const options = store.state.categories.map((category) =>
			this.generateOptionElement(category)
		);
		this.element.append(...options);

		return this.element;
	}
}
