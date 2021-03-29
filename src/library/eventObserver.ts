import { State } from "../types/state";

class EventObserver {
	events: {[index: string]:any}

	constructor() {
		this.events = {};
	}

	subscribe(event: string, callback: CallableFunction) {
		if (!this.events.hasOwnProperty(event)) {
			this.events[event] = [];
		}

		return this.events[event].push(callback);
	}

	notify(event: string, state: State) {
		if (!this.events.hasOwnProperty(event)) {
			return [];
		}

		return this.events[event].map((callback: CallableFunction) => callback(state));
	}
}

export { EventObserver };
