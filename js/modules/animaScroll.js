export default function initAnimaScroll() {
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
}
