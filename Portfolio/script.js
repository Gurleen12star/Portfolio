// THREE.JS STAR BACKGROUND
// STAR FIELD BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.z = 400;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
document.getElementById("stars-background").appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const starCount = 10000;
const positions = [];

for (let i = 0; i < starCount; i++) {
  const x = THREE.MathUtils.randFloatSpread(1000);
  const y = THREE.MathUtils.randFloatSpread(1000);
  const z = THREE.MathUtils.randFloatSpread(1000);
  positions.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const starField = new THREE.Points(starsGeometry, starMaterial);
scene.add(starField);

function animate() {
  requestAnimationFrame(animate);
  starField.rotation.x += 0.0005;
  starField.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate();

// RESIZE HANDLER
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Typing Animation
const typed = new Typed("#typed", {
  strings: ["Gurleen"],
  typeSpeed: 100,
  backSpeed: 50,
  showCursor: true,
  loop: false
});



// RESIZE HANDLER
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// HERO FADE-IN USING INTERSECTIONOBSERVER
const heroContent = document.querySelector('.hero-content');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroContent.classList.remove('hidden'); // Fade in
    } else {
      heroContent.classList.add('hidden'); // Fade out
    }
  });
}, { threshold: 0.6 });

observer.observe(heroContent);
document.addEventListener("DOMContentLoaded", () => {
  // Starry background is always loaded
  initStars();

  // If About Card exists, animate it
  const aboutCard = document.querySelector(".about-card");
  if (aboutCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    observer.observe(aboutCard);
  }

  // If Hero exists (only on index.html), animate it
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroContent.classList.remove('hidden');
        } else {
          heroContent.classList.add('hidden');
        }
      });
    }, { threshold: 0.6 });

    heroObserver.observe(heroContent);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutCard = document.querySelector(".about-card");

  if (aboutCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    observer.observe(aboutCard);

    // ✅ Auto-show if page has no scroll
    setTimeout(() => aboutCard.classList.add("show"), 300);
  }
});
// Force Show About Section Animations Immediately
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".slide-left");
  const image = document.querySelector(".slide-right");

  // Add animations after a short delay to mimic entry effect
  setTimeout(() => {
    text.classList.add("show-left");
    image.classList.add("show-right");
  }, 300); // Delay for smooth slide-in
});
const slides = document.querySelectorAll('.project-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.arrow.left');
const nextBtn = document.querySelector('.arrow.right');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
let autoSlide;

function updateCarousel(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  carousel.style.transform = `translateX(-${index * 100}%)`;

  indicators.forEach(dot => dot.classList.remove('active'));
  indicators[index].classList.add('active');

  currentIndex = index;
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    updateCarousel(currentIndex + 1);
  }, 3000);
}

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  updateCarousel(currentIndex - 1);
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  updateCarousel(currentIndex + 1);
  startAutoSlide();
});

indicators.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    updateCarousel(index);
    startAutoSlide();
  });
});

// Initialize
updateCarousel(currentIndex);
startAutoSlide();
