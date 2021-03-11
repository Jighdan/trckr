interface State {
	expenses: Array<Expense>;
	categories: {[index: string]: Category};
	types: {[index: string]: Type};
	localStorageKey: string;
}

interface Expense {
	id: string | (() => string);
	amount: number;
	category: ExpenseCategory;
	dateAdded: Date;
}

interface ExpenseCategory {
	name: string;
	subCategoryId: string;
}

interface Category {
	name: string;
	color: string;
	subCategories: Array<SubCategory>;
}

interface SubCategory {
	id: string | (() => string);
	name: string;
	typeId: string;
}

interface ComposedSubCategory {
	id: string | (() => string);
	name: string;
	color: string;
	type: Type;
}

interface Type {
	name: string;
	icon: string;
}

interface View {
	name: string;
	callback: CallableFunction;
	default?: boolean;
}

export { State, Expense, ExpenseCategory, Category, SubCategory, ComposedSubCategory, Type, View }