const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);

//shop by support scroll effect
const cardSlider = document.querySelector('.ShopbySport');

cardSlider.addEventListener('wheel', (e) => {
    e.preventDefault();
    cardSlider.scrollLeft += e.deltaY;
});
