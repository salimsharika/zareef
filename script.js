const candles = [...document.querySelectorAll('.candle')];
const candlesLeft = document.querySelector('#candles-left');
const progressFill = document.querySelector('#progress-fill');
const instruction = document.querySelector('#candle-instruction');
const confettiContainer = document.querySelector('#confetti-container');

candles.forEach((candle) => {
  candle.addEventListener('click', () => {
    if (candle.classList.contains('off')) return;
    candle.classList.add('off');
    const remaining = candles.filter((item) => !item.classList.contains('off')).length;
    candlesLeft.textContent = remaining;
    progressFill.style.width = `${remaining / candles.length * 100}%`;

    if (remaining === 0) {
      candlesLeft.textContent = '0';
      instruction.textContent = 'Opening your birthday surprise...';
      window.setTimeout(() => {
        window.location.href = 'birthday-message.html';
      }, 350);
    } else {
      instruction.textContent = remaining === 1 ? 'One more little flame...' : 'Beautiful. Keep going...';
    }
  });
});

function createConfetti() {
  const colors = ['#f07867', '#f7d971', '#c4dfe7', '#efcbd1', '#27252a'];
  for (let index = 0; index < 85; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetto';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * .8}s`;
    piece.style.setProperty('--drift', `${(Math.random() - .5) * 260}px`);
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}
