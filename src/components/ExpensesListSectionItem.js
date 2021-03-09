import Component from "./Component";

export default class ExpensesListItem extends Component {
	constructor({ expense, category }) {
		super({ element: document.createElement("article") });
		this.element.classList.add("expenses-list-section-item");
		this.element.setAttribute("data-id", expense.id);
		this.element.setAttribute("role", "listitem");

		// Setting up the title element
		const title = document.createElement("h3");
		title.classList.add("title");
		title.innerText = `$${expense.amount.toFixed(2)}`;

		// Setting up the category shape element
		const categoryShape = document.createElement("div");
		categoryShape.classList.add("category-shape");
		categoryShape.setAttribute("role", "figure");
		categoryShape.style.borderColor = category.color;

		// Setting up the time added element
		const formattedTime = new Date(expense.dateAdded).toLocaleTimeString();
		const timeAdded = document.createElement("span");
		timeAdded.classList.add("time");
		timeAdded.innerText = formattedTime;

		// Wrapping up the title and time added elements
		const body = document.createElement("div");
		body.classList.add("expense-item-body");
		body.append(title, timeAdded);

		// Wrapping up the element
		this.element.append(categoryShape, body);
	}

	render() {
		return this.element;
	}
}
