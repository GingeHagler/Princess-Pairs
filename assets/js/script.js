const cardsContainer = document.querySelector(".cards");
const cardList = document.querySelectorAll('card');
const cardCount = cardList.length;

let revealedCount = 0;
let activeCard = null;
let awaitingRndOfMove = false;

for (let i = 0; i < cardCount; i++) {
    const randomIndex = Math.floor(Math.random())
}
