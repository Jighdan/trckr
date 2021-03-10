import { State, ExpenseCategory, Category, SubCategory, ComposedSubCategory } from "../models/index";
import { composeDate } from "../library/dateComposer";

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

		const availableDates = state.expenses.map((expense) => composeDate(expense.dateAdded));
		const setOfUniqueDates = new Set(availableDates);
		const arrayOfUniqueDates = new Array(...setOfUniqueDates);

		arrayOfUniqueDates.forEach((date) => {
			const formattedDate = composeDate(date);
			const expensesByDate = state.expenses.filter((expense) => composeDate(expense.dateAdded) === date);
			const sortedExpensesByTime = expensesByDate.sort((a, b): any => (
				new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
		));

			composedExpensesByDate[formattedDate] = sortedExpensesByTime;
		});

		return composedExpensesByDate;
	},

	getComposedSubCategoryByExpenseCategory(state: State, { expenseCategory }: { expenseCategory: ExpenseCategory }): ComposedSubCategory {
		const subCategory: SubCategory = state.categories[expenseCategory.name].subCategories.find(subCategory => (
			subCategory.id === expenseCategory.subCategoryId
		));

		return {
			id: subCategory.id,
			name: subCategory.name,
			color: state.categories[expenseCategory.name].color,
			type: state.types[subCategory.typeId]
		}
	}
};

export { getters }
