export default function initDarkMode() {
    const btn = document.querySelector('#btn');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    const body = document.querySelector('body');

    function handleClick(e) {
        body.classList.toggle('dark', e.target.checked);
    }

    function removeDark() {
        body.classList.remove('dark');
    }

    btn.addEventListener('click', handleClick);
    sunIcon.addEventListener('click', handleClick);
    moonIcon.addEventListener('click', removeDark);
}
