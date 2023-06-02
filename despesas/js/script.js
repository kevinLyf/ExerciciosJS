const wrapper = document.getElementById("statement-graphic");

window.addEventListener("DOMContentLoaded", async () => {
  await fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      let highestValue = 0;

      data.map((value) => {
        value.amount > highestValue ? (highestValue = value.amount) : null;
      });

      data.map((value) => {
        wrapper.innerHTML += `
                <div class="statement-graphic-column">
                    <div class="statement-graphic-column-bar" style="height: ${parseInt(
                      value.amount
                    )}%">
                        <div class="day-info" id="day-info">
                        <p>$${value.amount}</p>
                        </div>
                    </div>
                    <span>${value.day}</span>
                </div>
            `;
      });
    });
});
