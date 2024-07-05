function submitForm() {
  // Apenas teste 
  window.location.href = 'dashboard.html';
}

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const userBtn = document.querySelector('.user');
const subMenu = document.querySelector('.sub-menu');
const menuItems = document.querySelectorAll('.menu-item');

// Função para alternar a visibilidade do sidebar
menuBtn.onclick = function () {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("hidden");
};

// Função para esconder o sidebar ao clicar no overlay
overlay.onclick = function () {
  overlay.classList.toggle("hidden");
  sidebar.classList.toggle("active");
};

// Função para alternar a visibilidade do sub-menu
function toggleSubMenu() {
  subMenu.style.display = (subMenu.style.display === 'none' || !subMenu.style.display) ? 'flex' : 'none';
}

// Adiciona o evento de clique ao botão de usuário
userBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleSubMenu();
});

// Adiciona o evento de clique fora do sub-menu para fechá-lo
document.addEventListener('click', function(event) {
  if (!subMenu.contains(event.target) && !userBtn.contains(event.target)) {
    subMenu.style.display = 'none';
  }
});

// Inicialmente, esconde o sub-menu
subMenu.style.display = 'none';

// Adiciona um evento de clique a cada item do menu
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove a classe active de todos os itens do menu
    menuItems.forEach(i => i.classList.remove('active-item'));
    // Adiciona a classe active ao item clicado
    this.classList.add('active-item');
  });
});
