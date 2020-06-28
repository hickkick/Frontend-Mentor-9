let active = 0;
const slides = document.querySelectorAll('.slider__item');
const btns = document.querySelectorAll('.slider-btn');

for (let btn of btns ) {
    btn.addEventListener('click', sliderToGo);
}

function sliderToGo () {
    slides[active].classList.remove('active');
    if (active + 1 == slides.length) {
        active = 0;
    } else {
    active++;
    }
    slides[active].classList.add('active');
}