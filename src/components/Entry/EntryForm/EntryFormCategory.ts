import { Category } from "../../../types/category";
import { FormSelectOption } from "../../../types/formElements";
import { FormLabel, FormSelect } from "../../Form";

const EntryFormCategory = (categories: Array<Category>): HTMLDivElement => {
	const formattedCategories: Array<FormSelectOption> = categories.map(category => ({
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