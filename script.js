setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// Contador
const startDate = new Date("2025-01-10T00:00:00");
function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const dias = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);
  document.getElementById("timer").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
setInterval(updateTimer, 1000);
updateTimer();

const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const playPauseBtn = document.getElementById('playPauseBtn');

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.innerHTML = '⏯️';
  } else {
    audio.play();
    playPauseBtn.innerHTML = '⏸️';
  }
  isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', togglePlay);

// Atualizar barra conforme o tempo da música
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
});

// Tornar a barra clicável
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

document.getElementById("enterBtn").addEventListener("click", function () {
  document.getElementById("entryScreen").classList.add("hide");
  document.getElementById("mainContent").classList.add("active");
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 500);