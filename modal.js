// * Open modal form with button je m'inscris
// * Close modal form with cross up-right

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

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalclose = document.querySelector(".close");

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

// * Suite du code

// Variable déclarée Envoi formulaire (form et pas ALL)
const form = document.querySelector("form");

// Variables déclarées
const inputs = document.querySelectorAll(
  'input[type="text"], input[type = "email"], input[type = "date"], input[type = "number"], input[type = "radio"], input[type = "checkbox"]'
);
let first, last, email, birthdate, number, radio, checkbox;

// Fonctions controleurs check
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const firstChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 30)) {
    errorDisplay("first", "Le prénom doit faire entre 3 et 30 caractères");
    first = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "first",
      "Le prénom ne doit pas contenir de caractères spéciaux"
    );
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

const lastChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "last",
      "Le nom de famille doit faire entre 3 et 20 caractères"
    );
    last = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "last",
      "Le nom de famille ne doit pas contenir de caractères spéciaux"
    );
    first = null;
  } else {
    errorDisplay("last", "", true);
    first = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const birthdateChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const numberChecker = (value) => {};

const radioChecker = (value) => {};

const checkboxChecker = (value) => {};

// Envoi du controleurs checkeur, si confirm envoi controle
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
        break;

      case "last":
        lastChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "birthdate":
        birthdateChecker(e.target.value);
        break;

      case "number":
        numberChecker(e.target.value);
        break;

      case "radio":
        radioChecker(e.target.value);
        break;

      default:
        nul;
    }
  });
});

// ** Valider et envoyer formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Test formulaire");

  if (first && last && email && birthdate && number && radio) {
    const data = {
      first,
      last,
      email,
      birthdate,
      number,
      radio,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));

    first = null;
    last = null;
    email = null;
    birthdate = null;
    number = null;
    radio = null;
    alert("Tout c'est bien passé votre demande a bien été envoyée ! ");
  } else {
    alert("Veuillez remplir tous les champs avant de valider");
  }
});

//const button = document.querySelector("#button");
//button.addEventListener('submit', valid);
