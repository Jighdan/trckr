import Store from "./store";
import mutations from "./mutations";

export default new Store({
	state: { expenses: [] },
	mutations,
});
