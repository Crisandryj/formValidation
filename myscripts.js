const email = document.getElementById("email");
const zip = document.getElementById("zipcode");
const country = document.getElementById("country");
const error = document.getElementById("errormessage");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    error.textContent = "";
    error.className = "error";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    error.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    error.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    error.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

zip.addEventListener("input", () => {
  if (zip.validity.valid) {
    error.textContent = "";
    error.className = "error";
  } else {
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    error.textContent = "You need to enter an email address.";
  } else if (zip.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    error.textContent = "Entered value needs to be an email address.";
  } else if (zip.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    error.textContent = `Zip should be at least ${zip.minLength} numbers; you entered ${zip.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
