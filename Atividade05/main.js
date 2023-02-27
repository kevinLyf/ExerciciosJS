const salary = parseFloat(prompt("Digite seu salário"));
const newSalary = salary + salary * (30/100);
const span = document.querySelector("#span");

if(salary > 0) {
    if(salary < 500) {
        span.innerHTML = `Seu novo salário é de: R$${newSalary}.`;
    } else {
        span.innerHTML = `Você não recebe aumento.`;
    }
} else {
    span.innerHTML = `Você está devendo ?`
}