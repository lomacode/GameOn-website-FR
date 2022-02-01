// Test
var a = 20,
  b = 4,
  result;


// Go code

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"], input[type = "email"], input[type = "date"], input[type = "number"], input[type = "radio"], input[type = "checkbox"]'
);


// Fonctions controleurs check
const firstChecker = () => {};
const lastChecker = () => {};
const emailChecker = () => {};
const birthdateChecker = () => {};
const numberChecker = () => {};
const radioChecker = () => {};
const checkboxChecker = () => {};




inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.value) {
      case "first":
        firstChecker()
        break;

      case "last":
        firstChecker()
        break;

      case "email":
        emailChecker()
        break

      case "birthdate":
        emailChecker()
        break

      case "number":
        emailChecker()
        break

      case "radio":
        emailChecker()
        break

      case "radio":
        checkboxChecker()
        break

      default:
        nul;
    }
  });
})









// Start code

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalclose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}