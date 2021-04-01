interface Entry {
	id: string;
	name: string;
	amount: number;
	currencyCode: "USD" | "DOP";
	dateAdded: Date | string;
	categoryId: string;
}

export { Entry };