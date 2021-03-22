import { InterfaceState } from "../models/State";
import { InterfaceCategory } from "../models/Category";
import { InterfaceDefaultSettings } from "../models/DefaultSettings";
import { composeEntries } from "../library/entriesComposer";

const getters = {
	allEntriesByDate(state: InterfaceState): Record<string, unknown> | boolean {
		if (state.entries.length) {
			const defaultCurrency = state.currencies.find(currency => currency.default);
			return composeEntries(state.entries, defaultCurrency);
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
