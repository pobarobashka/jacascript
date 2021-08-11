'use strict'
document.addEventListener('DOMContentLoaded',()=> {
    const tabs = require(`./modules/tabs`),
        modal = require(`./modules/modal`),
        calc = require(`./modules/calc`),
        timer = require(`./modules/timer`),
        cards = require(`./modules/cards`),
        slider = require(`./modules/slider`),
       postForm = require(`./modules/postForm`);
    tabs();
    modal();
    calc();
    timer();
    cards();
    slider();
    postForm();

});


