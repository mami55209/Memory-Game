//creating an event listener on the deck cards 
const deck = document.querySelector(".deck");
const listOfCards = document.querySelectorAll(".card");
let activeCards = [];
let activeSymbols = [];
deck.addEventListener("click", showCard);
function showCard(event){
    const card = event.target;
    const symbol = card.querySelector("i");
    card.classList.add("open","show");
    activeSymbols.push(symbol);
    activeCards.push(card);
    if(activeCards.length === 2){
        const classe1 = activeSymbols[0].classList.value;
        const classe2 = activeSymbols[1].classList.value;
        if(classe1 == classe2){
            activeCards[0].classList.add("match");
            activeCards[1].classList.add("match");
            removeShow()
            removeLists();
        }else{
            removeShow();    
            removeLists();
        }
    }else if (activeCards.length > 2){
            removeLists();
    }
    deck.classList = "deck";
}
// creating the restart button
const resButton = document.querySelector(".restart");
resButton.addEventListener("click",restart);
function restart(event){
listOfCards.forEach( function(card){
    card.classList.remove("open");
    card.classList.remove("show");
    card.classList.remove("match");
    removeLists();
})
}
//functions i will often use
function removeShow(){
    activeCards[0].classList.remove("open","show");
    activeCards[1].classList.remove("open","show");
}
function removeLists(){
    activeCards = [];
    activeSymbols = [];
}
