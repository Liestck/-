const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => menu.classList.toggle('show'));

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const numbersBlock = document.querySelector('.countdown-numbers');
const finishedBlock = document.querySelector('.countdown-finished');

const targetDate = new Date('2026-06-06T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    numbersBlock.style.display = 'none';
    finishedBlock.style.display = 'block';
    return;
  }

  numbersBlock.style.display = 'flex';
  finishedBlock.style.display = 'none';

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const mins = Math.floor(diff / 1000 / 60) % 60;
  const secs = Math.floor(diff / 1000) % 60;

  daysEl.textContent = days;
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(mins).padStart(2, '0');
  secondsEl.textContent = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== АВТОЗАПУСК МУЗЫКИ =====
const bgMusic = document.getElementById('bgMusic');

// Запускаем при первом клике в любом месте страницы
document.addEventListener('click', function startMusic() {
  bgMusic.muted = false;
  bgMusic.volume = 0.5;
  bgMusic.play().catch(e => console.log('Музыка не запустилась:', e));
  document.removeEventListener('click', startMusic);
}, { once: true });

// Или при первом касании (мобильные)
document.addEventListener('touchstart', function startMusicTouch() {
  bgMusic.muted = false;
  bgMusic.volume = 0.5;
  bgMusic.play().catch(e => console.log('Музыка не запустилась:', e));
  document.removeEventListener('touchstart', startMusicTouch);
}, { once: true });