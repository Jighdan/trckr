import { InterfaceState } from "../models/State";
import { generateId } from "../library/idGenerator";

const mutations = {
	addEntry(state: InterfaceState, { name, currency, amount, categoryId }: { name: string, currency: "USD" | "DOP", amount: number, categoryId: string }): void {
		state.entries.push({
			id: generateId(),
			name,
			currency,
			amount,
			categoryId,
			dateAdded: new Date(),
		});
	}
};

export { mutations };
