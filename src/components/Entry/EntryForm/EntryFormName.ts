import { FormLabel } from "../../Form";

const EntryFormName = (): HTMLDivElement => {
	const element = document.createElement("div");
	const elementInput= document.createElement("input");
	const elementLabel = FormLabel("Name", "entryName");

	elementInput.setAttribute("type", "text");
	elementInput.setAttribute("name", "entryName");
	elementInput.setAttribute("autocomplete", "off");
	elementInput.setAttribute("placeholder", "A short but descriptive name");
	elementInput.setAttribute("required", "true");

	element.classList.add("form-control", "entry-form-name");
	element.append(elementLabel, elementInput);

	return element;
}

export { EntryFormName }