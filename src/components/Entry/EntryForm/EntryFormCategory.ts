import { InterfaceCategory } from "../../../models/Category";
import { InterfaceFormSelectOption } from "../../../models/Form";
import { FormLabel, FormSelect } from "../../Form";

const EntryFormCategory = (categories: Array<InterfaceCategory>): HTMLDivElement => {
	const formattedCategories: Array<InterfaceFormSelectOption> = categories.map(category => ({
		value: category.id,
		label: category.name,
		isDefault: category.isDefault
	}));

	const element = document.createElement("div");
	const elementName = "entryCategory";
	const elementLabel = FormLabel("Category", elementName);
	const elementSelect = FormSelect(elementName, formattedCategories);

	elementSelect.setAttribute("required", "true");

	element.classList.add("form-control", "entry-form-category");
	element.append(elementLabel, elementSelect);

	return element;
};

export { EntryFormCategory };