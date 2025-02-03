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
