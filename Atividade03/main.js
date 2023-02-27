const nome = prompt("Qual o seu nome?");
const genero = prompt("Qual o seu gênero?");
const idade = parseInt(prompt("Qual a idade?"));
const contribuicao = parseInt(prompt("Qual o tempo de contribuição?"));
const span = document.querySelector("#span");

if (idade > 0 && contribuicao > 0) {
  // MASCULINO
  if (
    genero.toLocaleLowerCase() === "masculino" ||
    genero.toLocaleLowerCase() === "m"
  ) {
    if (idade >= 65 && contribuicao >= 35) {
      span.innerHTML = `O senhor pode se aponsentar!<br>Nome: ${nome}<br>Idade: ${idade}<br>Gênero: ${genero}<br>Tempo de contribuição: ${contribuicao}`;
    } else {
      span.innerHTML = `O senhor não pode se aponsentar!<br>Nome: ${nome}<br>Idade: ${idade}<br>Gênero: ${genero}<br>Tempo de contribuição: ${contribuicao}`;
    }
  }
  // FEMININO
  else if (
    genero.toLocaleLowerCase() === "feminino" ||
    genero.toLocaleLowerCase() === "f"
  ) {
    if (idade >= 60 && contribuicao >= 30) {
      span.innerHTML = `A senhora pode se aponsentar!<br>Nome: ${nome}<br>Idade: ${idade}<br>Gênero: ${genero}<br>Tempo de contribuição: ${contribuicao}`;
    } else {
      span.innerHTML = `A senhora não pode se aponsentar!<br>Nome: ${nome}<br>Idade: ${idade}<br>Gênero: ${genero}<br>Tempo de contribuição: ${contribuicao}`;
    }
  }
  // OUTROS
  else {
    span.textContent = "Só aceitamos masculino e feminino!";
  }
} else {
  span.textContent = "A idade ou a contribuição está errada!";
}
