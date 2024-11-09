// let age = 21;

// if (age <= 20) {
//   console.log("You cannot enter the club!");
// } else {
//   console.log("Welcome!");
// }

// ----------------------------------------------------

// let birthAge = 100;

// if (birthAge < 100) {
//   console.log("Not eligible!");
// } else if (birthAge === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not eligible, you've already gotten one...");
// }

// ----------------------------------------------------

let cards = [];
let sum = 0;

let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let i = 0;

// for (i = 10; i < 101; i += 10) {
//   console.log(i);
// }

function boardStats() {
  cardsEl.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }

  sumEl.textContent = "Sum: " + sum;
}

let hasBlackjack = false;
let isAlive = false;

// let bjEl = document.getElementById("blackjack-el");
// let alEl = document.getElementById("alive-el");

let messageEl = document.getElementById("message-el");
let message = "";

function logStats() {
  console.log("has Blackjack: " + hasBlackjack);
  console.log("is Alive: " + isAlive);
}

function compare() {
  if (sum < 21) {
    message = "Do you want to draw a new card? >,<";
    messageEl.textContent = message;
    hasBlackjack = false;
    isAlive = true;

    // bjEl.textContent = "You no Blackjack";
    // alEl.textContent = "ALIVE!";
  } else if (sum === 21) {
    message = "Wohoo! You've got BlackJack! X-D";
    messageEl.textContent = message;
    hasBlackjack = true;
    isAlive = true;

    player.chips += 10;
    playerEl.textContent = player.name + ": $" + player.chips;

    // bjEl.textContent = "You got Blackjack";
    // alEl.textContent = "ALIVE!";
  } else {
    message = "You're out of the game! T^T";
    messageEl.textContent = message;
    hasBlackjack = false;
    isAlive = false;

    // bjEl.textContent = "You no Blackjack";
    // alEl.textContent = "DEAD!";
  }
}

function add_num1() {
  cards[0] += 1;
  sum += 1;
  boardStats();
}

function subtract_num1() {
  cards[0] -= 1;
  sum -= 1;
  boardStats();
}

function add_num2() {
  cards[1] += 1;
  sum += 1;
  boardStats();
}

function subtract_num2() {
  cards[1] -= 1;
  sum -= 1;
  boardStats();
}

// ----------------------------------------------------

function renderGame() {
  compare();
  //   logStats();
  boardStats();
}

function startGame() {
  isAlive = true;
  if (player.chips > 10) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];

    player.chips -= 10;
    playerEl.textContent = player.name + ": $" + player.chips;

    renderGame();
  } else {
    messageEl.textContent = "You don't have enough chips...";
  }
}

// ----------------------------------------------------

// let message = "";
// console.log(message);

// message = "We're logging out!";
// console.log(message);

function newCard() {
  if (isAlive && !hasBlackjack) {
    console.log("New Card is selected!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log("cards list:" + cards);
    renderGame();
  } else {
    messageEl.textContent =
      "You're not even in the game! Please START GAME first/anew!";
  }
}

function getRandomCard() {
  let genCard = Math.floor(Math.random() * 13 + 1);
  // console.log("genCard:" + genCard);
  if (genCard > 10) {
    console.log("genCard:" + genCard);
    return 10;
  } else if (genCard === 1) {
    console.log("genCard:" + genCard);
    return 11;
  } else {
    console.log("genCard:" + genCard);
    return genCard;
  }
}

// ----------------------------------------------------

// let messages = ["Hi", "How r ya?", "Miss ya"];
// let newMessage = "Same here!";

// console.log(messages);
// messages.push(newMessage);
// console.log(messages);
// // messages = messages.slice(0, -1);
// messages.pop();
// console.log(messages);

// ----------------------------------------------------

// let messages = [
//   "Hi, how is it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
//   "Great to hear",
//   "XD",
//   "What is it?",
// ];

// messages.push("Are you sure?");

// for (i = 0; i < messages.length; i += 1) {
//   console.log(messages[i]);
// }

// ----------------------------------------------------

// cards = [7, 3, 9];

// cards.push(11);

// for (i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }

// ----------------------------------------------------

// let sentence = ["Hello", "my", "name", "is", "Hazman!"];
// let greetingEl = document.querySelector("#greeting-el");

// for (i = 0; i < sentence.length; i++) {
//   console.log(sentence[i]);
//   greetingEl.textContent += sentence[i] + " ";
// }

// ----------------------------------------------------

// let timeOne = 99;
// let timeTwo = 107;

// function getFastestRaceTime() {
//   if (timeOne < timeTwo) {
//     return timeOne;
//   } else {
//     return timeTwo;
//   }
// }

// let fastestTime = getFastestRaceTime();
// console.log(fastestTime);

// function totalTime() {
//   return timeOne + timeTwo;
// }

// let sumTime = totalTime();
// console.log(sumTime);

// ----------------------------------------------------

// let randoNum = Math.random() * 6 + 1;
// let flooredNum = Math.floor(randoNum);

// console.log(randoNum);
// console.log(flooredNum);

// ----------------------------------------------------

// let hasCompletedCourse = true;
// let givesCertificate = true;

// function generateCertificate() {
//   console.log("Generating Certificate....");
// }

// // if (hasCompletedCourse === true && givesCertificate === true) {
// if (hasCompletedCourse && givesCertificate) {
//   generateCertificate();
// }

// let hasSolvedChallenge = true;
// let hasHintsLeft = false;

// function showSolution() {
//   console.log("Showing Solution....");
// }

// // if (hasCompletedCourse === false && givesCertificate === false) {
// if (!hasSolvedChallenge && !hasHintsLeft) {
//   showSolution();
// }

// ----------------------------------------------------

// let object = { key: value, key: value};
let player = {
  name: "Hazman",
  chips: 145,
  // sayHello: function () {
  //   console.log("Hello!");
  // },
};

// // Methods on object
// player.sayHello();

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// ----------------------------------------------------

// let castle = {
//   title: "Live Like a King in my Castle",
//   price: 190,
//   isSuperhost: true,
//   content: ["1 bedroom", "1 bathroom"],
// };

// console.log(castle.title);
// console.log(castle.price);
