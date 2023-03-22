const medicamento = document.getElementById("medicamento");
const preco = document.getElementById("preco");
const calc = document.getElementById("calc");
const info = document.getElementById("info");


calc.addEventListener("click", () => {

    info.innerHTML = `Nome do medicamento: ${medicamento.value}<br>Preço: ${preco.value}<br> Leve 2 por apenas R$${Math.floor(preco.value * 2)}`;
})