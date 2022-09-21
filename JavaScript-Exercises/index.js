const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const showError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;

  inputControl.classList.add("invalid");
  inputControl.classList.remove("success");
};

const showSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";

  inputControl.classList.remove("invalid");
  inputControl.classList.add("success");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = rePassword.value.trim();

  if (usernameValue === "") {
    showError(username, "Your Full Name is required");
  } else {
    showSuccess(username);
  }

  if (emailValue === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    showError(email, "Provide a valid email address");
  } else {
    showSuccess(email);
  }

  if (passwordValue === "") {
    showError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    showError(password, "Password must be at least 8 character.");
  } else {
    showSuccess(password);
  }

  if (rePasswordValue === "") {
    showError(rePassword, "Please confirm your password");
  } else if (rePasswordValue !== passwordValue) {
    showError(rePassword, "Passwords doesn't match");
  } else {
    showSuccess(rePassword);
  }
};
