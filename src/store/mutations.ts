import { State } from "../types/state";
import { generateId } from "../library/idGenerator";
import { composeNumberBasedOnSign } from "../library/numberComposer";

const mutations = {
	addEntry(state: State, { name, type, currencyCode, amount, categoryId }: { name: string, type: "+" | "-", currencyCode: "USD" | "DOP", amount: number, categoryId: string }): void {
		const formattedAmount = composeNumberBasedOnSign(type, amount);
		
		// Adding new entries to the beginning of the array because
		// recent entries are more relevant than old ones
		state.entries.unshift({
			id: generateId(),
			name,
			currencyCode,
			amount: formattedAmount,
			categoryId,
			dateAdded: new Date(),
		});
	},

	setDefaultCurrency(state: State, { currencyCode }: { currencyCode: string }): void {
		const currentDefaultCurrency = state.currencies.find(currency => currency.default);
		const currentDefaultCurrencyIndex = state.currencies.indexOf(currentDefaultCurrency);
		delete state.currencies[currentDefaultCurrencyIndex].default;

		const newDefaultCurrency = state.currencies.find(currency => currency.code === currencyCode);
		const newDefaultCurrencyIndex = state.currencies.indexOf(newDefaultCurrency);

		state.currencies[newDefaultCurrencyIndex].default = true;
	}
};

export { mutations };
