const arrow = document.querySelector('#arrow');
const nurse = document.querySelector('#nurse');
const video = document.querySelector('.video');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const slide = () => {
  console.log(arrow);
  setTimeout(() => {
    arrow.classList.remove('animate-slide-right');
    nurse.classList.remove('animate-slide-left');
    arrow.offsetWidth;
    arrow.classList.add('animate-slide-right');
    nurse.classList.add('animate-slide-left');
    slide();
  }, 10000);
};
window.addEventListener('load', slide);

play.addEventListener('click', (e) => {
  e.preventDefault();
  video.play();
  play.classList.toggle('hidden');
  pause.classList.remove('hidden');
});

pause.addEventListener('click', (e) => {
  e.preventDefault();
  video.pause();
  pause.classList.toggle('hidden');
  play.classList.toggle('hidden');
});

video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play();
});

// carousel implementation
const carouselTrack = document.querySelector('.carousel-track');
// console.log(carouselTrack);
const slides = carouselTrack.children;
let currentIndex = 0;

const nextSlide = () => {
  currentIndex++;
  carouselTrack.style.transition = `transform 0.5s ease-in-out`;
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  // console.log(currentIndex);
};

// Start auto-advance
let interval = setInterval(nextSlide, 3000);

carouselTrack.addEventListener('transitionend', () => {
  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      carouselTrack.style.transition = 'none'; // Disable transition while resetting position
      carouselTrack.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 1000);
  }
});

// https://github.com/livebloggerofficial/Counter-Animation/tree/main
