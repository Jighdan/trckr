const generateId = (): string => {
	const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
	const regexPattern = /[xy]/g;

	const id: string = template.replace(regexPattern, (character) => {
		const randomNumber = (Math.random() * 16) | 0;
		const vector = character == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;
		return vector.toString();
	});

	return id;
};

export { generateId };
