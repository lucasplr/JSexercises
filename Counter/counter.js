const counter = document.querySelector(".register")
const btnres = document.getElementById("btn2")
const btninc = document.getElementById("btn")
const btndec = document.getElementById("btn3")

let cont = 0

btn.addEventListener('click', function(){
    cont = cont - 1 
    counter.textContent = cont
    return cont
    })

btn2.addEventListener('click', function(){
    // get random number between 0 - 3[0]
        cont = 0
        counter.textContent = cont
        return cont
    })

btn3.addEventListener('click', function(){
        // get random number between 0 - 3[0]
            cont = cont + 1
            counter.textContent = cont
            return cont
     })



function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}