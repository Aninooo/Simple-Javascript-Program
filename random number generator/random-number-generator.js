const myButton = document.getElementById('myButton');
const label = document.getElementById('label');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const min = 1;
const max = 20;
let randomNum;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label.textContent = randomNum;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}