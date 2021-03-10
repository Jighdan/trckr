import { Store } from "./store";

const actions = {
	setInitialState(context: Store): boolean | void {
		const { localStorageKey } = context.state;
		const localStorageState = localStorage.getItem(localStorageKey);

		if (localStorageState) {
			const storedState = JSON.parse(localStorageState);
			context.state = storedState;
			return true;
		} else {
			context.dispatch("setInitialCategories" ,{});
		}
	},

	setLocalStorageState(context: Store): void {
		const { localStorageKey } = context.state;
		localStorage.setItem(localStorageKey, JSON.stringify(context.state));
	},

	setInitialCategories(context: Store): void {
		const initialCategories = [
			"Snack",
			"Meal",
			"Gift",
			"Transport",
			"Other",
			"Entertainment",
		];

		initialCategories.forEach((categoryName) => {
			const payload: object = { name: categoryName };
			context.commit("addCategory", payload );
		});
	},
};

export { actions };
