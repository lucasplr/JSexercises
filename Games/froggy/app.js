const timeLeft = document.querySelector(".time-left")
const result = document.querySelector(".result")
const btn = document.querySelector(".start-pause-button")
const grid = document.querySelector(".grid")
const squares = document.querySelectorAll(".grid div")
const logsLeft = document.querySelectorAll(".log-left")
const logsRight = document.querySelectorAll(".log-right")
const carsLeft = document.querySelectorAll(".car-left")
const carsRight = document.querySelectorAll(".car-right")

let width = 9
let timerId
let outComeId
let counter = 20

let currentIndex = 76

function moveFrog(e){
    squares[currentIndex].classList.remove("frog")

    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex > 0 && !(currentIndex % width === 0))
            currentIndex--
            break
        case 'ArrowRight':
            if (currentIndex % width < width - 1)
            currentIndex++
            break
        
        case 'ArrowUp':
            if (currentIndex  - width >= 0)
            currentIndex = currentIndex - width
            break
        case "ArrowDown":
            if (currentIndex + width < width * width)
            currentIndex = currentIndex + width
            break
    }
        squares[currentIndex].classList.add("frog")



}



function autoMoveElements(){
    counter--
    timeLeft.textContent = counter
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
}

function checkOutCome(){
    lose()
    win()
}

function autoMoveCars(){
    carsLeft.forEach(carLeft =>{
        moveCarLeft(carLeft)
    })
    carsRight.forEach(carRight =>{
        moveCarRight(carRight)
    })
}

function moveCarLeft(carLeft){
    switch(true){
        case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1")
            carLeft.classList.add("c2")
            break
        case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2")
            carLeft.classList.add("c3")
            break
        case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3")
            carLeft.classList.add("c1")
            break
    }
}

function moveCarRight(carRight){
    switch(true){
        case carRight.classList.contains("c1"):
            carRight.classList.remove("c1")
            carRight.classList.add("c3")
            break
        case carRight.classList.contains("c2"):
            carRight.classList.remove("c2")
            carRight.classList.add("c1")
            break
        case carRight.classList.contains("c3"):
            carRight.classList.remove("c3")
            carRight.classList.add("c2")
            break
    }
}



function moveLogLeft(logLeft){
    switch(true){
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break

    }
}
function moveLogRight(logRight){
    switch(true){
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break

    }
}

function lose(){
    if (squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5') ||
        counter <= 0
        ){
        result.textContent = "You lose!"
        clearInterval(timerId)
        clearInterval(outComeId)
        squares[currentIndex].classList.remove("frog")
        document.removeEventListener("keydown", moveFrog)
    }
}

function win(){
    if(squares[currentIndex].classList.contains("ending-block")){
        result.textContent = "You win"
        clearInterval(timerId)
        squares[currentIndex].classList.remove("frog")
        document.removeEventListener("keydown", moveFrog)
    }
}
btn.addEventListener("click", () =>{
    if(timerId){
        clearInterval(timerId)
        timerId = null
        outComeId = null
        document.removeEventListener("keydown", moveFrog)
    }else{
        timerId = setInterval(autoMoveElements, 1000)
        document.addEventListener("keydown", moveFrog)
        outComeId = setInterval(checkOutCome, 1)
    }
})


