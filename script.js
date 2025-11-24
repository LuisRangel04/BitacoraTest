document.addEventListener('DOMContentLoaded', function () {
    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const speed1 = 0.35; 
    const speed2 = 0.12; 
    function updateParallax() {
        const scrollY = window.scrollY;
        layer1.style.backgroundPosition = `center ${scrollY * 0.35}px`;
        layer2.style.transform = `translate3d(0, ${scrollY * speed2}px, 0)`;
    }

    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateParallax);
    });
    updateParallax();

    const banner = document.getElementById("cookie-banner");
    const btn = document.getElementById("accept-cookies");
    if (!localStorage.getItem("cookies-aceptadas")) {
        banner.style.display = "flex";
    } else {
        banner.style.display = "none";
    }
    btn.addEventListener("click", () => {
        localStorage.setItem("cookies-aceptadas", "true");
        banner.style.display = "none";
    });

});

