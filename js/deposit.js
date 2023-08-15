document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    const previousDepositAmount = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(previousDepositAmount.innerText);
    const currentDepositAmount = newDepositAmount+previousDepositTotal;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText); 
    const currentBalanceTotal = balanceTotalAmount + newDepositAmount;
    previousDepositAmount.innerText = currentDepositAmount;
    balanceTotal.innerText = currentBalanceTotal;


    depositField.value = '';
})