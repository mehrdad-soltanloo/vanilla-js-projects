const data = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, dynamic programming language primarily used for creating interactive and dynamic content on websites. It allows developers to implement complex features on web pages.",
  },
  {
    id: 2,
    question: "What are the different data types in JavaScript?",
    answer:
      "JavaScript has several data types, including primitive types like Undefined, Null, Boolean, Number, BigInt, String, and Symbol, as well as complex types like Objects and Arrays.",
  },
  {
    id: 3,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a feature in JavaScript where an inner function has access to the outer function's variables even after the outer function has returned. This allows for private variables and function encapsulation.",
  },
  {
    id: 4,
    question: "What is the purpose of the this keyword in JavaScript?",
    answer:
      "JavaScript is a high-level, dynamic programming language primarily used for creating interactive and dynamic content on websites. It allows developers to implement complex features on web pages.",
  },
  {
    id: 5,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "The == operator compares two values for equality after converting them to a common type (type coercion), while the === operator checks for both value and type equality, meaning no type conversion occurs.",
  },
];

const container = document.querySelector(".main-container");
const answer = document.querySelector(".answer");

const faqHTML = data
  .map((item) => {
    return `

   <article class="question-container">
   
        <div class="question-header">
          <p class="single-question">${item.question}</p>
          <button type="button" class="question-btn">
            <span class="icon plus-icon"><i class="fa-solid fa-plus"></i></span>
            <span class="icon minus-icon"><i class="fa-solid fa-minus"></i></span>
          </button>
        </div>
        <div class="answer">
          ${item.answer}
        </div>
      </article>
 
  
  `;
  })
  .join("");
container.innerHTML = faqHTML;

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
