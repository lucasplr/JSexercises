// SELECT ITEMS
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

//EDIT OPTION

//at first, edit and delete buttons are not disponible, because they dont load with the page, only when anuthing is submited

let editElement
let editFlag = false
let editID = ""

//EVENT LISTENERS
// submit form
//In this casem addItem is the callback function

form.addEventListener("submit", addItem)

//clear items

clearBtn.addEventListener("click", clearItems)

//load items
    window.addEventListener("DOMContentLoaded", setupItems)

//FUNCTIONS
function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString() //In this case, this is used to every item have a unique ID, and is not the correct way to do this, is made in this way just to practice.
    if(value && !editFlag){
        createListItem(id, value)
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
        editElement.innerHTML = value
        displayAlert("value changed", "success")
        // edit local storage
        editLocalStorage(editID, value)
        setBackToDefault()
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
//clear items
function clearItems(){
    const items = document.querySelectorAll(".grocery-item")

    if (items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert("empty list", "danger")
    setBackToDefault()
    //localStorage.remove("list")
}
//delete function
function deleteItem(e){ //e because when the button is clicked, get access to the container that have the text and the buttons
    const element = e.currentTarget.parentElement.parentElement //2 times because we want 2 levels above
    const id = element.dataset.id
    list.removeChild(element)
    if (list.children.length === 0){
        container.classList.remove("show-container")
    }
    displayAlert("item removed", "danger")
    setBackToDefault()
    //remove from local storage
    removeFromLocalStorage(id)
}

//edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
    //set form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = "edit"
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
    const grocery = {id, value}
    let items = getLocalStorage(); //if the "list" exist, use JSON.parse to get the item, else make an empty array
    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))
}
function removeFromLocalStorage(id){
    let items = getLocalStorage()

    items = items.filter(function(item){
        if (item.id !== id){ //Se é um item diferente não é removido, se o id é igual, ou seja, o item que quero deletear, o mesmo é filtrado
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function editLocalStorage(id, value){
    let items = getLocalStorage()
    items = items.map(function(item){
        if (item.id === id){ //if the id match, the value of the item will be changed
            item.value = value
        }
        return item
    })

}
function getLocalStorage(){
   return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]
}
// localStorage API
//setItem
//getItem
//removeItem
//save as Strings
//SETUP ITEMS
function setupItems(){
    let items = getLocalStorage()
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        container.classList.add("show-container")
    }
}

function createListItem(id, value){
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
    const deleteBtn = element.querySelector(".delete-btn")
    const editBtn = element.querySelector(".edit-btn")

    deleteBtn.addEventListener("click",deleteItem)
    editBtn.addEventListener("click",editItem)
    // append child
    list.appendChild(element)
}