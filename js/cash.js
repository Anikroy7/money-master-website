document.getElementById('calculate-button').addEventListener('click', function () {

    let totalIncome = getInputValue('income-input');

    let foodAmount = getInputValue('food-input');
    let rentAmount = getInputValue('rent-input');
    let clothesAmount = getInputValue('clothes-input');

    let totalExpensesAmount = foodAmount + rentAmount + clothesAmount;

    let totalExpenses = document.getElementById('total-expenses');

    totalExpenses.innerText = totalExpensesAmount;
    let totalBalanceAmount = totalIncome - totalExpensesAmount;

    let totalBalance = document.getElementById("total-balance");

    totalBalance.innerText = totalBalanceAmount;
});
function getInputValue(inputId) {
    let inputField = document.getElementById(inputId);
    let inputNumberText = inputField.value;
    let inputNumber = parseFloat(inputNumberText);
    if (isNaN(inputNumber)) {
        alert('Please input a valid number');
    }
    else {
        return inputNumber;
    }

}