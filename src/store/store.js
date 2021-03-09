import EventObserver from "../library/eventObserver";

export default class Store {
	constructor({ state, mutations, actions, getters }) {
		this.state = state || {};
		this.mutations = mutations || {};
		this.actions = actions || {};
		this.getters = getters || {};
		this.events = new EventObserver();
	}

	commit(mutationKey, payload, notifyEvents = true) {
		if (typeof this.mutations[mutationKey] !== "function") {
			console.error(`State mutation "${mutationKey}" doesn't exist`);
			return false;
		}

		this.mutations[mutationKey](this.state, payload);

		// Store the current state
		this.actions["setLocalStorageState"](this);

		if (notifyEvents) {
			this.events.notify("stateChange", this.state);
		}
	}

	dispatch(actionKey, payload) {
		if (typeof this.actions[actionKey] !== "function") {
			console.error(`Action "${actionKey}" doesn't exist`);
			return false;
		}

		this.actions[actionKey](this, payload);
	}

	getter(getterKey, payload) {
		if (typeof this.getters[getterKey] !== "function") {
			console.error(`Getter "${getterKey}" doesn't exist`);
			return false;
		}

		return this.getters[getterKey](this.state, payload);
	}
}
