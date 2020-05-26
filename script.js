// Fonctionnalité 1 :

let footerEl = document.getElementsByTagName("footer")[0];
let count = 1;
footerEl.addEventListener("click", function() {
  console.log(`clic numéro ${count}`);
  count++;
});

// Fonctionnalité 2 :

let toggleEl = document.getElementsByClassName("navbar-toggler")[0];

let hambergurMenu = document.getElementById("navbarHeader");

function menuToggle() {
  hambergurMenu.classList.toggle('collapse');
}

toggleEl.onclick = menuToggle;

// Fonctionnalité 3 :

let card1 = document.getElementsByClassName('card')[0];
let card1EditBtn = card1.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
card1EditBtn.addEventListener("click", function(){
  card1.style.color = 'red' ;
});

// Fonctionnalité 4 :

let card2 = document.getElementsByClassName('card')[1];
let card2EditBtn = card2.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
card2EditBtn.addEventListener("click", function(){
  if (card2.style.color === 'green') {
    card2.style.color = '';
  }
  else {
    card2.style.color = 'green';
  }
});

// Fonctionnalité 5 :

let navbar = document.getElementsByTagName('header')[0];
let bootstrapLink = document.getElementsByTagName('link')[0];

navbar.addEventListener("dblclick", function() {
  if (bootstrapLink.disabled === false) {
    bootstrapLink.disabled = true;
  }
  else {
    bootstrapLink.disabled = false;
  }
});

// Fonctionnalité 6 :

let cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
  let cardViewBtn = cards[i].getElementsByClassName("btn btn-sm btn-success")[0];
  let cardImg = cards[i].getElementsByTagName('img')[0];
  let cardText = cards[i].getElementsByTagName('p')[0];
  cardImg.style.width = '100%';
  cardViewBtn.addEventListener("mouseover", function () {
    if (cardImg.style.width === '100%') {
      cardImg.style.width = '20%';
      cardText.style.display = 'none';
    }
    else {
      cardImg.style.width = '100%';
      cardText.style.display = '';
    }
  });
}

// Fonctionnalité 7 :

let row = document.getElementsByClassName('row')[1];
let nextCardBtn = document.getElementsByClassName('jumbotron')[0].getElementsByClassName('btn btn-secondary my-2')[0];
console.log(nextCardBtn);

nextCardBtn.addEventListener("click", function() {
let cardsDiv = document.getElementsByClassName('col-md-4');
let firstCard = cardsDiv[0];
let lastCard = cardsDiv[cardsDiv.length -1];
  row.insertBefore(lastCard, firstCard);
  console.log(lastCard);
});

// Fonctionnalité 8 :

// A faire, tourner les cards dans l'autre sens (inverse de la 7)