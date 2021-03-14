import { CategoryList } from "../components/Category/CategoryList/index";

const Category = (root: HTMLElement): void => {
	const instanceOfCategoryList = new CategoryList();

	const instances = [instanceOfCategoryList];
	root.append(...instances.map(instance => instance.render()));
};

export { Category };