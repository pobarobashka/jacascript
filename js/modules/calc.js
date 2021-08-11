function calc(){
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

}
export default calc;