//console.log("Up and running!");



//const cards=["queen","queen","king","king"];

const cards = [
{
rank: "queen",
suit	: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen", 
suit	: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit	: "hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank: "king",
suit	: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];

const cardsInPlay=[];

function checkForMatch() {
	 if (cardsInPlay[0]===cardsInPlay[1]) {

 	alert("You found a match!");

 } else {alert("Sorry, try again.!");}
	// body...
}


function flipCard(cardId) {
	// body...
console.log("User flipped " + cards[cardId].rank);
console.log("IMG " + cards[cardId].cardImage);
console.log("Suite " + cards[cardId].suit);
console.log("------------------------------- ");


cardsInPlay.push(cards[cardId].rank);
 
if (cardsInPlay.length===2) {
 //console.log("jugaron 2 castas")

checkForMatch();
}

}
flipCard(0);
flipCard(1);