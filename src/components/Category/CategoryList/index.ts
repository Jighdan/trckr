import { Component } from "../../Component";
import { store } from "../../../store/index";
import { CategoryListItem } from "./CategoryListItem";

class CategoryList extends Component {
	constructor() {
		super(document.createElement("main"), store);
		
		// Setting up category list element attributes
		this.element.classList.add("category-list-section");
		this.element.setAttribute("role", "list");
	}

	render = (): HTMLElement => {
		this.element.innerHTML = "";

		for (const categoryKey of Object.keys(store.state.categories)) {
			const category = store.state.categories[categoryKey];
			const categoryElement = CategoryListItem(categoryKey, category);
			this.element.appendChild(categoryElement);
		}

		return this.element;
	}
}

export { CategoryList }