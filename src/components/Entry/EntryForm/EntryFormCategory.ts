import { InterfaceCategory } from "../../../models/Category";

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


const EntryFormCategory = (categories: Array<InterfaceCategory>): HTMLSelectElement => {
	const element = document.createElement("select");
	const elementOptions = categories.map(category => EntryFormCategoryOption(category));

	element.classList.add("entry-form-category");
	element.setAttribute("aria-label", "Entry Category");
	element.setAttribute("name", "entryCategory");
	element.setAttribute("required", "true");
	element.append(...elementOptions);

	return element;
};

export { EntryFormCategory };