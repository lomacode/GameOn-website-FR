/**
 * Add or remove the class "responsive" from the topnav element
 */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
/* The above code is creating a modal that will be used to display the form data. */
const modalbg = document.querySelector(".bground");

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalclose = document.querySelector(".close");

// launch modal event
/* This is creating a modal that will be used to display the form data. */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", closeModal);

// launch modal form
/**
 * The function `launchModal()` displays the modal background and sets the display property of the
 * modal background to block
 */
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
/**
 * The function `closeModal` is used to close the modal window
 */
function closeModal() {
  modalbg.style.display = "none";
}

// * Suite du code

// Variable déclarée Envoi formulaire (form et pas ALL)
/* This is creating a variable called `form` that is storing the HTML element `form`. */
const form = document.querySelector("form");

// Variables déclarées
/* This is creating a variable called `inputs` that is storing the HTML element `input[type="text"],
input[type = "email"], input[type = "date"], input[type = "number"], input[type = "radio"],
input[type = "checkbox"]`. */
const inputs = document.querySelectorAll(
  'input[type="text"], input[type = "email"], input[type = "date"], input[type = "number"], input[type = "radio"], input[type = "checkbox"]'
);
let first, last, email, birthdate, number, radio, checkbox;

// Fonctions controleurs check
/**
 * * If the input is valid, the container is set to display: none.
 * * If the input is invalid, the container is set to display: block.
 * * The error message is displayed in the span element.
 * @param tag - The name of the input field.
 * @param message - The message to display in the error container.
 * @param valid - Boolean value that determines whether the input is valid or not.
 */
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

/**
 * The function checks if the value is empty, if it's not, it checks if the value is between 3 and 30
 * characters, if it's not, it checks if the value contains special characters, if it does, it displays
 * an error message, if it doesn't, it displays a success message and stores the value in the variable
 * `first`
 * @param value - The value of the input.
 */
const firstChecker = (value) => {
  console.log(value);
  if (value.length > 0 && (value.length < 3 || value.length > 30)) {
    errorDisplay(
      "first",
      "Minimum 3 et maximum 20 caractères ! Pas de caractères spéciaux acceptés."
    );
    first = null;
  } else if (!value.match(/^[a-zA-Z_.-]*$/)) {
    errorDisplay("first", "Pas de caractères spéciaux acceptés !");
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

/**
 * It checks if the value is valid.
 * @param value - the value of the input
 */
const lastChecker = (value) => {
  console.log(value);
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "last",
      "Minimum 3 et maximum 20 caractères ! Pas de caractères spéciaux acceptés."
    );
    last = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("last", "Pas de caractères spéciaux acceptés !");
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

/**
 * It checks if the email is valid.
 * @param value - The value of the input field.
 */
const emailChecker = (value) => {
  console.log(value);
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Insérer e-mail valide !");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

/**
 * It checks if the birthdate is valid.
 * @param value - The value of the input field.
 */
const birthdateChecker = (value) => {
  console.log(value);
  console.log(validateBirthdate(value));
  if (!validateBirthdate(value)) {
    errorDisplay("birthdate", "La date n'est pas valide");
    birthdate = null;
  } else {
    errorDisplay("birthdate", "", true);
    birthdate = value;
  }
};

// Inscription possible que à majorité (18ans)
// Fonction validation date anniversaire naissance
// RETURN TRUE si le temps en secondes date naissance > à 567648000 secondes = 18 années

/**
 * Validate the birthdate of a user
 * @param birthdate - The date of birth of the user.
 * @returns Nothing.
 */
function validateBirthdate(birthdate) {
  let todayDate = new Date();
  let birthdateDate = new Date(birthdate);
  console.log(birthdateDate);
  let diff = todayDate.getTime() - birthdateDate.getTime();
  let diffInSeconds = diff / 1000;
  let majorityInSeconds = 567648000;

  if (diffInSeconds >= majorityInSeconds) {
    return true;
  } else {
    return false;
  }
}

/**
 * It checks if the value is a number and if it is, it returns the value. If it is not a number, it
 * returns null.
 * @param value - The value of the input.
 */
const numberChecker = (value) => {
  console.log(value);
  if (!value) {
    errorDisplay("quantity", "Valeure non correcte");
    number = null;
  } else {
    errorDisplay("quantity", "", true);
    number = value;
  }
};

/**
 * It checks if the radio button is checked or not.
 * @param value - The value of the radio button.
 * @returns The value of the radio button.
 */
const radioChecker = (button) => {
  console.log(button);
  let btn = document.getElementById(button);
  if (btn.checked) {
    document.getElementById("error-location").innerHTML = "";
    radio = btn.value;
    return true;
  } else {
    document.getElementById("error-location").innerHTML =
      "Ce champ est obligatoire";
  }
};

/**
 * It checks if the checkbox is checked or not.
 * @param value - The value of the checkbox.
 * @returns a boolean value.
 */
const checkboxChecker = (button) => {
  let btn = document.getElementById(button);
  console.log(button);
  if (btn.checked) {
    document.getElementById(`${button}-error`).innerHTML = "";
    checkbox = btn.value;
    return true;
  } else {
    document.getElementById(`${button}-error`).innerHTML =
      "Accepter est une obligation";
  }
};

// Envoi du controleurs checkeur, si confirm envoi controle
/* The above code is adding an event listener to each input element. When the input element is changed,
the code will run a function that will check the input value and change the class of the input
element. */
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
        console.log(e.target.value);
        birthdateChecker(e.target.value);
        break;

      case "quantity":
        numberChecker(e.target.value);
        break;

      case "radio":
        console.log(e.target.value);
        radioChecker(e.target.value);
        break;

      case "location1":
      case "location2":
      case "location3":
      case "location4":
      case "location5":
      case "location6":
        console.log(e.target.value);
        radioChecker(e.target.id);
        break;

      case "checkbox1":
        console.log(e.target.value);
        checkboxChecker(e.target.id);
        break;

      case "checkbox2":
        console.log(e.target.value);
        checkboxChecker(e.target.id);
        break;

      default:
        null;
    }
  });
});

// ** Valider et envoyer formulaire

/* The code above is creating a form with a submit button. When the user clicks on the submit button,
the code will check if all the fields are filled. If they are, it will send the data to the server.
If not, it will display an alert. */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Test formulaire");
  console.log(first, last, email, birthdate, number, radio);

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

    document.getElementById("modal-body").style.display = "none";
    document.getElementById("end-modal").style.display = "block";
  } else {
    document.getElementById("modal-body").style.display = "block";
    document.getElementById("end-modal").style.display = "none";
  }
});

//const button = document.querySelector("#button");
//button.addEventListener('submit', valid);
