import { Icon } from "../../../Icon";

const EntriesListItemCategoryShape = (categoryColor: string, categoryIcon: string): HTMLDivElement => {
	const iconElement = Icon(categoryIcon);
	const element: HTMLDivElement = document.createElement("div");

	iconElement.classList.add("entries-list-item-category-shape-icon");

	element.classList.add("entries-list-item-category-shape");
	element.setAttribute("role", "figure");
	element.style.color = categoryColor;
	element.style.borderColor = categoryColor;
	element.appendChild(iconElement);
	
	return element
}

export { EntriesListItemCategoryShape };