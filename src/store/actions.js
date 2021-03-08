export default {
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
