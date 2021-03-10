import { State, Category, Type } from "../models/index";
import { generateId } from "../library/idGenerator";

const defaultCategories: {[index: string]: Category} = {
	"happyTo": {
		name: "Happy to",
		color: "#264653",
		subCategories: [
			{
				id: generateId(),
				name: "Groceries",
				typeId: "6"
			}
		]
	},
	"okayWith": {
		name: "Okay with",
		color: "#2A9D8F",
		subCategories: [
			{
				id: generateId(),			
				name: "Craft Supplies",
				typeId: "3"
			}
		]
	},
	"haveTo": {
		name: "Have to",
		color: "#E9C46A",
		subCategories: [
			{
				id: generateId(),
				name: "Gas",
				typeId: "1"
			}
		]
	},
	"ratherNot": {
		name: "Would rather not",
		color: "#F4A261",
		subCategories: [
			{
				id: generateId(),
				name: "Junk Food",
				typeId: "6"
			}
		]
	},
	"shouldNot": {
		name: "Shouldn't",
		color: "#E76F51",
		subCategories: [
			{
				id: generateId(),
				name: "Clothes",
				typeId: "8"
			}
		]
	}
}

const defaultTypes: {[index: string]: Type} = {
	"1": {
		name: "Bill",
		icon: "./assets/icons/iconTypeBill.svg"
	},
	"2": {
		name: "Eating Out",
		icon: "./assets/icons/iconTypeEatingOut.svg"
	},
	"3": {
		name: "Entertainment",
		icon: "./assets/icons/iconTypeEntertainment.svg"
	},
	"4": {
		name: "Family",
		icon: "./assets/icons/iconTypeFamily.svg"
	},
	"5": {
		name: "General",
		icon: "./assets/icons/iconTypeGeneral.svg"
	},
	"6": {
		name: "Groceries",
		icon: "./assets/icons/iconTypeGroceries.svg"
	},
	"7": {
		name: "Personal Care",
		icon: "./assets/icons/iconTypePersonalCare.svg"
	},
	"8": {
		name: "Shopping",
		icon: "./assets/icons/iconTypeShopping.svg"
	},
	"9": {
		name: "Transportation",
		icon: "./assets/icons/iconTypeTransportation.svg"
	},
	"10": {
		name: "Trip",
		icon: "./assets/icons/iconTypeTrip.svg"
	}
};

const defaultState: State = {
	expenses: [],
	categories: defaultCategories,
	types: defaultTypes,
	localStorageKey: "daily-tr.ck.r-app-state"
};

export { defaultState };