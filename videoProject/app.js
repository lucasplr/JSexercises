// MDN
// The DOMContentLoaded fires when the initial HTML is completely loadedm without waiting for stylesheets.
//The load event fires when the whole page is loaded.

const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", function(){
    if (!btn.classList.includes("slide")){
        btn.classList.add("slide")
        video.pause()
    }else{
        btn.classList.remove("slide")
        video.play()
    }
})