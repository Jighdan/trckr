import { Entry } from "./entry";
import { Category } from "./category";
import { Currency } from "./currency";

interface State {
	entries: Array<Entry>;
	categories: Array<Category>;
	currencies: Array<Currency>;
	localStorageKey: string;
}

export { State }