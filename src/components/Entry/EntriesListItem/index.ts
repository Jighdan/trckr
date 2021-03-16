
import { InterfaceEntry } from "../../../models/Entry";
import { InterfaceCategory } from "../../../models/Category";
import { EntriesListItemName } from "./EntriesListItemName";
import { EntriesListItemAmount } from "./EntriesListItemAmount";
import { EntriesListItemCategoryTitle } from "./EntriesListItemCategoryTitle";
import { EntriesListItemCategoryShape } from "./EntriesListItemCategoryShape";
import { EntriesListItemTime } from "./EntriesListItemTime";

const EntriesListItem = (entry: InterfaceEntry, category: InterfaceCategory): HTMLElement => {
	const element = document.createElement("article");
	const elementName = EntriesListItemName(entry.name);
	const elementAmount = EntriesListItemAmount(entry.amount);
	const elementCategoryTitle = EntriesListItemCategoryTitle(category.name);
	const elementCategoryShape = EntriesListItemCategoryShape(category.color, category.icon);
	const elementTime = EntriesListItemTime(new Date(entry.dateAdded));

	const elementHeader: HTMLHeadElement = document.createElement("header");
	const elementBody: HTMLElement = document.createElement("main");
	const elementFooter: HTMLElement = document.createElement("footer");

	element.classList.add("entries-list-item");
	element.setAttribute("data-id", entry.id);
	element.setAttribute("role", "listitem");
	elementHeader.classList.add("entries-list-item-header");
	elementBody.classList.add("entries-list-item-body");
	elementFooter.classList.add("entries-list-item-footer");

	elementHeader.appendChild(elementCategoryShape);
	elementBody.append(elementAmount, elementName);
	elementFooter.append(elementTime);

	element.append(elementHeader, elementBody, elementFooter);

	return element;
}

export { EntriesListItem };
