
function decode () {
for(let i = 100; i <= passElement.value; i++) {
    if(i < passElement.value) continue;
    alert(i);
    return;
}
if(isNaN(passElement)) alert('false');
if(passElement.value < 100) alert ('to short');
}

