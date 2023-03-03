const num = Number(prompt('Digite um número'));
const myNumber = document.querySelector('#myNumber');
const info = document.querySelector("#info");

myNumber.textContent = `Número escolhido: ${num}`;

for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
        info.innerHTML += `${i} `
    }
}
