'use strict'
import tabs  from './modules/tabs';
import modal  from './modules/modal';
import calc  from './modules/calc';
import timer  from './modules/timer';
import cards  from './modules/cards';
import slider  from './modules/slider';
import postForm  from './modules/postForm';

document.addEventListener('DOMContentLoaded',()=> {

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]','.modal');
    calc();
    timer('.timer','2021-09-01');
    cards();
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    postForm();

});


