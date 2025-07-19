// JavaScript for carousel functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  document.querySelector(".carousel-slide").style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Automatic slide every 3 seconds
setInterval(showNextSlide, 3000);