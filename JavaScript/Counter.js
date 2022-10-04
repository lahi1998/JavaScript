let count = 0;

// Gets button
const increase = document.getElementById("btn-Increase");
const decrese = document.getElementById("btn-Decrease");
const reset = document.getElementById("btn-Reset");
// On button click executes funtion
increase.addEventListener("click", Increase);
decrese.addEventListener("click", Decrease);
reset.addEventListener("click", Reset);

// Increase by 1 to counter and change value text
function Increase() {
    count++;
    document.querySelector("#Value").innerHTML = count;
}
// Decrease by 1 to counter and change value text
function Decrease() {
    count--;
    document.querySelector("#Value").innerHTML = count;
}
// Set counter to 0 and change value text
function Reset() {
    count = 0;
    document.querySelector("#Value").innerHTML = count;
}
