import { Currency } from "../types/currency";

const defaultCurrencies: Array<Currency> = [
	{
		code: "USD",
		name: "US Dollars",
		from: {
			USD: 1,
			DOP: 0.01755
		},
		default: true
	},
	{
		code: "DOP",
		name: "Dominican Pesos",
		from: {
			USD: 57.3462,
			DOP: 1
		}
	}
];

export { defaultCurrencies };