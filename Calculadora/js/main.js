const display = document.getElementById("display"); // display SPAN
const numberButtons = document.querySelectorAll("[data-number]"); // DATA NUMBERS
const operationButtons = document.querySelectorAll("[data-operation]"); // DATA OPERATIONS
const equalsButton = document.querySelector("[data-equals]"); // DATA EQUAL
const deleteButton = document.querySelector("[data-delete]"); // DATA DELETE
const absButton = document.querySelector("[data-abs]"); // DATA ABS

// NUMBERS BUTTONS
numberButtons.forEach((i) => {
  i.addEventListener("click", () => {
    display.innerHTML += i.innerHTML;
  });
});

// OPERATIONS BUTTONS
operationButtons.forEach((i) => {
  i.addEventListener("click", () => {
    display.innerHTML += i.innerHTML;
  });
});

// EQUALS BUTTON
equalsButton.addEventListener("click", () => {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (err) {
    let i = 0;
    display.innerHTML = "ERROR";

    const handle = setInterval(() => {
      display.innerHTML += ".";
      i++;
      console.log(i);  
      if (i === 4) {
        clearInterval(handle);
        return display.innerHTML = "";
      }
    }, 1000);
  }
});

// ABS BUTTON
absButton.addEventListener("click", () => {
  display.innerHTML = Math.abs(display.innerHTML);
});

// DELETE BUTTON
deleteButton.addEventListener("click", () => {
  display.innerHTML = "";
});