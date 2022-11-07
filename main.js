let display_container = document.querySelector(".display-container");
let firstOperand = document.getElementById("firstOperand");
firstOperand.textContent;
console.log(firstOperand);
let secondOperand = document.getElementById("secondOperand");
secondOperand.textContent;
console.log(secondOperand);
const operatorSpan = document.getElementById("operator");

const calculatorZone = document.getElementById("calculator");
const displayZone = document.getElementById("display");
const inputZone = document.getElementById("inputZone");
const answerZone = document.getElementById("answerZone");

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
  if (b != "0") {
    return parseFloat(a) / parseFloat(b);
  } else {
    alert("Cannot divide by 0");
  }
  console.log(divide);
}
// create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, firstArg, secondArg) {
  switch (operator) {
    case "+":
      return add(firstArg, secondArg);
      break;
    case "-":
      return subtract(firstArg, secondArg);
      break;
    case "*":
      return multiply(firstArg, secondArg);
      break;
    case "/":
      return divide(firstArg, secondArg);
      break;
  }
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// So when 1 is clicked event listener catches this and displays 1 and stores it as the first number. Could be a loop that breaks when = is pressed?

//creating a listener for all clicks

document.querySelectorAll(".digits").forEach((item) => {
  item.addEventListener("click", (event) => {
    updateOperands(item.textContent);
    console.log(item.textContent);
  });
});

//function to update the operands to use in the calculation

function updateOperands(value) {
  if (operatorSpan.textContent == "") {
    firstOperand.textContent += value;
  } else {
    secondOperand.textContent += value;
  }
}

//event listener to listen to operator buttons
document.querySelectorAll(".operatorBtn").forEach((item) => {
  item.addEventListener("click", (event) => {
    updateOperators(item.textContent);
    console.log(event);
    console.log(item.textContent);
  });
});

function updateOperators(value) {
  if (firstOperand.textContent != "" && secondOperand.textContent == "") {
    operatorSpan.textContent = value;
  } else if (
    firstOperand.textContent != "" &&
    secondOperand.textContent != ""
  ) {
    (firstOperand.textContent = value),
      (secondOperand.textContent = value),
      (operatorSpan.textContent = value),
      (answerZone.textContent = value);
  }

  //   } else if (
  //      {
  //   ) {
  //     let meanwhile = roundTo5decimalsMax(
  //       operate(
  //         operatorSpan.textContent,
  //         firstOperand.textContent,
  //         secondOperand.textContent
  //       )
  //     );
  //     firstOperand.textContent = meanwhile;
  //     answerZone.textContent = meanwhile;
  //     operatorSpan.textContent = value;
  //     secondOperand.textContent = "";
  //   }
  else if (firstOperand.textContent == "" && answerZone.textContent != "") {
    firstOperand.textContent = answerZone.textContent;
    operatorSpan.textContent = value;
  }
}

const eqlBtn = document.getElementById("equals");

function roundTo5decimalsMax(halfProduct) {
  halfProduct *= 100000;
  halfProduct = Math.round(halfProduct);
  return halfProduct / 100000;
}

eqlBtn.onclick = function () {
  if (
    firstOperand.textContent != "" &&
    operatorSpan.textContent != "" &&
    secondOperand.textContent != ""
  ) {
    let answer = roundTo5decimalsMax(
      operate(
        operatorSpan.textContent,
        firstOperand.textContent,
        secondOperand.textContent
      )
    );
    answerZone.textContent = answer;
    firstOperand.textContent = "";
    operatorSpan.textContent = "";
    secondOperand.textContent = "";
  } else {
    console.log("You need to input a number?");
  }
};

const clearBtn = document.getElementById("clear");

clearBtn.onclick = function () {
  firstOperand.textContent = "";
  operatorSpan.textContent = "";
  secondOperand.textContent = "";
  answerZone.textContent = "";
};
