// SELECT ITEMS
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

//EDIT OPTION

let editElement
let editFlag = false
let editID = ""

//EVENT LISTENERS
// submit form
//In this casem addItem is the callback function
form.addEventListener("submit", addItem)


//FUNCTIONS
function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString() //In this case, this is used to every item have a unique ID, and is not the correct way to do this, is made in this way just to practice.
    console.log(id)

}
//LOCAL STORAGE

//SETUP ITEMS