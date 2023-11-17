const email = document.getElementById("email");
const zip = document.getElementById("zipcode");
const country = document.getElementById("country");
const error = document.getElementById("errormessage");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    error.textContent = "";
    error.className = "error";
  } else {
    showError();
  }
});

function showError() {
  if (email.validity.typeMismatch) {
    error.textContent = "Please enter in a proper email address";
  } else if (email.validity.valueMissing) {
    error.textContent = "Please longer email address";
  } else if (email.validity.tooShort) {
    error.textContent = "Please longer email address";
  }

  error.className = "error active";
}
