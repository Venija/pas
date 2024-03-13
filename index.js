import decode from "./decode.js";

let passElement = document.getElementById('pass');
let i = 0;


const buttomdecode = document.querySelector('#btn');

buttomdecode.addEventListener('click',() => decode(passElement));













        // let i = 0
    // while (i < 10000) {
    //     if( i == passElement.value) {
    //         alert(i);
    //         break;
    //     } 
    //     i = i + 1;
    // }
    // {

    //     for(let i = 100; i <= passElement.value; i++) {
    //         if(i < passElement.value) continue;
    //         alert(i);
    //         return;
    //     }
    //     if(isNaN(passElement)) alert('false');
    //     if(passElement.value < 100) alert ('to short');
    // }