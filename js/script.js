'use strict'
document.addEventListener('DOMContentLoaded',()=>{
    //табы
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    function hideTabsContent(){
        tabsContent.forEach((item)=>{
            item.classList.remove('show');
            item.classList.add('hide')
        });
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active');
        });``
    }
    function showTabsContent(i){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show','fade');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabsContent();
    showTabsContent(0);
    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if (target === item){
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
    })

//Модальные окна

const modalTriger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]');
function closeModal(){
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow='';
}
function openModal(){
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow='hidden';
    // clearInterval(modalTimerId);
}

modalTriger.forEach((item)=>{
    item.addEventListener('click',()=>{
        openModal();
    });
});

modal.addEventListener('click',(event)=>{
    const target = event.target;
    if (target && target === modal || target.getAttribute('data-close') == ''){
        closeModal();
    }
});
document.addEventListener('keydown',(event)=>{
    if(event.code ==='Escape' && modal.classList.contains('show')){
        closeModal();

    }
});
function showModalByScroll(){
    if (window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
        openModal();
        window.removeEventListener('scroll',showModalByScroll);
    }
}

window.addEventListener('scroll',showModalByScroll);


const now = new Date();
//Таймер

const deadline = '2021-08-01';
function getTimeRemaining(endTime){
    const t = Date.parse(endTime) - Date.parse(now),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/100/60)%60),
        second = Math.floor((t/1000)%60);
    return{
        'total':t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'second':second
    }
}
function getZero(num){
    if (num>=0&&num<10){
        return `0${num}`;
    }else {
        return num;
    }
}


function setClock(selector,endTime){
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        second = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock,1000);
    updateClock();

    function updateClock(){
        const t = getTimeRemaining(endTime);
        days.innerHTML=getZero(t.days);
        hours.innerHTML=getZero(t.hours);
        minutes.innerHTML=getZero(t.minutes);
        second.innerHTML=getZero(t.second);
        if (t.total<=0){
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer',deadline);

// классы для создания карточек
    class MenuCard{
        constructor(src,alt,title,descr,price,parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH(){
            this.price=this.price*this.transfer;
        }
        render(){
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>`
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        15,
        ".menu__field .container"

    ).render();
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        25,
        ".menu__field .container"

    ).render();
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        20,
        ".menu__field .container"

    ).render();

    //forms
    const  forms = document.querySelectorAll('form'),
        message = {
            loading: 'icons/spinner.svg',
            success: 'С вами свяжутся',
            fail:'Паломалося'
        };
    forms.forEach(form=>{
        postData(form);
    })

    function postData(form){
        form.addEventListener('submit',function(event){
            event.preventDefault();

            const statusMessage= document.createElement('img');
            statusMessage.src = message.loading
            statusMessage.style.cssText = `
            display:block;
            margin:0 auto;
            `
            form.insertAdjacentElement('afterend',statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST','server.php');

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);
            const obj = {};
            formData.forEach(function (value,key){
                obj[key]=value;
            });
            const json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('load',function (){
                if (request.status === 200){
                    showFinalModal(message.success);
                    form.reset();
                    statusMessage.remove();

                }else {
                    showFinalModal(message.fail);

                        statusMessage.remove();

                }
            });
        });
    }

    // Спасибо за заказ!!!!

    function showFinalModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
                        
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(function (){
            thanksModal.remove();
            prevModalDialog.classList.add('hide');
            prevModalDialog.classList.remove('hide');
            closeModal();
            },4000)
    }
})