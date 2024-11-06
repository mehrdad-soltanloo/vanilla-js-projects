# Calculator App

This project is a simple calculator built with JavaScript, HTML, and CSS. This README provides a comprehensive step-by-step guide with detailed explanations of each part of the code's functions, helping you understand how each section of the JavaScript code works.

## Table of Contents

- [Overview](#overview)
- [Setup and Usage](#setup-and-usage)
- [Step-by-Step Code Breakdown](#step-by-step-code-breakdown)
  - [1. Defining State Variables](#1-defining-state-variables)
  - [2. DOM Element References](#2-dom-element-references)
  - [3. Function: `updateDisplay`](#3-function-updatedisplay)
  - [4. Function: `handleNumber`](#4-function-handlenumber)
  - [5. Function: `handleOperator`](#5-function-handleoperator)
  - [6. Function: `calculate`](#6-function-calculate)
  - [7. Function: `handleEqual`](#7-function-handleequal)
  - [8. Function: `clear`](#8-function-clear)
  - [9. Adding Event Listeners](#9-adding-event-listeners)
- [Conclusion](#conclusion)

## Overview

The calculator app allows users to perform basic arithmetic operations: addition, subtraction, multiplication, and division. This project demonstrates key JavaScript concepts such as DOM manipulation, event handling, and modular code organization.

## Setup and Usage

1. Clone or download the repository.
2. Open the `index.html` file in a browser to run the calculator.
3. Use the calculator by clicking buttons to enter numbers and perform operations.

---

## Step-by-Step Code Breakdown

### 1. Defining State Variables

```javascript
let currentInput = ""; // Stores the number currently being typed
let previousInput = ""; // Holds the number before an operator is applied
let operator = ""; // Keeps track of the chosen operator (+, -, *, /)
let shouldResetDisplay = false; // Controls when to clear the display after a calculation
```

- **`currentInput`**: Stores the number currently being entered by the user. It starts as an empty string to avoid displaying an initial `0`.
- **`previousInput`**: Stores the last number entered, before an operator. When an operator is clicked, `previousInput` holds `currentInput`.
- **`operator`**: Holds the operator chosen by the user (`+`, `-`, `*`, `/`). This operator is applied between `previousInput` and `currentInput` in calculations.
- **`shouldResetDisplay`**: A flag used to reset `currentInput` after a calculation is completed. This prevents results from being concatenated with subsequent numbers.

### 2. DOM Element References

In order to update the display dynamically, we need access to specific DOM elements.

```javascript
const display = document.getElementById("display"); // Main display element
const buttons = document.querySelectorAll(".button"); // All calculator buttons
```

- **`display`**: References the main display area on the calculator, where numbers and operations are shown.
- **`buttons`**: Selects all calculator buttons, allowing event listeners to be added to each one.

### 3. Function: `updateDisplay`

The `updateDisplay` function updates the calculator's display based on the current state of `previousInput`, `operator`, and `currentInput`.

```javascript
function updateDisplay() {
  if (operator && previousInput) {
    display.textContent = `${previousInput} ${operator} ${currentInput}`;
  } else {
    display.textContent = currentInput || "0"; // Displays "0" if currentInput is empty
  }
}
```

- **Purpose**: Updates the display to show the current calculation state.
- **Logic**:
  - If both `operator` and `previousInput` are present, it shows the equation format (e.g., `3 + 5`).
  - Otherwise, it defaults to showing `currentInput` alone, or `0` if `currentInput` is empty.

### 4. Function: `handleNumber`

This function handles numeric button clicks, updating `currentInput` with the selected number.

```javascript
function handleNumber(value) {
  if (shouldResetDisplay) {
    currentInput = value;
    shouldResetDisplay = false;
  } else {
    currentInput += value;
  }
  updateDisplay();
}
```

- **Purpose**: Adds a number to `currentInput` or resets it if needed.
- **Logic**:
  - If `shouldResetDisplay` is `true` (indicating that a calculation just finished), `currentInput` is replaced with the new value.
  - If `shouldResetDisplay` is `false`, the new number is concatenated to `currentInput`.

### 5. Function: `handleOperator`

The `handleOperator` function updates the state when an operator is clicked.

```javascript
function handleOperator(op) {
  if (previousInput && operator && !shouldResetDisplay) {
    calculate();
  } else {
    previousInput = currentInput;
  }
  operator = op;
  currentInput = ""; // Clears current input for the next number entry
  shouldResetDisplay = false;
  updateDisplay();
}
```

- **Purpose**: Sets up the operator and prepares for the next number.
- **Logic**:
  - If there’s a `previousInput` and an operator already, it calculates the current result, allowing chain calculations.
  - Otherwise, it sets `previousInput` to `currentInput`.
  - Updates `operator`, clears `currentInput`, and resets `shouldResetDisplay`.

### 6. Function: `calculate`

Performs the calculation based on the current `operator`, `previousInput`, and `currentInput`.

```javascript
function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

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
      result = curr === 0 ? "Error" : parseFloat((prev / curr).toFixed(2));
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
```

- **Purpose**: Calculates the result of the operation between `previousInput` and `currentInput`.
- **Logic**:
  - Parses `previousInput` and `currentInput` as numbers (`prev` and `curr`).
  - Applies the appropriate arithmetic operation.
  - For division, checks for division by zero and returns `"Error"` if `curr` is zero. Results are rounded to two decimal places.
  - Stores the result in `currentInput`, clears `previousInput` and `operator`, and sets `shouldResetDisplay` to prepare for the next input.

### 7. Function: `handleEqual`

Triggers the calculation when the `=` button is pressed.

```javascript
function handleEqual() {
  calculate();
  updateDisplay();
}
```

- **Purpose**: Completes the calculation and updates the display.
- **Logic**: Calls `calculate` to perform the calculation and `updateDisplay` to show the result.

### 8. Function: `clear`

Resets all variables and clears the display.

```javascript
function clear() {
  currentInput = "";
  previousInput = "";
  operator = "";
  shouldResetDisplay = false;
  updateDisplay();
}
```

- **Purpose**: Resets the calculator to its initial state.
- **Logic**:
  - Clears `currentInput`, `previousInput`, `operator`, and resets `shouldResetDisplay`.
  - Calls `updateDisplay` to show `0` on the display.

### 9. Adding Event Listeners

Each button has an event listener to handle clicks.

```javascript
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
```

- **Purpose**: Adds click functionality to each calculator button.
- **Logic**:
  - Checks if the button clicked is a number, operator, clear button (`C`), or equals button (`=`).
  - Calls the corresponding function to handle the click event.

---

## Conclusion

This calculator app demonstrates fundamental JavaScript concepts, including DOM manipulation, event handling, and modular function organization. By following this breakdown, you should gain a better understanding of how the calculator’s logic flows from input to output, enabling you to expand and modify the app further.

> Thank you for checking out splitter ap! I appreciate your time and interest in this project. Whether you're using the app, providing feedback, or contributing to the code, your support means a lot. I hope you find this project useful and inspiring for your own development journey.

Happy coding! 🙂
