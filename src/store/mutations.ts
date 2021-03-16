import { InterfaceState } from "../models/State";
import { generateId } from "../library/idGenerator";

const mutations = {
	addEntry(state: InterfaceState, { name, amount, categoryId }: { name: string, amount: number, categoryId: string }): void {
		state.entries.push({
			id: generateId(),
			name,
			amount,
			categoryId,
			dateAdded: new Date(),
		});
	}
};

export { mutations };
