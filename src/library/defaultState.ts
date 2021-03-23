import { InterfaceState } from "../models/State";
import { categories } from "./categories";
import { defaultCurrencies } from "./defaultCurrencies";
import { colors } from "./colors";
import { generateId } from "./idGenerator";

const defaultCategories = () => {
	return categories.map(category => {
		const id = generateId();
		const color = colors[categories.indexOf(category)];
		const icon = `./assets/icons/${category.icon}`;
		const isDefault = category.name === "Other" ? true : false;

		return {
			id,
			name: category.name,
			color,
			icon,
			isDefault
		}
	});
};

const defaultState: InterfaceState = {
	entries: [],
	categories: defaultCategories(),
	currencies: defaultCurrencies,
	localStorageKey: "daily-tr.ck.r-app-state"
};

export { defaultState };