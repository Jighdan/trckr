import { State } from "../models/index";
import { generateId } from "../library/idGenerator";
import { getRandomColor } from "../library/colorGenerator";

const mutations = {
	addExpense(state: State, { amount, categoryId }: { amount: number, categoryId: string }): void {
		state.expenses.push({
			id: generateId(),
			amount,
			categoryId,
			dateAdded: new Date(),
		});
	},

	addCategory(state: State, { name, color }: { name: string, color?: string }): void {
		state.categories.push({
			id: generateId(),
			name,
			color: color ? color : getRandomColor(),
		});
	},
};

export { mutations };
