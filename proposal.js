const response = document.querySelector('#proposal-response');

document.querySelectorAll('.proposal-choice').forEach((choice) => {
  choice.addEventListener('click', () => {
    if (choice.dataset.answer === 'yes') {
      window.location.href = 'congratulations.html';
    }
  });

  if (choice.dataset.answer === 'no') {
    const moveNoButton = () => {
      const margin = 24;
      const maxLeft = Math.max(margin, window.innerWidth - choice.offsetWidth - margin);
      const maxTop = Math.max(margin, window.innerHeight - choice.offsetHeight - margin);
      choice.classList.add('proposal-no-moving');
      choice.style.left = `${margin + Math.random() * (maxLeft - margin)}px`;
      choice.style.top = `${margin + Math.random() * (maxTop - margin)}px`;
      response.textContent = '';
    };

    choice.addEventListener('mouseenter', moveNoButton);
    choice.addEventListener('touchstart', (event) => {
      event.preventDefault();
      moveNoButton();
    }, { passive: false });
  }
});
