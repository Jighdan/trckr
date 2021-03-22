import { InterfaceEntry } from "../models/Entry";
import { composeDate } from "./dateComposer";

const composeEntries = {
	byDate: function(entries: Array<InterfaceEntry>): Record<string, Array<InterfaceEntry>> {
		const composedEntriesByDate: {[ index: string ]: Array<InterfaceEntry> } = {};
		const availableDates = entries.map((entry => composeDate(entry.dateAdded)));
		const setOfUniqueDates = new Set(availableDates);
		const arrayOfUniqueDates = new Array(...setOfUniqueDates);

		arrayOfUniqueDates.forEach(date => {
			const formattedDate = composeDate(date);
			const entriesByDate = entries.filter(entry => composeDate(entry.dateAdded) === date);
			composedEntriesByDate[formattedDate] = entriesByDate;
		});

		return composedEntriesByDate;
	},
};

const filterEntries = {
	bySign: function(entries: Array<InterfaceEntry>, sign: "+" | "-"): Record<string, Array<InterfaceEntry>> {
		const filteredEntries = entries.filter(entry => sign === "+" ? entry.amount > 0 : entry.amount < 0);
		return composeEntries.byDate(filteredEntries);
	}
}



export { composeEntries, filterEntries };
