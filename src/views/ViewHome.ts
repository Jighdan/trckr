import { EntryForm } from "../components/Entry/EntryForm/index";
import { EntriesList } from "../components/Entry/EntriesList";

const ViewHome = (root: HTMLElement): void => {
	const instanceOfEntryForm = new EntryForm();
	const instanceOfEntriesList = new EntriesList();
	const instances = [instanceOfEntryForm, instanceOfEntriesList].map(instance => instance.render());

	const viewElement = document.createElement("div");
	viewElement.setAttribute("id", "view-home");
	viewElement.append(...instances);
	
	root.appendChild(viewElement);
};

export { ViewHome };