import { CategoryForm } from "../components/Category/CategoryForm/index";
import { CategoryList } from "../components/Category/CategoryList/index";

const Category = (root: HTMLElement): void => {
	const instanceOfCategoryForm = new CategoryForm();
	const instanceOfCategoryList = new CategoryList();

	const instances = [instanceOfCategoryForm, instanceOfCategoryList];
	root.append(...instances.map(instance => instance.render()));
};

export { Category };