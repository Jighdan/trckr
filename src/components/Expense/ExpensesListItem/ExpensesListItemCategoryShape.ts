import { InterfaceType } from "../../../models/Type";
import { TypeIcon } from "../../TypeIcon";

const ExpensesListItemCategoryShape = (categoryColor: string, type: InterfaceType): HTMLDivElement => {
	const iconElement = TypeIcon(type.icon);
	const element: HTMLDivElement = document.createElement("div");

	iconElement.classList.add("expenses-list-item-category-shape-icon");

	element.classList.add("expenses-list-item-category-shape");
	element.setAttribute("role", "figure");
	element.style.color = categoryColor;
	element.style.borderColor = categoryColor;
	element.appendChild(iconElement);
	
	return element
}

export { ExpensesListItemCategoryShape };