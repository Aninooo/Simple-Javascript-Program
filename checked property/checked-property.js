const checkBox = document.getElementById('checkBox');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');

const subscribeBtn = document.getElementById('subscribeBtn');

const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult')

subscribeBtn.onclick = function(){
    if (checkBox.checked){
        subResult.textContent = `You are subscribed!`;

    }else {
        subResult.textContent = `You are not subscribe!`;
    }

    if (visa.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }else if (mastercard.checked){
        paymentResult.textContent = `Your are paying with MasterCard`;

    }else if (paypal.checked){
        paymentResult.textContent = `You are paying with Paypal`;

    }else{
        paymentResult.textContent = `Please select Payment Method`;
    }
}
