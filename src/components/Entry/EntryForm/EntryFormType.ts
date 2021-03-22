import { FormLabel } from "../../Form";

const EntryFormTypeItem = (inputName: string, inputValue: string, isDefault?: boolean): HTMLDivElement => {
	const element = document.createElement("div");
	const elementLabel = FormLabel(inputName, inputName);
	const elementInput = document.createElement("input");

	elementInput.setAttribute("type", "radio");
	elementInput.setAttribute("name", "entryType");
	elementInput.setAttribute("id", inputName);
	elementInput.setAttribute("value", inputValue);

	if (isDefault) {
		elementInput.setAttribute("checked", "true");
	}

	element.classList.add("entry-form-type-options-item");
	element.append(elementInput, elementLabel);

	return element
};

const EntryFormType = (): HTMLFieldSetElement => {
	const signs = [{ name: "Expense", sign: "-", isDefault: true }, { name: "Income", sign: "+" }];
	const element = document.createElement("fieldset");
	const elementLegend = document.createElement("legend");
	const elementOptionsContainer = document.createElement("div");
	const elementOptions = signs.map(item => EntryFormTypeItem(item.name, item.sign, item.isDefault));

	elementLegend.innerText = "Type";

	elementOptionsContainer.classList.add("entry-form-type-options");
	elementOptionsContainer.append(...elementOptions);

	element.classList.add("entry-form-control", "entry-form-type");
	element.append(elementLegend, elementOptionsContainer);

	return element
};

export { EntryFormType }