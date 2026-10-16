document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("#menu a");

  // Configuración del IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Detecta la sección activa según el scroll
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remover la clase 'activo' de todos los enlaces
        navLinks.forEach((link) => link.classList.remove("activo"));

        // Obtener el id de la sección actual
        const id = entry.target.getAttribute("id");

        // Buscar el enlace que apunta a esta sección y agregarle la clase 'activo'
        const activeLink = document.querySelector(`#menu a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("activo");
        }
      }
    });
  }, observerOptions);

  // Observar cada sección de la página
  sections.forEach((section) => observer.observe(section));
});

// Lógica para mostrar y cerrar la imagen flotante
const btnMostrar = document.getElementById("btnMostrar");
const modalImagen = document.getElementById("modalImagen");
const btnCerrar = document.getElementById("btnCerrar");

if (btnMostrar && modalImagen && btnCerrar) {
  // Al hacer clic en el botón, se muestra la imagen cambiando el display a flex
  btnMostrar.addEventListener("click", () => {
    modalImagen.style.display = "flex";
  });

  // Al hacer clic en la equis, se oculta la imagen
  btnCerrar.addEventListener("click", () => {
    modalImagen.style.display = "none";
  });

  // Opcional: Si el usuario hace clic en el fondo oscuro fuera de la foto, también se cierra
  modalImagen.addEventListener("click", (e) => {
    if (e.target === modalImagen) {
      modalImagen.style.display = "none";
    }
  });
}