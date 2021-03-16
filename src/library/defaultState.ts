import { InterfaceState } from "../models/State";
import { categories } from "./categories";
import { colors } from "./colors";
import { generateId } from "./idGenerator";

const defaultCategories = () => {
	return categories.map(category => {
		const id = generateId();
		const color = colors[categories.indexOf(category)];
		const icon = `./assets/icons/${category.icon}`;

		return {
			id,
			name: category.name,
			color,
			icon
		}
	});
};


const defaultState: InterfaceState = {
	entries: [],
	categories: defaultCategories(),
	localStorageKey: "daily-tr.ck.r-app-state"
};

export { defaultState };