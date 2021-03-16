import { Component } from "../../Component";
import { store } from "../../../store/index";
import { EntryFormName } from "./EntryFormName";
import { EntryFormAmount } from "./EntryFormAmount";
import { EntryFormCategory } from "./EntryFormCategory";

class EntryForm extends Component {
	inputName: HTMLInputElement;
	inputAmount: HTMLInputElement;
	inputCategory: HTMLSelectElement;
	submitButton: HTMLButtonElement;

	constructor() {
		super(document.createElement("form"), store, true);

		// Setting up the form legend
		const legend = document.createElement("legend");
		legend.innerText = "New Entry";

		// Setting up the form inputs
		this.inputName = EntryFormName();
		this.inputAmount = EntryFormAmount();
		this.inputCategory = EntryFormCategory(store.state.categories);

		// Setting up the form submit button
		this.submitButton = document.createElement("button");
		this.submitButton.classList.add("button");
		this.submitButton.setAttribute("type", "submit");
		this.submitButton.innerText = "Add Expense";

		// Setting up a prefix for the input
		const prefix = document.createElement("span");
		prefix.classList.add("entry-form-input-box-control-prefix");
		prefix.innerText = "$";

		// Wrap the prefix and the input altogether
		const formControl = document.createElement("div");
		formControl.classList.add("entry-form-input-box-control");
		formControl.append(prefix, this.inputAmount, this.inputCategory);

		// Wrap all the inputs altogether
		const inputBox = document.createElement("div");
		inputBox.classList.add("entry-form-input-box");
		inputBox.append(this.inputName, formControl);

		// Wrap the element
		this.element.classList.add("entry-form");
		this.element.append(legend, inputBox, this.submitButton);
	}

	onSubmit(event: Event): void {
		event.preventDefault();

		const entryName = this.inputName.value;
		const entryAmount = this.inputAmount.valueAsNumber;
		const entryCategoryId = this.inputCategory.value;

		if (entryName && entryAmount && entryCategoryId) {
			this.inputName.value = "";
			this.inputAmount.value = "";

			const entry = {
				name: entryName,
				amount: entryAmount,
				categoryId: entryCategoryId
			};

			store.commit("addEntry", entry);
		}
	}

	setEvents(): void {
		this.element.addEventListener("submit", (event: Event) => this.onSubmit(event));
	}

	render = (): HTMLElement => {
		this.setEvents();
		return this.element;
	}
}

export { EntryForm };
