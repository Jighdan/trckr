import { EntryForm } from "../components/Entry/EntryForm/index";
import { EntriesList } from "../components/Entry/EntriesList";

const Home = (root: HTMLElement): void => {
	const instanceOfEntryForm = new EntryForm();
	const instanceOfEntriesList = new EntriesList();

	const instances = [instanceOfEntryForm, instanceOfEntriesList];
	root.append(...instances.map(instance => instance.render()));
};

export { Home };