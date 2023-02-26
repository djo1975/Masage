export const toggleMenuBtn = document.getElementById('toggle-btn');
export const navLinks = document.getElementsByClassName('nav-links')[0];

toggleMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
