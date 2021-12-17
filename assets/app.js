const menuBtn = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    navContainer.classList.toggle('visible');
})
