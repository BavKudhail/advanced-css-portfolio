// mobile nav buttons

// currently an issue that requires further debugging is how can the navbar be turned off after a click event has been executed
const menuBtn = document.querySelector('.hamburger-btn');
const navContainer = document.querySelector('.nav-container');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    navContainer.classList.toggle('visible');
})

