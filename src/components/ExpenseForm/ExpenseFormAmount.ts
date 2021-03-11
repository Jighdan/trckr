const ExpenseFormAmount = (): HTMLInputElement => {
	const element: HTMLInputElement = document.createElement("input");
	element.setAttribute("type", "number");
	element.setAttribute("aria-label", "Expense Amount");
	element.setAttribute("name", "expenseAmount");
	element.setAttribute("required", "true");
	element.setAttribute("step", "any");

	return element;
}

export { ExpenseFormAmount }