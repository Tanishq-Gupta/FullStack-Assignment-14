const counter = document.querySelector('.count'),
minus = document.querySelector('.minus');

var count = 0;

function handlePlus() {
    count++;
    counter.innerHTML = count;
    if(count === 1) {
        minus.removeAttribute('disabled');
    }
}

function handleMinus() {
    count--;
    counter.innerHTML = count;
    if(count === 0) {
        minus.setAttribute('disabled', "");
    }
}