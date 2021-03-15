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