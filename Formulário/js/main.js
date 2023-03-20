const emailRegex =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
const emailWarn = document.querySelectorAll("#warn")[0];
const passwordWarn = document.querySelectorAll("#warn")[1];
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // RESET WARN
  emailInput.style.border = "2px solid transparent"; 
  passwordInput.style.border = "2px solid transparent";
  emailWarn.innerHTML = "";
  passwordWarn.innerHTML = "";


  // CHECK EMAIL AND PASSWORD
  if (
    !emailRegex.test(emailInput.value) &&
    !passwordRegex.test(passwordInput.value)
  ) {
    emailInput.style.border = "2px solid red";
    passwordInput.style.border = "2px solid red";
    emailWarn.innerHTML = "E-mail Inválido";
    passwordWarn.innerHTML = "Senha Inválida Ex: [A-Z,a-z,0-9]";
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = "2px solid red";
    emailWarn.innerHTML = "E-mail Inválido";
  } else if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.style.border = "2px solid red";
    passwordWarn.innerHTML = "Senha Inválida Ex: [A-Z,a-z,0-9]";
  } else {
    alert("Logado!");
  }
  console.log(emailWarn.textContent);
});
