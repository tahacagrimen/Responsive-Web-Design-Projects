const prevDisp = document.querySelector(".previous-display");

const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container");

let currOperand = "";
let previousOperand = "";
let operation = "";
let equalOrPercentPressed = false;

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }

  if (e.target.classList.contains("operator")) {
    chooseOperator(e.target.textContent);
    updateDisplay();
  }

  if (e.target.classList.contains("equal")) {
    calculate();
    updateDisplay();
    equalOrPercentPressed = true;
  }

  if (e.target.classList.contains("ac")) {
    previousOperand = "";
    currOperand = "";
    operation = "";
    updateDisplay();
  }

  if (e.target.classList.contains("pm")) {
    if (currOperand) {
      currOperand *= -1;
      updateDisplay();
    }
  }

  if (e.target.classList.contains("percent")) {
    if (currOperand) {
      currOperand /= 100;
      updateDisplay();
      equalOrPercentPressed = true;
    }
  }
});

const appendNumber = function (num) {
  if (currOperand.length > 10) return;

  if (num === "0" && currOperand === "0") return;

  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    return;
  }

  if (num === "." && currOperand.includes(".")) return;

  if (equalOrPercentPressed) {
    currOperand = num;
    equalOrPercentPressed = false;
    return;
  }

  currOperand += num;
};

const updateDisplay = function () {
  if (currOperand.toString().length > 11) {
    currOperand = Number(currOperand).toExponential(3);
  }

  currDisp.textContent = currOperand;
  prevDisp.textContent = `${previousOperand} ${operation}`;
};

const chooseOperator = function (opt) {
  if (previousOperand) {
    calculate();
  }

  operation = opt;
  previousOperand = currOperand;
  currOperand = "";
};

const calculate = function () {
  let calculation = 0;

  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "x":
      calculation = prev * current;
      break;
    case "÷":
      calculation = prev / current;
      break;
    default:
      return;
  }

  currOperand = calculation;

  previousOperand = "";
  operation = "";
};
