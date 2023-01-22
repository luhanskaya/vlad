import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

const modal = new bootstrap.Modal(document.querySelector('.js-modal'));

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-add-slide')) {
        e.preventDefault();
        modal.hide();
    }
});