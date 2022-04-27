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

const chosenCards = []

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

function flipCard(e){
    let tg = e.currentTarget.dataset.id
    chosenCards.push(cardArray[tg].name)
    e.currentTarget.setAttribute('src', cardArray[tg].img)
}

boardCreator()






