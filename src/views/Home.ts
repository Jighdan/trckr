import { ExpenseForm } from "../components/ExpenseForm/index";
import { ExpensesList } from "../components/ExpensesList";
import { ExpensesTotal } from "../components/ExpensesTotal";

const Home = (root: HTMLElement): void => {
	const instanceOfExpenseForm = new ExpenseForm();
	const instanceOfExpensesTotal = new ExpensesTotal();
	const instanceOfExpensesList = new ExpensesList();

	const instances = [instanceOfExpenseForm, instanceOfExpensesTotal, instanceOfExpensesList];
	root.append(...instances.map(instance => instance.render()));
};

export { Home };