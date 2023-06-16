const bill = document.querySelector("#bill");
const tips = document.querySelectorAll("[data-tip]");
const custom = document.querySelector("#custom-tip");
const people = document.querySelector("#people");
const errorSpan = document.querySelector("#people-error");
const resetBtn = document.querySelector("#reset");
const tipSpan = document.querySelector("#tip-result");
const totalSpan = document.querySelector("#total-result");

let selectTip = 0;
let total = 0;

tips.forEach((item) => {
  item.addEventListener("click", () => {
    tips.forEach((element) => {
      element.classList.remove("active");
    });

    if (!custom.value) {
      item.classList.add("active");
    }

    selectTip = parseFloat(item.getAttribute("data-tip"));
  });
});

custom.addEventListener("focusout", () => {
  tips.forEach((item) => {
    item.classList.remove("active");
  });
});

people.addEventListener("focusout", () => {
  if (!people.value.trim() || people.value <= 0) {
    errorSpan.style.display = "block";
    people.style.border = "2px solid #e95858";
    return;
  } else {
    errorSpan.style.display = "none";
    people.style.border = "2px solid transparent";
  }

  if (custom.value) {
    selectTip = parseFloat(custom.value);
  }

  let tip = bill.value * (selectTip / 100);
  total = bill.value / people.value;

  tipSpan.innerHTML = `$${tip.toFixed(2)}`;
  totalSpan.innerHTML = `$${total.toFixed(2)}`;
});

resetBtn.addEventListener("click", () => {
  selectTip = 0;
  total = 0;
  people.value = 0;
  bill.value = 0;

  tips.forEach((item) => {
    item.classList.remove("active");
  });

  tipSpan.innerHTML = `$0.00`;
  totalSpan.innerHTML = `$0.00`;
});
