const timeLeft = document.querySelector(".time-left")
const result = document.querySelector(".result")
const btn = document.querySelector(".start-pause-button")
const grid = document.querySelector(".grid")
const squares = document.querySelectorAll(".grid div")

let currentIndex = 76

function moveFrog(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex > 0){
            squares[currentIndex].classList.remove("frog")
            currentIndex--
            squares[currentIndex].classList.add("frog")
            }
            break
        case 'ArrowRight':
            if (currentIndex < 80){
            squares[currentIndex].classList.remove("frog")
            currentIndex++
            squares[currentIndex].classList.add("frog")
            }
            break
        
        case 'ArrowUp':
            if (currentIndex > 8){
            squares[currentIndex].classList.remove("frog")
            currentIndex = currentIndex - 9
            squares[currentIndex].classList.add("frog")
            }
            break
        case "ArrowDown":
            if (currentIndex < 72){
            squares[currentIndex].classList.remove("frog")
            currentIndex = currentIndex + 9
            squares[currentIndex].classList.add("frog")
            }
            break

    }




}

document.addEventListener("keydown", moveFrog)