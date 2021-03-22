import { SettingsForm } from "../components/SettingsForm/index";

const ViewSettings = (root: HTMLElement): void => {
	const instanceOfSettingsForm = new SettingsForm();
	const instances = [instanceOfSettingsForm].map(instance => instance.render());

	const viewElement = document.createElement("div");
	viewElement.setAttribute("id", "view-settings");
	viewElement.append(...instances)

	root.appendChild(viewElement);
};

export { ViewSettings };