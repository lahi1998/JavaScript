
// Alert popup
// Gets button
const alertPopup = document.getElementById("Alert");
// On button click executes funtion
alertPopup.addEventListener("click", AlertPopup);

function AlertPopup() {
  alert("I am an alert box!");
}


// Confirm box popup
// Gets button
const confirm1 = document.getElementById("Confirm");
// On button click executes funtion
confirm1.addEventListener("click", Confirm);
let txt = " ";
function Confirm() {

  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.querySelector("#ConfirmReturn").innerHTML = txt
}


// Prompt Popup
// Gets button
const prompt1 = document.getElementById("Prompt");
// On button click executes funtion
prompt1.addEventListener("click", Prompt);

let text;
let person;
function Prompt() {
  person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.querySelector("#Name").innerHTML = text;
}