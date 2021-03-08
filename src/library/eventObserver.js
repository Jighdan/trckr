export default class EventObserver {
	constructor() {
		this.events = {};
	}

	subscribe(event, callback) {
		if (!this.events.hasOwnProperty(event)) {
			this.events[event] = [];
		}

		return this.events[event].push(callback);
	}

	notify(event, state) {
		if (!this.events.hasOwnProperty(event)) {
			return [];
		}

		return this.events[event].map((callback) => callback(state));
	}
}
