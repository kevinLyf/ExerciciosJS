const span = document.querySelector("#span");
const maior = document.querySelector("#maior");
let numeros = [];
let maiorNumero = 0;

for (let i = 1; i < 11; i++) {
  numeros[i - 1] = Number(prompt(`Digite o ${i}° número.`));
  if (maiorNumero < numeros[i - 1]) {
    maiorNumero = numeros[i - 1];
  }
  span.innerHTML += `<br>${numeros[i - 1]}`;
}
maior.innerHTML += maiorNumero;
console.log(maiorNumero);
