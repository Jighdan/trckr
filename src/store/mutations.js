import generateId from "../library/idGenerator";
import getRandomColor from "../library/colorGenerator";

export default {
	addExpense(state, { amount, categoryId }) {
		state.expenses.push({
			id: generateId(),
			amount,
			categoryId,
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
