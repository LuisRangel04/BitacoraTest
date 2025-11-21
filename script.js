document.addEventListener('DOMContentLoaded', function () {
    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');

    // Ajusta velocidades para la profundidad deseada
    const speed1 = 0.35; // fondo (más rápido = más movimiento relativo)
    const speed2 = 0.12; // capa frontal (más lento)

    function updateParallax() {
        const scrollY = window.scrollY;
        // movemos las capas verticalmente con translate3d para mejor rendimiento
        layer1.style.transform = `translate3d(0, ${scrollY * speed1}px, 0)`;
        layer2.style.transform = `translate3d(0, ${scrollY * speed2}px, 0)`;
    }

    // Usamos requestAnimationFrame para suavizar y optimizar
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateParallax);
    });

    // Ejecutar una vez al cargar para posicionar bien
    updateParallax();
});