// Toggle menú responsive
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Carrusel
let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll(".carousel-item");

    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Formulario
document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("mensajeExito").style.display = "block";

    this.reset();
});
