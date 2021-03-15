const CategoryFormName = (): HTMLInputElement => {
	const element: HTMLInputElement = document.createElement("input");
	element.setAttribute("type", "text");
	element.setAttribute("aria-label", "Category Name");
	element.setAttribute("name", "categoryName");
	element.setAttribute("autocomplete", "off");
	element.setAttribute("required", "true");
	element.classList.add("category-form-name");

	return element;
};

export { CategoryFormName };