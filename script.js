let number1;
let operator;
let number2;

let displayArea = document.getElementById("result-display");

function display(val) {
  return (displayArea.textContent += val);
}

function clearValue() {
  number1 = null;
  number2 = null;
  operator = null;
  return (displayArea.textContent = "");
}

function setOperator(op) {
  number1 = parseFloat(displayArea.textContent);
  displayArea.textContent = "";
  return (operator = op);
}

function operateValue() {
  let result;
  number2 = parseFloat(displayArea.textContent);
  if (operator === "/") {
    result = divide(number1, number2);
  } else if (operator === "*") {
    result = multiplty(number1, number2);
  } else if (operator === "+") {
    result = add(number1, number2);
  } else if (operator === "-") {
    result = substract(number1, number2);
  }
  displayArea.textContent = result;
  number1 = result;
  number2 = null;
  operator = null;
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
