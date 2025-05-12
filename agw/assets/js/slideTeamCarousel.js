document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("team-carousel");
  const cards = carousel.querySelectorAll(".team-card");
  const cardWidth = cards[0].offsetWidth + 16; // 16px = Tailwind's gap-4
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -(currentIndex * cardWidth);
    carousel.style.transform = `translateX(${offset}px)`;

    // Reset scale
    cards.forEach(card => card.classList.remove("scale-110", "z-10"));
    
    // Scale current
    if (cards[currentIndex]) {
      cards[currentIndex].classList.add("scale-110", "z-10");
    }
  }

  // Start carousel auto-slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 3000); // Change every 3 seconds

  updateCarousel(); // Initial state
});
