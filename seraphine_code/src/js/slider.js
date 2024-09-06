document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.style.transform = `translateX(-${index * 100}%)`; // Mover el contenedor hacia la izquierda
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa el índice de la diapositiva
    showSlide(currentIndex);
  }

  // Cambiar de diapositiva cada 3 segundos
  setInterval(nextSlide, 3000);

  // Mostrar la primera diapositiva al cargar
  showSlide(currentIndex);
});
