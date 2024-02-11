const count1 = document.getElementById('count1');
const count1Plus = document.getElementById('count1Plus');
const count1Minus = document.getElementById('count1Minus');

const count2 = document.getElementById('count2');
const count2Plus = document.getElementById('count2Plus');
const count2Minus = document.getElementById('count2Minus');

const count3 = document.getElementById('count3');
const count3Plus = document.getElementById('count3Plus');
const count3Minus = document.getElementById('count3Minus');

const count4 = document.getElementById('count4');
const count4Plus = document.getElementById('count4Plus');
const count4Minus = document.getElementById('count4Minus');

const countReset = document.getElementById('countReset');


let count1init = 0;
let count2init = 0;
let count3init = 0;
let count4init = 0;

count1Plus.addEventListener('click', function () {

    if (count1init === 33) {
        return alert('Subhan Allah complete. Proceed to the next one.')
    }

    count1init += 1;
    count1.innerText = count1init;
})

count1Minus.addEventListener('click', function () {

    if (count1init === 0) {
        return alert('Cannot enter negative value.')
    }

    count1init -= 1;
    count1.innerText = count1init;
})



count2Plus.addEventListener('click', function () {

    if (count2init === 33) {
        return alert('Alhamdulilah complete. Proceed to the next one.')
    }

    count2init += 1;
    count2.innerText = count2init;
})

count2Minus.addEventListener('click', function () {

    if (count2init === 0) {
        return alert('Cannot enter negative value.')
    }

    count2init -= 1;
    count2.innerText = count2init;
})



count3Plus.addEventListener('click', function () {

    if (count3init === 33) {
        return alert('Astagfirullah complete. Proceed to the next one.')
    }

    count3init += 1;
    count3.innerText = count3init;
})

count3Minus.addEventListener('click', function () {

    if (count3init === 0) {
        return alert('Cannot enter negative value.')
    }

    count3init -= 1;
    count3.innerText = count3init;
})




count4Plus.addEventListener('click', function () {

    if (count4init === 34) {
        return alert('Allahuakber complete. Proceed to the next one.')
    }

    count4init += 1;
    count4.innerText = count4init;
})

count4Minus.addEventListener('click', function () {

    if (count4init === 0) {
        return alert('Cannot enter negative value.')
    }

    count4init -= 1;
    count4.innerText = count4init;
})


countReset.addEventListener('click', function () {

    count1init = 0;
    count2init = 0;
    count3init = 0;
    count4init = 0;

    count1.innerText = 0;
    count2.innerText = 0;
    count3.innerText = 0;
    count4.innerText = 0;
})