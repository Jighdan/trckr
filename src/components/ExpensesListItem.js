import Component from "./Component";

export default class ExpensesListItem extends Component {
	constructor(expense) {
		super({ element: document.createElement("article") });
		const elementTitle = document.createElement("h3");

		this.element.setAttribute("data-id", expense.id);
		elementTitle.innerText = `$${expense.amount.toFixed(2)}`;

		this.element.appendChild(elementTitle);
	}

	render() {
		return this.element;
	}
}
