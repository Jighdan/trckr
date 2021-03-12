import { Store } from "../store/store";

class Component {
	render: () => HTMLElement;
	element: HTMLElement | any

	constructor(element: HTMLElement | any, store?: Store | null, isStatic?: boolean) {
		// Components that are not listening to state can be defined by
		// passing down `isStatic` set to true
		this.element = element;

		if (store instanceof Store && !isStatic) {
			store.events.subscribe("stateChange", () => this.render());
		}
	}
}

export { Component };
