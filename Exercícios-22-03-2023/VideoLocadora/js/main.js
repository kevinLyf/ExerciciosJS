const movieName = document.getElementById("movieName");
const duration = document.getElementById("duration");
const convertBtn = document.getElementById("convert");
const info = document.getElementById("info");

convertBtn.addEventListener("click", (min) => {
  if (!movieName.value || !duration.value) return alert("Preencha com os dados!");

  min = duration.value;
  let hours = Math.floor(min / 60);
  min = Math.floor(min % 60);

  info.innerHTML = `Name: ${movieName.value}<br>Tempo do filme: ${String(hours).padStart(2, "0")} horas e ${String(min).padStart(2, "0")} minutos`;
});
