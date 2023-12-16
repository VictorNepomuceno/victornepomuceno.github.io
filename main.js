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

const trilho = document.querySelector(".container");

function mover() {
  trilho.classList.toggle("ativo");
}

trilho.addEventListener("click", mover);

const btn = document.getElementById("btn");
const logoItem = document.querySelector(".logo");
const devLinks = document.querySelectorAll(".dev-links");
const introInfo = document.querySelector(".intro_info");
const devSocials = document.querySelector(".dev-socials");
const headerMobile = document.querySelector(".header-menu");
const titleMain = document.querySelectorAll(".titleMain");
const aboutInfo = document.querySelector(".about-info");
const arrow = document.querySelectorAll(".arrow");
const aboutSoft = document.querySelector(".about-softskills");
const skillsIcons = document.querySelectorAll(".skillsIcon");
const skillsSpan = document.querySelectorAll(".skills-info span");
btn.addEventListener("change", (e) => {
  const listMenu = document.querySelector(".nav-menu");
  document.body.classList.toggle("dark", e.target.checked);
  logoItem.classList.toggle("dark", e.target.checked);
  listMenu.classList.toggle("dark", e.target.checked);
  introInfo.classList.toggle("dark", e.target.checked);
  devSocials.classList.toggle("dark", e.target.checked);
  headerMobile.classList.toggle("dark", e.target.checked);

  devLinks.forEach((links) => {
    links.classList.toggle("dark", e.target.checked);
  });
  titleMain.forEach((title) => {
    title.classList.toggle("dark", e.target.checked);
  });
  aboutInfo.classList.toggle("dark", e.target.checked);
  arrow.forEach((arrow) => {
    arrow.classList.toggle("dark", e.target.checked);
  });
  aboutSoft.classList.toggle("dark", e.target.checked);
  skillsIcons.forEach((icon) => {
    icon.classList.toggle("dark", e.target.checked);
  });
  skillsSpan.forEach((span) => {
    span.classList.toggle("dark", e.target.checked);
  });
});
