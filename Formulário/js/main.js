const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;

const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if(!emailRegex.test(emailInput.value) && !passwordRegex.test(passwordInput.value)) {
    emailInput.style.border = "2px solid red";
    passwordInput.style.border = "2px solid red";
  }
  else if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = "2px solid red";
  }
  else if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.style.border = "2px solid red";
  }
  else {
    alert('Logado!');
  }

});
