interface Currency {
	code: string;
	name: string;
	from: {[index: string]: number};
	default?: boolean;
}

export { Currency };