import { composeTime } from "../../../library/dateComposer";

const EntriesListItemTime = (time: Date): HTMLSpanElement => {
	const formattedTime = composeTime(time);
	const element: HTMLSpanElement = document.createElement("span");
	element.classList.add("entries-list-item-time");
	element.innerText = formattedTime;

	return element;
}

export { EntriesListItemTime };