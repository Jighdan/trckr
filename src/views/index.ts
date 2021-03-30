import { View } from "../types/view";
import { ViewHome } from "./ViewHome";
import { ViewSettings } from "./ViewSettings";

const appRoot: HTMLElement = document.getElementById("appRoot");
const viewsRoot: HTMLHeadElement = document.getElementById("viewsRoot");
let currentView = "";

const allViews: Array<View> = [
	{
		name: "Home",
		callback: ViewHome,
		default: true
	},
	{
		name: "Settings",
		callback: ViewSettings,
	}
];

const removeClassFromAllViews = (className: string): void => {
	const allViews: NodeList = document.querySelectorAll("h2.view");
	allViews.forEach((viewElement: HTMLHeadingElement) => viewElement.classList.remove(className));
};

const setCurrentView = (view: View, element: HTMLHeadingElement): void => {
	if (view.name !== currentView) {
		removeClassFromAllViews("view-active");
		element.classList.add("view-active");

		appRoot.innerHTML = "";
		view.callback(appRoot);
		currentView = view.name;
	}
}

const composeViewLinkElement = (view: View): HTMLHeadingElement => {
	const element = document.createElement("h2");
	element.classList.add("view");
	element.innerText = view.name;
	element.addEventListener("click", (event) => (setCurrentView.call(this, view,  event.target)), true);

	return element;
};

const initializeViews = (): void => {
	window.addEventListener("DOMContentLoaded", () => {
		viewsRoot.append(...allViews.map(view => {
			const element = composeViewLinkElement(view);

			if (view?.default) {
				setCurrentView(view, element);
			}

			return element;
		}));
	});
};

export { initializeViews };