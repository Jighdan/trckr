import { InterfaceCurrency } from "../models/Currency";

const defaultCurrencies: Array<InterfaceCurrency> = [
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