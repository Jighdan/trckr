import { InterfaceState } from "../models/State";
import { InterfaceEntry } from "../models/Entry";
import { InterfaceCategory } from "../models/Category";
import { InterfaceDefaultSettings } from "../models/DefaultSettings";
import { composeEntries, filterEntries } from "../library/entriesComposer";

const getters = {
	allEntriesBySign(state: InterfaceState, { sign }: { sign: "+" | "-" }): Record<string, Array<InterfaceEntry>> | boolean {
		if (state.entries.length) {
			return filterEntries.bySign(state.entries, sign);
		}

		return false;
	},

	allEntriesByDate(state: InterfaceState): Record<string, unknown> | boolean {
		if (state.entries.length) {
			return composeEntries.byDate(state.entries);
		}

		return false;
	},

	categoryById(state: InterfaceState, { categoryId }: { categoryId: string }): InterfaceCategory | boolean {
		return state.categories.find(category => category.id === categoryId);
	},

	defaultSettings(state: InterfaceState): InterfaceDefaultSettings {
		const defaultCurrency = state.currencies.find(currency => currency.default);

		return {
			defaultCurrency
		}
	}
};

export { getters }
