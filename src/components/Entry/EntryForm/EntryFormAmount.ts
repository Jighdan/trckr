import { EntryFormLabel } from "./EntryFormLabel";

const EntryFormAmount = (): HTMLDivElement => {
	const element = document.createElement("div");
	const elementLabel = EntryFormLabel("Amount", "entryAmount");
	const elementInput = document.createElement("input");

	elementInput.setAttribute("placeholder", "How much was it?")
	elementInput.setAttribute("type", "number");
	elementInput.setAttribute("name", "entryAmount");
	elementInput.setAttribute("step", "any");
	elementInput.setAttribute("required", "true");

	element.classList.add("entry-form-control", "entry-form-amount");
	element.append(elementLabel, elementInput);


	return element;
}

export { EntryFormAmount };