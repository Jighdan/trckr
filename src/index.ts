import { store } from "./store/index";
import { initializeViews } from "./views/index";

store.dispatch("setInitialState");
initializeViews();

