const composeNumberBasedOnSign = (sign: "+" | "-", number: number): number => {
	switch (sign) {
		case "-":
			return -Math.abs(number);
		default:
			return Math.abs(number);
	}
};

export { composeNumberBasedOnSign };