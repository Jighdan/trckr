import { InterfaceCategory, InterfaceSubCategory } from "../../../models/Category";

const composeSelectOption = (categoryKey: string, subCategory: InterfaceSubCategory): HTMLOptionElement => {
	const value: string = JSON.stringify({ name: categoryKey, subCategoryId: subCategory.id });
	const element: HTMLOptionElement = document.createElement("option");
	element.setAttribute("required", "true");
	element.setAttribute("value", value);
	element.innerText = subCategory.name;

	return element;
};

const composeSelectOptionGroup = (categoryKey: string, categoryData: InterfaceCategory): HTMLOptGroupElement => {
	const element: HTMLOptGroupElement = document.createElement("optgroup");
	element.setAttribute("label", categoryData.name);

	const options = categoryData.subCategories.map(subCategory => composeSelectOption(categoryKey, subCategory));
	element.append(...options);

	return element;
}

const ExpenseFormCategory = (categories: {[index: string]: InterfaceCategory}): HTMLSelectElement => {
	const optionsGroup: Array<HTMLOptGroupElement> = Object.keys(categories).map(categoryKey => (
		composeSelectOptionGroup(categoryKey, categories[categoryKey])
	));
	const element: HTMLSelectElement = document.createElement("select");
	element.setAttribute("aria-label", "Expense Category");
	element.setAttribute("name", "expenseCategory");
	element.append(...optionsGroup)

	return element;
}

export { ExpenseFormCategory };
