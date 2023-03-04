/**
  Faça uma função que receba um único valor representando segundos.
  Essa função deverá convertê-lo para hora, minutos e segundos. Todas as
  variáveis devem ser passadas como parâmetro, não havendo variáveis
  globais.
 */


let totalSeconds = parseInt(prompt('Digite o tempo em segundos'));
const info = document.querySelector('#info');

const converter = (totalSeconds) => {
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor(totalSeconds / 3600);
  const seconds = Math.floor(totalSeconds % 60);

  return (info.innerHTML = `Tempo: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
};

converter(totalSeconds);
