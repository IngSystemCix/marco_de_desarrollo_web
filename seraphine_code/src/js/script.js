document.addEventListener("DOMContentLoaded", function () {
  const btnContainers = document.querySelectorAll(".btn-container");

  btnContainers.forEach((container) => {
    const dropdown = container.querySelector(".drop-down");
    let timeout;

    // Manejar mouse enter en el contenedor
    container.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      dropdown.classList.add("visible");
    });

    // Manejar mouse leave en el contenedor
    container.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove("visible");
      }, 200);
    });

    // Manejar mouse enter en el dropdown
    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
    });

    // Manejar mouse leave en el dropdown
    dropdown.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove("visible");
      }, 200);
    });

    // Agregar manejo de foco y blur para el input en el dropdown de búsqueda
    const input = dropdown.querySelector("input");
    if (input) {
      input.addEventListener("focus", () => {
        clearTimeout(timeout);
        dropdown.classList.add("visible");
      });

      input.addEventListener("blur", () => {
        timeout = setTimeout(() => {
          dropdown.classList.remove("visible");
        }, 200);
      });
    }
  });
});
