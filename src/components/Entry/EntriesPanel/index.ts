import { Component } from "../../Component";
import { store } from "../../../store/index";
import { EntriesList } from "./EntriesList";

class EntriesPanel extends Component {
	constructor() {
		super(document.createElement("div"), store);
		this.element.classList.add("entries-panel");
	}

	render = (): HTMLElement => {
		const entries = store.getter("allEntriesByDate");
		const entriesListElement = EntriesList(entries);

		this.element.appendChild(entriesListElement);
		return this.element;
	}
}

export { EntriesPanel };