const navbarToggler = document.querySelector('.bars');
const navbar = document.querySelector('.links');

navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-navbar');
    navbarToggler.classList.toggle('opened');
    changeTogglerIcon();
});