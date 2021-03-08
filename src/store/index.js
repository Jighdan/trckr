import Store from "./store";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default new Store({
	state,
	mutations,
	actions,
	getters,
});
