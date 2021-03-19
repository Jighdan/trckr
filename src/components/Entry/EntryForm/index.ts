import { Component } from "../../Component";
import { store } from "../../../store/index";
import { EntryFormName } from "./EntryFormName";
import { EntryFormAmount } from "./EntryFormAmount";
import { EntryFormCurrency } from "./EntryFormCurrency";
import { EntryFormCategory } from "./EntryFormCategory";

class EntryForm extends Component {
	constructor() {
		super(document.createElement("form"), store, true);

		// Setting up the form inputs
		const inputName = EntryFormName();
		const inputCurrency = EntryFormCurrency(store.state.currencies);
		const inputAmount = EntryFormAmount();
		const inputCategory = EntryFormCategory(store.state.categories);

		// Setting up the form submit button
		const submitButton = document.createElement("button");
		submitButton.classList.add("button");
		submitButton.setAttribute("type", "submit");
		submitButton.innerText = "Add Entry";

		// Wrap the prefix and the input altogether
		const formControl = document.createElement("div");
		formControl.classList.add("entry-form-input-box-wrap");
		formControl.append(inputCurrency, inputAmount);

		// Wrap all the inputs altogether
		const inputBox = document.createElement("div");
		inputBox.classList.add("entry-form-input-box");
		inputBox.append(inputName, formControl, inputCategory);

		// Wrap the element
		this.element.classList.add("entry-form");
		this.element.append(inputBox, submitButton);
	}

	onSubmit(event: Event): void {
		event.preventDefault();

		const { elements } = this.element;
	
		const entryName = elements.entryName.value;
		const entryCurrency = elements.entryCurrency.value;
		const entryAmount = elements.entryAmount.valueAsNumber;
		const entryCategoryId = elements.entryCategory.value;

		if (entryName && entryCurrency && entryAmount && entryCategoryId) {
			this.element.elements.entryName.value = "";
			this.element.elements.entryAmount.value = "";

			const entry = {
				name: entryName,
				currency: entryCurrency,
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
