const cardArray = [
    {
        name: "fries",
        img: 'images/fries.png',
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png',
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png',
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png',
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png',
    },
    {
        name: "pizza",
        img: 'images/pizza.png',
    },
    {
        name: "fries",
        img: 'images/fries.png',
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png',
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png',
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png',
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png',
    },
    {
        name: "pizza",
        img: 'images/pizza.png',
    }
]

const grid = document.querySelector(".grid")
const result = document.querySelector(".result")

counter = 0
let chosenCards = []
let chosenCardsIds = []
const cardsWon = []

cardArray.sort(() => 0.5 - Math.random())


// function to create the grid with random positions of the images
function boardCreator () {
    cardArray.forEach((card, index) => {
        const cardA = document.createElement('img')
        cardA.setAttribute('src', 'images/blank.png')
        cardA.setAttribute('data-id', index)
        cardA.addEventListener("click", flipCard)
        grid.appendChild(cardA)

    })
}

function checkMatch (){
    const cards = document.querySelectorAll('img')
    if (chosenCards[0] === chosenCards[1]){
        alert("equal")
        cards[chosenCardsIds[0]].setAttribute('src', 'images/white.png')
        cards[chosenCardsIds[1]].setAttribute('src', 'images/white.png')
        cards[chosenCardsIds[0]].removeEventListener('click', flipCard)
        cards[chosenCardsIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(chosenCards)
    }else{
        cards[chosenCardsIds[0]].setAttribute('src', 'images/blank.png')
        cards[chosenCardsIds[1]].setAttribute('src', 'images/blank.png')
    }
    counter++
    chosenCards = []
    chosenCardsIds = []
    if (cardsWon.length === (cardArray.length)/2){
        result.textContent = `You win with ${counter} attempts`
    }

}

function flipCard(e){
    let tg = e.currentTarget.dataset.id
    chosenCards.push(cardArray[tg].name)
    chosenCardsIds.push(tg)
    e.currentTarget.setAttribute('src', cardArray[tg].img)

    if(chosenCards.length === 2){
        setTimeout(checkMatch, 500)

        
    }
}

boardCreator()






