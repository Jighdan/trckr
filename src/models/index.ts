interface State {
	expenses: Array<Expense>;
	categories: Array<Category>;
	localStorageKey: string;
}

interface Expense {
	id: string;
	amount: number;
	categoryId: string;
	dateAdded: Date;
}

interface Category {
	id: string;
	name: string;
	color: string;
}

export { State, Expense, Category }