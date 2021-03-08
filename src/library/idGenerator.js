const generateId = () => {
	const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
	const regexPattern = /[xy]/g;

	const id = template.replace(regexPattern, (character) => {
		let randomNumber = (Math.random() * 16) | 0;
		let vector = character == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;
		return vector.toString();
	});

	return id;
};

export default generateId;
