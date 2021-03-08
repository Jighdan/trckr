import generateId from "../library/idGenerator";
import getRandomColor from "../library/colorGenerator";

export default {
	addExpense(state, { amount }) {
		state.expenses.push({
			id: generateId(),
			amount: amount,
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
