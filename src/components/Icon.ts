const Icon = (iconPath: string): HTMLDivElement => {
	const element = document.createElement("div");
	const maskUrl = `url(${iconPath}) no-repeat center`;

	element.classList.add("type-icon");
	element.setAttribute("role", "figure");
	element.style.mask = maskUrl;
	element.style.webkitMask = maskUrl;

	return element;
};

export { Icon };