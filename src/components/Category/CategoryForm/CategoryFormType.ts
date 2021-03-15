import { InterfaceType } from "../../../models/Type";

const composeCategoryFormTypeIcon = (iconPath: string): HTMLDivElement => {
	const element = document.createElement("div");
	element.classList.add("category-form-type-option-icon");
	const maskUrl = `url(${iconPath}) no-repeat center`;
	element.style.mask = maskUrl;
	element.style.webkitMask = maskUrl;

	return element;
};

const composeCategoryFormTypeOption = (typeId: string, type: InterfaceType): HTMLDivElement => {
	const elementContainer = document.createElement("div");
	const inputElement = document.createElement("input");
	const labelElement = document.createElement("label");
	const labelTextElement = document.createElement("span");
	const iconElement = composeCategoryFormTypeIcon(type.icon);

	inputElement.setAttribute("type", "radio");
	inputElement.setAttribute("name", "typeId");
	inputElement.setAttribute("value", typeId);
	// Adding an `id` attribute so the input can be "checked" by clicking on the label
	inputElement.setAttribute("id", type.name);
	inputElement.setAttribute("required", "true");

	labelTextElement.innerText = type.name;

	labelElement.setAttribute("for", type.name);
	labelElement.append(iconElement, labelTextElement);
	
	elementContainer.classList.add("category-form-type-option");
	elementContainer.append(inputElement, labelElement);

	return elementContainer;
};

const CategoryFormType = (types: {[index: string]: InterfaceType}): HTMLDivElement => {
	const element = document.createElement("div");
	const elementOptions = Object.keys(types).map(typeKey => {
		const element = composeCategoryFormTypeOption(typeKey, types[typeKey]);
		return element
	});

	element.classList.add("category-form-type");

	element.append(...elementOptions);
	return element;
}

export { CategoryFormType };