const goTop = document.getElementById("goTop");

const checkScreen = () => {
  if (window.scrollY < 200) {
    goTop.style.display = "none";
  } else {
    goTop.style.display = "flex";
  }
};

addEventListener("scroll", () => {
    checkScreen();
});

goTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
