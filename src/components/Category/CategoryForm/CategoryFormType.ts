import { InterfaceType } from "../../../models/Type";
import { TypeIcon } from "../../TypeIcon";

const composeCategoryFormTypeOption = (typeId: string, type: InterfaceType): HTMLDivElement => {
	const elementContainer = document.createElement("div");
	const inputElement = document.createElement("input");
	const labelElement = document.createElement("label");
	const labelTextElement = document.createElement("span");
	const iconElement = TypeIcon(type.icon);

	inputElement.setAttribute("type", "radio");
	inputElement.setAttribute("name", "typeId");
	inputElement.setAttribute("value", typeId);
	// Adding an `id` attribute so the input can be "checked" by clicking on the label
	inputElement.setAttribute("id", type.name);
	inputElement.setAttribute("required", "true");

	iconElement.classList.add("category-form-type-option-icon");

	labelTextElement.innerText = type.name;

	labelElement.setAttribute("for", type.name);
	labelElement.append(iconElement, labelTextElement);
	
	elementContainer.classList.add("category-form-type-options-item");
	elementContainer.append(inputElement, labelElement);

	return elementContainer;
};

const CategoryFormType = (types: {[index: string]: InterfaceType}): HTMLDivElement => {
	const element = document.createElement("div");
	const elementOptions = document.createElement("div");
	const legendElement = document.createElement("legend");

	Object.keys(types).forEach(typeKey => {
		const element = composeCategoryFormTypeOption(typeKey, types[typeKey]);
		elementOptions.appendChild(element);
	});

	legendElement.innerText = "What icon describes this category?";
	elementOptions.classList.add("category-form-type-options");
	element.classList.add("category-form-type");

	element.append(legendElement, elementOptions);
	return element;
}

export { CategoryFormType };