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
    if(value && !editFlag){
        const element = document.createElement("article")
        //add class
        element.classList.add("grocery-item")
        //add id
        const attr = document.createAttribute("data-id")
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn" type="button">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
            </button>
        </div>`
        // append child
        list.appendChild(element)
        // display alert
        displayAlert("add item to the list", "success")
        //show container
        container.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id, value)
        // set back to default
        setBackToDefault()
    }
    else if (value  && editFlag){
        console.log("editing")
    }
    else{
        displayAlert("please enter value", "danger")
        
    }

}
//display alert
function displayAlert(text, action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    //remove alert
    setTimeout(() => {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 1000);
}
// set back to default
 function setBackToDefault(){
     grocery.value = ""
     editFlag = false
     editID = ""
     submitBtn.textContent = "submit" // for the basic scenario, only is needed the first condition, but, this function will be executed in diferent elements.

 }
//LOCAL STORAGE
function addToLocalStorage(id, value){
    console.log("added to local storage")
}
//SETUP ITEMS