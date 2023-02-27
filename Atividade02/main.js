const p = document.querySelector('#p');
const celsius = Number(prompt('Celsius'));
const fahrenheit = (celsius * 1.8) + 32;

p.textContent = `${celsius}° para fahrenheit: ${fahrenheit}°F`;