let username; 

document.getElementById('submit').onclick = function(){
    username = document.getElementById('text').value;
    document.getElementById('h1').textContent = `I love You ${username}` 
}

let pi = 3.14159;
let radius;
let circumference;


document.getElementById('submitRadius').onclick = function(){
radius = document.getElementById('inputText').value;
radius = Number(radius);
circumference = 2 * pi * radius;
document.getElementById('h2').textContent = circumference;

}