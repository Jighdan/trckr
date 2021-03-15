import { InterfaceCategory } from "../../../models/Category";

import { InterfaceType } from "../../../models/Type";

const composeCategoryFormTypeIcon = (iconPath: string): HTMLDivElement => {
	const element = document.createElement("div");
	element.classList.add("category-form-type-icon");
	const maskUrl = `url(${iconPath}) no-repeat center`;
	element.style.mask = maskUrl;
	element.style.webkitMask = maskUrl;

	return element;
};

const composeCategoryFormTypeOption = (typeId: string, type: InterfaceType): HTMLDivElement => {
	const elementContainer = document.createElement("div");
	const inputElement = document.createElement("input");
	const labelElement = document.createElement("label");
	const iconElement = composeCategoryFormTypeIcon(type.icon);

	inputElement.setAttribute("type", "radio");
	inputElement.setAttribute("name", "typeId");
	inputElement.setAttribute("value", typeId);
	inputElement.setAttribute("required", "true");

	labelElement.setAttribute("for", "typeId");
	labelElement.innerText = type.name;
	
	elementContainer.append(iconElement, labelElement, inputElement);

	return elementContainer;
};

const CategoryFormType = (types: {[index: string]: InterfaceType}): HTMLDivElement => {
	const element = document.createElement("div");
	const elementOptions = Object.keys(types).map(typeKey => {
		const element = composeCategoryFormTypeOption(typeKey, types[typeKey]);
		return element
	});

	element.classList.add("category-form-parent");

	element.append(...elementOptions);
	return element;
}

export { CategoryFormType };

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
	
	elementContainer.classList.add("category-form-parent-option");
	elementContainer.append(inputElement, labelElement);

	return elementContainer;
};

const CategoryFormParent = (categories: {[index: string]: InterfaceCategory}): HTMLDivElement => {
	const element = document.createElement("div");
	const elementOptions = Object.keys(categories).map(categoryKey => {
		const category = categories[categoryKey];
		const element = composeCategoryFormParentItem(categoryKey, category.name, category.color);
		return element
	});

	element.setAttribute("required", "true");
	element.classList.add("category-form-parent");

	element.append(...elementOptions);
	return element;
}



export { CategoryFormParent };