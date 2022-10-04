
// Generate a random number between start number and range, the while make sure you dont get above range.
// Gets button
const num = document.getElementById("Number");
// On button click executes funtion
num.addEventListener("click", Num);

let RandomNumber = function (start, range) {
    let GetRandom = Math.floor((Math.random() * range) + start);
    while (GetRandom > range) {
        GetRandom = Math.floor((Math.random() * range) + start);
    }

    return GetRandom
}

function Num() {
    document.querySelector("#RandomNumber").innerHTML = RandomNumber(10, 100);
}

// Generate a random name.
// Gets button
const Btn = document.getElementById("test");
// On button click executes funtion
Btn.addEventListener("click", RandomName);

// First name array
let FirstName = ["Ava", "Amelia", "Abigail", "Alexander", "Aiden", "Anthony", "Emma", "Evelyn", "Emily", "Elijah", "Ethan", "Jack",
    "Ezra", "Luna", "Layla", "Lily", "Lucas", "Lars", "Logan", "Sophia", "Scarlett", "Stella", "Sebastian", "Sebas", "Samuel", "Santiago"]

// Last name array
let LastName = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Sadolin", "Hinge", "Miller", "Davis", "Rodriguez",
    "Lopez", "Wilson", "Anderson", "Lee", "Perez", "Sparrow", "White", "Clark", "Harris", "Robinson", "Lewis", "Sanchez", "Hill", "Nguyen", "Adams", "Baker"]

function RandomName() {
    let NR = Math.floor(Math.random() * 26);
    while (NR > 26) {
        NR = Math.floor(Math.random() * 26);
    }
    console.log(NR)
    let NewName = FirstName[NR] + " " + LastName[NR];

    document.querySelector("#RandomName").innerHTML = NewName;
}







