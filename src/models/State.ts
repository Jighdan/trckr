import { InterfaceEntry } from "./Entry";
import { InterfaceCategory } from "./Category";

interface InterfaceState {
	entries: Array<InterfaceEntry>;
	categories: Array<InterfaceCategory>;
	localStorageKey: string;
}

export { InterfaceState }