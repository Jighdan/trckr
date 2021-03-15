import { InterfaceCategory } from "../../../models/Category";

const composeCategoryFormParentItem = (categoryKey: string, categoryName: string, categoryColor: string): HTMLDivElement => {
	const elementContainer = document.createElement("div");
	const inputElement = document.createElement("input");
	const labelElement = document.createElement("label");

	inputElement.setAttribute("type", "radio");
	inputElement.setAttribute("name", "parentCategory");
	inputElement.setAttribute("value", categoryKey);
	// Adding an `id` attribute so the input can be "checked" by clicking on the label
	inputElement.setAttribute("id", categoryName);
	inputElement.setAttribute("required", "true");

	labelElement.setAttribute("for", categoryName);
	labelElement.style.color = categoryColor;
	labelElement.innerText = categoryName;
	
	elementContainer.classList.add("category-form-parent-options-item");
	elementContainer.append(inputElement, labelElement);

	return elementContainer;
};

const CategoryFormParent = (categories: {[index: string]: InterfaceCategory}): HTMLDivElement => {
	const element = document.createElement("div");
	const elementLegend = document.createElement("legend");
	const elementOptions = document.createElement("div");

	Object.keys(categories).map(categoryKey => {
		const element = composeCategoryFormParentItem(categoryKey, categories[categoryKey].name, categories[categoryKey].color);
		elementOptions.appendChild(element);
	});

	elementLegend.innerText = "How does spending on this category makes you feel?";
	elementOptions.classList.add("category-form-parent-options");
	element.classList.add("category-form-parent");

	element.append(elementLegend, elementOptions);
	return element;
}



export { CategoryFormParent };