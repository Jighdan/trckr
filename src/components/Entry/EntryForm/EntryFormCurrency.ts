import { InterfaceCurrency } from "../../../models/Currency";
import { EntryFormLabel } from "./EntryFormLabel";

const EntryFormCurrencyOption = (name: string, code: string, selected?: boolean): HTMLOptionElement => {
	const element = document.createElement("option");
	element.setAttribute("value", code);
	element.setAttribute("label", code);

	if (selected) {
		element.setAttribute("selected", "true");
	}

	return element;
};

const EntryFormCurrency = (currencies: Array<InterfaceCurrency>): HTMLDivElement => {
	const element = document.createElement("div");
	const elementSelect = document.createElement("select");
	const elementLabel = EntryFormLabel("Currency", "entryCurrency");
	const elementSelectOptions = currencies.map(currency => EntryFormCurrencyOption(currency.name, currency.code, currency.default));

	elementSelect.setAttribute("name", "entryCurrency");
	elementSelect.append(...elementSelectOptions);

	element.classList.add("entry-form-control", "entry-form-currency");
	element.append(elementLabel, elementSelect);
	return element;
};

export { EntryFormCurrency };