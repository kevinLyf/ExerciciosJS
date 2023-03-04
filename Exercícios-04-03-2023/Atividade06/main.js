/*
    Crie uma função que tenha um número como parâmetro e depois
    arredonde o número para o segundo dígito após a vírgula e retorne o número
    arredondado.
*/

const myFunction = (number) => {
  return Number(number).toFixed(2);
};

console.log(myFunction(10.599));
