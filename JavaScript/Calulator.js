let screenoutput = " ";

// Gets button
const numdot = document.getElementById("Number.");
const num0 = document.getElementById("Number0");
const num1 = document.getElementById("Number1");
const num2 = document.getElementById("Number2");
const num3 = document.getElementById("Number3");
const num4 = document.getElementById("Number4");
const num5 = document.getElementById("Number5");
const num6 = document.getElementById("Number6");
const num7 = document.getElementById("Number7");
const num8 = document.getElementById("Number8");
const num9 = document.getElementById("Number9");
const divide = document.getElementById("Operation÷");
const times = document.getElementById("Operation*");
const plus = document.getElementById("Operation+");
const minus = document.getElementById("Operation-");
const equals = document.getElementById("Equals");
const allclear = document.getElementById("All-clear");
const Delete = document.getElementById("Delete");

// On button click executes funtion
numdot.addEventListener("click", Numdot);
num0.addEventListener("click", Num0);
num1.addEventListener("click", Num1);
num2.addEventListener("click", Num2);
num3.addEventListener("click", Num3);
num4.addEventListener("click", Num4);
num5.addEventListener("click", Num5);
num6.addEventListener("click", Num6);
num7.addEventListener("click", Num7);
num8.addEventListener("click", Num8);
num9.addEventListener("click", Num9);
divide.addEventListener("click", Divide);
times.addEventListener("click", Times);
plus.addEventListener("click", Plus);
minus.addEventListener("click", Minus);
equals.addEventListener("click", Equals);
allclear.addEventListener("click", AllClear);
Delete.addEventListener("click", Deleter);

//button functions
function Numdot() {
    screenoutput = screenoutput + "."
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num0() {
    screenoutput = screenoutput + "0"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num1() {
    screenoutput = screenoutput + "1"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num2() {
    screenoutput = screenoutput + "2"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num3() {
    screenoutput = screenoutput + "3"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num4() {
    screenoutput = screenoutput + "4"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num5() {
    screenoutput = screenoutput + "5"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num6() {
    screenoutput = screenoutput + "6"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num7() {
    screenoutput = screenoutput + "7"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num8() {
    screenoutput = screenoutput + "8"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Num9() {
    screenoutput = screenoutput + "9"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Divide() {
    screenoutput = screenoutput + "÷"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Times() {
    screenoutput = screenoutput + "*"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Plus() {
    screenoutput = screenoutput + "+"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Minus() {
    screenoutput = screenoutput + "-"
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Equals() {
    screenoutput = (eval(screenoutput));
    document.querySelector("#Screen").innerHTML = screenoutput
}
function AllClear() {
    screenoutput = " "
    document.querySelector("#Screen").innerHTML = screenoutput
}
function Deleter() {
    screenoutput = screenoutput.slice(0, -1);
    document.querySelector("#Screen").innerHTML = screenoutput
}
