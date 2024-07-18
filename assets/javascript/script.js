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
const editorCheckbox = document.getElementById('editorCheckbox');
const leitorCheckbox = document.getElementById('leitorCheckbox');
const editorCheckbox2 = document.getElementById('editorCheckbox2');
const leitorCheckbox2 = document.getElementById('leitorCheckbox2');
const cadastroCheckbox = document.getElementById('leitoCheckbox');
const editarCheckbox = document.getElementById('editarCheckbox');



function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

 
  if (username === 'admin' && password === 'admin') {

    return true; 
  } else {
    
    alert('Nome de usuário ou senha incorretos.');
    return false;
  }
}

menuBtn.addEventListener('click', function () {
  sidebar.classList.toggle("active");
  header.classList.toggle("top");
  main.classList.toggle("top");
  if (overlay) {
    overlay.classList.toggle("hidden");
  }
});


if (overlay) {
  overlay.addEventListener('click', function () {
    overlay.classList.toggle("hidden");
    sidebar.classList.toggle("active");
    header.classList.toggle("shifted");
  });
};


function toggleSubMenu() {
  subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'flex' : 'none';
}


if (userBtn) {
  userBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleSubMenu();
  });
}


document.addEventListener('click', function (event) {
  if (subMenu && !subMenu.contains(event.target) && event.target !== userBtn) {
    subMenu.style.display = 'none';
  }
});


prevButton.addEventListener('click', function () {
  changePage(-1);
});

nextButton.addEventListener('click', function () {
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

function closeSidebar() {
  sidebar.classList.add("active");
  header.classList.add("top");
  main.classList.add("top");
  if (overlay) {
    overlay.classList.add("hidden");
  }
  header.classList.add("shifted");
}


document.addEventListener('click', function (event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideMenuBtn = menuBtn.contains(event.target);

  if (!isClickInsideSidebar && !isClickInsideMenuBtn && !sidebar.classList.contains("active")) {
    closeSidebar();
  }
});


if (overlay) {
  overlay.addEventListener('click', function () {
    closeSidebar();
  });
}


function toggleCheckboxes(checkbox1, checkbox2) {
  checkbox1.addEventListener('change', function () {
    checkbox2.disabled = checkbox1.checked;
  });

  checkbox2.addEventListener('change', function () {
    checkbox1.disabled = checkbox2.checked;
  });
}


if (editorCheckbox && leitorCheckbox) {
  toggleCheckboxes(editorCheckbox, leitorCheckbox);
}
if (editorCheckbox2 && leitorCheckbox2) {
  toggleCheckboxes(editorCheckbox2, leitorCheckbox2);
}
