const wrapper = document.getElementById("summary-results-wrapper");

const fetchData = async () => {
  await fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {

       data.map((value, index) => {
        wrapper.innerHTML += ` <div class="summary-results-box ${value.color}">
            <div class="result-box-title">
              <img src="${value.icon}" alt="${value.category}" />
              <p>${value.category}</p>
            </div>
            <div class="result-box-result">
              <p><span> ${value.score} </span> / 100</p>
            </div>
          </div>`;
      });

    });
};

fetchData();