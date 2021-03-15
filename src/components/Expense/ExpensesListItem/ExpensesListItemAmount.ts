const ExpensesListItemAmount = (amount: number): HTMLHeadingElement => {
	const formattedAmount = `$${amount.toFixed(2)}`;
	const element: HTMLHeadingElement = document.createElement("h2");
	element.classList.add("expenses-list-item-amount");
	element.innerText = formattedAmount;

	return element;
}

export { ExpensesListItemAmount };