const info = document.querySelector("#info");
let values = [];

for(let i = 0; i < 5; i++) {
    values[i] = parseFloat(prompt(`Digite o ${i + 1}° número`))
}

info.innerHTML = `Maior número: ${Math.max(...values)}<br> Menor número: ${Math.min(...values)}`