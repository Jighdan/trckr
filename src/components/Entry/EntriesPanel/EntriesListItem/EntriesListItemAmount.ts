const EntriesListItemAmount = (amount: number): HTMLHeadingElement => {
	const isAmountPositive = amount > 0;
	const formattedAmount = `$${Math.abs(amount).toFixed(2)}`;

	const element: HTMLHeadingElement = document.createElement("h3");
	const elementAmount = document.createTextNode(formattedAmount);
	const elementPrefix = document.createElement("span");

	const elementPrefixClass = isAmountPositive ? "entries-list-item-amount-prefix-positive" : "entries-list-item-amount-prefix-negative";
	elementPrefix.classList.add("entries-list-item-amount-prefix", elementPrefixClass);
	elementPrefix.innerText = isAmountPositive ? "+ " : "- ";

	element.classList.add("entries-list-item-amount");
	element.append(elementPrefix, elementAmount);

	return element;
}

export { EntriesListItemAmount };