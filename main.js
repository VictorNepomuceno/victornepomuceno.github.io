const toggleMenu = document.querySelector(".toggleMenu");
const listMenu = document.querySelector(".nav-menu");
const navMenu = document.querySelector(".toggleNav");

toggleMenu.onclick = function () {
  listMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
};

document.onclick = function (event) {
  if (!listMenu.contains(event.target) && !toggleMenu.contains(event.target)) {
    listMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
};
