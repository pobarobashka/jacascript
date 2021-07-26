 const log = function (a,b,...rest){
    console.log(a,b,rest);
 }

log('dasd','dsadad','dsadada','dsadasdasdc',4);

function calcOrDouble(number,index=2){
    console.log(number*index);
}
calcOrDouble(3);