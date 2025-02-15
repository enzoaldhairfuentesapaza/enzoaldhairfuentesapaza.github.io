document.addEventListener('DOMContentLoaded', () => {
    const no = document.getElementById('no');
    const si = document.getElementById('si');
    const mensaje = document.getElementById('mensaje');

    no.addEventListener('mouseover', moverBoton);
    si.addEventListener('click', () => {
        mensaje.classList.remove('ocultar');
    });

    function moverBoton() {
        const maxX = window.innerWidth - no.clientWidth;
        const maxY = window.innerHeight - no.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        no.style.left = `${randomX}px`;
        no.style.top = `${randomY}px`;
    }
});
