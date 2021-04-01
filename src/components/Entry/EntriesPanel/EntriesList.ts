import { EntriesListSection } from "./EntriesListSection";
import { Entry } from "../../../types/entry";

const EntriesList = (entries: Record<string, Array<Entry>>): HTMLElement => {
	const element = document.createElement("main");
	Object.keys(entries).forEach((date) => {
		const expenseSectionElement = new EntriesListSection(date, entries[date]);
		element.appendChild(expenseSectionElement.render());
	});

	return element;
}

export { EntriesList };
