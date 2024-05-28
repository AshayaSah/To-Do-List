let inputElem = document.getElementById("inputField");
let addList = document.querySelector('.addBtn');
let mainToDoElem = document.querySelector(".todo");

let localToDoList = [];
 
//Function to add the element to the list
const addToDoList = () => {

    const toDoListValue = inputElem.value.trim();

    localToDoList.push(toDoListValue);

    localToDoList = [...new Set(localToDoList)];

    console.log(localToDoList);

    //adding the inside including the div holding li and button of the main todo div
    const innerDivElem = document.createElement('div');
    innerDivElem.classList.add("innerDivElem");
    innerDivElem.innerHTML = `<li>${inputElem.value}</li><button class="deleteBtn">Delete</button>`;

    mainToDoElem.append(innerDivElem);
    // console.log(innerDivElem);
    inputElem.value = "";
}

//adding the event listener and calling the function to add the item to the list 
addList.addEventListener('click',() => {
    addToDoList();
});