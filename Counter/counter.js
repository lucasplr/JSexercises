const counter = document.querySelector(".register")

const btns = document.querySelectorAll(".btn")

let count = 0

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")){
            cont--
        }
        counter.textContent = count
    })
})