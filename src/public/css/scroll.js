document.addEventListener("DOMContentLoaded", function () {
    console.log("scroll.js cargado correctamente"); 

    const cajas = document.querySelectorAll(".caja:not(.inicial)"); // Solo las que no son iniciales

    const mostrarCajas = () => {
        cajas.forEach((caja) => {
            const rect = caja.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.85) { 
                caja.classList.add("visible");
            }
        });
    };

    // Llamamos a la función cuando se carga la página y al hacer scroll
    mostrarCajas();
    window.addEventListener("scroll", mostrarCajas);
});
