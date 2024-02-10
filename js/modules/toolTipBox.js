export default function initToolTipBox(element) {
    const data = document.querySelectorAll('[data-tooltip]');

    function onMouseOver() {
        const toolTipBoxEvent = criarToolTipBox(this);

        onMouseMove.toolTipBoxEvent = toolTipBoxEvent;
        onMouseLeave.toolTipBoxEvent = toolTipBoxEvent;

        this.addEventListener('mousemove', onMouseMove);
        this.addEventListener('mouseleave', onMouseLeave);
    }

    const onMouseMove = {
        handleEvent(event) {
            this.toolTipBoxEvent.style.top = event.pageY + 20 + 'px';
            this.toolTipBoxEvent.style.left = event.pageX + 20 + 'px';
        },
    };

    const onMouseLeave = {
        handleEvent() {
            this.toolTipBoxEvent.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
        },
    };

    data.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function criarToolTipBox(element) {
        const toolTipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        toolTipBox.innerText = text;
        toolTipBox.classList.add('tooltip-event');
        document.body.append(toolTipBox);
        return toolTipBox;
    }
}
