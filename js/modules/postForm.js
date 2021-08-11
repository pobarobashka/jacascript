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
    const postData2 = async (url,data) =>{
        const res = await fetch(url,{
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        });
        return await res.json();
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
module.exports = postForm;