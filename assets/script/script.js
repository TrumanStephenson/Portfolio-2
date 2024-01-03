// const button = document.querySelector('.button btn5');

// if(button) {
//     button.parentElement.setAttribute('data-interactive', '');
//     button.removeAttribute('hidden');
//     button.addEventListener('click', evt => {
//         evt.preventDefault();

//         alert('Oh hi there 👋');
//     });
// }

//          Commented out to get this nav bar setup
// document.addEventListener('DOMContentLoaded', function () {
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navList = document.getElementById('navigator');

//     mobileMenu.addEventListener('click', function () {
//         navList.classList.toggle('show');
//     });
// });


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))