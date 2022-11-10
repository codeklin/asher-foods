const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const collapsibleMenu = document.querySelector('.collapsible-menu');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
});