// 1️⃣ TIMED UNLOCK
const locked = document.getElementById("locked");
const unlocked = document.getElementById("unlocked");
const countdown = document.getElementById("countdown");

// Unlock date: Feb 14, 2026 00:00
const unlockDate = new Date("February 14, 2026 00:00:00").getTime();

function checkUnlock() {
  const now = new Date().getTime();
  const diff = unlockDate - now;

  if (diff <= 0) {
    // Unlock site
    locked.classList.add("hidden");
    unlocked.classList.remove("hidden");
  } else {
    // Show countdown
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until your surprise!`;
  }
}
setInterval(checkUnlock, 1000);
checkUnlock();

// 2️⃣ MUSIC PLAY/PAUSE
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;
musicBtn.onclick = () => {
  if (!playing) { music.play(); musicBtn.textContent = "⏸ Pause Music"; }
  else { music.pause(); musicBtn.textContent = "🎶 Play Music"; }
  playing = !playing;
};

// 3️⃣ COUNTDOWN TIMER (optional inside site)
const timer = document.getElementById("timer");
const nextYear = new Date("February 14, 2027 00:00:00").getTime();
setInterval(() => {
  if (!timer) return;
  const now = new Date().getTime();
  const diff = nextYear - now;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  timer.textContent = `${days}d ${hours}h ${mins}m`;
}, 1000);

// 4️⃣ SURPRISE BUTTON
document.getElementById("surpriseBtn").onclick = () => {
  document.getElementById("surpriseText").classList.remove("hidden");
};
