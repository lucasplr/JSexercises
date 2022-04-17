const counter = document.querySelector(".register")

const btns = document.querySelectorAll(".btn")

let count = 0

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