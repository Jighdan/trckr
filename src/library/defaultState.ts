import { InterfaceState } from "../models/State";
import { generateId } from "./idGenerator";
import { colors } from "./colors";

const categories = [
	{
		name: "Bills",
		icon: "bills.svg"
	},
	{
		name: "Entertainment",
		icon: "entertainment.svg"
	},
	{
		name: "Family",
		icon: "family.svg"
	},
	{
		name: "Food & Beverages",
		icon: "food-and-beverages.svg"
	},
	{
		name: "Gifts",
		icon: "gift.svg"
	},
	{
		name: "Groceries",
		icon: "groceries.svg"
	},
	{
		name: "Health",
		icon: "health.svg"
	},
	{
		name: "Household",
		icon: "household.svg"
	},
	{
		name: "Snacks",
		icon: "snack.svg"
	},
	{
		name: "Personal Development",
		icon: "personal-development.svg"
	},
	{
		name: "Shopping",
		icon: "shopping.svg"
	},
	{
		name: "Transportation",
		icon: "transportation.svg"
	},
	{
		name: "Trips",
		icon: "trips.svg"
	},
	{
		name: "Work",
		icon: "work.svg"
	},
	{
		name: "Other",
		icon: "other.svg"
	}
];

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