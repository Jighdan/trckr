import { InterfaceCurrency } from "../models/Currency";

const defaultCurrencies: Array<InterfaceCurrency> = [
	{
		code: "USD",
		name: "US Dollars",
		value: 1,
		default: true
	},
	{
		code: "DOP",
		name: "Dominican Pesos",
		value: 57.3462
	}
];

export { defaultCurrencies };