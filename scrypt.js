const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Инициализация карусели
updateCarousel();
