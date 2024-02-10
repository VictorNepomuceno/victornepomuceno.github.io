export default function initCloseOnScroll() {
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
}
