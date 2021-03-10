import { store } from "./store/index";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpensesList } from "./components/ExpensesList";
import { ExpensesTotal } from "./components/ExpensesTotal";

const root: HTMLElement = document.getElementById("root");

// Initialize store default states
store.dispatch("setInitialState");

// Initialize components instances
const instanceOfExpenseForm = new ExpenseForm();
const instanceOfExpensesTotal = new ExpensesTotal();
const instanceOfExpensesList = new ExpensesList();

window.addEventListener("DOMContentLoaded", () => {
	root.append(
		instanceOfExpenseForm.render(),
		instanceOfExpensesTotal.render(),
		instanceOfExpensesList.render()
	);
});
