const input = document.querySelector("#num");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const clear = document.querySelector("#clear");
const add10 = document.querySelector("#add10");
const add100 = document.querySelector("#add100");
const add1000 = document.querySelector("#add1000");

let num = 0;

input.value = num;

increase.addEventListener("click", function() {
    if (input.value < 1000000) {
        num++;
        input.value = num;
    }
});

decrease.addEventListener("click", function() {
    if (input.value > 0) {
        input.value--;
    }
});

clear.addEventListener("click", function() {
    num = 0;
    input.value = num;
});

add10.addEventListener("click", function() {
    num += 10;
    input.value = num;
});

add100.addEventListener("click", function() {
    num += 100;
    input.value = num;
});

add1000.addEventListener("click", function() {
    num += 1000;
    input.value = num;
});





