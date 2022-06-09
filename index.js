// Code your solutions in this file

let cards = [];
function writeCards(arraycards) {
  for (let i = 0; i < arraycards.length; i++) {
    cards.push(`Thank you, ${arraycards[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}
function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}
