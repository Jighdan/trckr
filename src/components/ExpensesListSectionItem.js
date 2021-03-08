import Component from "./Component";

export default class ExpensesListItem extends Component {
	constructor(expense) {
		super({ element: document.createElement("article") });

		// Setting up the title
		const title = document.createElement("h3");
		title.innerText = `$${expense.amount.toFixed(2)}`;

		// Wrapping up the element
		this.element.setAttribute("data-id", expense.id);
		this.element.setAttribute("role", "listitem");
		this.element.appendChild(title);
	}

	render() {
		return this.element;
	}
}
