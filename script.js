var number1;
var operator;
var number2;

var displayArea = document.getElementById('result-display');

function display(val){
  return displayArea.textContent += val;
}

function clearValue() {
  return displayArea.textContent='';
}

function setOperator(op) {
  if(number1==null) {
    number1 = parseFloat(displayArea.textContent);
    displayArea.textContent = '';
    console.log(number1);
  }
  return operator = op;
}

function operateValue() {
  number2 = parseFloat(displayArea.textContent);
  let result;
  if(operator == '+') {
    result = add(number1, number2);

  } else if (operator =='x') {
    result = multiply(number1, number2)

  } else if (operator == '/') {
    result = divide(number1,number2)

  } else if(operator == '-') {
    result = subtract(number1, number2)

  }
  displayArea.textContent = result;
  number1 = result;
  number2 = null;
  operator = null;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
