const toggleMenu = document.querySelector('.toggleMenu');
const toggleClose = document.querySelector('.toggleClose');

function menuAtivo(event) {
  if (event.type === 'touchstart') event.prevent.default();
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');

  toggleClose.classList.remove('hide');
  toggleMenu.classList.add('hide');

  const listMenu = document.querySelector('.nav-menu');
  listMenu.classList.toggle('active');
  const navMenu = document.querySelector('.toggleNav');
  navMenu.classList.toggle('active');

  document.onclick = function (e) {
    if (
      !listMenu.contains(e.target) &&
      !toggleMenu.contains(e.target) &&
      !moon.contains(e.target) &&
      !sun.contains(e.target)
    ) {
      navMenu.classList.remove('active');
      listMenu.classList.remove('active');
      toggleClose.classList.add('hide');
      toggleMenu.classList.remove('hide');
    }
  };
}

toggleMenu.addEventListener('click', menuAtivo);
toggleMenu.addEventListener('touchstart', menuAtivo);

const menuzinho = document.querySelectorAll('.itens-menu');

function handleMenu() {
  toggleClose.classList.add('hide');
  toggleMenu.classList.remove('hide');
  const navMenu = document.querySelector('.toggleNav');

  navMenu.classList.remove('active');
}

menuzinho.forEach((item) => {
  item.addEventListener('click', handleMenu);
});

const trilho = document.querySelector('.container');

function mover() {
  trilho.classList.toggle('ativo');
}

trilho.addEventListener('click', mover);

const btn = document.getElementById('btn');
const swiperDark = document.querySelectorAll('.swiper');
const logoItem = document.querySelector('.logo');
const devLinks = document.querySelectorAll('.dev-links');
const introInfo = document.querySelector('.intro_info');
const devSocials = document.querySelectorAll('.dev-socials');
const headerMobile = document.querySelector('.header-menu');
const titleMain = document.querySelectorAll('.titleMain');
const aboutInfo = document.querySelector('.about-info');
const arrow = document.querySelectorAll('.arrow');
const aboutSoft = document.querySelector('.about-softskills');
const skillsIcons = document.querySelectorAll('.skillsIcon');
const skillsSpan = document.querySelectorAll('.skills-info span');
const skillsInfo = document.querySelectorAll('.skills-info');
const contactContainer = document.querySelector('.contact-container');
const contactSpan = document.querySelectorAll('#contact span');
const formLabels = document.querySelectorAll('label');
const formButton = document.querySelector('.button');
const projects = document.querySelectorAll('.projects');
const projectImg = document.querySelectorAll('.project-img');
const projectsAfter = document.querySelector('.projects-container');
const listMenu = document.querySelector('.nav-menu');
btn.addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
  logoItem.classList.toggle('dark', e.target.checked);
  listMenu.classList.toggle('dark', e.target.checked);
  introInfo.classList.toggle('dark', e.target.checked);
  headerMobile.classList.toggle('dark', e.target.checked);
  projectsAfter.classList.toggle('dark', e.target.checked);
  contactContainer.classList.toggle('dark', e.target.checked);
  formButton.classList.toggle('dark', e.target.checked);
  projects.forEach((projects) => {
    projects.classList.toggle('dark', e.target.checked);
  });
  devSocials.forEach((socials) => {
    socials.classList.toggle('dark', e.target.checked);
  });

  devLinks.forEach((links) => {
    links.classList.toggle('dark', e.target.checked);
  });
  titleMain.forEach((title) => {
    title.classList.toggle('dark', e.target.checked);
  });
  aboutInfo.classList.toggle('dark', e.target.checked);
  arrow.forEach((arrow) => {
    arrow.classList.toggle('dark', e.target.checked);
  });
  aboutSoft.classList.toggle('dark', e.target.checked);
  skillsIcons.forEach((icon) => {
    icon.classList.toggle('dark', e.target.checked);
  });
  skillsSpan.forEach((span) => {
    span.classList.toggle('dark', e.target.checked);
  });
  skillsInfo.forEach((info) => {
    info.classList.toggle('dark', e.target.checked);
  });
  contactSpan.forEach((span) => {
    span.classList.toggle('dark', e.target.checked);
  });
  formLabels.forEach((label) => {
    label.classList.toggle('dark', e.target.checked);
  });
  projectImg.forEach((img) => {
    img.classList.toggle('dark', e.target.checked);
  });
  swiperDark.forEach((swiper) => {
    swiper.classList.toggle('dark', e.target.checked);
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

const imagemUm = document.querySelector('.projects-img');

function abrirModal() {
  const janelaModal = document.querySelector('.janelamodal');
  janelaModal.classList.add('abrir');

  function fecharModalComEsc(e) {
    if (e.key === 'Escape') {
      janelaModal.classList.remove('abrir');
    }
  }

  window.addEventListener('keydown', fecharModalComEsc);

  janelaModal.addEventListener('click', (e) => {
    if (e.target.id == 'fechar' || e.target.id == 'janelamodal') {
      janelaModal.classList.remove('abrir');
    }
  });
}
imagemUm.addEventListener('click', abrirModal);

const imagemDois = document.querySelector('.bikcraft');

function abrirModalBik() {
  const bikcraftModal = document.querySelector('.bikcraftmodal');
  bikcraftModal.classList.add('abrir');

  function fecharModalComEsc(e) {
    if (e.key === 'Escape') {
      bikcraftModal.classList.remove('abrir');
    }
  }

  window.addEventListener('keydown', fecharModalComEsc);

  bikcraftModal.addEventListener('click', (e) => {
    if (e.target.id == 'fechar' || e.target.id == 'bikcraftmodal') {
      bikcraftModal.classList.remove('abrir');
    }
  });
}
imagemDois.addEventListener('click', abrirModalBik);

const imagemTres = document.querySelector('.animais');

function abrirModalAnimais() {
  const animaisModal = document.querySelector('.animaismodal');
  animaisModal.classList.add('abrir');

  function fecharModalComEsc(e) {
    if (e.key === 'Escape') {
      animaisModal.classList.remove('abrir');
    }
  }

  window.addEventListener('keydown', fecharModalComEsc);

  animaisModal.addEventListener('click', (e) => {
    if (e.target.id == 'fechar' || e.target.id == 'animaismodal') {
      animaisModal.classList.remove('abrir');
    }
  });
}

imagemTres.addEventListener('click', abrirModalAnimais);

var swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 20,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
});

const sections = document.querySelectorAll('.hidden');
const halfWindow = window.innerHeight * 0.6;

function animationScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const halfTop = sectionTop - halfWindow < 0;
    if (halfTop) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}
animationScroll();

window.addEventListener('scroll', animationScroll);

const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

sunIcon.addEventListener('click', (e) => {
  sunIcon.classList.add('hiddenIcon');
  moonIcon.classList.add('showIcon');
  document.body.classList.add('dark', e.target.checked);
  logoItem.classList.add('dark', e.target.checked);
  listMenu.classList.add('dark', e.target.checked);
  introInfo.classList.add('dark', e.target.checked);
  headerMobile.classList.add('dark', e.target.checked);
  projectsAfter.classList.add('dark', e.target.checked);
  contactContainer.classList.add('dark', e.target.checked);
  formButton.classList.add('dark', e.target.checked);
  projects.forEach((projects) => {
    projects.classList.add('dark', e.target.checked);
  });
  devSocials.forEach((socials) => {
    socials.classList.add('dark', e.target.checked);
  });

  devLinks.forEach((links) => {
    links.classList.add('dark', e.target.checked);
  });
  titleMain.forEach((title) => {
    title.classList.add('dark', e.target.checked);
  });
  aboutInfo.classList.add('dark', e.target.checked);
  arrow.forEach((arrow) => {
    arrow.classList.add('dark', e.target.checked);
  });
  aboutSoft.classList.add('dark', e.target.checked);
  skillsIcons.forEach((icon) => {
    icon.classList.add('dark', e.target.checked);
  });
  skillsSpan.forEach((span) => {
    span.classList.add('dark', e.target.checked);
  });
  skillsInfo.forEach((info) => {
    info.classList.add('dark', e.target.checked);
  });
  contactSpan.forEach((span) => {
    span.classList.add('dark', e.target.checked);
  });
  formLabels.forEach((label) => {
    label.classList.add('dark', e.target.checked);
  });
  projectImg.forEach((img) => {
    img.classList.add('dark', e.target.checked);
  });
  swiperDark.forEach((swiper) => {
    swiper.classList.add('dark', e.target.checked);
  });
});

moonIcon.addEventListener('click', (e) => {
  sunIcon.classList.remove('hiddenIcon');
  moonIcon.classList.remove('showIcon');
  document.body.classList.remove('dark', e.target.checked);
  logoItem.classList.remove('dark', e.target.checked);
  listMenu.classList.remove('dark', e.target.checked);
  introInfo.classList.remove('dark', e.target.checked);
  headerMobile.classList.remove('dark', e.target.checked);
  projectsAfter.classList.remove('dark', e.target.checked);
  contactContainer.classList.remove('dark', e.target.checked);
  formButton.classList.remove('dark', e.target.checked);
  projects.forEach((projects) => {
    projects.classList.remove('dark', e.target.checked);
  });
  devSocials.forEach((socials) => {
    socials.classList.remove('dark', e.target.checked);
  });

  devLinks.forEach((links) => {
    links.classList.remove('dark', e.target.checked);
  });
  titleMain.forEach((title) => {
    title.classList.remove('dark', e.target.checked);
  });
  aboutInfo.classList.remove('dark', e.target.checked);
  arrow.forEach((arrow) => {
    arrow.classList.remove('dark', e.target.checked);
  });
  aboutSoft.classList.remove('dark', e.target.checked);
  skillsIcons.forEach((icon) => {
    icon.classList.remove('dark', e.target.checked);
  });
  skillsSpan.forEach((span) => {
    span.classList.remove('dark', e.target.checked);
  });
  skillsInfo.forEach((info) => {
    info.classList.remove('dark', e.target.checked);
  });
  contactSpan.forEach((span) => {
    span.classList.remove('dark', e.target.checked);
  });
  formLabels.forEach((label) => {
    label.classList.remove('dark', e.target.checked);
  });
  projectImg.forEach((img) => {
    img.classList.remove('dark', e.target.checked);
  });
  swiperDark.forEach((swiper) => {
    swiper.classList.remove('dark', e.target.checked);
  });
});

function handleScroll() {
  const navMenu = document.querySelector('.toggleNav');
  const upTop = document.querySelector('.upToTop');
  const toggleClose = document.querySelector('.toggleClose');
  const toggleMenu = document.querySelector('.toggleMenu');

  if (this.scrollY >= 120) {
    navMenu.classList.remove('active');
    toggleClose.classList.add('hide');
    toggleMenu.classList.remove('hide');
  }

  this.scrollY >= 120
    ? upTop.classList.add('active')
    : upTop.classList.remove('active');
}

window.addEventListener('scroll', handleScroll);

const upTop = document.querySelector('.upToTop');
const toolTip = document.querySelector('.toolTip');

function upToTopClick() {
  toolTip.classList.add('hide');
}

upTop.addEventListener('click', upToTopClick);

window.onload = function () {
  window.scroll(0, 0);
};
