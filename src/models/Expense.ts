interface InterfaceExpense {
	id: string | (() => string);
	amount: number;
	category: InterfaceExpenseCategory;
	dateAdded: Date;
}

interface InterfaceExpenseCategory {
	name: string;
	subCategoryId: string;
}

export { InterfaceExpense, InterfaceExpenseCategory }