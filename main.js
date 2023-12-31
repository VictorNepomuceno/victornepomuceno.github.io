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
function fecharMenuAoClicarLink(e) {
  const link = e.target;
  if (link.tagName === "A") {
    const listMenu = document.querySelector(".nav-menu");
    const navMenu = document.querySelector(".toggleNav");
    navMenu.classList.remove("active");
    listMenu.classList.remove("active");
  }
}

toggleMenu.addEventListener("click", menuAtivo);
toggleMenu.addEventListener("touchstart", menuAtivo);
document
  .querySelector(".nav-menu")
  .addEventListener("click", fecharMenuAoClicarLink);

const trilho = document.querySelector(".container");

function mover() {
  trilho.classList.toggle("ativo");
}

trilho.addEventListener("click", mover);

const btn = document.getElementById("btn");
const swiperDark = document.querySelectorAll(".swiper");
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
const skillsInfo = document.querySelectorAll(".skills-info");
const contactContainer = document.querySelector(".contact-container");
const contactSpan = document.querySelectorAll("#contact span");
const formLabels = document.querySelectorAll("label");
const formButton = document.querySelector(".button");
const projects = document.querySelectorAll(".projects");
const projectImg = document.querySelectorAll(".project-img");
const projectsAfter = document.querySelector(".projects-container");
btn.addEventListener("change", (e) => {
  const listMenu = document.querySelector(".nav-menu");
  document.body.classList.toggle("dark", e.target.checked);
  logoItem.classList.toggle("dark", e.target.checked);
  listMenu.classList.toggle("dark", e.target.checked);
  introInfo.classList.toggle("dark", e.target.checked);
  headerMobile.classList.toggle("dark", e.target.checked);
  projectsAfter.classList.toggle("dark", e.target.checked);
  contactContainer.classList.toggle("dark", e.target.checked);
  formButton.classList.toggle("dark", e.target.checked);
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
  skillsInfo.forEach((info) => {
    info.classList.toggle("dark", e.target.checked);
  });
  contactSpan.forEach((span) => {
    span.classList.toggle("dark", e.target.checked);
  });
  formLabels.forEach((label) => {
    label.classList.toggle("dark", e.target.checked);
  });
  projectImg.forEach((img) => {
    img.classList.toggle("dark", e.target.checked);
  });
  swiperDark.forEach((swiper) => {
    swiper.classList.toggle("dark", e.target.checked);
  });
});

// const mybObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && !entry.target.classList.contains("show")) {
//       entry.target.classList.add("show");
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".hidden");

// hiddenElements.forEach((element) => {
//   mybObserver.observe(element);
// });

const imagemUm = document.querySelector(".projects-img");

function abrirModal() {
  const janelaModal = document.querySelector(".janelamodal");
  janelaModal.classList.add("abrir");

  function fecharModalComEsc(e) {
    if (e.key === "Escape") {
      janelaModal.classList.remove("abrir");
    }
  }

  window.addEventListener("keydown", fecharModalComEsc);

  janelaModal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "janelamodal") {
      janelaModal.classList.remove("abrir");
    }
  });
}
imagemUm.addEventListener("click", abrirModal);

const imagemDois = document.querySelector(".bikcraft");

function abrirModalBik() {
  const bikcraftModal = document.querySelector(".bikcraftmodal");
  bikcraftModal.classList.add("abrir");

  function fecharModalComEsc(e) {
    if (e.key === "Escape") {
      bikcraftModal.classList.remove("abrir");
    }
  }

  window.addEventListener("keydown", fecharModalComEsc);

  bikcraftModal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "bikcraftmodal") {
      bikcraftModal.classList.remove("abrir");
    }
  });
}
imagemDois.addEventListener("click", abrirModalBik);

const imagemTres = document.querySelector(".animais");

function abrirModalAnimais() {
  const animaisModal = document.querySelector(".animaismodal");
  animaisModal.classList.add("abrir");

  function fecharModalComEsc(e) {
    if (e.key === "Escape") {
      animaisModal.classList.remove("abrir");
    }
  }

  window.addEventListener("keydown", fecharModalComEsc);

  animaisModal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "animaismodal") {
      animaisModal.classList.remove("abrir");
    }
  });
}

imagemTres.addEventListener("click", abrirModalAnimais);

var swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 20,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

const sections = document.querySelectorAll(".hidden");
const halfWindow = window.innerHeight * 0.6;

function animationScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const halfTop = sectionTop - halfWindow < 0;
    if (halfTop) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}
animationScroll();

window.addEventListener("scroll", animationScroll);
