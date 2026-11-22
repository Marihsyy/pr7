
const themeBtn = document.getElementById("themeBtn");
const addDrinkBtn = document.getElementById("addDrinkBtn");
const drinkInput = document.getElementById("drinkInput");
const cards = document.querySelector(".cards");

// Зміна теми сторінки
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    console.log("Тему сторінки змінено");
});

// Додавання нового напою
addDrinkBtn.addEventListener("click", function() {
    const drinkName = drinkInput.value.trim();

    if (drinkName === "") {
        alert("Спочатку введіть назву напою!");
        return;
    }

    const newCard = document.createElement("article");

    const title = document.createElement("h3");
    title.textContent = drinkName;

    const description = document.createElement("p");
    description.textContent = "Новий напій у нашому кавовому гіді.";

    newCard.appendChild(title);
    newCard.appendChild(description);

    cards.appendChild(newCard);

    drinkInput.value = "";
    
    console.log("Додано новий напій:", drinkName);
});
