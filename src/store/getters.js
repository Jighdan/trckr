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

	composedExpensesByDate(state) {
		let composedExpensesByDate = {};
		const availableDates = new Array(
			...new Set(
				state.expenses.map(({ dateAdded }) => dateAdded.toDateString())
			)
		);

		availableDates.forEach((date) => {
			const expensesByDate = state.expenses.filter(
				({ dateAdded }) => dateAdded.toDateString() == date
			);

			composedExpensesByDate[`${date}`] = expensesByDate;
		});

		return composedExpensesByDate;
	},

	getSortedCategories(state) {
		return state.categories.sort((a, b) => a.name.localeCompare(b.name));
	},
};
