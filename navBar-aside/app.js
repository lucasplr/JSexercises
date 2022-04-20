let menu = document.querySelector(".sidebar")
let menhid = document.querySelector(".show-sidebar")
let btn = document.querySelector(".sidebar-toggle")
let btn2 = document.querySelector(".close-btn")

btn.addEventListener("click", function(){
   // if(menu.classList.contains("show-links")){
  //     menu.classList.remove("show-links")
   // }else{
  //      menu.classList.add("show-links")
  //  }
    menu.classList.toggle("show-sidebar")
    })
  btn2.addEventListener("click", function(){
    menu.classList.remove("show-sidebar")
  })
    
    






    // classList - show/gets all classes
    // contains - checks classList for specific class
    //add - add class
    //remove - remove class
    // toggle - toggle class