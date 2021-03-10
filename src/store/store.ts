import { EventObserver } from "../library/eventObserver";
import { State } from "../models/index";

class Store {
	state: State;
	mutations: {[index: string]:any};
	getters: {[index: string]:any};
	actions: {[index: string]:any};
	events: EventObserver;

	constructor(state: State, mutations: object, getters: object, actions: object) {
		this.state = state;
		this.mutations = mutations;
		this.actions = actions;
		this.getters = getters;
		this.events = new EventObserver();
	}

	commit(key: string, payload: object): boolean | void {
		const mutation: CallableFunction | undefined = this.mutations[key];
		if (mutation === undefined) {
			console.error(`State mutation "${key}" doesn't exist`);
			return false;
		}

		this.mutations[key](this.state, payload);
		this.actions["setLocalStorageState"](this);
		this.events.notify("stateChange", this.state);
	}

	dispatch(key: string, payload?: object): boolean | void {
		const action: CallableFunction | undefined = this.actions[key]; 
		if (action === undefined) {
			console.error(`Action "${key}" doesn't exist`);
			return false;
		}

		this.actions[key](this, payload);
	}

	getter(key: string, payload?: object): any {
		const getter: CallableFunction | undefined = this.getters[key];
		if (getter === undefined) {
			console.error(`Getter "${key}" doesn't exist`);
			return false;
		}

		return this.getters[key](this.state, payload);
	}
}

export { Store };
