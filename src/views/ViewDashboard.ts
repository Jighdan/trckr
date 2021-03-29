import { ChartIncomeExpenseTrend } from "../components/Chart/ChartIncomeExpenseTrend";

const ViewDashboard = (root: HTMLElement): void => {
	const instanceOfChartIncomeExpenseTrend = new ChartIncomeExpenseTrend();
	const instances = [instanceOfChartIncomeExpenseTrend].map(instance => instance.render());

	const viewElement = document.createElement("div");
	viewElement.setAttribute("id", "view-dashboard");
	viewElement.append(...instances);

	root.appendChild(viewElement);
};

export { ViewDashboard };