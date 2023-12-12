const toggleMenu = document.querySelector(".toggleMenu");

function menuAtivo(event) {
  if (event.type === "touchstart") event.prevent.default();

  const listMenu = document.querySelector(".nav-menu");
  listMenu.classList.toggle("active");
  const navMenu = document.querySelector(".toggleNav");
  navMenu.classList.toggle("active");

  document.onclick = function (e) {
    if (!listMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      listMenu.classList.remove("active");
    }
  };
}

toggleMenu.addEventListener("click", menuAtivo);
toggleMenu.addEventListener("touchstart", menuAtivo);
