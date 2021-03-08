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

	getter(getterKey) {
		if (typeof this.getters[getterKey] !== "function") {
			console.error(`Getter "${getterKey}" doesn't exist`);
			return false;
		}

		return this.getters[getterKey](this.state);
	}
}
