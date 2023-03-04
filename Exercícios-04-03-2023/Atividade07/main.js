/*
    Faça um contador regressivo(contagem regressiva), onde mostra dia,
    hora, minuto e segundos.
*/

const span = document.querySelector("#info");
const COUNTDOWN_INITIAL_IN_SECONDS = 31536000; // 1 ano

const countdown = (time) => {
  const timer = setInterval(() => {
    if (time === 0) {
      span.textContent = "Timer Over!";
      return clearInterval(timer);
    }
    
    const days = Math.floor(time / 86400);
    const hours = Math.floor(time / 3600 ) % 24;
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    span.textContent = `Countdown: 
      ${String(days).padStart(2, "0")}:
      ${String(hours).padStart(2, "0")}:
      ${String(minutes).padStart(2, "0")}:
      ${String(seconds).padStart(2, "0")}
    `;

    time--;
  }, 1000);
};

countdown(COUNTDOWN_INITIAL_IN_SECONDS);
