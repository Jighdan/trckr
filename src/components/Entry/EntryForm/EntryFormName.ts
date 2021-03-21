import { EntryFormLabel } from "./EntryFormLabel";

const EntryFormName = (): HTMLDivElement => {
	const element = document.createElement("div");
	const elementInput= document.createElement("input");
	const elementLabel = EntryFormLabel("Name", "entryName");

	elementInput.setAttribute("type", "text");
	elementInput.setAttribute("name", "entryName");
	elementInput.setAttribute("autocomplete", "off");
	elementInput.setAttribute("placeholder", "A short but descriptive name");
	elementInput.setAttribute("required", "true");

	element.classList.add("entry-form-control", "entry-form-name");
	element.append(elementLabel, elementInput);

	return element;
}

export { EntryFormName }