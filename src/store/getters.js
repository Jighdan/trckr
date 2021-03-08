export default {
	getExpensesTotal(state) {
		if (state.expenses && state.expenses.length) {
			const allExpensesAmount = state.expenses.map((expense) => expense.amount);
			const total = allExpensesAmount.reduce(
				(accumulator, amount) => accumulator + amount
			);
			return `$${total.toFixed(2)}`;
		}

		return "$0.00";
	},

	getSortedCategories(state) {
		return state.categories.sort((a, b) => a.name.localeCompare(b.name));
	},
};
