/*
    Crie uma função que recebe um objeto com o número e porcentagem das
    propriedades como parâmetros e retorne a porcentagem fornecida do
    número.
*/

const info = document.querySelector('#info');
const number = parseFloat(prompt("Digite um número"));
const percentage = parseFloat(prompt("Digite a porcentagem"));

const object = {
	number: number,
	percentage: percentage / 100
}

const myFunction = (object) => {
	return object.number * (object.percentage);
}

info.textContent = `Resultado: ${myFunction(object)}`