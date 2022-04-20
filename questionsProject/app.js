const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    //question reference the whole article
    const btn = question.querySelector(".question-btn")
    //btn reference only the button inside the article
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })



        question.classList.toggle("show-text")
})
})








/*
const text = document.querySelectorAll(".question")
const btns = document.querySelectorAll(".question-btn")
*/


/*
    btns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const question = e.currentTarget.parentElement.parentElement

            question.classList.toggle("show-text")
        })
    })
*/


