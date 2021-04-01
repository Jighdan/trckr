
import { Entry } from "../../../../types/entry";
import { Category } from "../../../../types/category";
import { EntriesListItemName } from "./EntriesListItemName";
import { EntriesListItemAmount } from "./EntriesListItemAmount";
import { EntriesListItemCategoryShape } from "./EntriesListItemCategoryShape";
import { EntriesListItemTime } from "./EntriesListItemTime";

const EntriesListItem = (entry: Entry, category: Category): HTMLElement => {
	const element = document.createElement("article");
	const elementName = EntriesListItemName(entry.name);
	const elementAmount = EntriesListItemAmount(entry.amount);
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
