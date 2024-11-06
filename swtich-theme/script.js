const toggleBtn = document.getElementById("toggle");

const btn = document.querySelector(".btn");

toggleBtn.addEventListener("click", () => {
  console.log("clicked");
  document.body.classList.toggle("dark-mode");
});

btn.addEventListener("click", () => {
  console.log("Hello");
});

const myArr = [1, 2, 3];

console.log(myArr);
