import { Currency } from "../../../types/currency";
import { FormSelectOption } from "../../../types/formElements";
import { FormLabel, FormSelect } from "../../Form";

const EntryFormCurrency = (currencies: Array<Currency>): HTMLDivElement => {
	const formattedCurrencies: Array<FormSelectOption> = currencies.map(currency => ({
		value: currency.code,
		label: currency.code,
		isDefault: currency.default,
	}));

	const element = document.createElement("div");
	const elementName = "entryCurrencyCode"
	const elementSelect = FormSelect(elementName, formattedCurrencies);
	const elementLabel = FormLabel("Currency", elementName);

	elementSelect.setAttribute("required", "true");
	element.classList.add("form-control", "entry-form-currency");
	element.append(elementLabel, elementSelect);
	return element;
};

export { EntryFormCurrency };