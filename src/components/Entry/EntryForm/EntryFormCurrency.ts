import { InterfaceCurrency } from "../../../models/Currency";
import { FormLabel } from "../../Form";

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
	const elementLabel = FormLabel("Currency", "entryCurrencyCode");
	const elementSelectOptions = currencies.map(currency => EntryFormCurrencyOption(currency));

	elementSelect.setAttribute("name", "entryCurrencyCode");
	elementSelect.append(...elementSelectOptions);

	element.classList.add("entry-form-control", "entry-form-currency");
	element.append(elementLabel, elementSelect);
	return element;
};

export { EntryFormCurrency };