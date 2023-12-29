// const button = document.querySelector('.button btn5');

// if(button) {
//     button.parentElement.setAttribute('data-interactive', '');
//     button.removeAttribute('hidden');
//     button.addEventListener('click', evt => {
//         evt.preventDefault();

//         alert('Oh hi there 👋');
//     });
// }


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});