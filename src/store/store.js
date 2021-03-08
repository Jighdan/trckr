import EventObserver from "../library/eventObserver";

export default class Store {
	constructor({ state, mutations, getters }) {
		this.state = state || {};
		this.mutations = mutations || {};
		this.getters = getters || {};
		this.events = new EventObserver();
	}

	commit(mutationKey, payload, notifyEvents = true) {
		if (typeof this.mutations[mutationKey] !== "function") {
			console.error(`State mutation "${mutationKey}" doesn't exist`);
			return false;
		}

		this.mutations[mutationKey](this.state, payload);

		if (notifyEvents) {
			this.events.notify("stateChange", this.state);
		}
	}

	getter(getterName) {
		if (typeof this.getters[getterName] !== "function") {
			console.error(`Getter "${getterName}" doesn't exist`);
			return false;
		}

		return this.getters[getterName](this.state);
	}
}
