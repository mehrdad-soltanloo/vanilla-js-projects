# JavaScript FAQ Project

## Overview

This project is a simple FAQ section built using HTML, CSS, and JavaScript. The FAQ contains several questions, each of which can be expanded to show the answer. Users can toggle between expanding and collapsing the answers using the plus (`+`) and minus (`-`) icons.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (for icons)
- Google Fonts (Open Sans)

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

- A web browser (Chrome, Firefox, etc.)
- A code editor (VSCode, Sublime Text, etc.)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/javascript-faq.git
   ```
2. Open the project directory: Navigate into the project folder:

3. Open the index.html file: You can open the index.html file directly in your browser to view the FAQ page.

# Project Structure

faq-project/
│
├── index.html # Main HTML file
├── styles.css # Styles for the project
├── app.js # JavaScript functionality
├── README.md # Project documentation
└── favicon.png # Favicon for the project

# Features

- Collapsible Questions: Each FAQ question can be expanded or collapsed when clicked.
- Icon Toggle: The plus (+) icon changes to a minus (-) icon when the answer is expanded, and vice versa.

# Algorithm for the FAQ Toggle Feature

## Step 1: Initialize Data

- Input: Create an array of FAQ objects with id, question, and answer properties.
- Output: Store the FAQ data in a variable (data)

```javascript
const data = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, dynamic programming language primarily used for creating interactive and dynamic content on websites.",
  },
  {
    id: 2,
    question: "What are the different data types in JavaScript?",
    answer:
      "JavaScript has several data types, including Undefined, Null, Boolean, Number, BigInt, String, Symbol, Objects, and Arrays.",
  },
  // More FAQs...
];
```

## Step 2: Render FAQs to HTML

- Input: Select the .main-container element where FAQs will be injected.
- Process:
  - Use .map() to loop through the data array.
  - For each FAQ object, generate an HTML string containing:
    - The question (item.question).
    - A button with plus and minus icons.
    - The answer (item.answer), initially hidden.
  - Join the array of HTML strings into one and inject into .main-container.
- Output: The FAQ section is now rendered in the HTML document.

```javascript
const container = document.querySelector(".main-container");

const faqHTML = data
  .map((item) => {
    return `     <article class="question-container">
        <div class="question-header">
          <p class="single-question">${item.question}</p>
          <button type="button" class="question-btn">
            <span class="icon plus-icon"><i class="fa-solid fa-plus"></i></span>
            <span class="icon minus-icon"><i class="fa-solid fa-minus"></i></span>
          </button>
        </div>
        <div class="answer">${item.answer}</div>
      </article>
  `;
  })
  .join("");
container.innerHTML = faqHTML;
```

## Step 3: Add Toggle Event Listeners

- Input: Select all .question-btn elements (buttons next to each question).
- Process:
  - Loop through each button using .forEach().
  - Add an event listener (click) to each button.
  - When clicked:
    - Get the corresponding .answer div (the next sibling of .question-header).
    - Use .classList.toggle() to add/remove the .show-answer class.
    - Toggle the visibility of the plus and minus icons:
      - If the answer is expanded, hide the plus icon and show the minus icon.
      - If the answer is collapsed, do the reverse.
- Output: Each FAQ's answer will expand/collapse when the button is clicked, and the icons will toggle accordingly.

```javascript
const buttons = document.querySelectorAll(".question-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.closest(".question-header").nextElementSibling;
    answer.classList.toggle("show-answer");

    const plusIcon = button.querySelector(".plus-icon");
    const minusIcon = button.querySelector(".minus-icon");

    if (answer.classList.contains("show-answer")) {
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    } else {
      plusIcon.style.display = "inline";
      minusIcon.style.display = "none";
    }
  });
});
```

## Step 4: Display the Output

- Input: Rendered HTML and event listeners are active.
- Process: As the user clicks a question's button, the answer section appears or disappears.
- Output: The FAQ section functions interactively, displaying answers as needed.

> Thank you for your interest! Contributions and feedback are always welcome
