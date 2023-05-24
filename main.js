import passwordValidator from "./passwordValidator";

const passwordInput = document.getElementById("password");
const errorMessage = document.querySelector(".error-message");
const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = passwordInput.value;
  const errors = passwordValidator(password);
  
  if (errors.length > 0) {
    errorMessage.textContent = errors.join(" ");
  } else {
    errorMessage.textContent = "";
  }
});
