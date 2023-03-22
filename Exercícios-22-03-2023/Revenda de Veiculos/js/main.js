const carName = document.getElementById("name");
const price = document.getElementById("price");
const calcBtn = document.getElementById("calc");
const info = document.getElementById("info");

calcBtn.addEventListener("click", () => {
    if(!carName.value || !price.value) return alert("Preencha os campos!");
    info.innerHTML = `Nome do veículo: ${carName.value}<br>Preço: ${price.value}<br>Entrada de R$${(price.value * 0.5).toFixed(2, '0')}<br>12 x R$${(price.value / 12).toFixed(2, '0')}`;
});
