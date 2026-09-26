const envelope = document.querySelector('#final-envelope');
const message = document.querySelector('#final-message');

envelope.addEventListener('click', () => {
  const isOpen = envelope.classList.toggle('open');
  envelope.setAttribute('aria-expanded', String(isOpen));
  message.classList.toggle('show', isOpen);
  if (isOpen) message.scrollIntoView({ behavior: 'smooth', block: 'center' });
});