//picking the items
const scoreDisplay = document.querySelector(".score")
const grid = document.querySelector(".grid")
const blockWidth = 100
const blockHeight = 20
const minWidth = 0
let timerId
const userStart = [230, 10]
let currentPosition = userStart
const boardWidth = 560
const boardHeight = 300
const ballDiameter = 20
let xDirection = -2
let yDirection = 2
let score = 0

const ballStart = [270, 40]
let ballPosition = ballStart

//create block
class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]

console.log(blocks[0])

//create the element div

//add "block" to the div "grid"
function addBlocks(){
    for (let i = 0; i < blocks.length; i++){
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
    }
}

    const user = document.createElement('div')
    user.classList.add("user")
    drawUser()
    grid.appendChild(user)


    function drawUser(){
        user.style.left = currentPosition[0] + 'px'
        user.style.bottom = currentPosition[1] + 'px'
    }

    function drawBall(){
        ball.style.left = ballPosition[0] + 'px'
        ball.style.bottom = ballPosition[1] + 'px'
    }


//move user

function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
            currentPosition[0] -= 10
            }
            drawUser()
            break
        case 'ArrowRight':
            if (currentPosition[0] < 460){
                currentPosition[0] += 10
            }
            drawUser()
            break

    }
}



document.addEventListener("keydown", moveUser)

addBlocks()

//add ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//move ball
function moveBall(){
    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    drawBall()
    checkForCollisions()

}


timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollisions(){
//check for block collisions
for (let i = 0; i < blocks.length; i++){
    if (ballPosition[0] > blocks[i].bottomLeft[0] && ballPosition[0] < blocks[i].bottomRight[0] && ((ballPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballPosition[1] < blocks[1].topLeft[1])){
        const allBlocks = Array.from(document.querySelectorAll('.block'))
        console.log(allBlocks)
        allBlocks[i].classList.remove("block")
        blocks.splice(i, 1)
        changeDirection()
        score++
        scoreDisplay.innerHTML = score
    }
}

//check for wall collisions 
if (ballPosition[0] >= (boardWidth - ballDiameter) ||
    ballPosition[1] >= (boardHeight - ballDiameter) || ballPosition[0] <= minWidth){
    changeDirection()
}

//check for user collisions
if (ballPosition[0] > currentPosition[0] && ballPosition[0] < currentPosition[0]+blockWidth && 
    (ballPosition[1] > currentPosition[1] && ballPosition[1] < currentPosition[1] + blockHeight)){
    changeDirection()
}

//check for win
if (blocks.length === 0){
    scoreDisplay.innerHTML = "You win"
    clearInterval(timerId)
    document.removeEventListener("keydown", moveUser)
}

// check for game over
if (ballPosition[1] <= 0){
    clearInterval(timerId)
    scoreDisplay.innerHTML = "You lose"
    document.removeEventListener("keydown", moveUser)
}
}



function changeDirection(){
    if (xDirection === 2 && yDirection === 2){
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2){
        xDirection = -2
        return
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2){
        xDirection = 2
        return
    }
}