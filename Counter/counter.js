const counter = document.getElementById("register")

const btnres = document.getElementById("btn2")
const btninc = document.getElementById("btn")
const btndec = document.getElementById("btn3")



btn.addEventListener('click', function(){


    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    })

btn2.addEventListener('click', function(){
    // get random number between 0 - 3[0]
        const randomNumber = getRandomNumber()
        console.log(randomNumber)
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]
    })

btn3.addEventListener('click', function(){
        // get random number between 0 - 3[0]
            const randomNumber = getRandomNumber()
            console.log(randomNumber)
            document.body.style.backgroundColor = colors[randomNumber]
            color.textContent = colors[randomNumber]
     })



function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}