import { State, ExpenseCategory } from "../models/index";
import { generateId } from "../library/idGenerator";

const mutations = {
	addExpense(state: State, { amount, category }: { amount: number, category: ExpenseCategory }): void {
		state.expenses.push({
			id: generateId(),
			amount,
			category,
			dateAdded: new Date(),
		});
	},

	addSubCategory(state: State, { parentCategory, name, typeId }: { parentCategory: string, name: string, typeId: string }): void {
		state.categories[parentCategory]?.subCategories.push({
			id: generateId(),
			name,
			typeId
		})
	},
};

export { mutations };
