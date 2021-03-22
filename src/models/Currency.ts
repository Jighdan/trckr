interface InterfaceCurrency {
	code: string;
	name: string;
	from: {[index: string]: number};
	default?: boolean;
}

export { InterfaceCurrency };