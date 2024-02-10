import initAnimaScroll from './modules/animaScroll.js';
import initCloseOnScroll from './modules/closeOnScroll.js';
import initDarkMode from './modules/darkMode.js';
import initMenuAtivo from './modules/menuAtivo.js';
import initModal from './modules/modal.js';
import initOnLoad from './modules/onLoad.js';
import initToolTipBox from './modules/toolTipBox.js';
import initTrilho from './modules/trilho.js';

initMenuAtivo();
initTrilho();
initDarkMode();
initModal();
initOnLoad();
initAnimaScroll();
initCloseOnScroll();
initToolTipBox();

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
