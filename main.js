const toggleMenu = document.querySelector(".toggleMenu");

function menuAtivo() {
  const listMenu = document.querySelector(".nav-menu");
  listMenu.classList.toggle("active");

  const navMenu = document.querySelector(".toggleNav");
  navMenu.classList.toggle("active");
}

toggleMenu.addEventListener("click", menuAtivo);
