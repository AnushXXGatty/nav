const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    const items = document.querySelector('.menu-items')

    items.classList.toggle('visible');
})