"use strict"

if(4==9){
    console.log('Ok!');
}else{
    console.log('Fuck!');
}

let num = 50;

// if(num<49){
//     console.log('Error!');
// }else if (num>50){
//     console.log('error!');
// }else {
//     console.log("Ok!")
// }
//
// (num === 50) ? console.log('Ok!') : console.log('Error!');

// switch (num){
//     case 49:
//         console.log('Error!');
//         break;
//     case 100:
//         console.log('Error!');
//         break;
//     case 50:
//         console.log('Ok!');
//         break;
//     default:
//         console.log('Error!');
//         break;
// }

while(num<55){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num<55);

for(let i = 1; i < 8; i++){
    if (i===6){
        break;
    }
    console.log(i);
}