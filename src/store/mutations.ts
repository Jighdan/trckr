import { InterfaceState } from "../models/State";
import { InterfaceExpenseCategory } from "../models/Expense";
import { generateId } from "../library/idGenerator";

const mutations = {
	addExpense(state: InterfaceState, { amount, category }: { amount: number, category: InterfaceExpenseCategory }): void {
		state.expenses.push({
			id: generateId(),
			amount,
			category,
			dateAdded: new Date(),
		});
	},

	addSubCategory(state: InterfaceState, { parentCategory, name, typeId }: { parentCategory: string, name: string, typeId: string }): void {
		state.categories[parentCategory]?.subCategories.push({
			id: generateId(),
			name,
			typeId
		})
	},
};

export { mutations };
