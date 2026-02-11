    const slides = document.querySelectorAll('.slide');
let current = 0;

// Show the first slide
slides[current].classList.add('active');

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

// Button events
document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Optional: auto-slide every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);