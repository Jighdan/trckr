import Component from "./Component";
import ExpensesListSectionItem from "./ExpensesListSectionItem";

export default class ExpensesListSection extends Component {
	constructor({ date, expenses }) {
		super({ element: document.createElement("section") });

		// Setting up section attributes
		this.element.classList.add("expenses-list-section");
		this.element.setAttribute("role", "list");

		// Setting up the section title
		const title = document.createElement("h2");
		title.classList.add("expenses-list-section-title");
		title.innerText = date;

		// Setting up the section expenses
		const expensesContainer = document.createElement("div");
		expensesContainer.classList.add("expenses-list-section-container");
		for (let expense of expenses) {
			const expenseElement = new ExpensesListSectionItem(expense);
			expensesContainer.appendChild(expenseElement.render());
		}

		// Wrapping up the section
		this.element.append(title, expensesContainer);
	}

	render() {
		return this.element;
	}
}
