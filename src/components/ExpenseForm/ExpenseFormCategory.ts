import { Category } from "../../models/index";

const composeSelectOption = (category: Category): HTMLOptionElement => {
	const { id, name } = category;
	const element: HTMLOptionElement = document.createElement("option");
	element.setAttribute("required", "true");
	element.setAttribute("value", id);
	element.innerText = name;

	if (name === "Other") {
		element.setAttribute("selected", "true");
	}

	return element;
};

const ExpenseFormCategory = (categories: Array<Category>): HTMLSelectElement => {
	const options: Array<HTMLOptionElement> = categories.map(category => composeSelectOption(category));
	const element: HTMLSelectElement = document.createElement("select");
	element.setAttribute("aria-label", "Expense Category");
	element.setAttribute("name", "expenseCategory");
	element.append(...options)

	return element;
}

export { ExpenseFormCategory };
