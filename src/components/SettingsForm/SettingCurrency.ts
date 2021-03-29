import { Currency } from "../../types/currency";
import { FormSelectOption } from "../../types/formElements";
import { SettingTitle } from "./SettingTitle";
import { FormSelect } from "../Form";

const SettingCurrency = (currencies: Array<Currency>): HTMLElement => {
	const options: Array<FormSelectOption> = currencies.map(currency => ({
		value: currency.code,
		label: currency.name,
		isDefault: currency.default ? currency.default : false
	}));

	const element = document.createElement("div");
	const elementTitle = SettingTitle("Default Currency", "defaultCurrency");
	const elementSelect = FormSelect("settingCurrency", options);

	element.classList.add("settings-control");
	element.append(elementTitle, elementSelect);

	return element;
}

export { SettingCurrency };