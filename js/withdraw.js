document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    if(isNaN(newWithdrawAmount)){
        alert('please enter valid number');
        return;
    }
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText); 
    withdrawField.value = '';
    if(newWithdrawAmount > balanceTotalAmount){
        alert("you don't have enough money");
        return ;
    }
    const currentBalanceTotal = balanceTotalAmount - newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;

    
    
})