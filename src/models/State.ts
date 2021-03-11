import { InterfaceExpense } from "./Expense";
import { InterfaceCategory } from "./Category";
import { InterfaceType } from "./Type";

interface InterfaceState {
	expenses: Array<InterfaceExpense>;
	categories: {[index: string]: InterfaceCategory};
	types: {[index: string]: InterfaceType};
	localStorageKey: string;
}

export { InterfaceState }