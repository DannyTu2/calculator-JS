let number1;
let operator;
let number2;
let displayValue = 0;

let displayArea = document.getElementById('result-display');

displayArea.innerHTML += displayValue;

const buttons = document.querySelectorAll("button");

buttons.forEach(item => {
  addEventListener('click', (e) => {
  updateDisplay(e);
  })
});

let updateDisplay = (e) => {
  displayValue = e.target.id;
  displayArea.innerHTML = displayValue 

}


function operate(number1, number2, operator) {
    add(number1, number2);
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiplty(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
