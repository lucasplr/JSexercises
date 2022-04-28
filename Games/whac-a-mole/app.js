
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector(".time-left")
let textRemove = document.querySelector(".textRemove")
let score = document.querySelector(".score")
let timer = timeLeft.innerHTML

let result = 0
let counter = 20

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove("mole")
    })

    let randomPosition = squares[Math.floor(Math.random
        () * squares.length)]
    randomPosition.classList.add('mole')
}

squares.forEach(square =>{
    square.addEventListener("click", (e)=>{

        let test = e.currentTarget.classList
        if(test.contains("mole") && counter !== e.currentTarget.id){
        counter = e.currentTarget.id
        result++
            console.log(result)
            console.log(counter)
        }
        score.textContent = result
    })
    counter = 20
})

function counterTime(){
    timer--

    timeLeft.textContent = timer
    
    if(timer == 0){
        clearInterval(countDownTime)
        textRemove.textContent = "-----"
        countDownTime = null
        randomize = null
        timeLeft.textContent = "Time is over"
    }
}


let randomize = setInterval(randomSquare, 1000)

let countDownTime = setInterval(counterTime, 1000)

