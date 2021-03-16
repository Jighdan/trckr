const EntryFormAmount = (): HTMLInputElement => {
	const element: HTMLInputElement = document.createElement("input");
	element.classList.add("entry-form-amount");
	element.setAttribute("type", "number");
	element.setAttribute("aria-label", "Entry Amount");
	element.setAttribute("name", "entryAmount");
	element.setAttribute("step", "any");
	element.setAttribute("placeholder", "Amount");
	element.setAttribute("required", "true");

	return element;
}

export { EntryFormAmount };