let btnopen = document.querySelector(".modal-btn")
let closebtn = document.querySelector(".close-btn")
let overlay = document.querySelector(".modal-overlay")

btnopen.addEventListener("click", function(){
    if(overlay.classList.contains("open-modal") != true){
        overlay.classList.add("open-modal")
    }
})

closebtn.addEventListener("click", function(){
    overlay.classList.remove("open-modal")
})