interface InterfaceEntry {
	id: string;
	name: string;
	amount: number;
	currency: "USD" | "DOP";
	dateAdded: Date | string;
	categoryId: string;
}

export { InterfaceEntry };