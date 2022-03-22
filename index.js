 //Math.floor((Math.random() * 10) + 2) math.random ce dat brojeve izmedju 0 i 1(0.000 do 0.999), ali nece ukljuciti jedinicu. Math.floor ce maknuti decimale.
let cards = []; //array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById("player-el");
let player = {
    name: "Domagoj",
    chips: 145
};

playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard () {
    return Math.floor(Math.random() * 10 + 2);
};

function startGame () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Yup, Blackjack! You win, congrats!";
    hasBlackJack = true;
  } else {
    message = "Sorry, you lost";
    isAlive = false;
  }
  messageEl.textContent = message;
};


function newCard () {
    if( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
};
