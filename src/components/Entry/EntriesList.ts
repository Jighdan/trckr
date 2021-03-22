import { Component } from "../Component";
import { store } from "../../store/index";
import { EntriesListSection } from "./EntriesListSection";

class EntriesList extends Component {
	constructor() {
		super(document.createElement("main"), store);
		this.element.classList.add("expenses-list");
	}

	render = (): HTMLElement => {
		if (store.state.entries.length) {
			// Clear the element content
			this.element.innerHTML = "";

			const entriesByDate = store.getter("allEntriesByDate");

			Object.keys(entriesByDate).forEach((date) => {
				const expenseSectionElement = new EntriesListSection(
					date,
					entriesByDate[date],
				);
				this.element.appendChild(expenseSectionElement.render());
			});
		}

		return this.element;
	}
}

export { EntriesList };
