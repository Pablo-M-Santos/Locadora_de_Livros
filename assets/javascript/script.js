// Seleção dos elementos do DOM
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");
const userBtn = document.querySelector('.userBtn');
const subMenu = document.querySelector('.sub-menu');
const header = document.querySelector('header');
const main = document.querySelector('main');
const paginacaoItems = document.querySelectorAll('.item-paginacao');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Função para alternar a visibilidade do sidebar
menuBtn.addEventListener('click', function() {
  sidebar.classList.toggle("active");
  header.classList.toggle("top");
  main.classList.toggle("top");
  if (overlay) {
    overlay.classList.toggle("hidden");
  }
});

// Função para esconder o sidebar ao clicar no overlay
if (overlay) {
  overlay.addEventListener('click', function() {
    overlay.classList.toggle("hidden");
    sidebar.classList.toggle("active");
    header.classList.toggle("shifted");
  });
}

// Função para alternar a visibilidade do sub-menu
function toggleSubMenu() {
  subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'flex' : 'none';
}

// Adiciona o evento de clique ao botão de usuário
if (userBtn) {
  userBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o evento de clique se propague para fora do botão
    toggleSubMenu();
  });
}

// Adiciona o evento de clique fora do sub-menu para fechá-lo
document.addEventListener('click', function(event) {
  if (subMenu && !subMenu.contains(event.target) && event.target !== userBtn) {
    subMenu.style.display = 'none';
  }
});

// Paginação
prevButton.addEventListener('click', function() {
  changePage(-1);
});

nextButton.addEventListener('click', function() {
  changePage(1);
});

function changePage(direction) {
  const activeItem = document.querySelector('.item-paginacao.active');
  const currentIndex = Array.from(paginacaoItems).indexOf(activeItem);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = paginacaoItems.length - 1;
  } else if (newIndex >= paginacaoItems.length) {
    newIndex = 0;
  }

  activeItem.classList.remove('active');
  paginacaoItems[newIndex].classList.add('active');
}

// Função para fechar o sidebar
function closeSidebar() {
  sidebar.classList.add("active");
  header.classList.add("top");
  main.classList.add("top");
  if (overlay) {
    overlay.classList.add("hidden");
  }
  header.classList.add("shifted");
}

// Event listener para fechar o sidebar ao clicar fora dele
document.addEventListener('click', function (event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideMenuBtn = menuBtn.contains(event.target);

  if (!isClickInsideSidebar && !isClickInsideMenuBtn && !sidebar.classList.contains("active")) {
    closeSidebar();
  }
});

// Event listener para fechar o sidebar ao clicar no overlay
if (overlay) {
  overlay.addEventListener('click', function () {
    closeSidebar();
  });
}
