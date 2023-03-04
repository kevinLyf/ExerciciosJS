const startHour = parseInt(prompt('Digite a hora de início'));
const startMin = parseInt(prompt('Digite os minutos de início'));
const endHour = parseInt(prompt('Digite a hora de termino'));
const endMin = parseInt(prompt('Digite a minutos de termino'));
const info = document.querySelector("#info");

function calcularDuracao(firstHour, firstMin, endHour, endMin) {

  let hourDuration;
  let minDuration;
  
  

  if(endHour >= firstHour) {
    hourDuration = endHour - firstHour
  } else {
    firstHour = firstHour - 24
    hourDuration = endHour - firstHour - 1
  }

  if(endMin >= firstMin) {
    minDuration = endMin - firstMin;
  } else {
    minDuration = firstMin - endMin
  }

  return info.innerHTML = `Começou: ${String(startHour).padStart(2, '0')}:${String(firstMin).padStart(2, '0')}
  <br>Acabou:${String(endHour).padStart(2, '0')}:${String(endMin).padStart(2, '0')}<br>
  Duração:${String(hourDuration).padStart(2, '0')}:${String(minDuration).padStart(2, '0')}`
}
calcularDuracao(startHour, startMin, endHour, endMin);