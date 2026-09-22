const letters = {
  missing: {
    label: 'open when you\'re missing me',
    title: 'For when you\'re missing me',
    message: 'I wish I could reach through this little letter and hold your hand right now. Until I can, remember that distance cannot make me love you any less. Look up at the sky. Somewhere under the same blue, I am thinking of you too.'
  },
  sad: {
    label: 'open when you\'re sad',
    title: 'For when your heart feels heavy',
    message: 'You do not have to be okay every minute of every day. Put the weight down for a while, breathe slowly, and let yourself be cared for. I love every version of you, especially the one that needs a little extra softness today.'
  },
  motivation: {
    label: 'open when you need motivation',
    title: 'For when you need a little push',
    message: 'You have already made it through every difficult day that came before this one. That is not luck, Zareef. That is your strength. Take the next tiny step; I will be cheering for you through every single one.'
  },
  smile: {
    label: 'open when you want to smile',
    title: 'For when you want to smile',
    message: 'Here is your official reminder that you are ridiculously lovable, slightly dramatic, and my absolute favorite person. Now please smile for me. Yes, that one. I knew you still had it.'
  },
  birthday: {
    label: 'special one for your birthday',
    title: 'Today is all about you',
    message: `Happy birthday to the boy who makes my world warmer, funnier, and so much more beautiful. ❤️

I hope this year brings you every good thing you deserve. Thank you for simply being you. I never thought you would become such an important person in my life, and that too, so quickly. 🥹

I really wish you were here so we could celebrate your birthday together in real life. In Sha Allah, one day we will. Until then, I guess we’ll have to make our virtual celebration count. 🫶🏻

Also BIG thanks to aunty who brought you in this world and I got you <3

I hate you hehe. ❤️

Special one for you ♡`
  }
};

const modal = document.querySelector('#letter-modal');
const modalLabel = document.querySelector('#modal-label');
const modalTitle = document.querySelector('#modal-title');
const modalMessage = document.querySelector('#modal-message');

function openLetter(key) {
  const letter = letters[key];
  modalLabel.textContent = letter.label;
  modalTitle.textContent = letter.title;
  modalMessage.textContent = letter.message;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('.close-modal').focus();
}

function closeLetter() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.envelope-card').forEach((card) => {
  card.addEventListener('click', () => openLetter(card.dataset.letter));
});
document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeLetter));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeLetter();
});
