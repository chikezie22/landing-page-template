'use strict';

const testimonialWrapper = document.getElementById('testimonial-carousel-wrapper');
const carousel = testimonialWrapper.children[0];
const slideButtons = document.getElementById('slide-controls');
const prev = slideButtons.children[0];
const next = slideButtons.children[1];

const slideInterval = 3000;
let currentSlide = 0;
let isSliding = false;

let TestimonialCarouselInterval = setInterval(slideCarousel, slideInterval);

function slideCarousel() {
    const numberOfSlides = carousel.children.length;
    if (isSliding) return;

    currentSlide = (currentSlide + 1) % numberOfSlides;
    goToSlide(currentSlide);
}

function goToSlide(index) {
    const numberOfSlides = carousel.children.length;
    const slideWidth = testimonialWrapper.getBoundingClientRect().width;

    isSliding = true;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${slideWidth * index}px)`;

    // Reset state after transition
    carousel.addEventListener('transitionend', () => {
        isSliding = false;
    }, { once: true });

    handleShowSlideButtons(numberOfSlides, index);
}

function handleShowSlideButtons(numberOfSlides, index) {
    prev.classList.toggle('opacity-0', index === 0);
    prev.disabled = index === 0;

    next.classList.toggle('opacity-0', index === numberOfSlides - 1);
    next.disabled = index === numberOfSlides - 1;
}

prev.onclick = () => changeSlidesOnClick('prev');
next.onclick = () => changeSlidesOnClick('next');

function changeSlidesOnClick(direction) {
    if (isSliding) return;

    clearInterval(TestimonialCarouselInterval);
    const numberOfSlides = carousel.children.length;

    if (direction === 'prev' && currentSlide > 0) currentSlide--;
    else if (direction === 'next' && currentSlide < numberOfSlides - 1) currentSlide++;

    goToSlide(currentSlide);
    TestimonialCarouselInterval = setInterval(slideCarousel, slideInterval);
}
