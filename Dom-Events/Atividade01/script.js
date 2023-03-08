const modalContainer = document.getElementById("modalContainer");
const btnOpenModal = document.getElementById("btnOpenModal");
const btnCloseModal = document.getElementById("btnCloseModal");

btnOpenModal.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

btnCloseModal.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
