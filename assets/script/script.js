const button = document.querySelector('.button btn5');

if(button) {
    button.parentElement.setAttribute('data-interactive', '');
    button.removeAttribute('hidden');
    button.addEventListener('click', evt => {
        evt.preventDefault();

        alert('Oh hi there 👋');
    });
}