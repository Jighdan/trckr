const SettingTitle = (title: string, inputName: string): HTMLHeadingElement => {
	const element = document.createElement("h3");
	element.setAttribute("for", inputName);
	element.classList.add("settings-control-title");
	element.innerText = title;
	
	return element;
}

export { SettingTitle }