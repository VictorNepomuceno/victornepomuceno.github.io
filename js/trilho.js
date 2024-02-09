export default function initTrilho() {
    const trilho = document.querySelector('.container');

    function mover() {
        trilho.classList.toggle('ativo');
    }

    trilho.addEventListener('click', mover);
}
