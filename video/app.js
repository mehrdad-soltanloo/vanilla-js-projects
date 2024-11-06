// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// EXTRA EXCERISE 🙏DELETE LATER

const myObj = {
  city: "Madrid",
  //
  // ES6 type of method defining
  greet() {
    console.log(`Hello from ${this.city}`);
  },
};

console.log(Object.getPrototypeOf(myObj));
console.log(myObj.greet());
console.log(myObj);
console.log(Object.getPrototypeOf([]));
