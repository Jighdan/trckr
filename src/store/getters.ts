import { State } from "../types/state";
import { Category } from "../types/category";
import { DefaultSettings } from "../types/defaultSettings";
import { composeEntries } from "../library/entriesComposer";

const getters = {
	allEntriesByDate(state: State): Record<string, unknown> | boolean {
		if (state.entries.length) {
			const defaultCurrency = state.currencies.find(currency => currency.default);
			return composeEntries(state.entries, defaultCurrency);
		}

		return false;
	},

	categoryById(state: State, { categoryId }: { categoryId: string }): Category | boolean {
		return state.categories.find(category => category.id === categoryId);
	},

	defaultSettings(state: State): DefaultSettings {
		const defaultCurrency = state.currencies.find(currency => currency.default);

		return {
			defaultCurrency
		}
	}
};

export { getters }
