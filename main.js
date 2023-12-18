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
const devSocials = document.querySelectorAll(".dev-socials");
const headerMobile = document.querySelector(".header-menu");
const titleMain = document.querySelectorAll(".titleMain");
const aboutInfo = document.querySelector(".about-info");
const arrow = document.querySelectorAll(".arrow");
const aboutSoft = document.querySelector(".about-softskills");
const skillsIcons = document.querySelectorAll(".skillsIcon");
const skillsSpan = document.querySelectorAll(".skills-info span");
const contactSpan = document.querySelectorAll("#contact span");
const formLabels = document.querySelectorAll("label");
const formButton = document.querySelectorAll("button");
const projects = document.querySelectorAll(".projects");
const projectsAfter = document.querySelector(".projects-container");
btn.addEventListener("change", (e) => {
  const listMenu = document.querySelector(".nav-menu");
  document.body.classList.toggle("dark", e.target.checked);
  logoItem.classList.toggle("dark", e.target.checked);
  listMenu.classList.toggle("dark", e.target.checked);
  introInfo.classList.toggle("dark", e.target.checked);
  headerMobile.classList.toggle("dark", e.target.checked);
  projectsAfter.classList.toggle("dark", e.target.checked);
  projects.forEach((projects) => {
    projects.classList.toggle("dark", e.target.checked);
  });
  devSocials.forEach((socials) => {
    socials.classList.toggle("dark", e.target.checked);
  });

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
  contactSpan.forEach((span) => {
    span.classList.toggle("dark", e.target.checked);
  });
  formLabels.forEach((label) => {
    label.classList.toggle("dark", e.target.checked);
  });
  formButton.forEach((button) => {
    button.classList.toggle("dark", e.target.checked);
  });
});

const mybObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => {
  mybObserver.observe(element);
});
