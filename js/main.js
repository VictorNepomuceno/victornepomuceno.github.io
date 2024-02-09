import initAnimaScroll from './animaScroll.js';
import initCloseOnScroll from './closeOnScroll.js';
import initDarkMode from './darkMode.js';
import initMenuAtivo from './menuAtivo.js';
import initModal from './modal.js';
import initOnLoad from './onLoad.js';
import initTrilho from './trilho.js';

initMenuAtivo();
initTrilho();
initDarkMode();
initModal();
initOnLoad();
initAnimaScroll();
initCloseOnScroll();

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
