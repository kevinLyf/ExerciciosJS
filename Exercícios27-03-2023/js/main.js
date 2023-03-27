const input = document.getElementById("input");
const addItemBtn = document.getElementById("addItemButton");
const orderItemBtn = document.getElementById("orderItemButton");
const items = ["Cadeira", "Impressora", "Garfo"];

addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addItem();
    };
});

const addItem = () => {
    if(String(input.value).trim() === "" || !input.value) return alert("Informe um valor válido");
    if(items.find(element => String(element).toLocaleLowerCase() === String(input.value).toLocaleLowerCase())) return alert("Esse elemento já existe");
    
    items.push(input.value);
    input.value = "";
    console.log(items);
}

const orderItem = () => {
    const orderItem = items.sort((a, b) => {
        if(String(a).toLocaleLowerCase() > String(b).toLocaleLowerCase()) {
            return 1;
        }
        else if (String(a).toLocaleLowerCase() < String(b).toLocaleLowerCase()) {
            return -1;
        } 
        else {
            return 0;
        };
    });

    console.log(orderItem);
};

addItemBtn.addEventListener("click", addItem);
orderItemBtn.addEventListener("click", orderItem);