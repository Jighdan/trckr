import { InterfaceCurrency } from "../../../models/Currency";
import { InterfaceFormSelectOption } from "../../../models/Form";
import { FormLabel, FormSelect } from "../../Form";

const EntryFormCurrency = (currencies: Array<InterfaceCurrency>): HTMLDivElement => {
	const formattedCurrencies: Array<InterfaceFormSelectOption> = currencies.map(currency => ({
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