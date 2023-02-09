const cardsContainer = document.querySelector(".cards");
const cards = ["Anna", "Belle", "Elsa"];
const cardsPickList = [...cards, ...cards];
const cardCount = cardsPickList.length;

let revealedCount = 0;
let activeCard = null;
let awaitingRndOfMove = false;

function buildCard(princess) {
    const element = document.createElement("div");

    element.classList.add("card");
    element.setAttribute("data-princess", princess);

    element.addEventListener("click", () => {
        if (awaitingEndOfMove) {
            return;
        }

        element.style.backgroundColor = princess;
    });

    return element;
}

for (let i = 0; i < cardCount; i++) {
    const randomIndex = Math.floor(Math.random() * cardsPickList.length);
    const princess = cardsPickList[randomIndex];
    const card = buildCard(princess);


    cardsPickList.splice(randomIndex, 1);
    cardsContainer.body.appendChild(card);

    console.log(cardsPickList);
}