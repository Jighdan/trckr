import { InterfaceCurrency } from "../../models/Currency";
import { SettingTitle } from "./SettingTitle";

const SettingCurrencyItem = (currency: InterfaceCurrency,): HTMLOptionElement => {
	const element = document.createElement("option");
	element.setAttribute("value", currency.code);
	element.setAttribute("label", currency.name);

	return element;
};

const SettingCurrency = (currencies: Array<InterfaceCurrency>, defaultCurrency: InterfaceCurrency): HTMLElement => {
	const element = document.createElement("div");
	const elementTitle = SettingTitle("Default Currency", "defaultCurrency");
	const elementSelect = document.createElement("select");
	const elementOptions = currencies.map(currency => {
		if (currency === defaultCurrency) {
			const element = SettingCurrencyItem(currency);
			element.setAttribute("selected", "true");

			return element
		}

		return SettingCurrencyItem(currency)
	});

	elementSelect.setAttribute("name", "settingCurrency");
	elementSelect.append(...elementOptions);

	element.setAttribute("required", "true");
	element.classList.add("settings-control");
	element.append(elementTitle, elementSelect);

	return element;
}

export { SettingCurrency };