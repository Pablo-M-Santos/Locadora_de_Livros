const modals = [
  { open: "#open-modal1", close: "#close-modal1", modal: "#modal1", fade: "#fade1" },
  { open: "#open-modal2", close: "#close-modal2", modal: "#modal2", fade: "#fade2" },
  { open: "#open-modal3", close: "#close-modal3", modal: "#modal3", fade: "#fade3" }
];

modals.forEach(({ open, close, modal, fade }) => {
  const openModalButton = document.querySelector(open);
  const closeModalButton = document.querySelector(close);
  const modalElement = document.querySelector(modal);
  const fadeElement = document.querySelector(fade);

  const toggleModal = () => {
    modalElement.classList.toggle("hide");
    fadeElement.classList.toggle("hide");
  };

  [openModalButton, closeModalButton, fadeElement].forEach((el) => {
    el.addEventListener("click", toggleModal);
  });
});
