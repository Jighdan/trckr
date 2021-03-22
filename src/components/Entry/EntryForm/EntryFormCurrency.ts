import { InterfaceCurrency } from "../../../models/Currency";
import { EntryFormLabel } from "./EntryFormLabel";

const EntryFormCurrencyOption = (currency: InterfaceCurrency): HTMLOptionElement => {
	const element = document.createElement("option");
	element.setAttribute("value", currency.code);
	element.setAttribute("label", currency.code);

	if (currency.default) {
		element.setAttribute("selected", "true");
	}

	return element;
};

const EntryFormCurrency = (currencies: Array<InterfaceCurrency>): HTMLDivElement => {
	const element = document.createElement("div");
	const elementSelect = document.createElement("select");
	const elementLabel = EntryFormLabel("Currency", "entryCurrencyCode");
	const elementSelectOptions = currencies.map(currency => EntryFormCurrencyOption(currency));

	elementSelect.setAttribute("name", "entryCurrency");
	elementSelect.append(...elementSelectOptions);

	element.classList.add("entry-form-control", "entry-form-currency");
	element.append(elementLabel, elementSelect);
	return element;
};

export { EntryFormCurrency };