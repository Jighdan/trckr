import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";

const root = document.getElementById("root");

const instanceOfExpenseForm = new ExpenseForm();
const instanceOfExpensesList = new ExpensesList();

window.addEventListener("DOMContentLoaded", () => {
	root.append(instanceOfExpenseForm.render(), instanceOfExpensesList.render());
});
