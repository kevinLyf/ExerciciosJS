const num = Number(prompt("Digite um número"));
const span = document.querySelector('#span');

const positiveOrNegative = (number) => {
    if(number > 0) {
        return 1
    } else {
        return 0
    }
    
 
}
span.textContent = `${positiveOrNegative(num)}`;
