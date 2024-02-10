export default function initDarkMode() {
    const btn = document.querySelector('#btn');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    const body = document.querySelector('body');
    const actions = ['click', 'touchstart'];

    function handleClick(e) {
        body.classList.toggle('dark', e.target.checked);
    }

    function removeDark() {
        body.classList.remove('dark');
    }

    actions.forEach((item) => {
        btn.addEventListener(item, handleClick);
    });

    sunIcon.addEventListener('pointerdown', handleClick);
    moonIcon.addEventListener('pointerdown', removeDark);
}
