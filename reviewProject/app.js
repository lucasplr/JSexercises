const cars = [
    {
        id: 1,
        model: "Opel Astra",
        year: 1992,
        img: "https://images.noticiasautomotivas.com.br/img/f/chevrolet-astra-gsi-3.jpeg",
        info: "The Opel Astra is a compact car/small family car (C-segment) engineered and manufactured by the German automaker Opel since 1991, currently at its sixth generation.",
    },
    {
        id: 2,
        model: "Ford Corcel",
        year: 1968,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ford_Corcel_luxo_1973_crop.jpg/300px-Ford_Corcel_luxo_1973_crop.jpg",
        info: "The Ford Corcel is a car which was sold by Ford do Brasil in Brazil, Chile, Uruguay, Paraguay and Venezuela. It was also assembled in Venezuela (along with the Del Rey).",
    },
    {
        id: 3,
        model: "Chevrolet Chevette",
        year: 1975,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChevroletChevette.jpg/280px-ChevroletChevette.jpg",
        info: "The Chevrolet Chevette is a front-engine, rear-drive subcompact manufactured and marketed by Chevrolet for model years 1976–1987 as a three-door or five-door hatchback. Introduced in September 1975, the Chevette superseded the Vega as Chevrolet's entry-level subcompact, and sold 2.8 million units over 12 years.",
    },
    {
        id: 4,
        model: "Volkswagen Gol",
        year: 1980,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Volkswagen_Gol_G7_in_Montevideo_%28cropped%29.jpg/280px-Volkswagen_Gol_G7_in_Montevideo_%28cropped%29.jpg",
        info: "The Volkswagen Gol is a subcompact car that has been manufactured by Volkswagen do Brasil since 1980 as Volkswagen's entry-level car in the Latin American market—where it succeeded the Volkswagen Type 1 (Fusca) and the VW Brasilia."
    }
]
const car = "aaaaaaaaaa"

const image = document.getElementById("car-img")
const info = document.getElementById("info")
const year = document.getElementById("year")

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const rand = document.querySelector(".random")

let current = 0

next.addEventListener("click", function(){
    if (current > cars.length){
        current = 0
    }else{
        current++
    }
    const item = cars[current];
    image.src = item.img
    model.innerHTML = item.model
    year.innerHTML = item.year
    info.innerHTML = item.info
})
prev.addEventListener("click", function(){
    if (current < 0){
        current = cars.length
    }else{
        current--
    }
    const item = cars[current];
    image.src = item.img
    model.innerHTML = item.model
    year.innerHTML = item.year
    info.innerHTML = item.info
})
rand.addEventListener("click", function(){
    current = Math.floor(Math.random() * cars.length)
    const item = cars[current];
    image.src = item.img
    model.innerHTML = item.model
    year.innerHTML = item.year
    info.innerHTML = item.info
})




window.addEventListener("DOMContentLoaded", function(){
    const item = cars[current];
    image.src = item.img
    model.innerHTML = item.model
    year.innerHTML = item.year
    info.innerHTML = item.info
})



/*
Next will see the video to solve in the best solution.
*/