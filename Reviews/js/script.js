const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const supriseBtn = document.getElementById("supriseBtn");
const avatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const job = document.getElementById("job");
const description = document.getElementById("description");
import myOject from "../info.json" assert { type: "json" };

let index = 0;

define(index);

nextBtn.addEventListener("click", () => {
  if (index === myOject.length) {
    index = 0;
  }

  define(index);

  index++;
});

backBtn.addEventListener("click", () => {
    if(index > 0) index = myOject.length - 1;
    
    define(index);
    
    index--;
});

supriseBtn.addEventListener("click", () => {
  define(Math.floor(Math.random() * myOject.length));
});

function define(index) {
  avatar.setAttribute("src", myOject[index].avatar);
  userName.innerHTML = myOject[index].name;
  job.innerHTML = myOject[index].job;
  description.innerHTML = myOject[index].description;
}
