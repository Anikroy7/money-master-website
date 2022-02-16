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
    if (isNaN(inputNumber) || inputNumber < 0) {
        alert('Please input a valid number');
    }
    else {
        return inputNumber;
    }

}

// --------------  bonous section start

document.getElementById('save-button').addEventListener('click', function () {
    let totalIncome = getInputValue('income-input');
    let saveInputNumber = getInputValue('save-input');
    let savingAmount = (totalIncome * saveInputNumber) / 100;
    let savingAmountId = document.getElementById('saving-amount');
    savingAmountId.innerText = savingAmount;
    let totalBalanceAmountText = document.getElementById('total-balance').innerText;
    let totalBalanceAmount = parseFloat(totalBalanceAmountText);
    let remainingBalance = totalBalanceAmount - savingAmount;
    let remainingBalanceId = document.getElementById('remaining-balance');
    remainingBalanceId.innerText = remainingBalance;

});