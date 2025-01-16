document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > .nav-sec-list2").classList.toggle("hidden--mobile");
});

let currentIndex = 0;

function updateSlide() {
  const slides = document.querySelector('.h-slides');
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}
