export default function initModal() {
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
}
