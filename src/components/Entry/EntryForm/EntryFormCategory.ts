import { InterfaceCategory } from "../../../models/Category";
import { EntryFormLabel } from "./EntryFormLabel";

const EntryFormCategoryOption = (category: InterfaceCategory): HTMLOptionElement => {
	const element = document.createElement("option");
	element.setAttribute("label", category.name);
	element.setAttribute("value", category.id);
	element.innerText = category.name;

	if (category.name === "Other") {
		element.setAttribute("selected", "true");
	}

	return element;
};


const EntryFormCategory = (categories: Array<InterfaceCategory>): HTMLDivElement => {
	const element = document.createElement("div");
	const elementLabel = EntryFormLabel("Category", "entryCategory");
	const elementSelect = document.createElement("select");
	const elementSelectOptions = categories.map(category => EntryFormCategoryOption(category));

	elementSelect.setAttribute("name", "entryCategory");
	elementSelect.setAttribute("required", "true");
	elementSelect.append(...elementSelectOptions);

	element.classList.add("entry-form-control", "entry-form-category");
	element.append(elementLabel, elementSelect);

	return element;
};

export { EntryFormCategory };