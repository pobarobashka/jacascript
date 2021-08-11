function closeModal(modalSelector) {
    const m = document.querySelector(modalSelector)
    m.classList.remove('show');
    m.classList.add('hide');
    document.body.style.overflow = '';
}

function openModal(modalSelector) {
    const m = document.querySelector(modalSelector)
    m.classList.remove('hide');
    m.classList.add('show');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId);
}
//Модальные окна

function modal(triggerSelector,modalSelector){
    const modalTriger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalClose = document.querySelector('[data-close]');



    modalTriger.forEach((item) => {
        item.addEventListener('click', () => {
            openModal(modalSelector);
        });
    });

    modal.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target === modal || target.getAttribute('data-close') === '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);

        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}
export {openModal, closeModal};
export default modal;

