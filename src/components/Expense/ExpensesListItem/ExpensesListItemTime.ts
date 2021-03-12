import { composeTime } from "../../../library/dateComposer";

const ExpensesListItemTime = (time: Date): HTMLSpanElement => {
	const formattedTime = composeTime(time);
	const element: HTMLSpanElement = document.createElement("span");
	element.classList.add("expenses-list-item-time");
	element.innerText = formattedTime;

	return element;
}

export { ExpensesListItemTime };