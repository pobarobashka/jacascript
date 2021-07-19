/*
document.addEventListener('DOMContentLoaded',()=>{

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
})*/
