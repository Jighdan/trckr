import { InterfaceState } from "../models/State";
import { InterfaceEntry } from "../models/Entry";
import { InterfaceCategory } from "../models/Category";
import { composeDate } from "../library/dateComposer";

const getters = {
	allEntries(state: InterfaceState): Array<InterfaceEntry> | boolean {
		if (state.entries.length) {
			return state.entries;
		}

		return false;
	},

	allEntriesBySign(state: InterfaceState, { sign }: { sign: "+" | "-" }): Array<InterfaceEntry> | boolean {
		if (state.entries.length) {
			const entryConditioner = (entry: InterfaceEntry) => sign === "+" ? entry.amount > 0 : entry.amount < 0; 
			return state.entries.filter(entry => entryConditioner(entry));
		}

		return false;
	},

	allEntriesByDate(state: InterfaceState): Record<string, unknown> | boolean {
		if (state.entries.length) {
			const composedEntriesByDate: {[ index: string ]: Array<InterfaceEntry> } = {};
			const availableDates = state.entries.map((entry => composeDate(entry.dateAdded)));
			const setOfUniqueDates = new Set(availableDates);
			const arrayOfUniqueDates = new Array(...setOfUniqueDates);

			arrayOfUniqueDates.forEach(date => {
				const formattedDate = composeDate(date);
				const entriesByDate = state.entries.filter(entry => composeDate(entry.dateAdded) === date);
				const sortedEntriesByTime = entriesByDate.sort((a, b): number => (
					new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
				)
			);

			composedEntriesByDate[formattedDate] = sortedEntriesByTime;
			});

			return composedEntriesByDate;
		}

		return false;
	},

	categoryById(state: InterfaceState, { categoryId }: { categoryId: string }): InterfaceCategory | boolean {
		return state.categories.find(category => category.id === categoryId);
	}
};

export { getters }
