import { Component } from "../../Component";
import { store } from "../../../store/index";
import { CategoryFormName } from "./CategoryFormName";
import { CategoryFormParent } from "./CategoryFormParent"
import { CategoryFormType } from "./CategoryFormType";

class CategoryForm extends Component {
	inputName: HTMLInputElement

	constructor() {
		super(document.createElement("form"), store, true);

		const legend = document.createElement("legend");
		legend.innerText = "New Category";

		this.inputName = CategoryFormName();
		const inputParent = CategoryFormParent(store.state.categories);
		const inputType = CategoryFormType(store.state.types);

		const inputBox = document.createElement("div");
		inputBox.classList.add("input-box");
		inputBox.append(this.inputName, inputParent, inputType)

		const submitButton = document.createElement("button");
		submitButton.classList.add("button");
		submitButton.setAttribute("type", "submit");
		submitButton.innerText = "Add Category";

		this.element.classList.add("category-form");
		this.element.append(legend, inputBox, submitButton);
	}

	onSubmit(event: Event): void {
		event.preventDefault();

		const { elements } = this.element;

		const parentCategoryElement: HTMLInputElement = new Array(...elements.parentCategory).find(
			(input: HTMLInputElement) => input.checked);
		const typeIdElement: HTMLInputElement = new Array(...elements.typeId).find(
			(input: HTMLInputElement) => input.checked);

		const name = elements.categoryName.value;
		const parentCategory = parentCategoryElement.value;
		const typeId = typeIdElement.value;

		if (name && parentCategory && typeId) {
			this.inputName.value = "";
			store.commit("addSubCategory", { parentCategory, name, typeId });
		}
	}

	setEvents(): void {
		this.element.addEventListener("submit", (event: Event) => this.onSubmit(event));
	}

	render = (): HTMLFormElement => {
		this.setEvents();
		return this.element;
	}
}

export { CategoryForm };