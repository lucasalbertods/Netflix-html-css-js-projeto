
let cards = document.getElementsByClassName("card");
let textCardsClicked = document.querySelector(".text-cards-clicked");

const classCardClicked = "card-clicked";

let cardsClicked = [];

textCardsClicked.innerHTML = "Você não selecionou :)";

for (let card of cards){
    card.addEventListener("click", function () {
       let { serie, name } = card.dataset;

       let cardFoiClicado = card.classList.contains(classCardClicked)

       console.log(cardFoiClicado);

       if(cardFoiClicado){
            card.classList.remove(classCardClicked);
       } else{
            card.classList.add(classCardClicked);
       }
    });
    
}