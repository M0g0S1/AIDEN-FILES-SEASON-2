// ===== CONFETTI ENGINE v2.0 =====
const CONFETTI_COLORS = [
  '#e31c3d', '#fdb81e', '#2e8540', '#005ea2',
  '#8e44ad', '#e91e63', '#00bde3', '#ff6b6b'
];

function launchConfetti(count = 150) {
  const layer = document.getElementById('confetti-layer');
  if (!layer) return;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const left = Math.random() * 100;
    const size = 6 + Math.random() * 10;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 0.5;
    piece.style.left = left + 'vw';
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    piece.style.backgroundColor = color;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = duration + 's';
    piece.style.animationDelay = delay + 's';
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + delay) * 1000 + 100);
  }
}

// Auto-confetti on page load
window.addEventListener('load', () => {
  if (document.body.dataset.autoConfetti !== 'false') {
    launchConfetti(120);
  }
});

// Button-triggered confetti
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-confetti]');
  if (btn) {
    const count = parseInt(btn.dataset.confetti, 10) || 150;
    launchConfetti(count);
  }
});

// ===== CLASSIFIED PASSCODE =====
function checkPass() {
  const input = document.getElementById('passcode');
  const gate = document.getElementById('gate');
  const vip = document.getElementById('vip-lounge');
  if (!input || !gate || !vip) return;

  if (input.value.trim().toUpperCase() === 'SEASON2') {
    gate.classList.add('hidden');
    vip.classList.remove('hidden');
    launchConfetti(300);
  } else {
    alert('ACCESS DENIED: Incorrect passcode. Hint: It\'s the name of the season. All caps, no spaces.');
    input.value = '';
    input.focus();
  }
}

// Allow Enter key in passcode
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.id === 'passcode') {
    checkPass();
  }
});

window.checkPass = checkPass;

// ===== RICKROLL PROTOCOL v2 =====
function rickroll() {
  const container = document.getElementById('rickroll-embed');
  if (!container) return;

  // Show fake "loading classified file" overlay first
  if (container.dataset.loaded !== 'true') {
    container.dataset.loaded = 'true';
    container.classList.remove('hidden');
    container.innerHTML = `
      <div style="
        padding: 25px;
        background: #112e51;
        color: #00bde3;
        font-family: 'Courier New', monospace;
        border-radius: 8px;
        text-align: left;
        font-size: 0.95rem;
      ">
        <div>&gt; INITIALIZING ULTRA CLASSIFIED FILE #002...</div>
        <div>&gt; BYPASSING FIREWALL... <span style="color:#2e8540;">OK</span></div>
        <div>&gt; DECRYPTING FOOTAGE... <span style="color:#2e8540;">OK</span></div>
        <div>&gt; LAUNCHING SECURE VIEWER... <span style="color:#fdb81e;">STAND BY</span></div>
      </div>
    `;
    launchConfetti(200);
  }

  // Open the video in a new tab (works from file:// and https://)
  setTimeout(() => {
    window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
  }, 1400);
}

window.rickroll = rickroll;