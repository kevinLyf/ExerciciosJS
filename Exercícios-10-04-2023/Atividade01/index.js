import { question } from "readline-sync";

const string1 = question("Digite qualquer coisa: ");
const string2 = question("Digite novamente qualquer coisa: ");
const array = [];

function myFunction(s1, s2) {
  if (s1.indexOf(s2) !== -1) {
    array.push(s2 + s1);
  } else {
    array.push(s1 + s2);
  }
  return array;
}

console.log(myFunction(string1, string2));
