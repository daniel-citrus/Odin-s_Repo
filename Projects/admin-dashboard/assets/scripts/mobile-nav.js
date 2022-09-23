let navToggle = document.getElementById("nav-toggle");
let mobileNavBar = document.querySelector(".mobile-navigation");

navToggle.addEventListener('click', () => {
    mobileNavBar.classList.toggle('active');
    navToggle.classList.toggle('active');
})