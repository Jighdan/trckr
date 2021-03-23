import { EntriesListSection } from "./EntriesListSection";
import { InterfaceEntry } from "../../../models/Entry";

const EntriesList = (entries: Record<string, Array<InterfaceEntry>>): HTMLElement => {
	const element = document.createElement("main");
	Object.keys(entries).forEach((date) => {
		const expenseSectionElement = new EntriesListSection(date, entries[date]);
		element.appendChild(expenseSectionElement.render());
	});

	return element;
}

export { EntriesList };
