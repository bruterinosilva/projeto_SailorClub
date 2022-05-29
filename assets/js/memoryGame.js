const cardBoard = document.querySelector("#cardboard");
const imgs = [
    "img-1.png",
    "img-2.png",
    "img-3.png",
    "img-4.png",
    "img-5.png",
    "img-6.png"
];

let cardHTML = "";

imgs.forEach(img => {
    cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="./assets/img/${img}"/>
    <img class="back-face" src="./assets/img/sailor_login_im.png">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
    if (lockCards) return false;
    this.classList.add("flip");
    this.childNodes[1].classList.add("show-img")
    if (!firstCard) {
        firstCard = this;
        return false;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
    lockCards = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        firstCard.childNodes[1].classList.remove("show-img")

        secondCard.classList.remove("flip");
        secondCard.childNodes[1].classList.remove("show-img")
       
        resetCards();
    }, 1000);
}

function resetCards(isMatch = false) {
    if (isMatch) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }

    [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));

(function aleatory() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand
    });
})();