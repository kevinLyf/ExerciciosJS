const menuItems = document.getElementById("menu-items"); 
const div = document.createElement("div");

const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    image: "./assets/images/item-1.jpeg",
    description:
      "I'm baby woke mlkshk wolf bitters levi edge blue bottle, hammock freegan copper whatever cold-pressed",
  },

  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    image: "./assets/images/item-2.jpeg",
    description:
      "Vaporware iphone mumnlecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
  },

  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    image: "./assets/images/item-3.jpeg",
    description:
      "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },

  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    image: "./assets/images/item-4.jpeg",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },

  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    image: "./assets/images/item-5.jpeg",
    description:
      "Franzen vegan pabst bicycle rights kickstater pinterest meditation farm-to- table 90's pop-up",
  },

  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 18.99,
    image: "./assets/images/item-6.jpeg",
    description:
      "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },

  {
    id: 7,
    title: "Bacon Overflow",
    category: "Breakfast",
    price: 8.99,
    image: "./assets/images/item-7.jpeg",
    description:
      "Portland chicharrones ethical edison, palo santo craft beer chia heirloom iphone everyday",
  },

  {
    id: 8,
    title: "American Classic",
    category: "Lunch",
    price: 12.99,
    image: "./assets/images/item-8.jpeg",
    description:
      "On it tumblr kickstarter thundercast migas everyday carry squid palo santo leggings. Food truck truffaut",
  },

  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 16.99,
    image: "./assets/images/item-9.jpeg",
    description:
      "Skateboard fam snth authentic semiotics. Live-edge lyft af, edison buld",
  },

  {
    id: 10,
    title: "Stack Dinner",
    category: "Dinner",
    price: 39.99,
    image: "./assets/images/item-10.jpeg",
    description:
      "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
];


// Initial Food
allFoods();

// Filter Buttons
document.querySelectorAll("[data-id]").forEach((element) => {
  element.addEventListener("click", () => {
    div.innerHTML = "";

    // All
    if (element.getAttribute("data-id") === "All") {
      allFoods();
    }

    // Breakfast
    filter(element, "Breakfast");

    // Lunch
    filter(element, "Lunch");

    // Shakes
    filter(element, "Shakes");

    // DINNER
    filter(element, "Dinner");
  });
});

// FILTER FOODS
function filter(element, category) {
  if (element.getAttribute("data-id") === category) {
    menu.map((value, index) => {
      if (menu[index].category === category) {
        div.innerHTML += 
          `<div class="menu-item">
              <div class="item-image">
                <img src="${menu[index].image}" alt="${menu[index].title}" />
              </div>       
              <div class="item-info">
                <div class="item-title">
                    <p>${menu[index].title}</p>
                    <p class="price">R$${menu[index].price}</p>
                </div>
                                
                <div class="item-description">
                  <p>${menu[index].description}</p>
                </div>
              </div>
            </div>`;
        menuItems.appendChild(div);
      }
    });
  }
}

// GET ALL FOODS
function allFoods() {
  menu.map((value, index) => {
    div.innerHTML += `<div class="menu-item">
          <div class="item-image">
            <img src="${menu[index].image}" alt="${menu[index].title}" />
          </div>
          
          <div class="item-info">
            <div class="item-title">
              <p>${menu[index].title}</p>
              <p class="price">R$${menu[index].price}</p>
            </div>
          
            <div class="item-description">
            <p>${menu[index].description}</p>
            </div>
          </div>
          </div>`;
    menuItems.appendChild(div);
  });
}
