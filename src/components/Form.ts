import { InterfaceFormSelectOption } from "../models/Form";

const FormLabel = (title: string, inputName: string): HTMLLabelElement => {
	const element = document.createElement("label");
	element.setAttribute("for", inputName);
	element.innerText = title;

	return element;
};

const FormSelectOption = (option: InterfaceFormSelectOption): HTMLOptionElement => {
	const element = document.createElement("option");
	element.setAttribute("value", option.value);
	element.setAttribute("label", option.label);

	if (option.isDefault) {
		element.setAttribute("selected", "true");
	}

	return element;
}

const FormSelect = (name: string, options: Array<InterfaceFormSelectOption>): HTMLSelectElement => {
	const element = document.createElement("select");
	const elementOptions = options.map(option => FormSelectOption(option));
	
	element.setAttribute("name", name);
	element.append(...elementOptions);

	return element;
}

export { FormLabel, FormSelect };