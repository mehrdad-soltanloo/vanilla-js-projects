const openModal = document.querySelector(".modal-btn");

const closeBtn = document.querySelector(".close-btn");

const modalOverlay = document.querySelector(".modal-overlay");

openModal.addEventListener("click", () => {
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});
