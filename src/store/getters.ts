import { State, Category } from "../models/index";

const getters = {
	getExpensesTotal(state: State): string {
		if (state.expenses && state.expenses.length) {
			const allExpensesAmount = state.expenses.map((expense) => expense.amount);
			const total = allExpensesAmount.reduce(
				(accumulator: number, amount: number) => accumulator + amount
			);
			return `$${total.toFixed(2)}`;
		}

		return "$0.00";
	},

	getExpensesByDate(state: State): object {
		let composedExpensesByDate: {[index: string]:any} = {};

		const availableDates = state.expenses.map(({ dateAdded }) => new Date(dateAdded).toDateString());
		const setOfUniqueDates = new Set(availableDates);
		const arrayOfUniqueDates = new Array(...setOfUniqueDates);

		arrayOfUniqueDates.forEach((date) => {
			const expensesByDate = state.expenses.filter(
				({ dateAdded }) => new Date(dateAdded).toDateString() === date
			);
			const sortedExpensesByDate = expensesByDate.sort((a, b): any => {
				new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
			});

			composedExpensesByDate[`${date}`] = sortedExpensesByDate;
		});

		return composedExpensesByDate;
	},

	getSortedCategories(state: State): Array<Category> {
		return state.categories.sort((a, b) => a.name.localeCompare(b.name));
	},

	getCategoryById(state: State, { categoryId }: { categoryId: string }): Category {
		return state.categories.find((category) => category.id === categoryId);
	},
};

export { getters }
