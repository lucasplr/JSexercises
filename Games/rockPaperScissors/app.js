let options = ["rock", "paper", "scissor"]

const computer = document.getElementById("computer-choice")
const user = document.getElementById("user-choice")
const result = document.getElementById("result")
const btns = document.querySelectorAll(".btn")


btns.forEach(btn => 

    btn.addEventListener("click", (e) => {
        let option = options[Math.floor(Math.random() * options.length)]
        let click = e.currentTarget.id
        if(option === click){
             computer.textContent = option
             user.textContent = click
             result.textContent = "draw"
        }else if(option === "rock" && click === "scissor"){
            computer.textContent = option
            user.textContent = click
            result.textContent = "computer win's"
        }else if (option === "scissor" && click === "rock"){
            computer.textContent = option
            user.textContent = click
            result.textContent = "user win's"
        }else if (option === "paper" && click === "rock"){
            computer.textContent = option
            user.textContent = click
            result.textContent = "computer win's"
        }else if (option === "rock" && click === "paper"){
            computer.textContent = option
            user.textContent = click
            result.textContent = "user win's"
        }else if (option === "scissor" && click === "paper"){
            computer.textContent = option
            user.textContent = click
            result.textContent = "computer win's"
        }else{
            computer.textContent = option
            user.textContent = click
            result.textContent = "user win's"
        }
    })
)

// remake using a callback function inside the event listener