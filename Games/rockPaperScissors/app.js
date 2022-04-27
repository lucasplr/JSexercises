const options = ["rock", "paper", "scissor"]

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
        console.log(option)
        console.log(click)
    })
)


/*
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")){
            count--
        }else if (styles.contains("increase")){
            count++
        }else{
            count = 0
        }
        counter.textContent = count
        if(count > 0){
            counter.style.color = "green"
        }else if (count < 0){
            counter.style.color = "red"
        }else{
            counter.style.color = "black"
        }
    })
    
})
*/
