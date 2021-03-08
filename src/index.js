import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesTotal from "./components/ExpensesTotal";

const root = document.getElementById("root");

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
