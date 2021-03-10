import { Store } from "./store";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const store = new Store(
	state,
	mutations,
	getters,
	actions,
);

export { store };
