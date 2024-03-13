let passElement = document.getElementById('pass');
decodeButton = document.querySelector('.btn').addEventListener('click', function() {

        for(let i = 100; i <= passElement.value; i++) {
            if(i < passElement.value) continue;
            alert(i);
            return;
        }
        if(isNaN(passElement)) alert('false');
        if(passElement.value < 100) alert ('to short');
    })












    
        // let i = 0
    // while (i < 10000) {
    //     if( i == passElement.value) {
    //         alert(i);
    //         break;
    //     } 
    //     i = i + 1;
    // }
