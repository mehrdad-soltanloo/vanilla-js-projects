const menu = [
  {
    id: 1,
    title: "croissants set",
    category: "breakfast",
    price: 15.99,
    img: "./images/1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "mediterranean mix",
    category: "lunch",
    price: 13.99,
    img: "./images/4.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "banana shake",
    category: "shakes",
    price: 6.99,
    img: "./images/7.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "bacon & eggs",
    category: "breakfast",
    price: 20.99,
    img: "./images/2.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "big burger",
    category: "lunch",
    price: 22.99,
    img: "./images/5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "coconut shine",
    category: "shakes",
    price: 18.99,
    img: "./images/8.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "english breakfast",
    category: "breakfast",
    price: 8.99,
    img: "./images/3.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "spaghetti",
    category: "lunch",
    price: 12.99,
    img: "./images/6.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "strawberry tower",
    category: "shakes",
    price: 16.99,
    img: "./images/9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "grilled cheese",
    category: "dinner",
    price: 39.99,
    img: "./images/11.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "fruit salad",
    category: "dinner",
    price: 39.99,
    img: "./images/12.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: " mediterranean salad",
    category: "dinner",
    price: 39.99,
    img: "./images/13.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "caesar salad",
    category: "dinner",
    price: 39.99,
    img: "./images/14.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const buttonsContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  sectionCenter.innerHTML = menuItems
    .map(
      ({ id, title, category, price, img, desc }) => `
    <article class="menu-item">
    <img src="${img}" class="photo" alt="${title}" />
    <div class="item-info">
    <header>
    <h4>${title}</h4>
    <h4 class="price">$${price.toFixed(2)}</h4>
     </header>
     <p class="item-text">${desc}</p>
      </div>
  </article>
    `
    )
    .join("");
};

const displayMenuButtons = () => {
  const categories = [...new Set(menu.map((item) => item.category))];
  categories.unshift("all");

  buttonsContainer.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    )
    .join("");

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      if (category == "all") {
        displayMenuItems(menu);
      } else {
        const menuCategory = menu.filter(
          (menuItem) => menuItem.category === category
        );
        displayMenuItems(menuCategory);
      }
    });
  });
};
