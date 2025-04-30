// first section
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.image-slide');

  let current = 0;
  function showImage(index) {
    images.forEach((img) => {
      img.classList.add('hidden');
      img.classList.remove('animate-slide-up');
    });
    images[index].classList.remove('hidden');
    images[index].classList.add('animate-slide-up');
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  showImage(current);
  setInterval(nextImage, 3000);
});
