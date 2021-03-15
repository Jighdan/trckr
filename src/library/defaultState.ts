import { InterfaceState } from "../models/State";
import { InterfaceCategory } from "../models/Category";
import { InterfaceType } from "../models/Type";
import { generateId } from "../library/idGenerator";

const defaultCategories: {[index: string]: InterfaceCategory} = {
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

const defaultTypes: {[index: string]: InterfaceType} = {
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
		name: "Food",
		icon: "./assets/icons/iconTypeFood.svg"
	},
	"6": {
		name: "Groceries",
		icon: "./assets/icons/iconTypeGroceries.svg"
	},
	"7": {
		name: "Other",
		icon: "./assets/icons/iconTypeGeneral.svg"
	},
	"8": {
		name: "Personal Care",
		icon: "./assets/icons/iconTypePersonalCare.svg"
	},
	"9": {
		name: "Shopping",
		icon: "./assets/icons/iconTypeShopping.svg"
	},
	"10": {
		name: "Transportation",
		icon: "./assets/icons/iconTypeTransportation.svg"
	},
	"11": {
		name: "Trip",
		icon: "./assets/icons/iconTypeTrip.svg"
	},
	"12": {
		name: "Work",
		icon: "./assets/icons/iconTypeWork.svg"
	}
};

const defaultState: InterfaceState = {
	expenses: [],
	categories: defaultCategories,
	types: defaultTypes,
	localStorageKey: "daily-tr.ck.r-app-state"
};

export { defaultState };