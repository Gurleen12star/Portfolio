let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
const totalProjects = document.querySelectorAll(".project").length;
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalProjects;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  updateCarousel();
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

setInterval(nextSlide, 6000); // Auto slide every 3 seconds
const canvas = document.getElementById("stars-canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const positions = [];

    for (let i = 0; i < starsCount; i++) {
      positions.push((Math.random() - 0.5) * 2000);
      positions.push((Math.random() - 0.5) * 2000);
      positions.push((Math.random() - 0.5) * 2000);
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    function animate() {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  