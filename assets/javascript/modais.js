const modals = [
  { open: ".open-modal1", close: ".close-modal1", modal: "#modal1", fade: "#fade1", form: "#cadastroForm", successMessage: "#successMessage" },
  { open: ".open-modal2", close: ".close-modal2", modal: "#modal2", fade: "#fade2", form: "#editarForm", successMessage: "#successMessage2" },
  { open: ".open-modal3", close: ".close-modal3", modal: "#modal3", fade: "#fade3", sim: "#sim", nao: "#nao", successMessage: "#successMessage3" },
  { open: ".open-modal4", close: ".close-modal4", modal: "#modal4", fade: "#fade4" }
];

modals.forEach(({ open, close, modal, fade, form, successMessage, sim, nao }) => {
  const openModalButtons = document.querySelectorAll(open);
  const closeModalButton = document.querySelector(close);
  const modalElement = document.querySelector(modal);
  const fadeElement = document.querySelector(fade);
  const formElement = form ? document.querySelector(form) : null;
  const successMessageElement = document.querySelector(successMessage);
  const simButton = sim ? document.querySelector(sim) : null;
  const naoButton = nao ? document.querySelector(nao) : null;

  const toggleModal = () => {
    modalElement.classList.toggle("hide");
    fadeElement.classList.toggle("hide");
  };

  openModalButtons.forEach((openModalButton) => {
    openModalButton.addEventListener("click", toggleModal);
  });

  if (closeModalButton) {
    closeModalButton.addEventListener("click", toggleModal);
  }

  if (simButton) {
    simButton.addEventListener("click", () => {
      successMessageElement.classList.add('show');
      setTimeout(() => {
        successMessageElement.classList.remove('show');
        modalElement.classList.add('hide');
        fadeElement.classList.add('hide');
      }, 1100);
    });
  }

  if (naoButton) {
    naoButton.addEventListener("click", toggleModal);
  }

  if (formElement) {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      successMessageElement.classList.add('show');
      setTimeout(() => {
        successMessageElement.classList.remove('show');
        modalElement.classList.add('hide');
        fadeElement.classList.add('hide');
      }, 1100);
    });
  }
});

//  Mensagem 1
const openModal1 = document.querySelector('.open-modal1');
const closeModal1 = document.querySelector('.close-modal1');
const modal1 = document.getElementById('modal1');
const fade1 = document.getElementById('fade1');
const cadastroForm = document.getElementById('cadastroForm');
const successMessage = document.getElementById('successMessage');

openModal1.addEventListener('click', function () {
  modal1.classList.remove('hide');
  fade1.classList.remove('hide');
});

closeModal1.addEventListener('click', function () {
  modal1.classList.add('hide');
  fade1.classList.add('hide');
});

cadastroForm.addEventListener('submit', function (event) {
  event.preventDefault();


  successMessage.classList.add('show');


  setTimeout(function () {
    successMessage.classList.remove('show');
    modal1.classList.add('hide');
    fade1.classList.add('hide');
  }, 1100);
});

const openModal2 = document.querySelector('.open-modal2');
const closeModal2 = document.querySelector('.close-modal2');
const modal2 = document.getElementById('modal2');
const fade2 = document.getElementById('fade2');
const editarForm = document.getElementById('editarForm');
const successMessage2 = document.getElementById('successMessage2');

openModal2.addEventListener('click', function () {
  modal2.classList.remove('hide');
  fade2.classList.remove('hide');
});

closeModal2.addEventListener('click', function () {
  modal2.classList.add('hide');
  fade2.classList.add('hide');
});

editarForm.addEventListener('submit', function (event) {
  event.preventDefault();


  successMessage2.classList.add('show');


  setTimeout(function () {
    successMessage2.classList.remove('show');
    modal2.classList.add('hide');
    fade2.classList.add('hide');
  }, 1000);
});

// Selecionando os elementos necessários
const openModal3 = document.querySelector('.open-modal3');
const closeModal3 = document.querySelector('.close-modal3');
const modal3 = document.getElementById('modal3');
const fade3 = document.getElementById('fade3');
const successMessage3 = document.getElementById('successMessage3');
const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');

// Abrir o modal ao clicar em open-modal3
openModal3.addEventListener('click', function () {
  modal3.classList.remove('hide');
  fade3.classList.remove('hide');
});

// Fechar o modal ao clicar em close-modal3
closeModal3.addEventListener('click', function () {
  modal3.classList.add('hide');
  fade3.classList.add('hide');
});

// Ação ao clicar em SIM
simButton.addEventListener('click', function () {
  // Exibir mensagem de sucesso
  successMessage3.classList.add('show');

  // Esconder modal após 1 segundo
  setTimeout(function () {
    successMessage3.classList.remove('show');
    modal3.classList.add('hide');
    fade3.classList.add('hide');
  }, 1000); // Tempo em milissegundos
});

// Ação ao clicar em NÃO
naoButton.addEventListener('click', function () {
  // Simplesmente esconder o modal
  modal3.classList.add('hide');
  fade3.classList.add('hide');
});
