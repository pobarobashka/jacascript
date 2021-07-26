'use strict'

const persone = {
    name:'Alex',
    tel:'+375292824301',
    parents:{
        mom:'Olga',
        dad:'Mike'
    }
}
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(clone);