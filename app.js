// product quantity and price update
function updateProductQuantityAndPrice(inputId,isInCreasing,id,num){
    const inputField = document.getElementById(inputId);
    let inputNumber = inputField.value;
    if(isInCreasing){
        inputNumber = parseInt(inputNumber) + 1;
    }
    else if(inputNumber > 0){
        inputNumber = parseInt(inputNumber) - 1;
    }
    inputField.value = inputNumber;
    const price = (num);
    const getBeforeAmmount = document.getElementById(id);
    const beforeAmmount = getBeforeAmmount.innerText;
    const ammount = parseInt(beforeAmmount);
    const newAmmount = inputNumber * price;
    getBeforeAmmount.innerText = newAmmount;

    updateTotal();
    
}
// balance total 
function updateTotal(){
    const phoneInput = document.getElementById('phone-input').value;
    const phoneNumber = parseInt(phoneInput);
    const phoneTotal = phoneNumber * 1299;

    const caseInput = document.getElementById('case-input').value;
    const caseNumber = parseInt(caseInput);
    const caseTotal = caseNumber * 59;

    const subBalanceTotal = phoneTotal + caseTotal;

    const tax = subBalanceTotal / 10;

    const total = subBalanceTotal + tax;

    document.getElementById('sub-total').innerText = subBalanceTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total').innerText = total;

}



// phone
document.getElementById('phone-plus').addEventListener('click', function(){
    const price = 1299;
    updateProductQuantityAndPrice('phone-input',true,'phone-total',price);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    const price = 1299;
    updateProductQuantityAndPrice('phone-input',false,'phone-total', price);
});

// case
document.getElementById('case-plus').addEventListener('click', function(){
    const price = 59;
   const newAmmount = updateProductQuantityAndPrice('case-input',true,'case-total',price);
});

document.getElementById('case-minus').addEventListener('click', function(){
    const price = 59;
    updateProductQuantityAndPrice('case-input',false,'case-total',price);
});

