

// 2️⃣ MUSIC PLAY/PAUSE
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;
musicBtn.onclick = () => {
  if (!playing) { music.play(); musicBtn.textContent = "⏸ Pause Music"; }
  else { music.pause(); musicBtn.textContent = "🎶 Play Music"; }
  playing = !playing;
};



// 5️⃣ PHOTO CAROUSEL
const images = [
  "images/image (1).jfif",
  "images/image (2).jfif",
  "images/image (3).jfif",
  "images/image (4).jfif",
  "images/image (5).jfif",
  "images/image (6).jfif",
  "images/image (7).jfif",
  "images/image (8).jfif",
  "images/image (9).jfif",
  "images/image (10).jfif"
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {

  const carouselImage = document.getElementById("carouselImage");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showImage(index) {
    if (index < 0) currentIndex = images.length - 1;
    else if (index >= images.length) currentIndex = 0;
    else currentIndex = index;

    carouselImage.src = images[currentIndex];
  }

  // Auto slide
  setInterval(() => {
    showImage(currentIndex + 1);
  }, 10000);

  // Buttons (only if they exist)
  if (prevBtn) {
    prevBtn.onclick = () => showImage(currentIndex - 1);
  }

  if (nextBtn) {
    nextBtn.onclick = () => showImage(currentIndex + 1);
  }

});


// Arrow buttons
document.querySelector(".prev").onclick = () => showImage(currentIndex - 1);
document.querySelector(".next").onclick = () => showImage(currentIndex + 1);






