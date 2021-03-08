import generateId from "../library/idGenerator";

export default {
	addExpense(state, { amount }) {
		state.expenses.push({
			id: generateId(),
			amount,
		});
	},
};
