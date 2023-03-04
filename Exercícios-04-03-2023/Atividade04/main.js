/*
    Crie uma função que tenha um número como parâmetro, se o número for
    par retorne verdadeiro, se não, retorne falso.
*/

const num = parseFloat(prompt('Digite um número'));
const info = document.querySelector('#info');

const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return info.textContent = `${number} é par`;
  }
  return info.textContent = `${number} é ímpar`
};

evenOrOdd(num)