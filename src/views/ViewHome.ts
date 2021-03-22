import { EntryForm } from "../components/Entry/EntryForm/index";
import { EntriesPanel } from "../components/Entry/EntriesPanel/index";

const ViewHome = (root: HTMLElement): void => {
	const instanceOfEntryForm = new EntryForm();
	const instanceOfEntriesPanel = new EntriesPanel();
	const instances = [instanceOfEntryForm, instanceOfEntriesPanel].map(instance => instance.render());

	const viewElement = document.createElement("div");
	viewElement.setAttribute("id", "view-home");
	viewElement.append(...instances);
	
	root.appendChild(viewElement);
};

export { ViewHome };