const EntriesListItemCategoryTitle = (categoryName: string): HTMLHeadingElement => {
	const element: HTMLHeadingElement = document.createElement("h4");
	element.classList.add("entries-list-item-category-title");
	element.innerText = categoryName;

	return element;
}

export { EntriesListItemCategoryTitle };