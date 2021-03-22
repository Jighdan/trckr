import { Component } from "../../Component";
import { store } from "../../../store/index";
import { InterfaceEntry } from "../../../models/Entry";
import { EntriesListItem } from "./EntriesListItem/index";

class EntriesListSection extends Component {
	constructor(date: string, entries: Array<InterfaceEntry>) {
		super(document.createElement("section"), null, true);

		// Setting up section attributes
		this.element.classList.add("entries-list-section");
		this.element.setAttribute("role", "list");

		// Setting up the section title
		const title = document.createElement("h2");
		title.classList.add("entries-list-section-date");
		title.innerText = date;

		// Setting up the section entries
		const expensesContainer = document.createElement("div");
		expensesContainer.classList.add("entries-list-section-container");
		for (const entry of entries) {
			const category = store.getter("categoryById", { categoryId: entry.categoryId });
			const entryElement = EntriesListItem(entry, category);
			expensesContainer.appendChild(entryElement);
		}

		// Wrapping up the section
		this.element.append(title, expensesContainer);
	}

	render = (): HTMLElement => {
		return this.element;
	}
}

export { EntriesListSection };
