const counter = document.querySelector(".counter__number");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnClass = e.target.classList;
    if (btnClass.contains("increase")) {
      count++;
    } else if (btnClass.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    // update the counter text
    counter.textContent = count;

    // Update the counter color based on value
    if (count > 0) {
      counter.style.color = "#22c55e";
    } else if (count < 0) {
      counter.style.color = "#ef4444";
    } else {
      counter.style.color = "#fff";
    }
  });
});
