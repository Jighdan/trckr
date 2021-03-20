import { SettingsForm } from "../components/SettingsForm/index";

const ViewSettings = (root: HTMLElement): void => {
	const instanceOfSettingsForm = new SettingsForm();

	const instances = [instanceOfSettingsForm];
	root.append(...instances.map(instance => instance.render()));
};

export { ViewSettings };