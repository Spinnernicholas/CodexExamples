/* create an array of playing card suits */
var suits = ['hearts', 'spades', 'diamonds', 'clubs'];

/* create arrays of suit char and suit color */
var suitChar = ['♥', '♠', '♦', '♣'];
var suitColor = ['red', 'black', 'red', 'black'];

/* create array of card values */
var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

/* create card class */
function Card(suit, value) {
  this.suit = suit;
  this.value = value;
}

/* create standard deck */
var deck = [];
for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++) {
    deck.push(new Card(suits[i], values[j]));
  }
}

/* create a function that creates a div representing a card. It should be card shaped and have a solid border. The text and border color should match the suit. */
function createCard(suit, value) {
  var card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = value + '<span class="suit">' + suitChar[suits.indexOf(suit)] + '</span>';
  card.style.borderColor = suitColor[suits.indexOf(suit)];
  card.style.borderWidth = '2px';
  card.style.borderStyle = 'solid';
  card.style.borderRadius = '10px';
  card.style.width = '100px';
  card.style.height = '150px';
  card.style.margin = '10px';
  card.style.textAlign = 'center';
  card.style.fontSize = '40px';
  card.style.fontFamily = 'sans-serif';
  card.style.color = suitColor[suits.indexOf(suit)];
  return card;
}

/* display 10 random cards */
var cards = [];
for (var i = 0; i < 10; i++) {
  var card = createCard(suits[Math.floor(Math.random() * suits.length)], values[Math.floor(Math.random() * values.length)]);
  cards.push(card);
  document.body.appendChild(card);
}
