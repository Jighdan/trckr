import EventObserver from "../library/eventObserver";

export default class Store {
	constructor({ state, mutations }) {
		this.state = state || {};
		this.mutations = mutations || {};
		this.events = new EventObserver();
	}

	commit(mutationKey, payload, notifyEvents = true) {
		if (typeof this.mutations[mutationKey] !== "function") {
			console.error(`State mutation "${mutationKey}" doesn't exist`);
			return false;
		}

		this.mutations[mutationKey](this.state, payload);

		console.log(this.state);

		if (notifyEvents) {
			this.events.notify("stateChange", this.state);
		}
	}
}
