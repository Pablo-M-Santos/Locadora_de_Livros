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
const paginacaoItems = document.querySelectorAll('.item-paginacao');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

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

prevButton.addEventListener('click', function () {
  changePage(-1);
});

nextButton.addEventListener('click', function () {
  changePage(1);
});

function changePage(direction) {
  const activeItem = document.querySelector('.item-paginacao.active');
  let currentIndex = Array.from(paginacaoItems).indexOf(activeItem);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = paginacaoItems.length - 1;
  } else if (newIndex >= paginacaoItems.length) {
    newIndex = 0;
  }

  activeItem.classList.remove('active');
  paginacaoItems[newIndex].classList.add('active');
}