const FormLabel = (labelTitle: string, inputName: string): HTMLLabelElement => {
	const element = document.createElement("label");
	element.setAttribute("for", inputName);
	element.innerText = labelTitle;

	return element;
};

export { FormLabel };