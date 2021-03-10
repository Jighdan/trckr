const ExpensesListItemCategoryShape = (categoryColor: string): HTMLDivElement => {
	const element: HTMLDivElement = document.createElement("div");
	element.classList.add("expenses-list-item-category-shape");
	element.setAttribute("role", "figure");
	element.style.color = categoryColor;
	element.style.borderColor = categoryColor;
	
	return element
}

export { ExpensesListItemCategoryShape };