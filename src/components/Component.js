import Store from "../store/store";

export default class Component {
	constructor(props = {}) {
		// Components that are not listening to state can be defined by
		// passing down `props.static` set to true

		this.render = this.render || function () {};

		if (props.store instanceof Store && !props.hasOwnProperty("static")) {
			props.store.events.subscribe("stateChange", () => this.render());
		}

		if (props.hasOwnProperty("element")) {
			this.element = props.element;
		}
	}
}
