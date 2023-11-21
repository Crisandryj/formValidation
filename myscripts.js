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
    showZipError();
  }
});
//show errors for emails
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
//show errors for zip
function showZipError() {
  if (zip.validity.typeMismatch) {
    error.textContent = "Please enter in a proper zip code";
  } else if (zip.validity.valueMissing) {
    error.textContent = "The zip code is missing";
  } else if (zip.validity.tooShort) {
    error.textContent = "zip is too short";
  }
  error.className = "error active";
}
