import { InterfaceState } from "../models/State";
import { generateId } from "../library/idGenerator";

const mutations = {
	addEntry(state: InterfaceState, { name, currency, amount, categoryId }: { name: string, currency: "USD" | "DOP", amount: number, categoryId: string }): void {
		// Adding new entries to the beginning of the array because
		// recent entries are more relevant than old ones
		state.entries.unshift({
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
