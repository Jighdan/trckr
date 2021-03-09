import generateId from "../library/idGenerator";
import getRandomColor from "../library/colorGenerator";

export default {
	addExpense(state, { amount, category }) {
		state.expenses.push({
			id: generateId(),
			amount,
			categoryId: category,
			dateAdded: new Date(),
		});
	},

	addCategory(state, { name, color }) {
		state.categories.push({
			id: generateId(),
			name,
			color: color ? color : getRandomColor(),
		});
	},
};
