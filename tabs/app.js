const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  //⚠️⛔⚠️⛔⚠️⛔⚠️⛔⚠️⛔⚠️⛔
  //⚠️⛔⚠️⛔⚠️⛔⚠️⛔⚠️⛔⚠️⛔
  // read about event bubbling and e.target vs e.currenttarget BEfore recreating this project
  //⚠️⛔⚠️⛔⚠️⛔⚠️⛔⚠️⛔⚠️⛔
  const id = e.target.dataset.id;
  if (id) {
    // remove active from button
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles and display only the one with  matching id
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
