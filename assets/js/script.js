const cardsContainer = document.querySelector(".cards");
const cards = ["Anna", "Belle", "Elsa"];
const cardsPickList = [...cards, ...cards];
const cardCount = cardsPickList.length;

let revealedCount = 0;
let activeCard = null;
let awaitingRndOfMove = false;

for (let i = 0; i < cardCount; i++) {
    const randomIndex = Math.floor(Math.random() * cardsPickList.length);
    const card = cardsPickList[randomIndex];

    cardsPickList.splice(randomIndex, 1);
    

    console.log(cardsPickList);
}