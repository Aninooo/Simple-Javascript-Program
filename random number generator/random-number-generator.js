const myButton = document.getElementById('myButton');
const label = document.getElementById('label');

const min = 1;
const max = 1000;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    label.textContent = randomNum;
}