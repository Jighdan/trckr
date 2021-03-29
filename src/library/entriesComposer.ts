import { Currency } from "../types/currency";
import { Entry } from "../types/entry";
import { composeDate } from "./dateComposer";

const getUniqueDatesFromEntries = (entries: Array<Entry>): Array<string> => {
	const availableDates = entries.map((entry => composeDate(entry.dateAdded)));
	const setOfUniqueDates = new Set(availableDates);
	return new Array(...setOfUniqueDates);
};

const formatEntriesByCurrency = (entries: Array<Entry>, defaultCurrency: Currency): Array<Entry> => (
	entries.map(entry => (
		{
			...entry,
			amount: entry.amount * defaultCurrency.from[entry.currencyCode]
		}
	))
);

const composeEntries = (entries: Array<Entry>, defaultCurrency: Currency): Record<string, Array<Entry>> => {
	const formattedEntriesAmount = formatEntriesByCurrency(entries, defaultCurrency);
	const composedEntriesByDate: {[ index: string ]: Array<Entry> } = {};
	const arrayOfUniqueDates = getUniqueDatesFromEntries(entries);

	arrayOfUniqueDates.forEach(date => {
		const formattedDate = composeDate(date);
		const entriesByDate = formattedEntriesAmount.filter(entry => composeDate(entry.dateAdded) === date);
		composedEntriesByDate[formattedDate] = entriesByDate;
	});

	return composedEntriesByDate;
};

export { getUniqueDatesFromEntries, composeEntries };
