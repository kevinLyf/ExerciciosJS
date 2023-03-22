const kg = document.getElementById("kg");
const byClient = document.getElementById("byClient");
const calc = document.getElementById("calc");
const info = document.getElementById("info");

calc.addEventListener("click", () => {
    if(!kg.value || !byClient.value) return alert("Preencha todos os dados!");
    info.innerHTML = `Valor a pagar R$${kg.value * (byClient.value / 1000)}`;
});