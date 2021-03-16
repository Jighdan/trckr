const EntriesListItemName = (name: string): HTMLHeadingElement => {
	const element = document.createElement("h2");
	element.classList.add("entries-list-item-name");
	element.innerText = name;

	return element;
}

export { EntriesListItemName };