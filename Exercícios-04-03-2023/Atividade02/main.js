const startHour = parseInt(prompt('Digite a hora de início'));
const startMin = parseInt(prompt('Digite os minutos de início'));
const endHour = parseInt(prompt('Digite a hora de termino'));
const endMin = parseInt(prompt('Digite a minutos de termino'));

function calcularDuracao(startHour, startMin, endHour, endMin) {
  const HOURS_IN_MINUTES = 60;
  const MAX_HOURS = 24;
  
  startMin = startHour * HOURS_IN_MINUTES * startMin
  console.log(startMin)
  return console.log(`Você começou: ${startHour}:${startMin}
  e terminou:${endHour}:${endMin}. Então você demorou`)
}
console.log(calcularDuracao(startHour, startMin, endHour, endMin));