import {openModal, closeModal} from "./modal";
import {postData2} from "../services/services";

function postForm(){
    //отправка формы
    const forms = document.querySelectorAll('form'),
        message = {
            loading: 'icons/spinner.svg',
            success: 'С вами свяжутся',
            fail: 'Паломалося'
        };
    forms.forEach(form => {
        postData(form);
    })

    function showFinalModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal');
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
                        
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(function () {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    function postData(form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading
            statusMessage.style.cssText = `
            display:block;
            margin:0 auto;
            `
            form.insertAdjacentElement('afterend', statusMessage);


            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            /*fetch('server.php', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                }
            })*/
            postData2('http://localhost:3000/requests',json
            ).then(data=> {
                console.log(data);
                showFinalModal(message.success);
            }).catch(()=>{
                showFinalModal(message.fail);
            }).finally(function (){
                form.reset();
                statusMessage.remove();
            })

        });
    }
}
export default postForm;