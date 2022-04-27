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

cardArray.sort(() => 0.5 - Math.random())

function boardCreator () {
    cardArray.forEach((card, index) => {
        const cardA = document.createElement('img')
        cardA.setAttribute('src', 'images/blank.png')
        cardA.setAttribute('data-id', index)
        console.log(cardA)
        grid.append(cardA)
    })
}

boardCreator()


