let display_container = document.querySelector(".display-container");
let display = document.createElement("div");
display.classList.add("display");
display_container.appendChild(display);
display = 0;
console.log(display);

// add functions for add, subtract, multiply, divide

function add(a, b) {
  return a + b;
}
// console.log(add);

function subtract(a, b) {
  return a - b;
}
// console.log(subtract);

function multiply(a, b) {
  return a * b;
}
// console.log(multiply);

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
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// So when 1 is clicked event listener catches this and displays 1 and stores it as the first number. Could be a loop that breaks when = is pressed?

// click -> display x ->store x in a variable

document.querySelectorAll(".digits").forEach((item) => {
  item.addEventListener("click", (event) => {
    updateOperands(item.textContent);
    console.log(event);
    console.log(item.textContent);
  });
});

function updateOperands(value) {
  if (display.textContent != "") {
    display.textContent = value;
    console.log(value);
  }
}

document.querySelectorAll(".operatorBtn").forEach((item) => {
  item.addEventListener("click", (event) => {
    updateOperators(item.textContent);
    console.log(event);
    console.log(item.textContent);
  });
});

function updateOperators(value) {
  if (display.textContent != "") {
    display.textContent = value;
    console.log(value);
  }
}

// function playerChoseOne(value) {
//   let result = 1;
//   console.log(result);
//   display = value;
// }

// function addButtonListener() {
//   document.querySelector("#one").onclick = playerChoseOne;
// }
// addButtonListener();
// console.log(playerChoseOne);
