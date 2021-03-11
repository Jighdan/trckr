import { InterfaceType } from "./Type";

interface InterfaceCategory {
	name: string;
	color: string;
	subCategories: Array<InterfaceSubCategory>;
}

interface InterfaceSubCategory {
	id: string | (() => string);
	name: string;
	typeId: string;
}

interface InterfaceComposedSubCategory {
	id: string | (() => string);
	name: string;
	color: string;
	type: InterfaceType;
}

export { InterfaceCategory, InterfaceSubCategory, InterfaceComposedSubCategory }