'use strict'
window.addEventListener('DOMContentLoaded',()=>{
        //табы
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent(){
        tabsContent.forEach((item)=>{
            item.classList.remove('active');
            item.classList.add('hide')
        });
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabsContent(i){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('active','fade');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabsContent();
    showTabsContent(0);
    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if (target==item){
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
    })

    //Таймер

     const deadline = '2021-08-01';
    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
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

    //Модальные окна

    const modalTriger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');
    function closeModal(){
        modal.classList.remove('active');
        modal.classList.add('hide');
        document.body.style.overflow='';
    }
    function openModal(){
        modal.classList.remove('hide');
        modal.classList.add('active');
        document.body.style.overflow='hidden';
        clearInterval(modalTimerId);
    }

    modalTriger.forEach((item)=>{
        item.addEventListener('click',()=>{
           openModal();
        });
    });

    modal.addEventListener('click',(event)=>{
        const target = event.target;
        if (target && target==modal){
            closeModal();
        }else if(target==modalClose){
                closeModal();
        }
    });
    document.addEventListener('keydown',(event)=>{
        if(event.code ==='Escape' && modal.classList.contains('active')){
            closeModal();

        }
    });

    const modalTimerId = setTimeout(openModal,3000);

    function showModalByScroll(){
        if (window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll',showModalByScroll);
        }
    }

    window.addEventListener('scroll',showModalByScroll);
});



