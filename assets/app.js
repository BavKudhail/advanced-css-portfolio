// mobile nav buttons
const menuBtn = document.querySelector('.hamburger-btn');
const navContainer = document.querySelector('.nav-container');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    navContainer.classList.toggle('visible');
})
