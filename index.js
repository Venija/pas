// const passElement = document.getElementById('pass').value;
const decodeButton = document.querySelector('.btn').onclick = function startDecode() {

    // let i = 0
    // while (i < 10000) {
    //     if( i == passElement.value) {
    //         alert(i);
    //         break;
    //     } 
    //     i = i + 1;
    // }
        for(let i = 110; i <= passElement.value; i++) {
            if(i < passElement.value) continue;
            alert(i)

        }  
    }



    passElement = document.getElementById('pass');