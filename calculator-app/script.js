let currentInput = ""; // Start with an empty string to avoid initial "0"
let previousInput = ""; //Stores the last number entered before an operator
let operator = ""; // store the operators (+,-,*,/)
let shouldResetDisplay = false; //This tell us wether to clear the currentInput, usually after a calculation,

function updateDisplay() {
  const display = document.getElementById("display");

  // Show the full calculation if there's an operator and previous input
  if (operator && previousInput) {
    display.textContent = `${previousInput} ${operator} ${currentInput}`;
  } else {
    // Show only the current input if no operator
    display.textContent = currentInput || "0"; // Display "0" if currentInput is empty
  }
}

function handleNumber(value) {
  // If we should reset display (after calculation), start fresh with the new number
  if (shouldResetDisplay) {
    currentInput = value;
    shouldResetDisplay = false;
  } else {
    // Append the number to currentInput
    currentInput += value;
  }

  updateDisplay();
}

function handleOperator(op) {
  // If there's a previous input, calculate first to chain operations
  if (previousInput && operator && !shouldResetDisplay) {
    calculate();
  } else {
    // Set previousInput to current input if no previous calculation was done
    previousInput = currentInput;
  }

  operator = op;
  currentInput = ""; // Clear current input for the next number entry
  shouldResetDisplay = false;

  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  // Perform the calculation based on the operator
  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr === 0 ? "Error" : parseFloat(prev / curr).toFixed(2);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  shouldResetDisplay = true;

  updateDisplay();
}

function handleEqual() {
  calculate();
  updateDisplay();
}

function clear() {
  currentInput = "";
  previousInput = "";
  operator = "";
  shouldResetDisplay = false;
  updateDisplay();
}

// Add event listeners to buttons
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (!isNaN(value)) {
      handleNumber(value);
    } else if (value === "C") {
      clear();
    } else if (value === "=") {
      handleEqual();
    } else {
      handleOperator(value);
    }
  });
});
