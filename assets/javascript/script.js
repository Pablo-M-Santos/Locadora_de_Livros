const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");
const userBtn = document.querySelector('.userBtn');
const subMenu = document.querySelector('.sub-menu');
const header = document.querySelector('header');
const main = document.querySelector('main');
const selecao = document.querySelector(".selecao");
const texto = document.getElementById("texto");
const opcoes = document.querySelectorAll(".opcao");
const list = document.getElementById("list");
const inputContainer = document.getElementById("inputContainer");

// Função para alternar a visibilidade do sidebar
menuBtn.onclick = function () {
  sidebar.classList.toggle("active");
  header.classList.toggle("top");
  main.classList.toggle("top");
  if (overlay) {
    overlay.classList.toggle("hidden");
  }
};

// Função para esconder o sidebar ao clicar no overlay
if (overlay) {
  overlay.onclick = function () {
    overlay.classList.toggle("hidden");
    sidebar.classList.toggle("active");
    header.classList.toggle("shifted");
  };
}

// Função para alternar a visibilidade do sub-menu
function toggleSubMenu() {
  subMenu.style.display = (subMenu.style.display === 'none' || !subMenu.style.display) ? 'flex' : 'none';
}

// Adiciona o evento de clique ao botão de usuário
if (userBtn) {
  userBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleSubMenu();
  });
}

// Adiciona o evento de clique fora do sub-menu para fechá-lo
if (subMenu) {
  document.addEventListener('click', function (event) {
    if (!subMenu.contains(event.target) && !userBtn.contains(event.target)) {
      subMenu.style.display = 'none';
    }
  });

  // Inicialmente, esconde o sub-menu
  subMenu.style.display = 'none';
}
