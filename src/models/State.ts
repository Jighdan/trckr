import { InterfaceEntry } from "./Entry";
import { InterfaceCategory } from "./Category";
import { InterfaceCurrency } from "./Currency";

interface InterfaceState {
	entries: Array<InterfaceEntry>;
	categories: Array<InterfaceCategory>;
	currencies: Array<InterfaceCurrency>;
	localStorageKey: string;
}

export { InterfaceState }