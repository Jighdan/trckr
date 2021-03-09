export default {
	setInitialState(context) {
		const { localStorageKey } = context.state;
		const localStorageState = localStorage.getItem(localStorageKey);

		if (localStorageState) {
			const storedState = JSON.parse(localStorageState);
			context.state = storedState;
			return true;
		} else {
			context.dispatch("setInitialCategories");
		}
	},

	setLocalStorageState(context) {
		const { localStorageKey } = context.state;
		localStorage.setItem(localStorageKey, JSON.stringify(context.state));
	},

	setInitialCategories(context) {
		const initialCategories = [
			"Snack",
			"Meal",
			"Gift",
			"Transport",
			"Other",
			"Entertainment",
		];

		initialCategories.forEach((categoryName) => {
			context.commit("addCategory", { name: categoryName });
		});
	},
};
