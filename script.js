

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
  "images/images(1).jfif",
  "images/images(2).jfif",
  "images/images(3).jfif",
  "images/images(4).jfif",
  "images/images(5).jfif",
  "images/images(6).jfif",
  "images/images(7).jfif",
  "images/images(8).jfif",
  "images/images(9).jfif",
  "images/images(10).jfif"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function showImage(index) {
  if (index < 0) currentIndex = images.length - 1;
  else if (index >= images.length) currentIndex = 0;
  else currentIndex = index;

  carouselImage.src = images[currentIndex];
}

// Auto-slide every 3 seconds
setInterval(() => {
  showImage(currentIndex + 1);
}, 3000);

// Arrow buttons
document.querySelector(".prev").onclick = () => showImage(currentIndex - 1);
document.querySelector(".next").onclick = () => showImage(currentIndex + 1);



