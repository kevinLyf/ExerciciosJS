const span = document.querySelector("#span");
const letra = prompt("Digite A ou P");
let notas = [];

const getAverage = (nota1, nota2, nota3, letra) => {
  if (letra === "p") {
    const media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
    span.textContent = `Média Ponderada: ${media}`;
    return media.toFixed(2);
  } else if (letra === "a") {
    const media = (nota1 + nota2 + nota3) / 3;
    span.textContent = `Média: ${media}`;
    return media.toFixed(2);
  } else {
    return (span.textContent = "Esse parada não existe");
  }
};

if (letra.toLowerCase() === "p" || letra.toLowerCase() === "a") {
  for (let i = 0; i < 3; i++) {
    notas[i] = Number(prompt(`Digite a ${i + 1}° nota.`));
  }

  getAverage(notas[0], notas[1], notas[2], letra.toLowerCase());
}
