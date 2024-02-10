export default function initMenuAtivo() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const toggleClose = document.querySelector('.toggleClose');

    function menuAtivo(event) {
        if (event.type === 'touchstart') event.preventDefault();
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
}
