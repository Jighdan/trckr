import { InterfaceSubCategory } from "../../../models/Category";

const CategoryListItemSubCategoriesItem = (subCategory: InterfaceSubCategory): HTMLLIElement => {
	const element: HTMLLIElement = document.createElement("li");
	
	// Set category list item sub-categories item element attributes
	element.setAttribute("data-id", `${subCategory.id}`);
	element.innerHTML = subCategory.name;

	return element;
}

const CategoryListItemSubCategories = (subCategoryList: Array<InterfaceSubCategory>): HTMLUListElement => {
	const element: HTMLUListElement = document.createElement("ul");
	const subCategoriesElements: Array<HTMLLIElement> = subCategoryList.map(subCategory => {
		return CategoryListItemSubCategoriesItem(subCategory);
	});

	element.append(...subCategoriesElements);
	return element;
}

export { CategoryListItemSubCategories };