import { Component } from "../../Component";
import { store } from "../../../store/index";
import { EntryFormName } from "./EntryFormName";
import { EntryFormType } from "./EntryFormType";
import { EntryFormCurrency } from "./EntryFormCurrency";
import { EntryFormAmount } from "./EntryFormAmount";
import { EntryFormCategory } from "./EntryFormCategory";

class EntryForm extends Component {
	constructor() {
		super(document.createElement("form"), store, true);

		const inputName = EntryFormName();
		const inputSign = EntryFormType();
		const inputCurrency = EntryFormCurrency(store.state.currencies);
		const inputAmount = EntryFormAmount();
		const inputCategory = EntryFormCategory(store.state.categories);

		const submitButton = document.createElement("button");
		submitButton.classList.add("button");
		submitButton.setAttribute("type", "submit");
		submitButton.innerText = "Add Entry";

		const formWrap = document.createElement("div");
		formWrap.classList.add("entry-form-input-box-wrap");
		formWrap.append(inputSign, inputCurrency, inputAmount);

		const inputBox = document.createElement("div");
		inputBox.classList.add("entry-form-input-box");
		inputBox.append(inputName, formWrap, inputCategory);

		this.element.classList.add("entry-form");
		this.element.append(inputBox, submitButton);
	}

	onSubmit(event: Event): void {
		event.preventDefault();

		const { elements } = this.element;
	
		const entryName = elements.entryName.value;
		const entryType = elements.entryType.value;
		const entryCurrencyCode = elements.entryCurrencyCode.value;
		const entryAmount = elements.entryAmount.valueAsNumber;
		const entryCategoryId = elements.entryCategory.value;

		if (entryName && entryType && entryCurrencyCode && entryAmount && entryCategoryId) {
			this.element.elements.entryName.value = "";
			this.element.elements.entryAmount.value = "";

			const entry = {
				name: entryName,
				type: entryType,
				currencyCode: entryCurrencyCode,
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
