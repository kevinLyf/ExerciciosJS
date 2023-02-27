const altura =  parseFloat(prompt("Digite sua altura"));
const peso = parseFloat(prompt("Digite seu peso"));
const span = document.querySelector('#span');
const imc = peso / (altura * altura);

if(imc >= 30) {
    span.innerHTML = `Peso: ${peso}<br>Altura: ${altura}<br>imc: ${imc.toFixed(2)}<br> Situação: Obesidade`;
}
else if (imc >= 25 && imc <= 29.99) {
    span.innerHTML = `Peso: ${peso}<br>Altura: ${altura}<br>imc: ${imc.toFixed(2)}<br> Situação: Sobrepeso`;
}
else if (imc >= 18.5 && imc <= 24.99) {
    span.innerHTML = `Peso: ${peso}<br>Altura: ${altura}<br>imc: ${imc.toFixed(2)}<br> Situação: Normal`;
}
else if (imc < 18.5) {
    span.innerHTML = `Peso: ${peso}<br>Altura: ${altura}<br>imc: ${imc.toFixed(2)}<br> Situação: Baixo peso`;
}
