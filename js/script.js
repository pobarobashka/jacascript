'use strict'
document.addEventListener('DOMContentLoaded',()=> {
    //табы
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('show');
            item.classList.add('hide')
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
        ``
    }

    function showTabsContent(i) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent(0);
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
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

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);
    }

    modalTriger.forEach((item) => {
        item.addEventListener('click', () => {
            openModal();
        });
    });

    modal.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target === modal || target.getAttribute('data-close') === '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();

        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


// const now = new Date();
//Таймер

    const deadline = '2021-08-07';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 100 / 60) % 60),
            second = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'second': second
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            second = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            second.innerHTML = getZero(t.second);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

// классы для создания карточек
    const getResource = async (url,data) =>{
        const res = await fetch(url);
        if (!res.ok){
            throw  new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
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

    getResource('http://localhost:3000/menu').then(data=>{
        data.forEach(obj =>{
            new MenuCard(obj.img,obj.altimg,obj.title,obj.descr,obj.price,".menu__field .container").render();
        })
    })

    // axios.get('http://localhost:3000/menu'
    // ).then(data=>{
    //         data.data.forEach(obj =>{
    //             new MenuCard(obj.img,obj.altimg,obj.title,obj.descr,obj.price,".menu__field .container").render();
    //         });


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

    // Спасибо за заказ!!!!

    function showFinalModal(message) {
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
        setTimeout(function () {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    //slider

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    slidesField.style.width = 100 * slides.length +'%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide =>{
        slide.style.width = width;
    });

    slider.style.position = `relative`;

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);
    for (let i = 0; i<slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to',i+1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0 ){
            dot.style.opacity = `1`;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    addNull(slideIndex,current);
    addNull(slides.length,total);

    next.addEventListener('click',()=>{
        if (offset == widthCalc(width,slides.length)){
            offset = 0;
        }else {
            offset += widthCalc(width,2);
        }
        slidesField.style.transform = `translateX(-${offset}px`;
        if (slideIndex == slides.length){
            slideIndex = 1;
        }else {
            slideIndex++;
        }
        addNull(slideIndex,current);
        activeDots();
    });
    prev.addEventListener('click',()=>{
        console.log(offset);
        if (offset === 0 ){
            offset = widthCalc(width,slides.length);
        }else{
            offset-= widthCalc(width,2);
        }
        slidesField.style.transform = `translateX(-${offset}px`;
        if (slideIndex == 1){
            slideIndex = slides.length;
        }else {
            slideIndex--;
        }
        addNull(slideIndex,current);
        activeDots();
    });
    dots.forEach(dot =>{
        dot.addEventListener('click',(e)=>{
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = widthCalc(width,slideTo);
            slidesField.style.transform = `translateX(-${offset}px`;
            addNull(slideIndex,current);
            activeDots();
        })
    })
    function activeDots(){
        dots.forEach(dot => dot.style.opacity =`0.5`);
        dots[slideIndex-1].style.opacity =`1`;
    }
    function addNull(a,b){
        if (a<10){
            b.textContent = `0${a}`;

        }else {
            b.textContent = a;
        }
    }
    function widthCalc(a,b){
        return +a.replace(/\D/g,'') * (b-1);
    }

    //Калькулятор

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    if (localStorage.getItem('sex') && localStorage.getItem('ratio')){
        sex = localStorage.getItem('sex');
        ratio = localStorage.getItem('ratio');
    } else {
        sex = 'female';
        ratio = 1.375;
    }


    function calcTotal(){
        if (!sex || !height || !weight || !age || !ratio){
            result.textContent = '____';
            return;
        }
        if (sex === 'female'){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 *age)) * ratio);
        }else { result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 *height) - (5.7 * age)) * ratio);

        }
    }
    calcTotal();

    function getStaticInformation(parentSelector,activeClass){
        const elements = document.querySelectorAll(`${parentSelector} div`);
        elements.forEach(elem =>{
            if (elem.getAttribute('id') == sex || elem.getAttribute('data-ratio') == ratio){
                elements.forEach(element => element.classList.remove(activeClass));
                elem.classList.add(activeClass);
            }
           elem.addEventListener('click',()=>{
                if (elem.getAttribute('data-ratio')){
                    ratio = elem.getAttribute('data-ratio');
                    localStorage.setItem("ratio",elem.getAttribute('data-ratio'));
                }else {
                    sex = elem.getAttribute('id');
                    localStorage.setItem('sex',elem.getAttribute('id'));
                }
                elements.forEach(element => element.classList.remove(activeClass));
                elem.classList.add(activeClass);
                calcTotal();
            });
        });
    }
    getStaticInformation('#gender','calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big','calculating__choose-item_active');

    function getDynamicInformation(selector){
        const input  = document.querySelector(selector);

        input.addEventListener('input',()=>{

            if (input.value.match(/\D/g)){
                input.style.border = `1px solid red`;
            }else {
                input.style.border = `none`;
            }

            switch (input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');


});


