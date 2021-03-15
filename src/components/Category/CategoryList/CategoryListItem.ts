import { InterfaceCategory } from "../../../models/Category";
import { CategoryListItemSubCategories } from "./CategoryListItemSubCategories";

const CategoryListItemTitle = (categoryName: string): HTMLElement => {
	const element: HTMLElement = document.createElement("summary");
	element.innerText = categoryName;

	return element;
}

const CategoryListItem = (categoryKey: string, category: InterfaceCategory): HTMLDetailsElement => {
	const element: HTMLDetailsElement = document.createElement("details");
	const elementSummary = CategoryListItemTitle(category.name);
	const elementSubCategories = CategoryListItemSubCategories(category.subCategories);

	// Setting the category list item attributes
	element.setAttribute("data-id", categoryKey);
	element.setAttribute("role", "listitem");

	// Wrapping up the element
	element.append(elementSummary, elementSubCategories);

	return element
}

export { CategoryListItem };