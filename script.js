const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const toast = document.querySelector('.toast');
let toastTimer;

menuButton.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    clearTimeout(toastTimer);
    toast.textContent = `你選了「${button.dataset.name}」這句心意 ♡`;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  });
});

document.querySelector('#note-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = '收到你的信了！下一封可可小箋會寄到信箱 ♡';
  event.target.reset();
});

document.querySelectorAll('.quiz-options button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.quiz-result').textContent = button.dataset.result;
    document.querySelectorAll('.quiz-options button').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
  });
});
