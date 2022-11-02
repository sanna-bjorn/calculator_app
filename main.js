// add functions for add, subtract, multiply, divide

function add(a, b) {
  return a + b;
}
console.log(add);

function subtract(a, b) {
  return a - b;
}
console.log(subtract);

function multiply(a, b) {
  return a * b;
}
console.log(multiply);

function divide(a, b) {
  return a % b;
}
console.log(divide);

// create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
// So when 1 is clicked event listener catches this and displays 1 and stores it as the first number. Could be a loop that breaks when = is pressed?

function addButtonListener() {
  document.querySelector("#one").onclick = 1;
  // document.querySelector("#two").onclick = playerChosePaper;
  // document.querySelector("#three").onclick = playerChoseScissors;
}
addButtonListener();
console.log(addButtonListener);
