import { Store } from "./store";
import { defaultState } from "../library/defaultState";

const actions = {
	setInitialState(context: Store): boolean | void {
		const { localStorageKey } = context.state;
		const localStorageState = localStorage.getItem(localStorageKey);

		if (localStorageState) {
			const storedState = JSON.parse(localStorageState);
			context.state = storedState;
			return true;
		} else {
			context.state = defaultState;
		}
	},

	setLocalStorageState(context: Store): void {
		const { localStorageKey } = context.state;
		localStorage.setItem(localStorageKey, JSON.stringify(context.state));
	}
};

export { actions };
