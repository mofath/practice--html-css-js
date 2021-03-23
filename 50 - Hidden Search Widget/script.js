const container = document.querySelector('.search');
const btn = document.querySelector('.btn');
const entry = document.querySelector('.entry');

btn.addEventListener('click', () => {
    container.classList.toggle('active');
    entry.focus;
});