import { InterfaceType } from "../../../models/Type";

const ExpenseListItemCategoryShapeIcon = (iconPath: string): HTMLDivElement => {
	const element: HTMLDivElement = document.createElement("div");
	element.classList.add("expenses-list-item-category-shape-icon");
	const maskUrl: string = `url(${iconPath}) no-repeat center`;
	element.style.mask = maskUrl;
	element.style.webkitMask = maskUrl;
	
	return element;
} 

const ExpensesListItemCategoryShape = (categoryColor: string, type: InterfaceType): HTMLDivElement => {
	const iconElement = ExpenseListItemCategoryShapeIcon(type.icon);
	const element: HTMLDivElement = document.createElement("div");
	element.classList.add("expenses-list-item-category-shape");
	element.setAttribute("role", "figure");
	element.style.color = categoryColor;
	element.style.borderColor = categoryColor;
	element.appendChild(iconElement);
	
	return element
}

export { ExpensesListItemCategoryShape };