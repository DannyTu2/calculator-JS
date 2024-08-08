let number1;
let operator;
let number2;

let displayArea = document.getElementById('result-display');

function display(val){
  displayArea.textContent += val;
}

function operate(number1, number2, operator) {
    add(number1, number2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplty(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}