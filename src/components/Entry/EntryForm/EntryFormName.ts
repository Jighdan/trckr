const EntryFormName = (): HTMLInputElement => {
	const element: HTMLInputElement = document.createElement("input");
	element.classList.add("entry-form-name");
	element.setAttribute("type", "text");
	element.setAttribute("aria-label", "Entry Name");
	element.setAttribute("name", "entryName");
	element.setAttribute("autocomplete", "off");
	element.setAttribute("placeholder", "Name");
	element.setAttribute("required", "true");

	return element;
}

export { EntryFormName }