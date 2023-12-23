
// JavaScript to toggle the active class for the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});
