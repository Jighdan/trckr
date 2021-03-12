const ExpensesListItemCategoryTitle = (categoryName: string): HTMLHeadingElement => {
	const element: HTMLHeadingElement = document.createElement("h3");
	element.classList.add("expenses-list-item-category-title");
	element.innerText = categoryName;

	return element;
}

export { ExpensesListItemCategoryTitle };