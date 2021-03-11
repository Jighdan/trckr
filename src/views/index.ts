import { View } from "../models/index";
import { Home } from "./Home";

const appRoot: HTMLElement = document.getElementById("appRoot");
const viewsRoot: HTMLHeadElement = document.getElementById("viewsRoot");
let currentView: string = "";

const allViews: Array<View> = [
	{
		name: "Home",
		callback: Home,
		default: true
	}
];

const setCurrentView = (view: View) => {
	if (view.name !== currentView) {
		appRoot.innerHTML = "";
		view.callback(appRoot);
	}
}

const composeViewElement = (view: View) => {
	const element = document.createElement("h2");
	element.innerText = view.name;
	element.addEventListener("click", () => (setCurrentView.call(this, view)), true);

	return element;
};

const initializeViews = () => {
	window.addEventListener("DOMContentLoaded", () => {
		viewsRoot.append(...allViews.map(view => {
			if (view?.default) {
				view.callback(appRoot);
				currentView = view.name;
			}

			return composeViewElement(view);
		}));
	});
};

export { initializeViews };