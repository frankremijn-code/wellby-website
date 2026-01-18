// Mobile menu toggle
const toggleButton = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});