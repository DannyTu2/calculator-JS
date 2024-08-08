let number1;
let operator;
let number2;
let displayValue = 0;

let displayArea = document.getElementById('result-display');

// displayArea.innerHTML += displayValue;

const buttons = document.querySelectorAll("button");

// buttons.forEach(item => {
//   addEventListener('click', (e) => {
//   updateDisplay(e);
//   })
// });

// let updateDisplay = (e) => {
//   displayValue = e.target.id;
//   displayArea.innerHTML = displayValue 
// }

function display(val){
  return displayArea.textContent += val;
}

function clearValue() {
  return displayArea.textContent='';
}

function operate(number1, number2, operator) {
  if(operator == "+") {
    const resultAddition = add(number1, number2);
    return displayArea = resultAddition;

  } else if (operator =="x") {
    const resultMulti = multiply(number1, number2)
    return displayArea = resultMulti;

  } else if (operator == "/") {
    const resultDiv = divide(number1,number2)
    return displayArea = resultDiv;

  } else if(operator == "-") {
    const resultSub = substract(number1, number2)
    return displayArea = resultSub;
  }



}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
