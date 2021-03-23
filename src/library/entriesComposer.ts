import { InterfaceCurrency } from "../models/Currency";
import { InterfaceEntry } from "../models/Entry";
import { composeDate } from "./dateComposer";

const formatEntriesByCurrency = (entries: Array<InterfaceEntry>, defaultCurrency: InterfaceCurrency): Array<InterfaceEntry> => (
	entries.map(entry => (
		{
			...entry,
			amount: entry.amount * defaultCurrency.from[entry.currencyCode]
		}
	))
)

const composeEntries = (entries: Array<InterfaceEntry>, defaultCurrency: InterfaceCurrency): Record<string, Array<InterfaceEntry>> => {
	const formattedEntriesAmount = formatEntriesByCurrency(entries, defaultCurrency);
	const composedEntriesByDate: {[ index: string ]: Array<InterfaceEntry> } = {};
	const availableDates = entries.map((entry => composeDate(entry.dateAdded)));
	const setOfUniqueDates = new Set(availableDates);
	const arrayOfUniqueDates = new Array(...setOfUniqueDates);

	arrayOfUniqueDates.forEach(date => {
		const formattedDate = composeDate(date);
		const entriesByDate = formattedEntriesAmount.filter(entry => composeDate(entry.dateAdded) === date);
		composedEntriesByDate[formattedDate] = entriesByDate;
	});

	return composedEntriesByDate;
};

export { composeEntries };
